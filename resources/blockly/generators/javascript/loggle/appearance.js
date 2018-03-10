Blockly.JavaScript['aprnc_create_agent'] = function(block) {
  var value_num_agents = Blockly.JavaScript.valueToCode(block, 'NUM_AGENTS', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_type_agent = block.getFieldValue('TYPE_AGENT');
  // TODO: Assemble JavaScript into code variable.
  var code;
  var shape;

  switch(dropdown_type_agent)
  {
    case "turtle":
      shape = "\"turtle\"";
      break;
    case "wolf":
      shape = "\"wolf\"";
      break;
    case "sheep":
      shape = "\"sheep\"";
      break;
  }

  code = 'create-turtles ' + value_num_agents + ' [ set shape ' + shape + ' ]\n';
  return code;
};

Blockly.JavaScript['aprnc_create_agent2'] = function(block) {
  var value_num_agents = Blockly.JavaScript.valueToCode(block, 'NUM_AGENTS', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name_agent = block.getFieldValue('NAME_AGENT');
  var statements_val_properties = Blockly.JavaScript.statementToCode(block, 'VAL_PROPERTIES');
  // TODO: Assemble JavaScript into code variable.

  var shape = "\"" + dropdown_name_agent + "\"";
  var code = "";

  if(statements_val_properties.length == 0)
  {
    code = 'create-turtles ' + value_num_agents + ' [ set shape ' + shape + ' setxy random-xcor random-ycor ]\n';
  }
  else
  {
    code = 'create-turtles ' + value_num_agents + '\n[\n  set shape ' + shape + ' \n'
          + statements_val_properties + '  setxy random-xcor random-ycor \n]\n';
  }

  return code;
};

Blockly.JavaScript['aprnc_create_breed_type_agent'] = function(block) {
  var value_num_agents = Blockly.JavaScript.valueToCode(block, 'NUM_AGENTS', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name_agent = Blockly.JavaScript.valueToCode(block, 'NAME_AGENT', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_val_properties = Blockly.JavaScript.statementToCode(block, 'VAL_PROPERTIES');
  // TODO: Assemble JavaScript into code variable.

  var code = "";

  if(statements_val_properties.length == 0)
  {
    code = 'create ' + value_name_agent + ' ' + value_num_agents + ' [ setxy random-xcor random-ycor ]\n';
  }
  else
  {
    code = 'create ' + value_name_agent + ' ' + value_num_agents + '\n[\n '
          + statements_val_properties + '   setxy random-xcor random-ycor \n]\n';
  }

  return code;

};

Blockly.JavaScript['aprnc_set_pen'] = function(block) {
  var dropdown_pen_val = block.getFieldValue('PEN_VAL');
  // TODO: Assemble JavaScript into code variable.
  var code;

  if(dropdown_pen_val == 'ON')
  	code = 'ask turtles [ pen-down ]\n';
  else if(dropdown_pen_val == 'OFF')
  	code = 'ask turtles [ pen-up ]\n';

  return code;
};

Blockly.JavaScript['aprnc_set_size_all'] = function(block) {
  var value_tam_agent = Blockly.JavaScript.valueToCode(block, 'TAM_AGENT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'ask turtles [ set size ' + parseInt(value_tam_agent) + ' ]\n';
  return code;
};

Blockly.JavaScript['aprnc_set_color_all'] = function(block) {
  var dropdown_col_agent = block.getFieldValue('COL_AGENT');
  // TODO: Assemble JavaScript into code variable.
  var code = 'ask turtles [ set color ' + dropdown_col_agent + ' ]\n';
  return code;
};

Blockly.JavaScript['aprnc_hide_all'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'ask turtles [ ht ]\n';
  return code;
};

Blockly.JavaScript['aprnc_show_all'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'ask turtles [ st ]\n';
  return code;
};

Blockly.JavaScript['agent_type'] = function(block) {
  var dropdown_type_agent = block.getFieldValue('TYPE_AGENT');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_type_agent;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['agent_type_usr_created'] = function(block) {
  var text_name_breed = block.getFieldValue('NAME_BREED');
  // TODO: Assemble JavaScript into code variable.
  var code = text_name_breed;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};