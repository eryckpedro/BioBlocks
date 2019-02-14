var app = require('electron').remote;
var dialog = app.dialog;

var fs = require('fs');
var prompt = require('electron-prompt');

const GLOBAL_TAG = "_GLOBAL";
const BREED_TAG  = "breed [ ";
const GO_TAG = "_GO";
const DSP_TAG = "_DSP";
const PATCHES_OWN = "patches-own [ pMarcado? ]\n";

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
    globalValidationMode = true;
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

        line = line.trim();

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

    var nlCode = globalCode + PATCHES_OWN + setupCode.trim() + "\nend\n" + "\nto executar\n" + goCode + "\nend";
    globalAgentsMovementCode = [];

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
    try 
    {
        var nlGenMainCode = generateNLCode();
        var nlGenInterfCode = generateNLInterfaceCode();
    } 
    catch (error) 
    {
        alert(error);
        globalValidationMode = false;
    }

    var interfaceTemplate = fs.readFileSync('./resources/std_interfaceTemplate.txt', 'utf8');
    var bottomTemplate = fs.readFileSync('./resources/std_bottomTemplate.txt', 'utf8');

    var fileDir = './modelo.nlogo';

    var nlModelCode = nlGenMainCode + interfaceTemplate + nlGenInterfCode + bottomTemplate;

    fs.writeFileSync(fileDir, nlModelCode);

    var modelTxt = fs.readFileSync('./modelo.nlogo', 'utf8');
    var lastErrorCheck = modelTxt.search('undefined');
    if(lastErrorCheck != -1) { alert("Houve algum erro de definição de parâmetros."); globalValidationMode = false; }

    resetGlobalVariables();

    if(globalValidationMode)
    {
        // This is for Windows specifically to execute files
        var childProcess = require('child_process');
        childProcess.exec('start ' + fileDir, function (err, stdout, stderr) {
        if (err) {
            console.error(err);
            return;
        }});
    }
}

function saveBlocklyXML()
{
    let fileName = dialog.showSaveDialog();
    if(fileName === undefined) 
    {
        alert("Erro: Não foi especificado um nome de arquivo a ser salvo."); 
        return; 
    }

    saveWS = demoWorkspace;
    var xml = Blockly.Xml.workspaceToDom(saveWS);
    var xml_text = Blockly.Xml.domToPrettyText(xml);

    if(fileName.endsWith('.xml'))
    {
        fs.writeFile(fileName, xml_text, (err) => 
    {
        if (err) {console.log(err);}
        alert("Arquivo salvo com sucesso.");
    })
    }
    else
    {
        fs.writeFile(fileName + '.xml', xml_text, (err) => 
        {
            if (err) {console.log(err);}
            alert("Arquivo salvo com sucesso.");
        })
    }    
}

function newFile()
{
    //Dialogs to ask if user wants to save current file
    var saveMsgOptions = 
    {
        type: 'question',
        buttons: ['Sim', 'Não', 'Cancelar'],
        message: 'Deseja salvar o arquivo atual?',
        cancelId: 2
    }

    var chosenOpt = dialog.showMessageBox(null, saveMsgOptions);

    if(chosenOpt == 0)          // Yes
    {
        saveBlocklyXML();
    }
    else if(chosenOpt == 1)     // No
    {
        //Checking if the user really doesn't want to save current file
        var confirmMsgOptions = 
        {
            type: 'question',
            buttons: ['Sim', 'Não'],
            message: 'Tem certeza de que não quer salvar o arquivo atual?',
            cancelId: 0
        }

        var chosenConfirm = dialog.showMessageBox(null, confirmMsgOptions);

        if(chosenConfirm == 1)      //No
        {
            saveBlocklyXML();
        }
    }

    clearWorkspace();
}

function clearWorkspace()
{
    demoWorkspace.clear();
    Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), demoWorkspace);
}


function loadBlocklyXML()
{
    //Dialogs to ask if user wants to save current file
    var saveMsgOptions = 
    {
        type: 'question',
        buttons: ['Sim', 'Não', 'Cancelar'],
        message: 'Deseja salvar o arquivo atual?',
        cancelId: 2
    }

    var chosenOpt = dialog.showMessageBox(null, saveMsgOptions);

    if(chosenOpt == 0)          // Yes
    {
        saveBlocklyXML();

        //Loading the desired file
        dialog.showOpenDialog((fileNames) => 
        {
            if(fileNames === undefined)
            {
                alert("Erro: Não foi especificado um arquivo a ser carregado.");
            }
            else
            {
                readBlocklyXML(fileNames[0]);
            }
        })
    }
    else if(chosenOpt == 1)     // No
    {
        //Checking if the user really doesn't want to save current file
        var confirmMsgOptions = 
        {
            type: 'question',
            buttons: ['Sim', 'Não'],
            message: 'Tem certeza de que não quer salvar o arquivo atual?',
            cancelId: 0
        }

        var chosenConfirm = dialog.showMessageBox(null, confirmMsgOptions);

        if(chosenConfirm == 1)      //No
        {
            saveBlocklyXML();
        }

        //Loading the desired file
        dialog.showOpenDialog((fileNames) => 
        {
            if(fileNames === undefined)
            {
                alert("Erro: Não foi especificado um arquivo a ser carregado.");
            }
            else
            {
                readBlocklyXML(fileNames[0]);
            }
        })
    }
    
    // var saveCurrent = confirm("Deseja salvar o arquivo atual?");

    // if(saveCurrent == true)
    // {
    //     saveBlocklyXML();
    // }

    // dialog.showOpenDialog((fileNames) => 
    // {
    //     if(fileNames === undefined)
    //     {
    //         alert("Erro: Não foi especificado um arquivo a ser carregado.");
    //     }
    //     else
    //     {
    //         readBlocklyXML(fileNames[0]);
    //     }
    // })
}

function readBlocklyXML(filepath)
{
    fs.readFile(filepath, 'utf-8', (err, blocklyXML) => 
    {
        if(err)
        {
            alert("Houve um erro ao tentar ler o arquivo especificado.");
            return;
        }

        demoWorkspace.clear();
        var xml = Blockly.Xml.textToDom(blocklyXML);
        Blockly.Xml.domToWorkspace(xml, demoWorkspace);
    })
}
