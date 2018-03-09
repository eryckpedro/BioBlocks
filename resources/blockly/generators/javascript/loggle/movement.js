Blockly.JavaScript['move_all_agents'] = function(block) {
  var value_num_steps = Blockly.JavaScript.valueToCode(block, 'NUM_STEPS', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'ask turtles [ fd ' + value_num_steps + ' ]\n';
  return code;
};

Blockly.JavaScript['move_all_chg_heading'] = function(block) {
  var angle_degrees = block.getFieldValue('degrees');
  // TODO: Assemble JavaScript into code variable.
  var code = 'ask turtles [ set heading ' + angle_degrees + ' ]\n';
  return code;
};

Blockly.JavaScript['move_all_jump_random_left_right'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'ask turtles [ set xcor random-xcor ]\n';
  return code;
};

Blockly.JavaScript['move_all_jump_random_up_down'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'ask turtles [ set ycor random-ycor ]\n';
  return code;
};