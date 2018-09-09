Blockly.JavaScript['aprnc_create_agent_species2'] = function(block) {
  var number_num_agents = block.getFieldValue('NUM_AGENTS');
  var variable_name_agent = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT'), Blockly.Variables.NAME_TYPE);
  var dropdown_type_agent = block.getFieldValue('TYPE_AGENT');
  var dropdown_type_gen = block.getFieldValue('TYPE_GEN');
  var dropdown_type_size = block.getFieldValue('TYPE_SIZE');
  var dropdown_type_energy = block.getFieldValue('TYPE_ENERGY');
  var dropdown_type_rep = block.getFieldValue('TYPE_REP');
  var dropdown_type_mov = block.getFieldValue('TYPE_MOV');
  var dropdown_type_veloc = block.getFieldValue('TYPE_VELOC');
  var dropdown_type_vision = block.getFieldValue('TYPE_VISION');
  var dropdown_type_vis_radius = block.getFieldValue('TYPE_VIS_RADIUS');
  
  // Assembling the Species Struct
  var agentStruct = { 'name' : variable_name_agent, 'initialNum' : number_num_agents, 'type' : dropdown_type_agent,
                      'gender' : dropdown_type_gen, 'initialEnergy' : dropdown_type_energy, 'reprodType' : dropdown_type_rep,
                      'movType' : dropdown_type_mov, 'velocType' : dropdown_type_veloc, 'visType' : dropdown_type_vision,
                      'visRadius' : dropdown_type_vis_radius, 'size' : dropdown_type_size, 'marcado?' : 0
                    }

  // Breed commands
  var breedDict = { "person" : "pessoa", "bird" : "ave", "fish" : "peixe" };
  var breedType = breedDict[dropdown_type_agent];

  var breedCode = "_GLOBAL" + "breed [ " + variable_name_agent + 'Z ' + variable_name_agent + " ]\n";

  // Create-Agent commands
  // Globals:
  var agentGlobalsCode = "_GLOBAL" + variable_name_agent + 'Z' + "-own [ nome genero energia reprod mov veloc visao visRadius marcado? ]\n";
  
  var colorCode = "set color ";
  if(dropdown_type_gen == "male") colorCode = colorCode + "blue\n";
  else if (dropdown_type_gen == "female") colorCode = colorCode + "red\n";

  // Managing agent's movement code
  var headingCode;
  var agentMovCode;
  var veloc;

  switch(dropdown_type_veloc)
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

  if(dropdown_type_mov == "immobile")
    veloc = 0;

  switch(dropdown_type_mov)
  {
    case 'rand':
      headingCode = "(list 0)";
      break;
    case 'horiz':
      headingCode = "(list 90 270)";
      break;
    case 'vert':
      headingCode = "(list 0 180)";
      break;
    case 'diag':
      headingCode = "(list 45 135 225 315)";
      break;
    case 'immobile':
      headingCode = "(list 0)";
      break;
  }

  agentMovCode = 'ask ' + variable_name_agent + 'Z [ifelse mov = "rand" [ rt random 50 lt random 50 fd ' +
                 veloc + ' ] [ fd ' + veloc + ' ]]\n';

  globalAgentsMovementCode.push(agentMovCode);

  // Managing agent's size code
  var sizeCode;
  switch(dropdown_type_size)
  {
    case 'normal':
      sizeCode = "set size 1.5\n";
      break;
    case 'small':
      sizeCode = "set size 1\n";
      break;
    case 'large':
      sizeCode = "set size 2\n";
      break;
  }

  // Managing agent's vision radius code
  var visionRadCode;
  switch(dropdown_type_vis_radius)
  {
    case 'small':
      visionRadCode = "set visRadius 2\n";
      break;
    case 'medium':
      visionRadCode = "set visRadius 4\n";
      break;
    case 'large':
      visionRadCode = "set visRadius 6\n";
      break;
  }

  if(dropdown_type_vision == "blind")
    visionRadCode = "set visRadius 0\n";

  // Managing agent's energy code
  var energyCode;
  if(dropdown_type_energy == "inf")
      energyCode = "set energia -1";
  else
      energyCode = "set energia " + dropdown_type_energy;
  

  // Assembling the final code
  var agentCode = "create-" + variable_name_agent + 'Z' + ' ' + number_num_agents + '[ ' + 
                  "setxy random-xcor random-ycor\n" + colorCode + "set nome " + "\"" + variable_name_agent + "\"" + "\n" + sizeCode + 
                  "set genero " + "\"" + dropdown_type_gen + "\"" + "\n" + energyCode + "\n" + visionRadCode + 
                  "set reprod " + "\"" + dropdown_type_rep + "\"" + "\n" + "set mov " + "\"" + dropdown_type_mov + "\"" + "\n" + 
                  "set veloc " + veloc + "\n" + "set visao " + "\"" + dropdown_type_vision + "\"" + "\n" + "set marcado? 0\n" + 
                  "set heading one-of " + headingCode + " ]\n";


  globalMapAgentsDeclared[variable_name_agent] = agentStruct;
  var code = breedCode + agentGlobalsCode + agentCode;

  return code;
};

