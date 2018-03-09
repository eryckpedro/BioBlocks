Blockly.Blocks['move_all_agents'] = {
  init: function() {
    this.appendValueInput("NUM_STEPS")
        .setCheck("Number")
        .appendField("mover todos em");
    this.appendDummyInput()
        .appendField("passos");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['move_all_chg_heading'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("virar todos em")
        .appendField(new Blockly.FieldAngle(90), "degrees");
    this.appendDummyInput()
        .appendField("graus");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['move_all_jump_random_left_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pular todos pra esquerda ou direita");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['move_all_jump_random_up_down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pular todos pra cima ou baixo");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

