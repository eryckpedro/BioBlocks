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