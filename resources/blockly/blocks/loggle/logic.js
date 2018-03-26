Blockly.Blocks['logic_if'] = {
    init: function() {
      this.appendValueInput("IF_VALUE")
          .setCheck("Boolean")
          .appendField("se");
      this.appendStatementInput("THEN_VALUE")
          .setCheck(null)
          .appendField("então");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
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
      this.appendDummyInput()
          .appendField("se o agente:");
      this.appendValueInput("NAME_AGENT_1")
          .setCheck("agent_type");
      this.appendDummyInput()
          .appendField("se choca com o agente:");
      this.appendValueInput("NAME_AGENT_2")
          .setCheck("agent_type");
      this.appendDummyInput()
          .appendField(":");
      this.appendStatementInput("NAME_STATEMENTS")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
   this.setTooltip("Checa colisão entre 2 agentes");
   this.setHelpUrl("");
    }
  };