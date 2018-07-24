Blockly.JavaScript['math_oper_with_properties'] = function(block) {
    var value_left_val = Blockly.JavaScript.valueToCode(block, 'LEFT_VAL', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_oper_val = block.getFieldValue('OPER_VAL');
    var value_right_val = Blockly.JavaScript.valueToCode(block, 'RIGHT_VAL', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.

    var code = value_left_val + ' ' + dropdown_oper_val + ' ' + value_right_val;

    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};