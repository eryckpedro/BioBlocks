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

  Blockly.Blocks['proc_ind_manage_energy'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["adicionar","add"], ["remover","rem"]]), "ACTION_TYPE")
          .appendField(new Blockly.FieldNumber(0, 1, 100), "QTD_ENERGY")
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

  Blockly.Blocks['proc_ind_manage_energy_over_time'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["adicionar","add"], ["remover","rem"]]), "ACTION_TYPE")
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
   this.setTooltip("Remove quantidade de energia do agente a cada intervalo especificado.");
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

  Blockly.Blocks['proc_ind_kill_all_agents'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("matar todos os agentes do tipo:")
          .appendField(new Blockly.FieldVariable("NOME"), "NAME_AGENT");
      this.setInputsInline(true);
      this.setPreviousStatement(true, "procedure");
      this.setNextStatement(true, "procedure");
      this.setColour(0);
   this.setTooltip("Mata todos os agentes do tipo especificado.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['proc_ind_hatch_agent'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gerar")
          .appendField(new Blockly.FieldNumber(0, 1, 20), "NUM_AGENTS")
          .appendField("agente(s) do tipo:")
          .appendField(new Blockly.FieldVariable("NOME"), "NAME_AGENT");
      this.setInputsInline(false);
      this.setPreviousStatement(true, "procedure");
      this.setNextStatement(true, "procedure");
      this.setColour(0);
   this.setTooltip("Adiciona à simulação uma quantidade do tipo de agentes especificado. Eles surgirão em posições aleatórias. Máximo de 20 agentes.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['proc_ind_hatch_agent_with_mutation'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gerar")
          .appendField(new Blockly.FieldNumber(0, 1, 20), "NUM_AGENTS")
          .appendField("agente(s) do tipo:")
          .appendField(new Blockly.FieldVariable("NOME"), "NAME_AGENT");
      this.appendDummyInput()
          .appendField("com chance:")
          .appendField(new Blockly.FieldDropdown([["baixa","10"], ["média","25"], ["alta","50"]]), "MUT_CHANCE")
          .appendField("de alteração no(a)")
          .appendField(new Blockly.FieldDropdown([["tamanho","size"], ["energia","energy"], ["movimentação","movement"], ["velocidade","velocity"], ["tipo de visão","vision"]]), "MUT_PROPERTY");
      this.setInputsInline(false);
      this.setPreviousStatement(true, "procedure");
      this.setNextStatement(true, "procedure");
      this.setColour(0);
   this.setTooltip("Adiciona à simulação uma quantidade do tipo de agentes especificado que podem ter a característica, indicada pelo campo de alteração, modificada. Eles surgirão em posições aleatórias. Máximo de 20 agentes.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['proc_dep_agent_flee'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("esse agente:")
          .appendField(new Blockly.FieldVariable("NOME 1"), "NAME_AGENT_FLEEING")
          .appendField("foge do agente:")
          .appendField(new Blockly.FieldVariable("NOME 2"), "NAME_AGENT_HUNTING");
      this.setInputsInline(false);
      this.setPreviousStatement(true, ["procedure_IF", "procedure_dep"]);
      this.setNextStatement(true, ["procedure", "procedure_dep"]);
      this.setColour(225);
   this.setTooltip("Processo de tentativa de fuga do agente NOME 1 especificado no evento, em que está fugindo do agente NOME 2. Somente usado após detecção de um agente pelo outro.");
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
      this.setPreviousStatement(true, ["procedure_IF", "procedure_dep"]);
      this.setNextStatement(true, ["procedure", "procedure_dep"]);
      this.setColour(225);
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
          .appendField("de alteração na propriedade")
          .appendField(new Blockly.FieldDropdown([["tamanho","size"], ["energia","energy"], ["movimentação","movement"], ["velocidade","velocity"], ["tipo de visão","vision"]]), "MUT_PROPERTY");
      this.setInputsInline(false);
      this.setPreviousStatement(true, ["procedure_IF", "procedure_dep"]);
      this.setNextStatement(true, ["procedure", "procedure_dep"]);
      this.setColour(225);
   this.setTooltip("Gera uma quantidade específica de filhos entre as 2 espécies, colocando chances de alteração uma característica. O gênero será aleatório. Somente usado como consequência de evento.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['proc_dep_kill_specific_agent'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("matar esse agente:")
          .appendField(new Blockly.FieldVariable("NOME"), "NAME_AGENT");
      this.setInputsInline(false);
      this.setPreviousStatement(true, ["procedure_IF", "procedure_dep"]);
      this.setNextStatement(true, ["procedure", "procedure_dep"]);
      this.setColour(225);
   this.setTooltip("Procedimento que mata o agente especificado pelo evento. Somente usado como consequência de evento.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['proc_dep_manage_energy_specific'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["adicionar","add"], ["remover","rem"]]), "ACTION_TYPE")
          .appendField(new Blockly.FieldNumber(0, 1, 100), "QTD_ENERGY")
          .appendField("ponto(s) de energia desse agente:")
          .appendField(new Blockly.FieldVariable("NOME"), "NAME_AGENT");
      this.setInputsInline(false);
      this.setPreviousStatement(true, ["procedure_IF", "procedure_dep"]);
      this.setNextStatement(true, ["procedure", "procedure_dep"]);
      this.setColour(225);
   this.setTooltip("Adiciona ou remove uma quantidade de energia do agente especificado pelo evento. Máximo de 100 unidades. Somente usado como consequência de evento.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['proc_dep_move_towards_specific'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("mover esse agente:")
          .appendField(new Blockly.FieldVariable("NOME 1"), "NAME_AGENT1")
          .appendField("em direção ao agente:")
          .appendField(new Blockly.FieldVariable("NOME 2"), "NAME_AGENT2");
      this.setInputsInline(false);
      this.setPreviousStatement(true, ["procedure_IF", "procedure_dep"]);
      this.setNextStatement(true, ["procedure", "procedure_dep"]);
      this.setColour(225);
   this.setTooltip("Procedimento em que o agente NOME 1 se move em direção ao NOME 2. Somente usado como consequência de evento.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['proc_dep_mark_specific_agent'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("marcar esse agente:")
          .appendField(new Blockly.FieldVariable("NOME"), "NAME_AGENT");
      this.setInputsInline(false);
      this.setPreviousStatement(true, ["procedure_IF", "procedure_dep"]);
      this.setNextStatement(true, ["procedure", "procedure_dep"]);
      this.setColour(225);
   this.setTooltip("Procedimento que marca o agente especificado pelo evento, afim de aplicar um efeito sobre o mesmo posteriormente. Somente usado como consequência de evento.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['proc_dep_kill_marked_agent'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("matar esse agente do tipo:")
          .appendField(new Blockly.FieldVariable("NOME"), "NAME_AGENT")
          .appendField("marcado");
      this.setInputsInline(false);
      this.setPreviousStatement(true, ["procedure_IF", "procedure_dep"]);
      this.setNextStatement(true, ["procedure", "procedure_dep"]);
      this.setColour(225);
   this.setTooltip("Procedimento que mata o agente marcado do tipo especificado pelo evento. Somente usado como consequência de evento.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['proc_dep_mark_specific_patch'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("marcar esse espaço vazio");
      this.setInputsInline(false);
      this.setPreviousStatement(true, ["procedure_IF", "procedure_dep"]);
      this.setNextStatement(true, ["procedure", "procedure_dep"]);
      this.setColour(225);
   this.setTooltip("Procedimento que marca o espaço vazio especificado pelo evento, afim de aplicar um efeito sobre o mesmo posteriormente. Somente usado como consequência de evento.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['proc_dep_hatch_in_patch_specific'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gerar um agente do tipo:")
          .appendField(new Blockly.FieldVariable("NOME"), "NAME_AGENT")
          .appendField("nesse espaço vazio");
      this.setInputsInline(false);
      this.setPreviousStatement(true, ["procedure_IF", "procedure_dep"]);
      this.setNextStatement(true, ["procedure", "procedure_dep"]);
      this.setColour(225);
   this.setTooltip("Procedimento que gera um agente do tipo especificado no espaço vazio marcado. Somente usado como consequência de evento.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['proc_dep_consume_agent_energy'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("esse agente:")
          .appendField(new Blockly.FieldVariable("NOME 1"), "NAME_AGENT_EATER")
          .appendField("ganha a energia do agente:")
          .appendField(new Blockly.FieldVariable("NOME 2"), "NAME_AGENT_EATEN");
      this.setInputsInline(false);
      this.setPreviousStatement(true, ["procedure_IF", "procedure_dep"]);
      this.setNextStatement(true, ["procedure", "procedure_dep"]);
      this.setColour(225);
   this.setTooltip("Procedimento em que o agente NOME 1 ganha a energia do agente NOME 2, somando à sua energia anterior. Somente usado como consequência de evento.");
   this.setHelpUrl("");
    }
  };