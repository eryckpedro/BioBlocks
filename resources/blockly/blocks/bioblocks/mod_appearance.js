Blockly.Blocks['aprnc_create_agent_species4'] = {
    init: function() {
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("criar ")
          .appendField(new Blockly.FieldNumber(0, 1, 200), "NUM_AGENTS")
          .appendField("agente(s)");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("iniciar visível?")
          .appendField(new Blockly.FieldCheckbox("TRUE"), "TYPE_VISIBLE");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("nome:")
          .appendField(new Blockly.FieldVariable("NOME"), "NAME_AGENT");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("tipo:")
          .appendField(new Blockly.FieldDropdown([["humano","person"], ["ave","bird"], ["peixe","fish"],
                                                  ["círculo", "circle"], ["quadrado", "square"], ["triângulo", "triangle"],
                                                  ["X (letra)", "x"], ["estrela", "star"], ["árvore", "tree"]]), "TYPE_AGENT");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("cor:")
          .appendField(new Blockly.FieldDropdown([["cinza","gray"], ["vermelho","red"], ["laranja","orange"], 
                                                  ["marrom","brown"], ["amarelo","yellow"], ["verde","green"], 
                                                  ["azul","blue"], ["violeta","violet"], ["rosa","pink"], 
                                                  ["preto","black"],["branco","white"]]), "NAME_COLOR");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("tamanho:")
          .appendField(new Blockly.FieldDropdown([["normal","normal"], ["pequeno","small"], ["grande","large"]]), "TYPE_SIZE");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("energia:")
          .appendField(new Blockly.FieldDropdown([["infinita","inf"], ["500","500"], ["250","250"], ["100","100"], ["50","50"], ["0","0"]]), "TYPE_ENERGY");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("reprodução:")
          .appendField(new Blockly.FieldDropdown([["sexuada","sex"], ["assexuada","asex"]]), "TYPE_REP");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("movimentação:")
          .appendField(new Blockly.FieldDropdown([["aleatória","rand"], ["horizontal","horiz"], ["vertical","vert"], ["diagonal","diag"], ["inexistente","immobile"]]), "TYPE_MOV");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("velocidade:")
          .appendField(new Blockly.FieldDropdown([["normal","normal"], ["rápida","fast"], ["lenta","slow"]]), "TYPE_VELOC");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("tipo de visão:")
          .appendField(new Blockly.FieldDropdown([["circular","circle"], ["cônica","cone"], ["inexistente","blind"]]), "TYPE_VISION");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("alcance da visão:")
          .appendField(new Blockly.FieldDropdown([["médio","medium"], ["longo","large"], ["curto","small"]]), "TYPE_VIS_RADIUS");
      this.setPreviousStatement(true, "definition");
      this.setNextStatement(true, ["definition", "loopSim"]);
      this.setColour(120);
   this.setTooltip("Bloco para criar uma espécie. Máximo de 200 agentes.");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks['agent_breed_type'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["tartaruga","turtle"], ["lobo","wolf"], ["ovelha","sheep"]]), "TYPE_AGENT");
      this.setInputsInline(true);
      this.setOutput(true, "agent_type");
      this.setColour(90);
   this.setTooltip("Tipo representando um agente criado como uma Geração");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['aprnc_create_breed_type_agent'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("criar");
      this.appendValueInput("NUM_AGENTS")
          .setCheck("Number");
      this.appendValueInput("NAME_AGENT")
          .setCheck("agent_type")
          .appendField("agentes do tipo:");
      this.appendStatementInput("VAL_PROPERTIES")
          .setCheck(null)
          .appendField("com características:");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['aprnc_set_pen'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["ativar","ON"], ["desativar","OFF"]]), "PEN_VAL");
    this.appendDummyInput()
        .appendField("rastro");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['aprnc_set_all_patch_color'] = {
    init: function() {
        this.appendDummyInput()
        .appendField("mudar a cor do terreno para:")
        this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["cinza","gray"], ["vermelho","red"], ["laranja","orange"], 
                                                  ["marrom","brown"], ["amarelo","yellow"], ["verde","green"], 
                                                  ["azul","blue"], ["violeta","violet"], ["rosa","pink"], 
                                                  ["preto","black"],["branco","white"]]), "COL_PATCHES");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };



