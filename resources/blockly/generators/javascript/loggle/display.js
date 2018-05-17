function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

Blockly.JavaScript['display_monitor_num_agent'] = function(block) {
    var value_name_agent = Blockly.JavaScript.valueToCode(block, 'NAME_AGENT', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.

    var breedName = { "turtle" : "tartarugas", "wolf" : "lobos", "sheep" : "ovelhas" };

    var randTopPos = randomIntFromInterval(0, 500);

    var monitorInfo = {"name": "MONITOR", 
                       "leftPos": 0, "rightPos": 100, 
                       "topPos": randTopPos, "bottomPos": 100,
                       "displayName": "", "srcCode": "",                     //user inputs
                       "precision": 17, "reserved": 1, "fontsize": 11       //netlogo default
                    };
    
    monitorInfo.displayName = breedName[value_name_agent];
    monitorInfo.srcCode = "count " + monitorInfo.displayName;


    //alert(JSON.stringify(monitorInfo, null, 4));

    var code = "_DSP" + 
               monitorInfo.name + ',' + monitorInfo.leftPos + ',' + monitorInfo.topPos + ',' +
               monitorInfo.rightPos + ',' + monitorInfo.bottomPos + ',' + monitorInfo.displayName + ',' +
               monitorInfo.srcCode + ',' + monitorInfo.precision + ',' + monitorInfo.reserved + ',' +
               monitorInfo.fontsize + '\n';
               
    return code;
};

Blockly.JavaScript['display_create_graph_num_agents'] = function(block) {
    var statements_name_agents = Blockly.JavaScript.statementToCode(block, 'NAME_AGENTS');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };

  Blockly.JavaScript['display_agent_plot_variable'] = function(block) {
    var value_name_agent = Blockly.JavaScript.valueToCode(block, 'NAME_AGENT', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };