Blockly.Blocks['def_breed_agent'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("definir geração de");
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["lobo","wolf"], ["ovelha","sheep"]]), "BREED_DEF");
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
          .appendField("característica:");
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
