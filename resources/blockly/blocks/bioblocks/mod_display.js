Blockly.Blocks['display_monitor_num_agent2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("exibir o total de agentes do tipo:")
          .appendField(new Blockly.FieldVariable("NOME"), "NAME_AGENT");
      this.setPreviousStatement(true, "definition");
      this.setNextStatement(true, ["definition", "loopSim"]);
      this.setColour(150);
   this.setTooltip("Adiciona na interface um contador com o número total do tipo de agente especificado.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['display_monitor_energy_agents'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("exibir a soma das energias dos agentes do tipo:")
          .appendField(new Blockly.FieldVariable("NOME"), "NAME_AGENT");
      this.setPreviousStatement(true, "definition");
      this.setNextStatement(true, ["definition", "loopSim"]);
      this.setColour(150);
   this.setTooltip("Adiciona na interface um contador com a soma das energias do tipo de agente especificado.");
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

Blockly.Blocks['display_agent_axis_variable_qtd'] = {
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

Blockly.Blocks['display_agent_axis_variable_energy'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("soma das energias dos agentes do tipo:")
          .appendField(new Blockly.FieldVariable("NOME"), "NAME_AGENT");
      this.setPreviousStatement(true, "agent_axis_var");
      this.setNextStatement(true, "agent_axis_var");
      this.setColour(150);
   this.setTooltip("Adiciona ao gráfico a informação da soma das energias do tipo especificado. Apenas utilizado dentro do bloco de criação de gráfico.");
   this.setHelpUrl("");
    }
  };
