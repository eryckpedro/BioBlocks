Blockly.Blocks['aprnc_create_agent_species'] = {
    init: function() {
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("criar ")
          .appendField(new Blockly.FieldNumber(0, 1, 200), "NUM_AGENTS")
          .appendField("agente(s)");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("nome:")
          .appendField(new Blockly.FieldTextInput("NOME"), "NAME_AGENT");
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
          .appendField("energia:")
          .appendField(new Blockly.FieldDropdown([["infinita","inf"], ["50","50"], ["100","100"], ["250","250"], ["500","500"]]), "TYPE_ENERGY");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("reprodução:")
          .appendField(new Blockly.FieldDropdown([["sexuada","sex"], ["assexuada","asex"]]), "TYPE_REP");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("movimentação:")
          .appendField(new Blockly.FieldDropdown([["aleatória","rand"], ["direcionada","direc"]]), "TYPE_MOV");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("velocidade:")
          .appendField(new Blockly.FieldDropdown([["normal","normal"], ["rápida","fast"], ["lenta","slow"]]), "TYPE_VELOC");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("tipo de visão:")
          .appendField(new Blockly.FieldDropdown([["circular","circle"], ["quadrada","square"], ["retangular","rect"]]), "TYPE_VISION");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("Bloco para criar uma espécie. Máximo de 200 agentes.");
   this.setHelpUrl("");
    }
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
          .appendField("energia:")
          .appendField(new Blockly.FieldDropdown([["infinita","inf"], ["500","500"], ["250","250"], ["100","100"], ["50","50"]]), "TYPE_ENERGY");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("reprodução:")
          .appendField(new Blockly.FieldDropdown([["sexuada","sex"], ["assexuada","asex"]]), "TYPE_REP");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("movimentação:")
          .appendField(new Blockly.FieldDropdown([["aleatória","rand"], ["direcionada","direc"]]), "TYPE_MOV");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("velocidade:")
          .appendField(new Blockly.FieldDropdown([["normal","normal"], ["rápida","fast"], ["lenta","slow"]]), "TYPE_VELOC");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("tipo de visão:")
          .appendField(new Blockly.FieldDropdown([["circular","circle"], ["quadrada","square"], ["retangular","rect"]]), "TYPE_VISION");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
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