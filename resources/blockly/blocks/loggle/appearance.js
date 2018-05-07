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

Blockly.Blocks['aprnc_create_agent'] = {
  init: function() {
    this.appendValueInput("NUM_AGENTS")
        .setCheck("Number")
        .appendField("criar");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["tartaruga","turtle"], ["lobo","wolf"], ["ovelha","sheep"]]), "TYPE_AGENT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['aprnc_create_agent2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("criar");
      this.appendValueInput("NUM_AGENTS")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField("do tipo:")
          .appendField(new Blockly.FieldDropdown([["tartaruga","turtle"], ["lobo","wolf"], ["ovelha","sheep"]]), "NAME_AGENT");
      this.appendStatementInput("VAL_PROPERTIES")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['aprnc_create_breed_type_agent2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("criar");
      this.appendValueInput("NUM_AGENTS")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField("da raça criada de:")
          .appendField(new Blockly.FieldVariable("RAÇA"), "NAME_BREED");
      this.appendStatementInput("VAL_PROPERTIES")
          .setCheck(null);
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

Blockly.Blocks['aprnc_set_size_all'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("mudar o tamanho de todos para");
      this.appendValueInput("TAM_AGENT")
          .setCheck("Number");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("Um número inteiro a partir de 1");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['aprnc_set_color_all'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("mudar a cor de todos para");
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["cinza","gray"], ["vermelho","red"], ["laranja","orange"], 
                                                  ["marrom","brown"], ["amarelo","yellow"], ["verde","green"], 
                                                  ["azul","blue"], ["violeta","violet"], ["rosa","pink"]]), "COL_AGENT");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['aprnc_hide_all'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("esconder todos");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['aprnc_show_all'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("mostrar todos");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['agent_type'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["tartaruga","turtle"], ["lobo","wolf"], ["ovelha","sheep"]]), "TYPE_AGENT");
      this.setInputsInline(true);
      this.setOutput(true, "agent");
      this.setColour(120);
   this.setTooltip("Tipo representando um agente");
   this.setHelpUrl("");
    }
 };

 Blockly.Blocks['agent_type_usr_created'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldTextInput("nome_da_raça"), "NAME_BREED");
      this.setInputsInline(true);
      this.setOutput(true, "agent_usr_created");
      this.setColour(120);
   this.setTooltip("Tipo representando um agente denominado como uma Raça");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['agent_breed_type_wolves'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("LOBOS"), "wolf");
      this.appendDummyInput()
          .appendField("(RAÇA)");
      this.setInputsInline(true);
      this.setOutput(true, "agent_var_usr_created");
      this.setColour(90);
   this.setTooltip("Tipo representando um agente criado como uma Raça");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['agent_breed_type_sheep'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("OVELHAS"), "sheep");
      this.appendDummyInput()
          .appendField("(RAÇA)");
      this.setInputsInline(true);
      this.setOutput(true, "agent_var_usr_created");
      this.setColour(90);
   this.setTooltip("Tipo representando um agente criado como uma Raça");
   this.setHelpUrl("");
    }
};