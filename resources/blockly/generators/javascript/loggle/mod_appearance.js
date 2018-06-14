Blockly.JavaScript['agent_breed_type'] = function(block) {
  var dropdown_type_agent = block.getFieldValue('TYPE_AGENT');
  // TODO: Assemble JavaScript into code variable.

  var code = dropdown_type_agent;

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['aprnc_create_breed_type_agent'] = function(block) {
  var value_num_agents = Blockly.JavaScript.valueToCode(block, 'NUM_AGENTS', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name_agent = Blockly.JavaScript.valueToCode(block, 'NAME_AGENT', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_val_properties = Blockly.JavaScript.statementToCode(block, 'VAL_PROPERTIES');
  // TODO: Assemble JavaScript into code variable.
  var code = "";

  var breedName = { "turtle" : "tartarugas", "wolf" : "lobos", "sheep" : "ovelhas" };

  if(statements_val_properties.length == 0)
  {
    code = 'create-' + breedName[value_name_agent] + ' ' + value_num_agents + ' [ setxy random-xcor random-ycor ]\n';
  }
  else
  {
    code = 'create-' + breedName[value_name_agent] + ' ' + value_num_agents + '\n[\n '
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

Blockly.JavaScript['agent_type'] = function(block) {
  var dropdown_type_agent = block.getFieldValue('TYPE_AGENT');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_type_agent;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['aprnc_set_all_patch_color'] = function(block) {
  var dropdown_col_patches = block.getFieldValue('COL_PATCHES');
  // TODO: Assemble JavaScript into code variable.
  var code = 'ask patches [ set pcolor ' + dropdown_col_patches + ' ]\n';
  return code;
};