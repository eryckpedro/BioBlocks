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
      this.appendValueInput("NAME_AGENT")
          .setCheck("agent")
          .appendField("do tipo:");
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