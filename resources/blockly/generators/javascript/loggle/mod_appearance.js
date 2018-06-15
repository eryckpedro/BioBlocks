Blockly.JavaScript['aprnc_create_agent_species'] = function(block) {
  var number_num_agents = block.getFieldValue('NUM_AGENTS');
  var text_name_agent = block.getFieldValue('NAME_AGENT');
  var dropdown_type_agent = block.getFieldValue('TYPE_AGENT');
  var dropdown_type_gen = block.getFieldValue('TYPE_GEN');
  var dropdown_type_energy = block.getFieldValue('TYPE_ENERGY');
  var dropdown_type_rep = block.getFieldValue('TYPE_REP');
  var dropdown_type_mov = block.getFieldValue('TYPE_MOV');
  var dropdown_type_veloc = block.getFieldValue('TYPE_VELOC');
  var dropdown_type_vision = block.getFieldValue('TYPE_VISION');
  // TODO: Assemble JavaScript into code variable.

  // Assembling the Species Struct
  var agentStruct = { 'name' : text_name_agent, 'initialNum' : number_num_agents, 'type' : dropdown_type_agent,
                      'gender' : dropdown_type_gen, 'initialEnergy' : dropdown_type_energy, 'reprodType' : dropdown_type_rep,
                      'movType' : dropdown_type_mov, 'velocType' : dropdown_type_veloc, 'visType' : dropdown_type_vision
                    }

  // Breed commands
  var breedDict = { "person" : "pessoa", "bird" : "ave", "fish" : "peixe" };
  var breedType = breedDict[dropdown_type_agent];

  var breedCode = "_GLOBAL" + "breed [ " + breedType + 's ' + breedType + " ]\n";

  // Create-Agent commands
  // Globals:
  var agentGlobalsCode = "_GLOBAL" + breedType + 's' + "-own [ nome genero energia reprod mov veloc visao ]\n";
  var agentType = breedType + 's';
  
  var agentCode = "create-" + agentType + ' ' + number_num_agents + '[ ' + 
                  "setxy random-xcor random-ycor\n" + "set nome " + "\"" + text_name_agent + "\"" + "\n" + 
                  "set genero " + "\"" + dropdown_type_gen + "\"" + "\n" + "set energia " + "\"" + dropdown_type_energy + "\"" + "\n" + 
                  "set reprod " + "\"" + dropdown_type_rep + "\"" + "\n" + "set mov " + "\"" + dropdown_type_mov + "\"" + "\n" + 
                  "set veloc " + "\"" + dropdown_type_veloc + "\"" + "\n" + "set visao " + "\"" + dropdown_type_vision + "\"" + ' ]\n';


  globalMapAgentsDeclared[text_name_agent] = agentStruct;
  var code = breedCode + agentGlobalsCode + agentCode;
  return code;
};

Blockly.JavaScript['agent_breed_type'] = function(block) {
  var dropdown_type_agent = block.getFieldValue('TYPE_AGENT');
  // TODO: Assemble JavaScript into code variable.

  var code = dropdown_type_agent;

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['aprnc_create_breed_type_agent'] = function(block) {
  var value_num_agents = Blockly.JavaScript.valueToCode(block, 'NUM_AGENTS', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name_agent = Blockly.JavaScript.valueToCode(block, 'NAME_AGENT', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_val_properties = Blockly.JavaScript.statementToCode(block, 'VAL_PROPERTIES');
  // TODO: Assemble JavaScript into code variable.
  var code = "";

  var breedName = { "turtle" : "tartarugas", "wolf" : "lobos", "sheep" : "ovelhas" };

  if(statements_val_properties.length == 0)
  {
    code = 'create-' + breedName[value_name_agent] + ' ' + value_num_agents + ' [ setxy random-xcor random-ycor ]\n';
  }
  else
  {
    code = 'create-' + breedName[value_name_agent] + ' ' + value_num_agents + '\n[\n '
          + statements_val_properties + '   setxy random-xcor random-ycor \n]\n';
  }

  return code;
};

Blockly.JavaScript['aprnc_set_pen'] = function(block) {
  var dropdown_pen_val = block.getFieldValue('PEN_VAL');
  // TODO: Assemble JavaScript into code variable.
  var code;

  if(dropdown_pen_val == 'ON')
  	code = 'ask turtles [ pen-down ]\n';
  else if(dropdown_pen_val == 'OFF')
  	code = 'ask turtles [ pen-up ]\n';

  return code;
};

Blockly.JavaScript['agent_type'] = function(block) {
  var dropdown_type_agent = block.getFieldValue('TYPE_AGENT');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_type_agent;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['aprnc_set_all_patch_color'] = function(block) {
  var dropdown_col_patches = block.getFieldValue('COL_PATCHES');
  // TODO: Assemble JavaScript into code variable.
  var code = 'ask patches [ set pcolor ' + dropdown_col_patches + ' ]\n';
  return code;
};