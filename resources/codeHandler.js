var fs = require('fs');
var prompt = require('electron-prompt');

const GLOBAL_TAG = "_GLOBAL";
const BREED_TAG  = "breed [ ";
const GO_TAG = "_GO";
const DSP_TAG = "_DSP";

var globalMapAgentsDeclared = {}; // This Dictionary maps all species created by the user
var globalSimulationSpeed = 0.7; // NetLogo simulation speed in seconds

var breedArray = [];
var globalsArray = [];
var allCodeArray = [];
var codeArray = [];
var goArray = [];
var dspArray = [];

// Functions to override Blockly.input because window.prompt() isn't supported by Electron
var renameVar = function(name)
{
    return name;
}

Blockly.prompt = function(msg, defaultValue, callback)
{
    prompt
    ({
        title: 'Renomeando',
        label: 'Renomeando para:',
        type: 'input'
    }).then((name)=>{callback(renameVar(name))})
}


// Injecting Blockly into the HTML file
var demoWorkspace = Blockly.inject('blocklyDiv',
    {
        media: './node_modules/blockly/media/',
        toolbox: document.getElementById('toolbox')
    });

Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), demoWorkspace);


// Generating and managing NetLogo code
function generateNLCode()
{
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    var blocksCode = Blockly.JavaScript.workspaceToCode(demoWorkspace);

    // Clearing all the arrays
    allCodeArray.length = 0;
    globalsArray.length = 0;
    codeArray.length = 0;
    breedArray.length = 0;
    goArray.length = 0;
    dspArray.length = 0;


    allCodeArray = blocksCode.split("\n"); // Contains ALL code generated 

    //Searches for TAG primitives that needs to be out of the To Setup function in NetLogo
    for(var i = 0; i < allCodeArray.length; i++)
    {
        var line = allCodeArray[i];

        if (line.startsWith(GLOBAL_TAG)) { globalsArray.push(line.substring(GLOBAL_TAG.length)); }

        else if (line.startsWith(GO_TAG)) { goArray.push(line.substring(GO_TAG.length)); }

        else if (line.startsWith(DSP_TAG)) { dspArray.push(line.substring(DSP_TAG.length)); }

        else
        {
            if (! line.startsWith("var"))
                codeArray.push(line);
        }
    }

    var setupCode = "to preparar\nclear-all\nreset-ticks\n"; // Setup function base code
    var globalCode = "";                                  // Code for globals commands to come before setup code
    var setDftShpCode = "";                               // Code for setting up the default shape of breed-type agents
    var goCode = "";                                      // Code for To Go function that starts the simulation

    // Creates the commands for setting breed shape types
    for(var i = 0; i < globalsArray.length; i++)
    {
        globalCode = globalCode + globalsArray[i] + "\n";
        if( globalsArray[i].startsWith("breed") )
        {
            var breedShapeCmd = 'set-default-shape ';
            var breedNameZ = (globalsArray[i].substring(BREED_TAG.length)).split(" ",1)[0];

            var breedName = breedNameZ.substring(0, breedNameZ.length-1);
            
            breedArray.push(breedShapeCmd + breedNameZ + ' \"' + globalMapAgentsDeclared[breedName].type + '\"');
        }
    }

    for(var i = 0; i < breedArray.length; i++)
    {
         setDftShpCode = setDftShpCode + breedArray[i] + "\n";
    }

    setupCode = setupCode + setDftShpCode;

    for(var i = 0; i < codeArray.length; i++)
    {
        setupCode = setupCode + codeArray[i].trim() + '\n';
    }

    for(var i = 0;  i< goArray.length; i++)
    {
        goCode = goCode + goArray[i].trim() + '\n';
    }

    var nlCode = globalCode + setupCode.trim() + "\nend\n" + "\nto iniciar\n" + goCode + "\nend";


    console.log(globalMapAgentsDeclared);
    return nlCode;
}

function generateNLInterfaceCode()
{
    var interfCode = '';
    for(var i = 0; i < dspArray.length; i++)
    {
        interfCode = interfCode + dspArray[i].replace(/,/g,'\n') + '\n\n';
    }

    interfCode = '\n' + interfCode + '\n';

    return interfCode;
}

function showNLCode() 
{
    var nlCode = generateNLCode();

    //document.getElementById("codeDiv").innerText = nlCode;

    alert(nlCode);
}

function sendCodeToNL() 
{
    var nlGenMainCode = generateNLCode();
    var nlGenInterfCode = generateNLInterfaceCode();

    var interfaceTemplate = fs.readFileSync('./resources/std_interfaceTemplate.txt', 'utf8');
    var bottomTemplate = fs.readFileSync('./resources/std_bottomTemplate.txt', 'utf8');

    var fileDir = './modelo.nlogo';

    var nlModelCode = nlGenMainCode + interfaceTemplate + nlGenInterfCode + bottomTemplate;

    fs.writeFileSync(fileDir, nlModelCode);


    // var nlCode = generateNLCode();

    // var template = fs.readFileSync('./resources/std_template.txt', 'utf8');
    // var modelo_dir = './modelo.nlogo';

    // var modelo_code = nlCode + template; //Assembling user generated code + the NetLogo builtin template
    
    // fs.writeFileSync(modelo_dir, modelo_code);
    
    // This is for Windows specifically to execute files
    var childProcess = require('child_process');
    childProcess.exec('start ' + fileDir, function (err, stdout, stderr) {
    if (err) {
        console.error(err);
        return;
    }});
}