/* OLD VERSIONS - KEEPING THEM FOR DEBUGGING OLD EXAMPLES

  Blockly.Blocks['aprnc_create_agent_species3'] = {
    init: function() {
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("criar ")
          .appendField(new Blockly.FieldNumber(0, 1, 200), "NUM_AGENTS")
          .appendField("agente(s)");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("nome:")
          .appendField(new Blockly.FieldVariable("NOME"), "NAME_AGENT");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("tipo:")
          .appendField(new Blockly.FieldDropdown([["humano","person"], ["ave","bird"], ["peixe","fish"]]), "TYPE_AGENT");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("cor:")
          .appendField(new Blockly.FieldDropdown([["cinza","gray"], ["vermelho","red"], ["laranja","orange"], 
                                                  ["marrom","brown"], ["amarelo","yellow"], ["verde","green"], 
                                                  ["azul","blue"], ["violeta","violet"], ["rosa","pink"], 
                                                  ["preto","black"],["branco","white"]]), "NAME_COLOR");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("tamanho:")
          .appendField(new Blockly.FieldDropdown([["normal","normal"], ["pequeno","small"], ["grande","large"]]), "TYPE_SIZE");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("energia:")
          .appendField(new Blockly.FieldDropdown([["infinita","inf"], ["500","500"], ["250","250"], ["100","100"], ["50","50"]]), "TYPE_ENERGY");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("reprodução:")
          .appendField(new Blockly.FieldDropdown([["sexuada","sex"], ["assexuada","asex"]]), "TYPE_REP");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("movimentação:")
          .appendField(new Blockly.FieldDropdown([["aleatória","rand"], ["horizontal","horiz"], ["vertical","vert"], ["diagonal","diag"], ["inexistente","immobile"]]), "TYPE_MOV");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("velocidade:")
          .appendField(new Blockly.FieldDropdown([["normal","normal"], ["rápida","fast"], ["lenta","slow"]]), "TYPE_VELOC");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("tipo de visão:")
          .appendField(new Blockly.FieldDropdown([["circular","circle"], ["cônica","cone"], ["inexistente","blind"]]), "TYPE_VISION");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("alcance da visão:")
          .appendField(new Blockly.FieldDropdown([["médio","medium"], ["longo","large"], ["curto","small"]]), "TYPE_VIS_RADIUS");
      this.setPreviousStatement(true, "definition");
      this.setNextStatement(true, ["definition", "loopSim"]);
      this.setColour(120);
   this.setTooltip("Bloco para criar uma espécie. Máximo de 200 agentes.");
   this.setHelpUrl("");
    }
  };

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

Blockly.Blocks['aprnc_create_agent_species2'] = {
    init: function() {
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("criar ")
          .appendField(new Blockly.FieldNumber(0, 1, 200), "NUM_AGENTS")
          .appendField("agente(s)");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("nome:")
          .appendField(new Blockly.FieldVariable("NOME"), "NAME_AGENT");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("tipo:")
          .appendField(new Blockly.FieldDropdown([["humano","person"], ["ave","bird"], ["peixe","fish"]]), "TYPE_AGENT");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("sexo:")
          .appendField(new Blockly.FieldDropdown([["masculino","male"], ["feminino","female"]]), "TYPE_GEN");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("tamanho:")
          .appendField(new Blockly.FieldDropdown([["normal","normal"], ["pequeno","small"], ["grande","large"]]), "TYPE_SIZE");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("energia:")
          .appendField(new Blockly.FieldDropdown([["infinita","inf"], ["500","500"], ["250","250"], ["100","100"], ["50","50"]]), "TYPE_ENERGY");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("reprodução:")
          .appendField(new Blockly.FieldDropdown([["sexuada","sex"], ["assexuada","asex"]]), "TYPE_REP");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("movimentação:")
          .appendField(new Blockly.FieldDropdown([["aleatória","rand"], ["horizontal","horiz"], ["vertical","vert"], ["diagonal","diag"], ["inexistente","immobile"]]), "TYPE_MOV");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("velocidade:")
          .appendField(new Blockly.FieldDropdown([["normal","normal"], ["rápida","fast"], ["lenta","slow"]]), "TYPE_VELOC");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("tipo de visão:")
          .appendField(new Blockly.FieldDropdown([["circular","circle"], ["cônica","cone"], ["inexistente","blind"]]), "TYPE_VISION");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("alcance da visão:")
          .appendField(new Blockly.FieldDropdown([["médio","medium"], ["longo","large"], ["curto","small"]]), "TYPE_VIS_RADIUS");
      this.setPreviousStatement(true, "definition");
      this.setNextStatement(true, ["definition", "loopSim"]);
      this.setColour(120);
   this.setTooltip("Bloco para criar uma espécie. Máximo de 200 agentes.");
   this.setHelpUrl("");
    }
  };
  */