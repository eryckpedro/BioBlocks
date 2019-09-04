function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

Blockly.JavaScript['logic_if'] = function(block) {
    var value_if_value = Blockly.JavaScript.valueToCode(block, 'IF_VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_then_value = Blockly.JavaScript.statementToCode(block, 'THEN_VALUE');
    
    var code;

    if(value_if_value == '')
    {
        alert("Erro: Condição de Controle do bloco Se -> então está vazia.");
        globalValidationMode = false;
    }
    
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

    code = code + 'every ' + globalSimulationSpeed + '\n_GO[tick\n_GOcp\n' + 
           movStatements.join("") + goArrStatements.join("") + '\n_GO]\n';

    return code;
};

Blockly.JavaScript['logic_program_sections'] = function(block) {
    var statements_prep_statements = Blockly.JavaScript.statementToCode(block, 'PREP_STATEMENTS:');
    var statements_exec_statements = Blockly.JavaScript.statementToCode(block, 'EXEC_STATEMENTS:');

    var prepCode = statements_prep_statements;

    var execCode = '_GO';

    var goArrStatements = []; goArrStatements.length = 0;
    var movStatements = []; movStatements.length = 0;

    arrStatements = statements_exec_statements.split('\n');

    for (const line of arrStatements) 
    {
        goArrStatements.push('_GO' + line + '\n');
    }

    for (const line of globalAgentsMovementCode)
    {
        movStatements.push('_GO' + line + '\n');
    }

    execCode = execCode + 'every ' + globalSimulationSpeed + '\n_GO[tick\n_GOcp\n' + 
           movStatements.join("") + goArrStatements.join("") + '\n_GO]\n';


    var code = prepCode + execCode;
    return code;
  };

  Blockly.JavaScript['logic_prob_clause'] = function(block) {
    var dropdown_prob_chance = block.getFieldValue('PROB_CHANCE');
    var statements_chance_actions = Blockly.JavaScript.statementToCode(block, 'CHANCE_ACTIONS');

    var LOW = 25; var MID = 50; var HIGH = 75; var TOTAL = 100;

    var chanceCode;
    var rndID = randomIntFromInterval(0, 100); var rnd = "rnd" + rndID;
    
    switch(dropdown_prob_chance)
    {
        case "low":
        {
            chanceCode = "let " + rnd + " random-float 100\n if " + rnd + " < " + LOW + " [\n";
            break;
        }
        case "mid":
        {
            chanceCode = "let " + rnd + " random-float 100\n if " + rnd + " < " + MID + " [\n";
            break;
        }
        case "high":
        {
            chanceCode = "let " + rnd + " random-float 100\n if " + rnd + " < " + HIGH + " [\n";
            break;
        }
        case "total":
        {
            chanceCode = "let " + rnd + " random-float 100\n if " + rnd + " < " + TOTAL + " [\n";
            break;
        }
    }

    var code = chanceCode + statements_chance_actions + " ]\n";
    return code;
  };