"use strict"
var assert = require("assert");
var billsettings = require('../settings-bill');

describe("test",function(){
it("setCallcost",function(){
  let settingsBill = billsettings();
  settingsBill.setWarning(20);
  assert.equal(settingsBill.getWarning(),20.00);

});


});
