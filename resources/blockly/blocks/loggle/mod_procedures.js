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
          .appendField(new Blockly.FieldVariable("NOME"), "NAME_AGENT");
      this.appendDummyInput()
          .appendField("a cada:")
          .appendField(new Blockly.FieldDropdown([[" 10 segundos","10"], ["25 segundos","25"], ["50 segundos","50"]]), "INTERVAL");
      this.setInputsInline(false);
      this.setPreviousStatement(true, "procedure");
      this.setNextStatement(true, "procedure");
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
          .appendField(new Blockly.FieldVariable("NOME"), "NAME_AGENT");
      this.setInputsInline(false);
      this.setPreviousStatement(true, "procedure");
      this.setNextStatement(true, "procedure");
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
          .appendField(new Blockly.FieldVariable("NOME 1"), "NAME_AGENT_1")
          .appendField("e")
          .appendField(new Blockly.FieldVariable("NOME 2"), "NAME_AGENT_2");
      this.appendDummyInput()
          .appendField("com chance")
          .appendField(new Blockly.FieldDropdown([["alta","100"], ["média","50"], ["baixa","25"]]), "REP_CHANCE")
          .appendField("de reprodução");
      this.setInputsInline(false);
      this.setPreviousStatement(true, "procedure");
      this.setNextStatement(true, "procedure");
      this.setColour(0);
   this.setTooltip("Gera uma quantidade específica de filhos entre as 2 espécies. O gênero será aleatório.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['proc_reproduce_between_species_with_mutation'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gerar")
          .appendField(new Blockly.FieldNumber(0, 1, 20), "NUM_CUBS")
          .appendField("filho(s) entre os agentes:")
          .appendField(new Blockly.FieldVariable("NOME 1"), "NAME_AGENT_1")
          .appendField("e")
          .appendField(new Blockly.FieldVariable("NOME 2"), "NAME_AGENT_2");
      this.appendDummyInput()
          .appendField("com chance")
          .appendField(new Blockly.FieldDropdown([["alta","100"], ["média","50"], ["baixa","25"]]), "REP_CHANCE")
          .appendField("de reprodução, com as seguintes mutações:");
      this.appendStatementInput("MUTATIONS")
          .setCheck("proc_agt_mut");
      this.setInputsInline(false);
      this.setPreviousStatement(true, "procedure");
      this.setNextStatement(true, "procedure");
      this.setColour(0);
   this.setTooltip("Gera uma quantidade específica de filhos entre as 2 espécies, colocando chances de mutação em característica(s). O gênero será aleatório.");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['proc_mutation_type_chance'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("chance")
          .appendField(new Blockly.FieldDropdown([["alta","100"], ["média","50"], ["baixa","25"]]), "REP_CHANCE")
          .appendField("na característica:")
          .appendField(new Blockly.FieldDropdown([["energia","energy"], ["movimentação","movement"], ["velocidade","velocity"], ["tipo de visão","vision"]]), "AGENT_PROPERTY");
      this.setInputsInline(false);
      this.setPreviousStatement(true, "proc_agt_mut");
      this.setNextStatement(true, "proc_agt_mut");
      this.setColour(0);
   this.setTooltip("Diz uma chance de ocorrer mutação num filho resultante da reprodução entre dois agentes.");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks['proc_consume_agent'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("o agente:")
          .appendField(new Blockly.FieldVariable("NOME PREDADOR"), "NAME_AGENT_1")
          .appendField("devora o agente:")
          .appendField(new Blockly.FieldVariable("NOME PRESA"), "NAME_AGENT_2");
      this.setInputsInline(false);
      this.setPreviousStatement(true, "procedure");
      this.setNextStatement(true, "procedure");
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
      this.setPreviousStatement(true, "procedure");
      this.setNextStatement(true, "procedure");
      this.setColour(0);
   this.setTooltip("Termina a simulação");
   this.setHelpUrl("");
    }
  };

