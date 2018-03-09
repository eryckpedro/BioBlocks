Blockly.JavaScript['def_breed_agent'] = function(block) {
    var dropdown_breed_def = block.getFieldValue('BREED_DEF');
    // TODO: Assemble JavaScript into code variable.
    var code = '_GLOBAL';

    switch(dropdown_breed_def)
    {
        case "wolf":
            code = code + 'breed [ wolves wolf ]\n';
            break;
        case "sheep":
            code = code + 'breed [ sheep a-sheep ]\n';
            break;
    }

    return code;
};

Blockly.JavaScript['def_agent_property'] = function(block) {
    var value_name_property = Blockly.JavaScript.valueToCode(block, 'NAME_PROPERTY', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['def_agent_property_type_color'] = function(block) {
    var dropdown_name_color = block.getFieldValue('NAME_COLOR');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['def_agent_property_type_num'] = function(block) {
    var dropdown_type_prop = block.getFieldValue('TYPE_PROP');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};