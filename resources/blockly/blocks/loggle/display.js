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

Blockly.Blocks['display_create_graph_num_agents'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("criar um gráfico da quantidade dos agentes:");
      this.appendStatementInput("NAME_AGENTS")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("pelo tempo ocorrido");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(150);
   this.setTooltip("Cria um gráfico do número de agentes pelo tempo.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['display_agent_plot_variable'] = {
    init: function() {
      this.appendValueInput("NAME_AGENT")
          .setCheck("agent_type")
          .appendField("nome do agente:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(150);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };