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
  
Blockly.Blocks['proc_consume_energy'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("remover")
          .appendField(new Blockly.FieldDropdown([["1","1"], ["5","5"], ["10","10"]]), "QTD_ENERGY")
          .appendField("ponto(s) de energia");
      this.appendDummyInput()
          .appendField("do agente:")
          .appendField(new Blockly.FieldTextInput("AGENTE"), "NAME_AGENT");
      this.appendDummyInput()
          .appendField("a cada:")
          .appendField(new Blockly.FieldDropdown([[" 10 segundos","10"], ["25 segundos","25"], ["50 segundos","50"]]), "INTERVAL");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("Remove quantidade de energia do agente a cada intervalo especificado.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['proc_manage_energy'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["adiconar","add"], ["remover","rem"]]), "ACTION_TYPE")
          .appendField(new Blockly.FieldNumber(0, 0, 100), "QTD_ENERGY")
          .appendField("ponto(s) de energia do agente:")
          .appendField(new Blockly.FieldTextInput("AGENTE"), "NAME_AGENT");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("Adiciona ou remove uma quantidade de energia do agente especificado. Máximo de 100 unidades.");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['proc_reproduce_between_species'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gerar")
          .appendField(new Blockly.FieldNumber(0, 1, 20), "NUM_CUBS")
          .appendField("filho(s) entre os agentes:")
          .appendField(new Blockly.FieldTextInput("AGENTE 1"), "NAME_AGENT_1")
          .appendField("e")
          .appendField(new Blockly.FieldTextInput("AGENTE 2"), "NAME_AGENT_2");
      this.appendDummyInput()
          .appendField("com chance de:")
          .appendField(new Blockly.FieldDropdown([["100%","100"], ["50%","50"], ["25%","25"]]), "REP_CHANCE");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("Gera uma quantidade específica de filhos entre as 2 espécies. O gênero será aleatório.");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks['proc_consume_agent'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("o agente:")
          .appendField(new Blockly.FieldTextInput("PREDADOR"), "NAME_AGENT_1")
          .appendField("devora o agente:")
          .appendField(new Blockly.FieldTextInput("PRESA"), "NAME_AGENT_2");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("Cria uma interação em que um agente devora o outro, matando-o.");
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