function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

Blockly.JavaScript['proc_ind_kill_all_agents'] = function(block) {
    var variable_name_agent = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT'), Blockly.Variables.NAME_TYPE);
    
    var code = 'ask ' + variable_name_agent + 'Z [ die ]\n';

    return code;
  };

Blockly.JavaScript['proc_ind_stop_simulation'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'stop';
    return code;
  };

Blockly.JavaScript['proc_ind_manage_energy'] = function(block) {
    var dropdown_action_type = block.getFieldValue('ACTION_TYPE');
    var number_qtd_energy = block.getFieldValue('QTD_ENERGY');
    var variable_name_agent = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble JavaScript into code variable.

    var actionCode;

    if(globalMapAgentsDeclared[variable_name_agent].initialEnergy == 'inf')
    {
        alert("Erro: o agente " + variable_name_agent + " possui energia infinita.");
        globalValidationMode = false;
    }

    if(dropdown_action_type == "add")
        actionCode = ' + ';
    else
        actionCode = ' - ';

    var code = 'ask ' + variable_name_agent + 'Z [ set energia energia' + actionCode + number_qtd_energy + ']\n';
    return code;
};

Blockly.JavaScript['proc_ind_manage_energy_over_time'] = function(block) {
    var dropdown_action_type = block.getFieldValue('ACTION_TYPE');
    var dropdown_qtd_energy = block.getFieldValue('QTD_ENERGY');
    var variable_name_agent = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT'), Blockly.Variables.NAME_TYPE);
    var dropdown_interval = block.getFieldValue('INTERVAL');
    
    if(globalMapAgentsDeclared[variable_name_agent].initialEnergy == 'inf')
    {
        alert("Erro: o agente " + variable_name_agent + " possui energia infinita.");
        globalValidationMode = false;
    }

    var actionCode;
    if(dropdown_action_type == "add")
        actionCode = ' + ';
    else
        actionCode = ' - ';

    var code =  'ask ' + variable_name_agent + 'Z [\n' + 'if ticks mod ' + dropdown_interval + ' = 0 [\n' + 
                'set energia energia' + actionCode + dropdown_qtd_energy + ' ]\n\n]';
    return code;
  };

Blockly.JavaScript['proc_ind_reproduce_assex_agents_over_time'] = function(block) {
    var number_num_cubs = block.getFieldValue('NUM_CUBS');
    var variable_name_agent = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT'), Blockly.Variables.NAME_TYPE);
    var dropdown_interval = block.getFieldValue('INTERVAL');

    var code;
    
    if(globalMapAgentsDeclared[variable_name_agent].reprodType != "asex")
    {
        alert("O agente " + variable_name_agent + " possui reprodução sexuada. Use o outro bloco de ação de reprodução!");
        globalValidationMode = false;
    }
    else
    {
        code =  'ask ' + variable_name_agent + 'Z [\n' + 'if ticks mod ' + dropdown_interval + ' = 0 [\n' + 
                'hatch ' + number_num_cubs + ' ]\n\n]';
    }

    return code;
  };


Blockly.JavaScript['proc_ind_hatch_agent'] = function(block) {
    var number_num_agents = block.getFieldValue('NUM_AGENTS');
    var variable_name_agent = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT'), Blockly.Variables.NAME_TYPE);
    
    globalCounterAuxVarNames++;
    var code = 'let aux' + globalCounterAuxVarNames + ' one-of ' + variable_name_agent + 'Z\n' + 
               'ask aux' + globalCounterAuxVarNames + ' [hatch-' + variable_name_agent + 'Z ' + number_num_agents + ']\n';

    return code;
};

Blockly.JavaScript['proc_ind_hatch_agent_with_mutation'] = function(block) {
    var number_num_agents = block.getFieldValue('NUM_AGENTS');
    var variable_name_agent = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT'), Blockly.Variables.NAME_TYPE);
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
                'let childBreed one-of ' + variable_name_agent + 'Z\n' +
                'let parent (childBreed)\n' + 'hatch ' + number_num_agents +
                ' [ set breed [breed] of parent set nome [nome] of parent set genero [genero] of parent set energia [energia] of parent' + 
                ' set reprod [reprod] of parent set mov [mov] of parent set veloc [veloc] of parent set visao [visao] of parent' + 
                ' set size [size] of parent ' + 'set visRadius [visRadius] of parent\n' + 'set heading [heading] of parent\n' +
                'if rnd < ' + dropdown_mut_chance + ' [ set color green set dftPropList remove (list ' + 
                '[' + propValue + "] of parent) dftPropList " + 'set ' + propValue + ' one-of dftPropList\n' +
                'if ' + propValue + ' = \"horiz\" [set heading one-of (list 0 180)]\n' +
                'if ' + propValue + ' = \"vert\" [set heading one-of (list 90 270)]\n' + 
                'if ' + propValue + ' = \"fiag\" [set heading one-of (list 45 135 225 315)]\n' + '] ]';

    return code;
};

