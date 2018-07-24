function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

Blockly.JavaScript['display_monitor_num_agent2'] = function(block) {
    var variable_name_agent = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT'), Blockly.Variables.NAME_TYPE);
    
    var randTopPos = randomIntFromInterval(0, 500);

    var monitorInfo = {"name": "MONITOR", 
                       "leftPos": 0, "rightPos": 100, 
                       "topPos": randTopPos, "bottomPos": 100,
                       "displayName": "", "srcCode": "",                     //user inputs
                       "precision": 17, "reserved": 1, "fontsize": 11       //netlogo default
                    };

    monitorInfo.displayName = variable_name_agent;
    monitorInfo.srcCode = "count " + monitorInfo.displayName + 'Z';

    var code = "_DSP" + 
               monitorInfo.name + ',' + monitorInfo.leftPos + ',' + monitorInfo.topPos + ',' +
               monitorInfo.rightPos + ',' + monitorInfo.bottomPos + ',' + monitorInfo.displayName + ',' +
               monitorInfo.srcCode + ',' + monitorInfo.precision + ',' + monitorInfo.reserved + ',' +
               monitorInfo.fontsize + '\n';
               
    return code;

};

Blockly.JavaScript['display_plot_graphic_agents_time'] = function(block) {
    var statements_name_agents = Blockly.JavaScript.statementToCode(block, 'NAME_AGENTS');
    
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
        var defaultPenLine = "\"pen-" + randomIntFromInterval(0, 20) + "\" " + "1.0 " + "0 " + "-16777216 " + "true " + "\"\" ";
        var agentOrigName = arrAgents[i];
        var agentName = agentOrigName.trim();

        arrPenLines.push(defaultPenLine + "\"plot count " + agentName + "Z\"");
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

Blockly.JavaScript['display_agent_axis_variable'] = function(block) {
    var variable_name_agent = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT'), Blockly.Variables.NAME_TYPE);
    
    var code = variable_name_agent + '\n';
    return code;
  };