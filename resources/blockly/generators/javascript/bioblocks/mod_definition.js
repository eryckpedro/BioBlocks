Blockly.JavaScript['def_breed_agent2'] = function(block) {
    var value_name_breed = Blockly.JavaScript.valueToCode(block, 'NAME_BREED', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    
    var code = '_GLOBAL';

    var breedDict = { "turtle" : "tartaruga", "wolf" : "lobo", "sheep" : "ovelha" };

    var breedType = breedDict[value_name_breed];

    code = code + 'breed [ ' + breedType + 's ' + breedType + ' ]\n';

    return code;

};

Blockly.JavaScript['def_agent_property'] = function(block) {
    var value_name_property = Blockly.JavaScript.valueToCode(block, 'NAME_PROPERTY', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = value_name_property + '\n';
    return code;
};

Blockly.JavaScript['def_agent_property_type_color'] = function(block) {
    var dropdown_name_color = block.getFieldValue('NAME_COLOR');
    // TODO: Assemble JavaScript into code variable.
    var code = 'set color ' + dropdown_name_color;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['def_agent_property_type_num'] = function(block) {
    var dropdown_type_prop = block.getFieldValue('TYPE_PROP');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'set ' + dropdown_type_prop + ' ' + value_name;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['def_global_property'] = function(block) {
    var text_name_property = block.getFieldValue('NAME_PROPERTY');
    // TODO: Assemble JavaScript into code variable.
    var code = '_GLOBAL';
    
    code = code + 'turtles-own ' + '[ ' + text_name_property + ' ]\n';
    return code;
};

Blockly.JavaScript['def_set_global_properties'] = function(block) {
    var statements_global_agnt_vars = Blockly.JavaScript.statementToCode(block, 'GLOBAL_AGNT_VARS');
    // TODO: Assemble JavaScript into code variable.
    var code = '_GLOBAL';
    
    code = code + 'turtles-own ' + '[ ' + statements_global_agnt_vars + ' ]\n';

    return code;
};

Blockly.JavaScript['def_agent_global_property'] = function(block) {
    var value_name_property = Blockly.JavaScript.valueToCode(block, 'NAME_PROPERTY', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = value_name_property + ' ';
    return code;
};

Blockly.JavaScript['def_agent_global_property_type'] = function(block) {
    var variable_name_property = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_PROPERTY'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble JavaScript into code variable.
    var code = variable_name_property;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['def_chg_property2'] = function(block) {
    var variable_name_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_VAR'), Blockly.Variables.NAME_TYPE);
    var value_new_val = Blockly.JavaScript.valueToCode(block, 'NEW_VAL', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'set ' + variable_name_var + ' ' + value_new_val + '\n';
    return code;
};