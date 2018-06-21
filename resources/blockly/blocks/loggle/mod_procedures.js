Blockly.Blocks['proc_initiate_movement'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("iniciar movimentação do agente:")
          .appendField(new Blockly.FieldTextInput("AGENTE"), "NAME_AGENT");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("Inicia o tipo de movimento do agente especificado.");
   this.setHelpUrl("");
    }
  };  

Blockly.Blocks['proc_ask_turtles'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pedir ao grupo de agentes");
      this.appendValueInput("NAME_AGENT")
          .setCheck("agent_type");
      this.appendDummyInput()
          .appendField("para:");
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

Blockly.Blocks['proc_reproduce_given_chance'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gerar");
      this.appendValueInput("NUM_CUBS")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField("filho(s) com chance de:");
      this.appendValueInput("REP_CHANCE")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField("%");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("Reproduz o agente mencionado com a dada probabilidade");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['proc_kill_agent'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pedir que o agente colidido:");
      this.appendValueInput("NAME_AGENT")
          .setCheck("agent_type");
      this.appendDummyInput()
          .appendField("morra");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("Mata o determinado agente.");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['proc_stop_simulation'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("parar simulação");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("Termina a simulação");
   this.setHelpUrl("");
    }
  };