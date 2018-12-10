Blockly.Blocks['event_check_collision'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("um agente:");
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("NOME 1"), "NAME_AGENT_1");
      this.appendDummyInput()
          .appendField("encontrar com um agente:");
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("NOME 2"), "NAME_AGENT_2");
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour(60);
   this.setTooltip("Checa se o agente NOME 1 colide no agente NOME 2.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['event_check_agent_in_proximity'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("um agente:");
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("NOME 1"), "NAME_AGENT_1");
      this.appendDummyInput()
          .appendField("avistar um agente:");
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("NOME 2"), "NAME_AGENT_2");
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour(60);
   this.setTooltip("Checa se o agente NOME 2 está no campo de visão do agente NOME 1.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['event_check_agent_qtd'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("a quantidade de agentes do tipo:")
          .appendField(new Blockly.FieldVariable("NOME"), "NAME_AGENT")
          .appendField(new Blockly.FieldDropdown([["=","equal"], [">","gt"], ["<","lt"], ["≥","gte"], ["≤","lte"], ["≠","diff"]]), "TYPE_COMPARE")
          .appendField(new Blockly.FieldNumber(0), "NUM_COMPARED");
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour(60);
      this.setTooltip("Faz a comparação da quantidade de agentes de um tipo com um número. Inclui agentes invisíveis do mesmo tipo.");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['event_check_agent_qtd_in_agent_vicinity'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("a QTD de agentes ao redor de um agente:")
          .appendField(new Blockly.FieldVariable("NOME"), "NAME_AGENT")
          .appendField(new Blockly.FieldDropdown([["=","equal"], [">","gt"], ["<","lt"], ["≥","gte"], ["≤","lte"], ["≠","diff"]]), "TYPE_COMPARE")
          .appendField(new Blockly.FieldNumber(0), "NUM_COMPARED");
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour(60);
      this.setTooltip("Faz a comparação da quantidade de agentes quaisquer no campo de visão de um agente do tipo especificado. Atenção: esse comando inclui o próprio agente que está perguntando e agentes invisíveis do mesmo tipo.");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['event_check_agent_qtd_in_patch_vicinity'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("a QTD de agentes ao redor de um espaço vazio")
          .appendField(new Blockly.FieldDropdown([["=","equal"], [">","gt"], ["<","lt"], ["≥","gte"], ["≤","lte"], ["≠","diff"]]), "TYPE_COMPARE")
          .appendField(new Blockly.FieldNumber(0, 0), "NUM_COMPARED");
      this.setOutput(true, "Boolean");
      this.setColour(60);
      this.setTooltip("Faz a comparação da quantidade de agentes quaisquer ao redor de um espaço vazio no mapa. Inclui agentes invisíveis;");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['event_check_status_agent'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("um agente do tipo:")
          .appendField(new Blockly.FieldVariable("NOME"), "NAME_AGENT")
          .appendField("está marcado");
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour(60);
   this.setTooltip("Checa se um agente do tipo especificado está marcado.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['event_check_status_patch'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("um espaço vazio está marcado");
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour(60);
   this.setTooltip("Checa se um espaço vazio está marcado.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['event_check_agent_energy'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("a quantidade de energia de um agente do tipo:")
          .appendField(new Blockly.FieldVariable("NOME"), "NAME_AGENT")
          .appendField(new Blockly.FieldDropdown([["=","equal"], [">","gt"], ["<","lt"], ["≥","gte"], ["≤","lte"], ["≠","diff"]]), "TYPE_COMPARE")
          .appendField(new Blockly.FieldNumber(0), "NUM_COMPARED");
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour(60);
   this.setTooltip("Faz a comparação da quantidade de energia de um agente de um tipo em relação a um número.");
   this.setHelpUrl("");
    }
  };