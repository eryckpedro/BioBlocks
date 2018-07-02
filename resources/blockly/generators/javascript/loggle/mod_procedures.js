function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

Blockly.JavaScript['proc_initiate_movement'] = function(block) {
    var text_name_agent = block.getFieldValue('NAME_AGENT');
    // TODO: Assemble JavaScript into code variable.
    var code;
    var veloc;

    switch(globalMapAgentsDeclared[text_name_agent].velocType)
    {
        case 'normal':
            veloc = 1;
            break;
        case 'slow':
            veloc = 0.5;
            break;
        case 'fast':
            veloc = 2;
            break;
    }

    if(globalMapAgentsDeclared[text_name_agent].movType == "rand")
    {
        code = 'ask ' + text_name_agent + 'Z [ rt random 50 lt random 50 fd ' + veloc + ' ]\n';
    }
    else
    {
        code = '...\n';
    }
    
    return code;
  };

  Blockly.JavaScript['proc_consume_energy'] = function(block) {
    var dropdown_qtd_energy = block.getFieldValue('QTD_ENERGY');
    var variable_name_agent = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT'), Blockly.Variables.NAME_TYPE);
    var dropdown_interval = block.getFieldValue('INTERVAL');
    // TODO: Assemble JavaScript into code variable.

    var code =  'ask ' + variable_name_agent + 'Z [\n' + 'if ticks mod ' + dropdown_interval + ' = 0 [\n' + 
                'set energia energia - ' + dropdown_qtd_energy + ' ]\n\n]';

    return code;
};

Blockly.JavaScript['proc_manage_energy'] = function(block) {
    var dropdown_action_type = block.getFieldValue('ACTION_TYPE');
    var number_qtd_energy = block.getFieldValue('QTD_ENERGY');
    var variable_name_agent = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble JavaScript into code variable.

    var actionCode;

    if(dropdown_action_type == "add")
        actionCode = ' + ';
    else
        actionCode = ' - ';

    var code = 'ask ' + variable_name_agent + 'Z [ set energia energia' + actionCode + number_qtd_energy + ']\n';
    return code;
};

Blockly.JavaScript['proc_reproduce_between_species'] = function(block) {
    var number_num_cubs = block.getFieldValue('NUM_CUBS');
    var variable_name_agent_1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT_1'), Blockly.Variables.NAME_TYPE);
    var variable_name_agent_2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT_2'), Blockly.Variables.NAME_TYPE);
    var dropdown_rep_chance = block.getFieldValue('REP_CHANCE');
    // TODO: Assemble JavaScript into code variable.

    var randomBreed;

    if(randomIntFromInterval(1,100) % 2 == 0)
        randomBreed = variable_name_agent_1;
    else
        randomBreed = variable_name_agent_2;


    var code = 'if random-float 100 < ' + dropdown_rep_chance + ' [ hatch-' + randomBreed + 'Z ' 
               + number_num_cubs + ' [ rt random-float 360 fd 1 ] ]';

    return code;
};

Blockly.JavaScript['proc_reproduce_between_species_with_mutation'] = function(block) {
    var number_num_cubs = block.getFieldValue('NUM_CUBS');
    var variable_name_agent_1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT_1'), Blockly.Variables.NAME_TYPE);
    var variable_name_agent_2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT_2'), Blockly.Variables.NAME_TYPE);
    var dropdown_rep_chance = block.getFieldValue('REP_CHANCE');
    var statements_mutations = Blockly.JavaScript.statementToCode(block, 'MUTATIONS');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['proc_mutation_type_chance'] = function(block) {
    var dropdown_rep_chance = block.getFieldValue('REP_CHANCE');
    var dropdown_agent_property = block.getFieldValue('AGENT_PROPERTY');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };

Blockly.JavaScript['proc_consume_agent'] = function(block) {
    var variable_name_agent_1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT_1'), Blockly.Variables.NAME_TYPE);
    var variable_name_agent_2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT_2'), Blockly.Variables.NAME_TYPE);

    var dyingAgent = "aux_" + variable_name_agent_2;
    var code = "ask " + dyingAgent + ' [ die ]\n';
    
    return code;
  };

Blockly.JavaScript['proc_kill_agent'] = function(block) {
    var value_name_agent = Blockly.JavaScript.valueToCode(block, 'NAME_AGENT', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.

    var breedDict = { "turtle" : "tartaruga", "wolf" : "lobo", "sheep" : "ovelha" };

    // The name formula is "aux_<AgentNamePortuguese>"
    var code = 'ask aux_' + breedDict[value_name_agent] + ' [ die ]\n';
    return code;
};

Blockly.JavaScript['proc_stop_simulation'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'stop';
    return code;
  };