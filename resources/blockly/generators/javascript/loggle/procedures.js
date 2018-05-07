Blockly.JavaScript['proc_ask_turtles'] = function(block) {
    var value_name_agent = Blockly.JavaScript.valueToCode(block, 'NAME_AGENT', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var breedName = { "turtle" : "tartarugas", "wolf" : "lobos", "sheep" : "ovelhas" };

    var code = 'ask ' + breedName[value_name_agent] + ' [ ' + statements_name + ']\n';
    return code;
};

Blockly.JavaScript['proc_ask_breed'] = function(block) {
    var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_BREED'), Blockly.Variables.NAME_TYPE);
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'ask ' + variable_name + ' [ ' + statements_name + ']\n';
    return code;
};

Blockly.JavaScript['proc_wolf_catches_sheep'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    
    var code = "";

    code = 'let prey one-of ovelhas-here\n' + 'if prey != nobody [ ask prey [die] ] \n';

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