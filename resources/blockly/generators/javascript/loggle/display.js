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
    
    var breedName = { "turtle" : "tartarugas", "wolf" : "lobos", "sheep" : "ovelhas" };
    var randTopPos = randomIntFromInterval(0, 500);

    var graphInfo = {"name": "PLOT",
                     "leftPos": 0, "rightPos": 100,
                     "topPos": randTopPos, "bottomPos": 100,
                     "displayName": "Agentes x Tempo", "xAxis": "tempo (ticks)", "yAxis": "quantidade",
                     "xMin": 0.0, "xMax": 10.0,
                     "yMin": 0.0, "yMax": 10.0,
                     "autoPlotOnOff": "true", "legendOnOff": "false", "reserved": "\"\" \"\""
                    };

    var arrAgents = [];
    var arrPenLines = [];

    arrAgents = statements_name_agents.split("\n");


    for(var i = 0; i < arrAgents.length -1; i++)
    {
        var defaultPenLine = "\"pen-" + randomIntFromInterval(0, 20) + "\" " + "1.0 " + "0 " + "0 " + "true " + "\"\" ";
        var agentOrigName = arrAgents[i];
        var agentName = breedName[agentOrigName.trim()];

        arrPenLines.push(defaultPenLine + "\"plot count " + agentName + "\"");
    }

    var code = "_DSP" + 
               graphInfo.name + "," + graphInfo.leftPos + "," + graphInfo.topPos + "," +
               graphInfo.rightPos + "," + graphInfo.bottomPos + "," + graphInfo.displayName + "," +
               graphInfo.xAxis + "," + graphInfo.yAxis + "," + graphInfo.xMin + "," + graphInfo.xMax + "," + 
               graphInfo.yMin + "," + graphInfo.yMax + "," + graphInfo.autoPlotOnOff + "," +
               graphInfo.legendOnOff + "," + graphInfo.reserved + "," + "PENS" + ",";
    
    for(var i = 0; i < arrPenLines.length; i++)
    {
        if (i == arrPenLines.length-1)
            code = code + arrPenLines[i] + "\n";
        else
            code = code + arrPenLines[i] + ",";
    }

    return code;
  };

  Blockly.JavaScript['display_agent_plot_variable'] = function(block) {
    var value_name_agent = Blockly.JavaScript.valueToCode(block, 'NAME_AGENT', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.

    var code = value_name_agent + "\n";
    return code;
  };