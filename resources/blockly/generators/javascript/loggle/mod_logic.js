Blockly.JavaScript['logic_if'] = function(block) {
    var value_if_value = Blockly.JavaScript.valueToCode(block, 'IF_VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_then_value = Blockly.JavaScript.statementToCode(block, 'THEN_VALUE');
    
    var code;
    
    // this checks if it's a collision detection command: it needs to add 2 aux variables before the IF statement
    if(value_if_value.startsWith("ask")) 
    {
        code = value_if_value + ' [ ' + statements_then_value.trim() + ' ]]\n';
    }
    else if(value_if_value.startsWith("let"))
    {
        code = value_if_value + ' [ ' + statements_then_value.trim() + ' ]\n';
    }
    else
    {
        code = 'if ' + value_if_value + ' [ ' + statements_then_value.trim() + ' ]\n';
    }

    return code;
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

    code = code + 'every ' + globalSimulationSpeed + '\n_GO[tick\n' + 
           movStatements.join("") + goArrStatements.join("") + '\n_GO]\n';

    return code;
};