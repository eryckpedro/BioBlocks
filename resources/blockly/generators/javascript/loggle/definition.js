Blockly.JavaScript['def_breed_agent'] = function(block) {
    var dropdown_breed_def = block.getFieldValue('BREED_DEF');
    // TODO: Assemble JavaScript into code variable.
    var code = '_GLOBAL';

    switch(dropdown_breed_def)
    {
        case "wolf":
            code = code + 'breed [ lobos lobo ]\n';
            break;
        case "sheep":
            code = code + 'breed [ ovelhas ovelha ]\n';
            break;
    }

    return code;
};

Blockly.JavaScript['def_breed_agent2'] = function(block) {
    var value_name_breed = Blockly.JavaScript.valueToCode(block, 'NAME_BREED', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    
    var code = '_GLOBAL';

    switch(value_name_breed)
    {
        case "turtle":
            code = code + 'breed [ tartarugas tartaruga ]\n';
            break;
        case "wolf":
            code = code + 'breed [ lobos lobo ]\n';
            break;
        case "sheep":
            code = code + 'breed [ ovelhas ovelha ]\n';
            break;
    }

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