Blockly.JavaScript['event_check_collision'] = function(block) {
    var variable_name_agent_1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT_1'), Blockly.Variables.NAME_TYPE);
    var variable_name_agent_2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT_2'), Blockly.Variables.NAME_TYPE);
    
    // Creating auxiliary variables that will perform the collision check
    globalCounterAuxVarNames++;
    var nameAuxVar1 = 'aux_' + variable_name_agent_1 + '_' + globalCounterAuxVarNames;

    globalCounterAuxVarNames++;
    var nameAuxVar2 = 'aux_' + variable_name_agent_2 + '_' + globalCounterAuxVarNames;

    var codeAgent1 = 'let ' + nameAuxVar1 + ' one-of ' + variable_name_agent_1 + 'Z' + '-here\n';
    var codeAgent2 = 'let ' + nameAuxVar2 + ' one-of ' + variable_name_agent_2 + 'Z' + '-here\n';

    var codeIF = 'if ( ' + nameAuxVar1 + ' != nobody and ' + nameAuxVar2 + ' != nobody )\n';

    // Assembling the final code
    var code = 'ask ' + variable_name_agent_1 + 'Z [\n'+ codeAgent1 + codeAgent2 + codeIF;

    var auxVarInfo = {};

    auxVarInfo[variable_name_agent_1] = nameAuxVar1;
    auxVarInfo[variable_name_agent_2] = nameAuxVar2;

    globalListAuxVarInfo.push(auxVarInfo);

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['event_check_agent_in_proximity'] = function(block) {
    var variable_name_agent_1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT_1'), Blockly.Variables.NAME_TYPE);
    var variable_name_agent_2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT_2'), Blockly.Variables.NAME_TYPE);
    
    var awareAgentVisType = globalMapAgentsDeclared[variable_name_agent_1].visType;
    var DEFAULT_CONE_ANGLE = 60;

    var code;

    globalCounterAuxVarNames++;
    var nameAuxVar1 = 'aux_' + variable_name_agent_1 + '_' + globalCounterAuxVarNames;

    globalCounterAuxVarNames++;
    var nameAuxVar2 = 'aux_' + variable_name_agent_2 + '_' + globalCounterAuxVarNames;

    switch(awareAgentVisType)
    {
        case 'circle':
            code = 'ask ' + variable_name_agent_1 + 'Z [\n' + 
                   'let ' + nameAuxVar1 + ' one-of ' + variable_name_agent_1 + 'Z-here\n' +
                   'let ' + nameAuxVar2 + ' one-of ' + variable_name_agent_2 + 'Z in-radius visRadius\n' + 
                   'if any? ' + variable_name_agent_2 + 'Z in-radius visRadius ' + '\n';
            break;
        
        case 'cone':
            code = 'ask ' + variable_name_agent_1 + 'Z [\n' + 
                   'let ' + nameAuxVar1 + ' one-of ' + variable_name_agent_1 + '-here\n' +
                   'let ' + nameAuxVar2 + ' one-of ' + variable_name_agent_2 + 'Z in-cone visRadius' + DEFAULT_CONE_ANGLE + '\n' +
                   'if any? ' + variable_name_agent_2 + 'Z in-cone visRadius ' + DEFAULT_CONE_ANGLE + '\n';
            break;
        
        case 'blind':
            code = 'ask ' + variable_name_agent_1 + 'Z [\n' + 
                   'let ' + nameAuxVar1 + ' one-of ' + variable_name_agent_1 + '-here\n' +
                   'let ' + nameAuxVar2 + ' one-of ' + variable_name_agent_2 + 'Z in-radius visRadius\n' + 
                   'if any? ' + variable_name_agent_2 + 'Z in-radius visRadius ' + '\n';
    }

    var auxVarInfo = {};

    auxVarInfo[variable_name_agent_1] = nameAuxVar1;
    auxVarInfo[variable_name_agent_2] = nameAuxVar2;
    globalListAuxVarInfo.push(auxVarInfo);

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

  Blockly.JavaScript['event_check_agent_qtd_in_agent_vicinity'] = function(block) {
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

    var awareAgentVisType = globalMapAgentsDeclared[variable_name_agent].visType;
    var DEFAULT_CONE_ANGLE = 60;
    var code;

    globalCounterAuxVarNames++;
    var nameAuxVar = 'aux_' + variable_name_agent + '_' + globalCounterAuxVarNames;

    switch(awareAgentVisType)
    {
        case 'circle':
            code = 'ask ' + variable_name_agent + 'Z [\n' + 
                   'let ' + nameAuxVar + ' one-of ' + variable_name_agent+ 'Z-here\n' +
                   'if count turtles in-radius visRadius ' + compareType + ' ' + number_num_compared + '\n';
            break;
        
        case 'cone':
            code = 'ask ' + variable_name_agent + 'Z [\n' + 
                   'let ' + nameAuxVar + ' one-of ' + variable_name_agent + 'Z-here\n' +
                   'if count turtles in-cone visRadius ' + DEFAULT_CONE_ANGLE + compareType + ' ' + number_num_compared + '\n';
            break;
        
        case 'blind':
            code = 'ask ' + variable_name_agent + 'Z [\n' + 
                   'let ' + nameAuxVar + ' one-of ' + variable_name_agent + 'Z-here\n' +
                   'if count turtles in-radius visRadius ' + compareType + ' ' + number_num_compared + '\n';
    }

    var auxVarInfo = {};

    auxVarInfo[variable_name_agent] = nameAuxVar;
    globalListAuxVarInfo.push(auxVarInfo);

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['event_check_agent_qtd_in_patch_vicinity'] = function(block) {
    var dropdown_type_compare = block.getFieldValue('TYPE_COMPARE');
    var number_num_compared = block.getFieldValue('NUM_COMPARED');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['event_check_status_agent_or_patch'] = function(block) {
    var dropdown_type_agent = block.getFieldValue('TYPE_AGENT');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
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

    globalCounterAuxVarNames++;
    var nameAuxVar = 'aux_' + variable_name_agent + '_' + globalCounterAuxVarNames;

    var codeSetVal = 'let ' + nameAuxVar + ' ' + variable_name_agent + 'Z with [ energia ' + compareType + ' ' + number_num_compared + ' ]\n';
    var codeIF = 'if count ' + nameAuxVar + ' > 0 ';

    var code = codeSetVal + codeIF;

    var auxVarInfo = {};

    auxVarInfo[variable_name_agent] = nameAuxVar;
    globalListAuxVarInfo.push(auxVarInfo);


    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };