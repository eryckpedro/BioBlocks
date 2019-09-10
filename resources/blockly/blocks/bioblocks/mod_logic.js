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
   this.setTooltip("Bloco que cria uma condição Se -> então. Este bloco deve atribuir uma Condição de Controle no campo ao lado do \"se\", obrigatoriamente, e uma Ação de Controle no campo ao lado do \"então\", opcional. A Ação de Controle somente será executada caso a Condição de Controle especificada aconteça. Ações Livres também podem ser realizadas como Ação de Controle, mas o oposto NÃO é válido.");
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
      this.setTooltip("Bloco que agrupa as áreas de programação do modelo. Em " +  
                      "\"PREPARAR\" se encaixam os comandos de definição de agntes e criação de gráficos. " +  
                      "Em \"EXECUTAR\" estão os comandos de ações dos agentes, que ficam em loop infinito. " +
                      "Este bloco não pode ser duplicado nem excluído.");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['logic_prob_clause'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("com chance:")
          .appendField(new Blockly.FieldDropdown([["baixa","low"], ["média","mid"], ["alta","high"], ["absoluta","total"]]), "PROB_CHANCE")
          .appendField(", faça:");
      this.appendStatementInput("CHANCE_ACTIONS")
          .setCheck(["procedure"]);
      this.setInputsInline(true);
      this.setPreviousStatement(true, "procedure");
      this.setNextStatement(true, "procedure");
      this.setColour(180);
      this.setTooltip("Bloco que impõe uma probabilidade de ocorrência das ações em seu interior. Baixa = 25%, Média = 50%, Alta = 75% e Absoluta = 100%.");
      this.setHelpUrl("");
    }
  };