Blockly.JavaScript['proc_dep_reproduce_between_species'] = function(block) {
    var number_num_cubs = block.getFieldValue('NUM_CUBS');
    var variable_name_agent_1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT_1'), Blockly.Variables.NAME_TYPE);
    var variable_name_agent_2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT_2'), Blockly.Variables.NAME_TYPE);
    var dropdown_rep_chance = block.getFieldValue('REP_CHANCE');
    // TODO: Assemble JavaScript into code variable.

    if((globalMapAgentsDeclared[variable_name_agent_1].reprodType != "sex") || 
       (globalMapAgentsDeclared[variable_name_agent_2].reprodType != "sex"))
    {
        alert("Os agentes " + variable_name_agent_1 + " e " + variable_name_agent_2 + " possuem tipos incompatíveis de reprodução.");
        globalValidationMode = false;
    }
    else
    {
        var code = 'let rnd random-float 100\n' + 
                   'if rnd < ' + dropdown_rep_chance + 
                   '[ let childBreed one-of (list ' + variable_name_agent_1 + 'Z ' + variable_name_agent_2 + 'Z)\n' +
                   'let parent one-of (childBreed)\n' + 'hatch ' + number_num_cubs +
                   ' [ set breed [breed] of parent set nome [nome] of parent set genero [genero] of parent set energia [energia] of parent' + 
                   ' set reprod [reprod] of parent set mov [mov] of parent set veloc [veloc] of parent set visao [visao] of parent' +  
                   ' set size [size] of parent ' + 'set visRadius [visRadius] of parent ' + 'set heading [heading] of parent\n' + 
                   ' rt random-float 360 fd 1 ] ]';
    }

    return code;
};

Blockly.JavaScript['proc_dep_reproduce_between_species_with_mutation'] = function(block) {
    var number_num_cubs = block.getFieldValue('NUM_CUBS');
    var variable_name_agent_1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT_1'), Blockly.Variables.NAME_TYPE);
    var variable_name_agent_2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT_2'), Blockly.Variables.NAME_TYPE);
    var dropdown_rep_chance = block.getFieldValue('REP_CHANCE');
    var dropdown_mut_chance = block.getFieldValue('MUT_CHANCE');
    var dropdown_mut_property = block.getFieldValue('MUT_PROPERTY');

    if((globalMapAgentsDeclared[variable_name_agent_1].reprodType != "sex") || 
       (globalMapAgentsDeclared[variable_name_agent_2].reprodType != "sex"))
    {
        alert("Os agentes " + variable_name_agent_1 + " e " + variable_name_agent_2 + " possuem tipos incompatíveis de reprodução.");
        globalValidationMode = false;
    }
    else
    {
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
                    ' set reprod [reprod] of parent set mov [mov] of parent set veloc [veloc] of parent set visao [visao] of parent' + 
                    ' set size [size] of parent ' + 'set visRadius [visRadius] of parent\n' + 'set heading [heading] of parent\n' +
                    'if rnd < ' + dropdown_mut_chance + ' [ set color green set dftPropList remove (list ' + 
                    '[' + propValue + "] of parent) dftPropList " + 'set ' + propValue + ' one-of dftPropList\n' +
                    'if ' + propValue + ' = \"horiz\" [set heading one-of (list 0 180)]\n' +
                    'if ' + propValue + ' = \"vert\" [set heading one-of (list 90 270)]\n' + 
                    'if ' + propValue + ' = \"fiag\" [set heading one-of (list 45 135 225 315)]\n' + '] ] ]';
        }

    return code;
  };

Blockly.JavaScript['proc_dep_agent_flee'] = function(block) {
    var variable_name_agent = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT'), Blockly.Variables.NAME_TYPE);
    var code;
    var listCopy = [];

    listCopy = Object.create(globalListAuxVarInfo);
    var auxVar = listCopy.pop();
    code = 'ask ' + auxVar[variable_name_agent] + ' [ rt 180 ]\n';

    return code;
  };

Blockly.JavaScript['proc_dep_kill_specific_agent'] = function(block) {
    var variable_name_agent = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT'), Blockly.Variables.NAME_TYPE);
    var code;
    var listCopy = [];

    listCopy = Object.create(globalListAuxVarInfo);
    var auxVar = listCopy.pop();
    code = 'ask ' + auxVar[variable_name_agent] + ' [ die ]\n';

    return code;
  };

Blockly.JavaScript['proc_dep_manage_energy_specific'] = function(block) {
    var dropdown_action_type = block.getFieldValue('ACTION_TYPE');
    var number_qtd_energy = block.getFieldValue('QTD_ENERGY');
    var variable_name_agent = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT'), Blockly.Variables.NAME_TYPE);
    
    var actionCode;

    if(dropdown_action_type == "add")
        actionCode = ' + ';
    else
        actionCode = ' - ';

    var listCopy = [];

    listCopy = Object.create(globalListAuxVarInfo);
    var auxVar = listCopy.pop();
    var code = 'ask ' + auxVar[variable_name_agent] + ' [ set energia energia' + actionCode + number_qtd_energy + ']\n';

    return code;
  };

Blockly.JavaScript['proc_dep_move_towards_specific'] = function(block) {
    var variable_name_agent1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT1'), Blockly.Variables.NAME_TYPE);
    var variable_name_agent2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT2'), Blockly.Variables.NAME_TYPE);

    var listCopy = [];
    listCopy = Object.create(globalListAuxVarInfo);
    var auxVar = listCopy.pop();

    var code = 'ask ' + auxVar[variable_name_agent1] + ' [ set heading towards ' + auxVar[variable_name_agent2] + 
               ' fd [veloc] of ' + auxVar[variable_name_agent1] + ' ]\n';


    return code;
  };