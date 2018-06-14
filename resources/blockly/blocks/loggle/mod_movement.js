Blockly.Blocks['move_agent_group'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mover aleatoriamente");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("Move aleatoriamente o grupo de agentes especificado");
 this.setHelpUrl("");
  }
};

