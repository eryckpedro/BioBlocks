Blockly.Blocks['event_check_collision'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("o agente:");
      this.appendDummyInput()
          .appendField(new Blockly.FieldTextInput("AGENTE 1"), "NAME_AGENT_1");
      this.appendDummyInput()
          .appendField("colidir com o agente:");
      this.appendDummyInput()
          .appendField(new Blockly.FieldTextInput("AGENTE 2"), "NAME_AGENT_2");
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};