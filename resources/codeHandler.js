var fs = require('fs');

const GLOBAL_TAG = "_GLOBAL";
const BREED_TAG  = "breed [ ";
var breedArray = [];
var globalsArray = [];
var allCodeArray = [];
var codeArray = [];

var demoWorkspace = Blockly.inject('blocklyDiv',
    {
        media: './node_modules/blockly/media/',
        toolbox: document.getElementById('toolbox')
    });

Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), demoWorkspace);


function generateNLCode()
{
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    var blocksCode = Blockly.JavaScript.workspaceToCode(demoWorkspace);

    // Clearing all the arrays
    allCodeArray.length = 0;
    globalsArray.length = 0;
    codeArray.length = 0;
    breedArray.length = 0;

    allCodeArray = blocksCode.split("\n");

    //Searches for GLOBAL primitives that need to come first in NetLogo code
    for(var i = 0; i < allCodeArray.length; i++)
    {
        var line = allCodeArray[i];
        if (line.startsWith(GLOBAL_TAG))
            globalsArray.push(line.substring(GLOBAL_TAG.length));
        else
            codeArray.push(line);
    }

    var setupCode = "to setup\n"; // Setup function base code
    var globalCode = "";          // Code for globals commands to come before setup code
    var setDftShpCode = "";       // Code for setting up the default shape of breed-type agents

    for(var i = 0; i < globalsArray.length; i++)
    {
        globalCode = globalCode + globalsArray[i] + "\n";
        if( globalsArray[i].startsWith("breed") )
        {
            var breedShapeCmd = 'set-default-shape ';
            var breedType = (globalsArray[i].substring(BREED_TAG.length)).split(" ",1)[0];

            switch(breedType)
            {
                case "lobos":
                    breedArray.push(breedShapeCmd + breedType + " \"wolf\"");
                    break;
                case "ovelhas":
                    breedArray.push(breedShapeCmd + breedType + " \"sheep\"");
                    break;
            }
        }
    }

    for(var i = 0; i < codeArray.length; i++)
    {
        setupCode = setupCode + codeArray[i] + '\n';
    }

    for(var i = 0; i < breedArray.length; i++)
    {
         setDftShpCode = setDftShpCode + breedArray[i] + "\n";
    }

    var nlCode = globalCode + setupCode.trimRight() + "\n" + setDftShpCode.trimRight() + "\nend";

    return nlCode;
}

function showNLCode() 
{
    var nlCode = generateNLCode();

    alert(nlCode);
}

function sendCodeToNL() 
{
    var nlCode = generateNLCode();

    var template = fs.readFileSync('./resources/template.txt', 'utf8');
    var modelo_dir = './modelo.nlogo';

    var modelo_code = nlCode + template; //Assembling user generated code + the NetLogo builtin template
    
    fs.writeFileSync(modelo_dir, modelo_code);
    
    // This is for Windows specifically to open files
    var childProcess = require('child_process');
    childProcess.exec('start ' + modelo_dir, function (err, stdout, stderr) {
    if (err) {
        console.error(err);
        return;
    }});
}