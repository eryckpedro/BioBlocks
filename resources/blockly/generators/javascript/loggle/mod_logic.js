Blockly.JavaScript['logic_if'] = function(block) {
    var value_if_value = Blockly.JavaScript.valueToCode(block, 'IF_VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_then_value = Blockly.JavaScript.statementToCode(block, 'THEN_VALUE');
    
    var code;
    
    // this checks if it's a collision detection command: it needs to add 2 aux variables before the IF statement
    if(value_if_value.startsWith("ask")) 
    {
        code = value_if_value + ' [ ' + statements_then_value.trim() + ' ]]\n';
    }
    else
    {
        code = 'if ' + value_if_value + ' [ ' + statements_then_value.trim() + ' ]\n';
    }
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

Blockly.JavaScript['logic_while_forever'] = function(block) {
    var statements_do_statements = Blockly.JavaScript.statementToCode(block, 'DO_STATEMENTS');
    // TODO: Assemble JavaScript into code variable.

    var code = '_GO';

    var goArrStatements = []; goArrStatements.length = 0;

    arrStatements = statements_do_statements.split('\n');

    for (const line of arrStatements) 
    {
        goArrStatements.push('_GO' + line + '\n');
    }

    code = code + 'while [true] \n_GO[\n_GOtick\n' + goArrStatements.join("") + '\n_GO]\n';

    return code;
 };

 Blockly.JavaScript['logic_check_collision2'] = function(block) {
    var value_name_agent_1 = Blockly.JavaScript.valueToCode(block, 'NAME_AGENT_1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name_agent_2 = Blockly.JavaScript.valueToCode(block, 'NAME_AGENT_2', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_name_statements = Blockly.JavaScript.statementToCode(block, 'NAME_STATEMENTS');
    // TODO: Assemble JavaScript into code variable.

    var breedDict = { "turtle" : "tartaruga", "wolf" : "lobo", "sheep" : "ovelha" };

    // Creating auxiliary variables that will perform the collision check
    var nameAgent1 = breedDict[value_name_agent_1];
    var nameAgent2 = breedDict[value_name_agent_2];

    var codeAgent1 = 'let ' + 'aux_' + nameAgent1 + ' one-of ' + nameAgent1 + 's' + '-here\n';
    var codeAgent2 = 'let ' + 'aux_' + nameAgent2 + ' one-of ' + nameAgent2 + 's' + '-here\n';

    var codeIF = 'if ( ' + 'aux_' + nameAgent1 + ' != nobody and ' + 'aux_' + nameAgent2 + ' != nobody )';

    // Assembling the final code
    var code = codeAgent1 + codeAgent2 + codeIF + '\n[\n ' + statements_name_statements + ']\n';
    return code;
  };

  Blockly.JavaScript['logic_check_agent_qtd'] = function(block) {
    var value_agent_qtd = Blockly.JavaScript.valueToCode(block, 'AGENT_QTD', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var breedDict = { "turtle" : "tartaruga", "wolf" : "lobo", "sheep" : "ovelha" };

    var code = 'count ' + breedDict[value_agent_qtd] + 's';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['logic_simulation_while'] = function(block) {
    var statements_do_statements = Blockly.JavaScript.statementToCode(block, 'DO_STATEMENTS');
    // TODO: Assemble JavaScript into code variable.
    var code = '_GO';

    var goArrStatements = []; goArrStatements.length = 0;
    var movStatements = []; movStatements.length = 0;

    arrStatements = statements_do_statements.split('\n');

    for (const line of arrStatements) 
    {
        goArrStatements.push('_GO' + line + '\n');
    }

    for (const line of globalAgentsMovementCode)
    {
        movStatements.push('_GO' + line + '\n');
    }

    code = code + 'while [true] \n_GO[\n_GOevery ' + globalSimulationSpeed + '\n_GO[tick\n' + 
           movStatements.join("") + goArrStatements.join("") + '\n_GO]\n_GO]\n';

    return code;
};