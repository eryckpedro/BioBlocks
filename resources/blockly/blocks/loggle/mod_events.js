Blockly.Blocks['event_check_collision'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("o agente:");
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("NOME 1"), "NAME_AGENT_1");
      this.appendDummyInput()
          .appendField("esbarra com o agente:");
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("NOME 2"), "NAME_AGENT_2");
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour(60);
   this.setTooltip("Checa se o agente NOME 1 esbarra no agente NOME 2.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['event_check_agent_in_proximity'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("o agente:");
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("NOME 1"), "NAME_AGENT_1");
      this.appendDummyInput()
          .appendField("avistar o agente:");
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
   this.setTooltip("Faz a comparação da quantidade de agentes de um tipo com um número.");
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