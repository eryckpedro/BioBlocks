Blockly.Blocks['proc_ind_stop_simulation'] = {
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
  
  Blockly.Blocks['proc_ind_consume_energy_over_time'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("remover")
          .appendField(new Blockly.FieldDropdown([["1","1"], ["5","5"], ["10","10"]]), "QTD_ENERGY")
          .appendField("ponto(s) de energia");
      this.appendDummyInput()
          .appendField("de todos agentes:")
          .appendField(new Blockly.FieldVariable("NOME"), "NAME_AGENT");
      this.appendDummyInput()
          .appendField("a cada:")
          .appendField(new Blockly.FieldDropdown([[" 10 segundos","10"], ["25 segundos","25"], ["50 segundos","50"]]), "INTERVAL");
      this.setInputsInline(false);
      this.setPreviousStatement(true, "procedure");
      this.setNextStatement(true, "procedure");
      this.setColour(0);
   this.setTooltip("Remove quantidade de energia de todos agentes do tipo especificado a cada intervalo.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['proc_ind_manage_energy'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["adiconar","add"], ["remover","rem"]]), "ACTION_TYPE")
          .appendField(new Blockly.FieldNumber(0, 0, 100), "QTD_ENERGY")
          .appendField("ponto(s) de energia de todos agentes:")
          .appendField(new Blockly.FieldVariable("NOME"), "NAME_AGENT");
      this.setInputsInline(false);
      this.setPreviousStatement(true, "procedure");
      this.setNextStatement(true, "procedure");
      this.setColour(0);
   this.setTooltip("Adiciona ou remove uma quantidade de energia de todos agentes do tipo especificado. Máximo de 100 unidades.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['proc_ind_reproduce_assex_agents_over_time'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gerar")
          .appendField(new Blockly.FieldNumber(0, 1, 20), "NUM_CUBS")
          .appendField("filho(s), assexuadamente,");
      this.appendDummyInput()
          .appendField("de todos os agentes do tipo:")
          .appendField(new Blockly.FieldVariable("NOME"), "NAME_AGENT");
      this.appendDummyInput()
          .appendField("a cada:")
          .appendField(new Blockly.FieldDropdown([[" 10 segundos","10"], ["25 segundos","25"], ["50 segundos","50"]]), "INTERVAL");
      this.setInputsInline(false);
      this.setPreviousStatement(true, "procedure");
      this.setNextStatement(true, "procedure");
      this.setColour(0);
   this.setTooltip("Gera filhos de todos os agentes do tipo especificado, com reprodução assexuada, a cada intervalo de tempo especificado. Máximo de 20 filhos.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['proc_dep_agent_flee'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("esse agente:")
          .appendField(new Blockly.FieldVariable("NOME"), "NAME_AGENT")
          .appendField("foge");
      this.setInputsInline(false);
      this.setPreviousStatement(true, "procedure_IF");
      this.setNextStatement(true, "procedure");
      this.setColour(30);
   this.setTooltip("Processo de tentativa de fuga do agente especificado no evento. Somente usado após detecção de um agente pelo outro.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['proc_dep_reproduce_between_species'] = {
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
    this.setPreviousStatement(true, "procedure_IF");
    this.setNextStatement(true, "procedure");
    this.setColour(30);
 this.setTooltip("Gera uma quantidade específica de filhos entre as 2 espécies. O gênero será aleatório. Somente usado como consequência de evento.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['proc_dep_reproduce_between_species_with_mutation'] = {
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
          .appendField("de reprodução e com chance")
          .appendField(new Blockly.FieldDropdown([["alta","50"], ["média","25"], ["baixa","10"]]), "MUT_CHANCE");
      this.appendDummyInput()
          .appendField("de mutação na propriedade")
          .appendField(new Blockly.FieldDropdown([["tamanho","size"], ["energia","energy"], ["movimentação","movement"], ["velocidade","velocity"], ["tipo de visão","vision"]]), "MUT_PROPERTY");
      this.setInputsInline(false);
      this.setPreviousStatement(true, "procedure_IF");
      this.setNextStatement(true, "procedure");
      this.setColour(30);
   this.setTooltip("Gera uma quantidade específica de filhos entre as 2 espécies, colocando chances de mutação uma característica. O gênero será aleatório. Somente usado como consequência de evento.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['proc_dep_consume_agent'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("esse agente:")
          .appendField(new Blockly.FieldVariable("NOME"), "NAME_AGENT_2")
          .appendField("morre");
      this.setInputsInline(false);
      this.setPreviousStatement(true, "procedure_IF");
      this.setNextStatement(true, "procedure");
      this.setColour(30);
   this.setTooltip("Procedimento em que o agente, especificado pelo evento, morre. Somente usado como consequência de evento.");
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

