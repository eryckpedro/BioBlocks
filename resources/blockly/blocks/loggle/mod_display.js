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

Blockly.Blocks['display_monitor_num_agent2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("mostrar num contador o total de agentes do tipo:")
          .appendField(new Blockly.FieldVariable("NOME"), "NAME_AGENT");
      this.setPreviousStatement(true, "definition");
      this.setNextStatement(true, ["definition", "loopSim"]);
      this.setColour(150);
   this.setTooltip("Adiciona na interface um contador com o número total do tipo de agente especificado.");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks['display_plot_graphic_agents_time'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("exibir gráfico mostrando:");
      this.appendStatementInput("NAME_AGENTS")
          .setCheck("agent_axis_var");
      this.appendDummyInput()
          .appendField("no decorrer do tempo");
      this.setPreviousStatement(true, "definition");
      this.setNextStatement(true, ["definition", "loopSim"]);
      this.setColour(150);
   this.setTooltip("Adiciona na interface um gráfico com o número de agentes especificados pelo tempo.");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks['display_agent_axis_variable'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("total de agentes do tipo:")
          .appendField(new Blockly.FieldVariable("NOME"), "NAME_AGENT");
      this.setPreviousStatement(true, "agent_axis_var");
      this.setNextStatement(true, "agent_axis_var");
      this.setColour(150);
   this.setTooltip("Adiciona ao gráfico a informação do total de agentes do tipo especificado. Apenas utilizado dentro do bloco de criação de gráfico.");
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
      this.appendDummyInput()
          .appendField("agente:");
      this.appendValueInput("NAME_AGENT")
          .setCheck("agent_type");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(150);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };