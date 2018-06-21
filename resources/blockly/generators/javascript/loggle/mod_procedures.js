Blockly.JavaScript['proc_initiate_movement'] = function(block) {
    var text_name_agent = block.getFieldValue('NAME_AGENT');
    // TODO: Assemble JavaScript into code variable.
    var code;
    var veloc;

    switch(globalMapAgentsDeclared[text_name_agent].velocType)
    {
        case 'normal':
            veloc = 1;
            break;
        case 'slow':
            veloc = 0.5;
            break;
        case 'fast':
            veloc = 2;
            break;
    }

    if(globalMapAgentsDeclared[text_name_agent].movType == "rand")
    {
        code = 'ask ' + text_name_agent + 'Z [ rt random 50 lt random 50 fd ' + veloc + ' ]\n';
    }
    else
    {
        code = '...\n';
    }
    
    return code;
  };

Blockly.JavaScript['proc_ask_turtles'] = function(block) {
    var value_name_agent = Blockly.JavaScript.valueToCode(block, 'NAME_AGENT', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var breedName = { "turtle" : "tartarugas", "wolf" : "lobos", "sheep" : "ovelhas" };

    var code = 'ask ' + breedName[value_name_agent] + ' [ ' + statements_name + ']\n';
    return code;
};

Blockly.JavaScript['proc_reproduce_given_chance'] = function(block) {
    var value_num_cubs = Blockly.JavaScript.valueToCode(block, 'NUM_CUBS', Blockly.JavaScript.ORDER_ATOMIC);
    var value_rep_chance = Blockly.JavaScript.valueToCode(block, 'REP_CHANCE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.

    var code = 'if random-float 100 < ' + value_rep_chance + ' [ hatch ' + value_num_cubs + ' [ rt random-float 360 fd 1 ] ]';
    return code;
};

Blockly.JavaScript['proc_kill_agent'] = function(block) {
    var value_name_agent = Blockly.JavaScript.valueToCode(block, 'NAME_AGENT', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.

    var breedDict = { "turtle" : "tartaruga", "wolf" : "lobo", "sheep" : "ovelha" };

    // The name formula is "aux_<AgentNamePortuguese>"
    var code = 'ask aux_' + breedDict[value_name_agent] + ' [ die ]\n';
    return code;
};

Blockly.JavaScript['proc_stop_simulation'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'stop';
    return code;
  };