Blockly.Blocks['def_breed_agent'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("definir geração de");
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["LOBOS","wolf"], ["OVELHAS","sheep"]]), "BREED_DEF");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['def_breed_agent2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("definir geração de:");
      this.appendValueInput("NAME_BREED")
          .setCheck("agent_type");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['def_agent_property'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("característica particular:");
      this.appendValueInput("NAME_PROPERTY")
          .setCheck("agent_property_type");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['def_agent_property_type_color'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("cor =");
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["cinza","gray"], ["vermelho","red"], ["laranja","orange"], ["marrom","brown"], ["amarelo","yellow"], ["verde","green"], ["azul","blue"], ["violeta","violet"], ["rosa","pink"]]), "NAME_COLOR");
      this.setInputsInline(true);
      this.setOutput(true, "agent_property_type");
      this.setColour(270);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['def_agent_property_type_num'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["tamanho","size"], ["direção","heading"]]), "TYPE_PROP");
      this.appendDummyInput()
          .appendField("=");
      this.appendValueInput("NAME")
          .setCheck("Number");
      this.setInputsInline(true);
      this.setOutput(true, "agent_property_type");
      this.setColour(270);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['def_global_property'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("característica global:");
      this.appendDummyInput()
          .appendField(new Blockly.FieldTextInput("nome"), "NAME_PROPERTY");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
   this.setTooltip("Característica que todos os agentes tem");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['def_set_global_properties'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("conjunto de características globais:");
      this.appendStatementInput("GLOBAL_AGNT_VARS")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
   this.setTooltip("Característica que todos os agentes tem");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['def_agent_global_property'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("característica global:");
      this.appendValueInput("NAME_PROPERTY")
          .setCheck("agent_global_var");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['def_agent_global_property_type'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("var_caract"), "NAME_PROPERTY");
      this.setInputsInline(true);
      this.setOutput(true, "agent_global_var");
      this.setColour(270);
   this.setTooltip("Mude o nome da característica com a opção \"mudar nome da variável\" clicando ao lado dela");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['def_chg_property2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("mude o valor de:");
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("NOME DA CARACTERÍSTICA"), "NAME_VAR");
      this.appendDummyInput()
          .appendField("para:");
      this.appendValueInput("NEW_VAL")
          .setCheck(["Number", "String"]);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
   this.setTooltip("Modifica uma característica já criada anteriormente.");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['def_chg_property'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("mude o valor de:");
      this.appendDummyInput()
          .appendField(new Blockly.FieldTextInput("(propriedade)"), "NAME_PROPERTY");
      this.appendDummyInput()
          .appendField("para:");
      this.appendValueInput("NEW_VAL")
          .setCheck(["Number", "String"]);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
   this.setTooltip("Modifica uma característica já criada anteriormente.");
   this.setHelpUrl("");
    }
  };

