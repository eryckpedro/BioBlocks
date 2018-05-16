Blockly.JavaScript['display_monitor_num_agent'] = function(block) {
    var value_name_agent = Blockly.JavaScript.valueToCode(block, 'NAME_AGENT', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.

    var breedName = { "turtle" : "tartarugas", "wolf" : "lobos", "sheep" : "ovelhas" };

    var monitorInfo = {"name": "MONITOR", 
                       "leftPos": 0, "rightPos": 100, 
                       "topPos": 0, "bottomPos": 100,
                       "displayName": "", "srcCode": "",                     //user inputs
                       "precision": 17, "reserved": 1, "fontsize": 11       //netlogo default
                    };
    
    monitorInfo.displayName = breedName[value_name_agent];
    monitorInfo.srcCode = "count " + monitorInfo.displayName;


    //alert(JSON.stringify(monitorInfo, null, 4));

    var code = monitorInfo.name + '\n' + monitorInfo.leftPos + '\n' + monitorInfo.topPos + '\n' +
               monitorInfo.rightPos + '\n' + monitorInfo.bottomPos + '\n' + monitorInfo.displayName + '\n' +
               monitorInfo.srcCode + '\n' + monitorInfo.precision + '\n' + monitorInfo.reserved + '\n' +
               monitorInfo.fontsize + '\n';               

    //alert(code);
    return code;
};