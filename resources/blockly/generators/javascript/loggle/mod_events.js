Blockly.JavaScript['event_check_collision'] = function(block) {
    var text_name_agent_1 = block.getFieldValue('NAME_AGENT_1');
    var text_name_agent_2 = block.getFieldValue('NAME_AGENT_2');
    
    // Creating auxiliary variables that will perform the collision check
    var codeAgent1 = 'let ' + 'aux_' + text_name_agent_1 + ' one-of ' + text_name_agent_1 + 'Z' + '-here\n';
    var codeAgent2 = 'let ' + 'aux_' + text_name_agent_2 + ' one-of ' + text_name_agent_2 + 'Z' + '-here\n';

    var codeIF = 'if ( ' + 'aux_' + text_name_agent_1 + ' != nobody and ' + 'aux_' + text_name_agent_2 + ' != nobody )\n';

    // Assembling the final code
    var code = 'ask ' + text_name_agent_1 + 'Z [\n'+ codeAgent1 + codeAgent2 + codeIF;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};