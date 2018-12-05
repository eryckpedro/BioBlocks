Blockly.Blocks['logic_if'] = {
    init: function() {
      this.appendValueInput("IF_VALUE")
          .setCheck("Boolean")
          .appendField("se");
      this.appendStatementInput("THEN_VALUE")
          .setCheck(["procedure", "procedure_IF"])
          .appendField("então");
      this.setInputsInline(true);
      this.setPreviousStatement(true, "procedure");
      this.setNextStatement(true, "procedure");
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks['logic_compare2'] = {
    init: function() {
      this.appendValueInput("LEFT_VAL")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["=","equal"], ["≠","not_equal"], [">","gt"], 
                                                 ["≥","gte"], ["<","lt"], ["≤","lte"]]), "COMPARE_VAL");
      this.appendValueInput("RIGHT_VAL")
          .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['logic_while_forever'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("repita");
      this.appendStatementInput("DO_STATEMENTS")
          .setCheck(null)
          .appendField("para sempre");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['logic_check_collision2'] = {
    init: function() {
      this.appendValueInput("NAME_AGENT_1")
          .setCheck("agent_type")
          .appendField("se algum agente do tipo:");
      this.appendValueInput("NAME_AGENT_2")
          .setCheck("agent_type")
          .appendField("colidir em algum agente do tipo:");
      this.appendStatementInput("NAME_STATEMENTS")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_CENTRE)
          .appendField("faça:");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
   this.setTooltip("Checa colisão entre 2 agentes");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['logic_check_agent_qtd'] = {
    init: function() {
      this.appendValueInput("AGENT_QTD")
          .setCheck("agent_type")
          .appendField("quantidade de agentes do tipo:");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(180);
   this.setTooltip("Checa quantidade de um agente");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['logic_simulation_while'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("loop de simulação:");
      this.appendStatementInput("DO_STATEMENTS")
          .setCheck("procedure");
      this.setInputsInline(true);
      this.setPreviousStatement(true, "definition");
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['logic_program_sections'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("comandos PREPAPAR:");
      this.appendStatementInput("PREP_STATEMENTS:")
          .setCheck("definition");
      this.appendDummyInput()
          .appendField("comandos EXECUTAR (em loop):");
      this.appendStatementInput("EXEC_STATEMENTS:")
          .setCheck("procedure");
      this.setColour(270);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };