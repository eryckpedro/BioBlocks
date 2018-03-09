var fs = require('fs');

const GLOBAL_TAG = "_GLOBAL";
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

    var setupCode = "to setup\n";
    var globalCode = "";

    for(var i = 0; i < globalsArray.length; i++)
    {
        globalCode = globalCode + globalsArray[i] + "\n";
    }

    for(var i = 0; i < codeArray.length; i++)
    {
        setupCode = setupCode + codeArray[i] + '\n';
    }

    var nlCode = globalCode + setupCode.trimRight() + "\nend";

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