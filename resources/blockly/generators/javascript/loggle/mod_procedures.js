function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

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

Blockly.JavaScript['proc_agent_flee'] = function(block) {
    var variable_name_agent = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble JavaScript into code variable.
    var code = 'rt 180\n';
    return code;
  };

Blockly.JavaScript['proc_reproduce_between_species'] = function(block) {
    var number_num_cubs = block.getFieldValue('NUM_CUBS');
    var variable_name_agent_1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT_1'), Blockly.Variables.NAME_TYPE);
    var variable_name_agent_2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT_2'), Blockly.Variables.NAME_TYPE);
    var dropdown_rep_chance = block.getFieldValue('REP_CHANCE');
    // TODO: Assemble JavaScript into code variable.

    var code = 'let rnd random-float 100\n' + 
               'if rnd < ' + dropdown_rep_chance + 
               '[ let childBreed one-of (list ' + variable_name_agent_1 + 'Z ' + variable_name_agent_2 + 'Z)\n' +
               'let parent one-of (childBreed)\n' + 'hatch ' + number_num_cubs +
               ' [ set breed [breed] of parent set nome [nome] of parent set genero [genero] of parent set energia [energia] of parent' + 
               ' set reprod [reprod] of parent set mov [mov] of parent set veloc [veloc] of parent set visao [visao] of parent set size [size] of parent' + 
               ' set heading [heading] of parent\n' + ' rt random-float 360 fd 1 ] ]';

    return code;
};

Blockly.JavaScript['proc_reproduce_between_species_with_mutation'] = function(block) {
    var number_num_cubs = block.getFieldValue('NUM_CUBS');
    var variable_name_agent_1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT_1'), Blockly.Variables.NAME_TYPE);
    var variable_name_agent_2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT_2'), Blockly.Variables.NAME_TYPE);
    var dropdown_rep_chance = block.getFieldValue('REP_CHANCE');
    var dropdown_mut_chance = block.getFieldValue('MUT_CHANCE');
    var dropdown_mut_property = block.getFieldValue('MUT_PROPERTY');

    var listSize = "[1 1.5 2]";
    var listEnergy = "[\"inf\" 500 250 100 50]";
    var listMovement = "[\"rand\" \"horiz\" \"vert\" \"diag\"]";
    var listVeloc = "[\"normal\" \"fast\" \"slow\"]";
    var listVision = "[\"circle\" \"square\" \"cone\"]";
    var attCode;
    var propValue;

    switch(dropdown_mut_property)
    {
        case 'size':
            attCode = listSize;
            propValue = "size";
            break;

        case 'energy':
            attCode = listEnergy;
            propValue = "energia";
            break;
        
        case 'movement':
            attCode = listMovement;
            propValue = "mov";
            break;
        
        case 'velocity':
            attCode = listVeloc;
            propValue = "veloc";
            break;

        case 'vision':
            attCode = listVision;
            propValue = "visao";
            break;
    }

    var code =  'let rnd random-float 100\n' + 'let dftPropList ' + attCode + '\n' +
                'if rnd < ' + dropdown_rep_chance + 
                '[ let childBreed one-of (list ' + variable_name_agent_1 + 'Z ' + variable_name_agent_2 + 'Z)\n' +
                'let parent one-of (childBreed)\n' + 'hatch ' + number_num_cubs +
                ' [ set breed [breed] of parent set nome [nome] of parent set genero [genero] of parent set energia [energia] of parent' + 
                ' set reprod [reprod] of parent set mov [mov] of parent set veloc [veloc] of parent set visao [visao] of parent set size [size] of parent' + 
                ' set heading [heading] of parent\n' +
                'if rnd < ' + dropdown_mut_chance + ' [ set color green set dftPropList remove (list ' + 
                '[' + propValue + "] of parent) dftPropList " + 'set ' + propValue + ' one-of dftPropList\n' +
                'if ' + propValue + ' = \"horiz\" [set heading one-of (list 0 180)]\n' +
                'if ' + propValue + ' = \"vert\" [set heading one-of (list 90 270)]\n' + 
                'if ' + propValue + ' = \"fiag\" [set heading one-of (list 45 135 225 315)]\n' + '] ] ]';

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