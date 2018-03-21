Blockly.Blocks['math_oper_with_properties'] = {
    init: function() {
      this.appendValueInput("LEFT_VAL")
          .setCheck(["Number", "String"]);
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["+","+"], ["-","-"], ["x","*"], ["÷","/"]]), "OPER_VAL");
      this.appendValueInput("RIGHT_VAL")
          .setCheck(["Number", "String"]);
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(225);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};