Blockly.JavaScript['aprnc_create_agent_species3'] = function(block) {
  var number_num_agents = block.getFieldValue('NUM_AGENTS');
  var variable_name_agent = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME_AGENT'), Blockly.Variables.NAME_TYPE);
  var dropdown_type_agent = block.getFieldValue('TYPE_AGENT');
  var dropdown_name_color = block.getFieldValue('NAME_COLOR');
  var dropdown_type_size = block.getFieldValue('TYPE_SIZE');
  var dropdown_type_energy = block.getFieldValue('TYPE_ENERGY');
  var dropdown_type_rep = block.getFieldValue('TYPE_REP');
  var dropdown_type_mov = block.getFieldValue('TYPE_MOV');
  var dropdown_type_veloc = block.getFieldValue('TYPE_VELOC');
  var dropdown_type_vision = block.getFieldValue('TYPE_VISION');
  var dropdown_type_vis_radius = block.getFieldValue('TYPE_VIS_RADIUS');
  
  // Assembling the Species Struct
  var agentStruct = { 'name' : variable_name_agent, 'initialNum' : number_num_agents, 'type' : dropdown_type_agent,
                      'colour' : dropdown_name_color, 'initialEnergy' : dropdown_type_energy, 'reprodType' : dropdown_type_rep,
                      'movType' : dropdown_type_mov, 'velocType' : dropdown_type_veloc, 'visType' : dropdown_type_vision,
                      'visRadius' : dropdown_type_vis_radius, 'size' : dropdown_type_size, 'marcado?' : 0
                    }

  // Breed commands
  var breedDict = { "person" : "pessoa", "bird" : "ave", "fish" : "peixe" };
  var breedType = breedDict[dropdown_type_agent];

  var breedCode = "_GLOBAL" + "breed [ " + variable_name_agent + 'Z ' + variable_name_agent + " ]\n";

  // Create-Agent commands
  // Globals:
  var agentGlobalsCode = "_GLOBAL" + variable_name_agent + 'Z' + "-own [ nome genero energia reprod mov veloc visao visRadius marcado? ]\n";
  
  var colorCode = "set color " + dropdown_name_color + '\n';

  // Managing agent's movement code
  var headingCode;
  var agentMovCode;
  var veloc;

  switch(dropdown_type_veloc)
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

  if(dropdown_type_mov == "immobile")
    veloc = 0;

  switch(dropdown_type_mov)
  {
    case 'rand':
      headingCode = "(list 0)";
      break;
    case 'horiz':
      headingCode = "(list 90 270)";
      break;
    case 'vert':
      headingCode = "(list 0 180)";
      break;
    case 'diag':
      headingCode = "(list 45 135 225 315)";
      break;
    case 'immobile':
      headingCode = "(list 0)";
      break;
  }

  agentMovCode = 'ask ' + variable_name_agent + 'Z [ifelse mov = "rand" [ rt random 50 lt random 50 fd ' +
                 veloc + ' ] [ fd ' + veloc + ' ]]\n';

  globalAgentsMovementCode.push(agentMovCode);

  // Managing agent's size code
  var sizeCode;
  switch(dropdown_type_size)
  {
    case 'normal':
      sizeCode = "set size 1.5\n";
      break;
    case 'small':
      sizeCode = "set size 1\n";
      break;
    case 'large':
      sizeCode = "set size 2\n";
      break;
  }

  // Managing agent's vision radius code
  var visionRadCode;
  switch(dropdown_type_vis_radius)
  {
    case 'small':
      visionRadCode = "set visRadius 2\n";
      break;
    case 'medium':
      visionRadCode = "set visRadius 4\n";
      break;
    case 'large':
      visionRadCode = "set visRadius 6\n";
      break;
  }

  if(dropdown_type_vision == "blind")
    visionRadCode = "set visRadius 0\n";

  // Managing agent's energy code
  var energyCode;
  if(dropdown_type_energy == "inf")
      energyCode = "set energia -1";
  else
      energyCode = "set energia " + dropdown_type_energy;
  

  // Assembling the final code
  var agentCode = "create-" + variable_name_agent + 'Z' + ' ' + number_num_agents + '[ ' + 
                  "setxy random-xcor random-ycor\n" + colorCode + "set nome " + "\"" + variable_name_agent + "\"" + "\n" + sizeCode + 
                  energyCode + "\n" + visionRadCode + "set reprod " + "\"" + dropdown_type_rep + "\"" + "\n" + "set mov " + "\"" + 
                  dropdown_type_mov + "\"" + "\n" + "set veloc " + veloc + "\n" + "set visao " + "\"" + dropdown_type_vision + "\"" + 
                  "\n" + "set marcado? 0\n" + "set heading one-of " + headingCode + " ]\n";


  globalMapAgentsDeclared[variable_name_agent] = agentStruct;
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