Blockly.Blocks['proc_ask_turtles'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pedir que");
      this.appendValueInput("NAME_AGENT")
          .setCheck("agent_usr_created");
      this.appendStatementInput("NAME")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("Atribui um conjunto de funções a um determinado conjunto de agentes");
   this.setHelpUrl("");
    }
};