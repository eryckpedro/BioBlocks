Blockly.JavaScript['logic_if'] = function(block) {
    var value_if_value = Blockly.JavaScript.valueToCode(block, 'IF_VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_then_value = Blockly.JavaScript.statementToCode(block, 'THEN_VALUE');
    // TODO: Assemble JavaScript into code variable.
    var code = 'if ' + value_if_value + ' [ ' + statements_then_value.trim() + ' ]\n';
    return code;
};

Blockly.JavaScript['logic_compare2'] = function(block) {
    var value_left_val = Blockly.JavaScript.valueToCode(block, 'LEFT_VAL', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_compare_val = block.getFieldValue('COMPARE_VAL');
    var value_right_val = Blockly.JavaScript.valueToCode(block, 'RIGHT_VAL', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code;
    var compareVal;

    switch(dropdown_compare_val)
    {
        case "equal":
            compareVal = "=";
            break;
        case "not_equal":
            compareVal = "!=";
            break;
        case "gt":
            compareVal = ">";
            break;
        case "gte":
            compareVal = ">=";
            break;
        case "lt":
            compareVal = "<";
            break;
        case "lte":
            compareVal = "<=";
            break;
    }

    code = value_left_val + ' ' + compareVal + ' ' + value_right_val;

    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};