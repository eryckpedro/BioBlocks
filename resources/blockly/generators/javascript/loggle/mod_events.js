Blockly.JavaScript['event_check_collision'] = function(block) {
    var variable_name_agent_1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT_1'), Blockly.Variables.NAME_TYPE);
    var variable_name_agent_2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT_2'), Blockly.Variables.NAME_TYPE);
    
    // Creating auxiliary variables that will perform the collision check
    var codeAgent1 = 'let ' + 'aux_' + variable_name_agent_1 + ' one-of ' + variable_name_agent_1 + 'Z' + '-here\n';
    var codeAgent2 = 'let ' + 'aux_' + variable_name_agent_2 + ' one-of ' + variable_name_agent_2 + 'Z' + '-here\n';

    var codeIF = 'if ( ' + 'aux_' + variable_name_agent_1 + ' != nobody and ' + 'aux_' + variable_name_agent_2 + ' != nobody )\n';

    // Assembling the final code
    var code = 'ask ' + variable_name_agent_1 + 'Z [\n'+ codeAgent1 + codeAgent2 + codeIF;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['event_check_agent_qtd'] = function(block) {
    var variable_name_agent = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT'), Blockly.Variables.NAME_TYPE);
    var dropdown_type_compare = block.getFieldValue('TYPE_COMPARE');
    var number_num_compared = block.getFieldValue('NUM_COMPARED');
    // TODO: Assemble JavaScript into code variable.

    var compareType;

    switch(dropdown_type_compare)
    {
        case 'equal':
            compareType = '=';
            break;
        case 'gt':
            compareType = '>';
            break;
        case 'lt':
            compareType = '<';
            break;
        case 'gte':
            compareType = '>=';
            break;
        case 'lte':
            compareType = '<=';
            break;
        case 'diff':
            compareType = '!=';
            break;
    }

    
    var code = 'count ' + variable_name_agent + 'Z ' + compareType + ' ' + number_num_compared;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['event_check_agent_energy'] = function(block) {
    var variable_name_agent = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT'), Blockly.Variables.NAME_TYPE);
    var dropdown_type_compare = block.getFieldValue('TYPE_COMPARE');
    var number_num_compared = block.getFieldValue('NUM_COMPARED');
    var compareType;

    switch(dropdown_type_compare)
    {
        case 'equal':
            compareType = '=';
            break;
        case 'gt':
            compareType = '>';
            break;
        case 'lt':
            compareType = '<';
            break;
        case 'gte':
            compareType = '>=';
            break;
        case 'lte':
            compareType = '<=';
            break;
        case 'diff':
            compareType = '!=';
            break;
    }

    var code = 'any? ' + variable_name_agent + 'Z with [ energia ' + compareType + ' ' + number_num_compared + ' ]';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };