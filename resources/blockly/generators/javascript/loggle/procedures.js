Blockly.JavaScript['proc_ask_turtles'] = function(block) {
    var value_name_agent = Blockly.JavaScript.valueToCode(block, 'NAME_AGENT', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'ask ' + value_name_agent + ' [ ' + statements_name + ']\n';
    return code;
};

Blockly.JavaScript['proc_wolf_catches_sheep'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    
    var code = "";

    code = 'let prey one-of ovelhas-here\n' + 'if prey != nobody [ ask prey [die] ] \n';

    return code;
};