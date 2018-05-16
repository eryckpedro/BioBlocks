Blockly.Blocks['display_monitor_num_agent'] = {
    init: function() {
      this.appendValueInput("NAME_AGENT")
          .setCheck("agent_type")
          .appendField("mostrar numa janela o total de agentes do tipo:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(150);
   this.setTooltip("Adiciona na interface uma janela com o número total do tipo de agente.");
   this.setHelpUrl("");
    }
};