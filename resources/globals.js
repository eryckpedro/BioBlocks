var globalMapAgentsDeclared = {};       // This Dictionary maps all species created by the user
var globalSimulationSpeed = 0.7;        // NetLogo simulation speed in seconds
var globalPatchVisRadius = 4;           // NetLogo patch default radius of vision
var globalCounterAuxVarNames = 0;       // This guarantees no NetLogo created aux variable has the same name
var globalListAuxVarInfo = [];          // This keeps a record of all NetLogo created aux variables' info struct
var globalValidationMode = true;        // This boolean decides if NetLogo can run with the following code
var globalAgentsMovementCode = [];      // This array maintains the code that keeps the agents moving accordingly
var globalAgentGraphicPlotType = "QTD"  // This tells which type of variable should be displayed in BioBlocks' plot command block

function resetGlobalVariables()
{
    var globalMapAgentsDeclared = {};   
    var globalSimulationSpeed = 0.7;
    var globalPatchVisRadius = 4;    
    var globalCounterAuxVarNames = 0;   
    var globalListAuxVarInfo = [];      
    var globalValidationMode = true;    
    var globalAgentsMovementCode = [];
    var globalAgentGraphicPlotType = "QTD";  
}