"use strict"
var assert = require("assert");
var billsettings = require('../settings-bill');

describe('The Setting bill function', function() {
  it('should display "2.00" has total of sms if user entered "2.00" in the settings sms cost field and also must display "3.00" in the call cost  field  when the update settings button is pressed'+
  ', it must display "2.00" has total of sms if radio of sms is pressed once and display "3.00" has total of call if radio of call is pressed once'+
   ' should display "5.00" has the overrall bill total when the user entered add button', function() {
    let update = billsettings();
    update.smsCost(2.00);
    update.callCost(3.00);
    update.calc("sms");
    update.calc("call");
    assert.equal(update.smsTotal(), 2.00);
    assert.equal(update.callTotal(), 3.00);
    assert.equal(update.total(), 5.00);
  });

  it('should display "2.00" in the settings sms cost field and also must display "3.00" in the call cost  field  when the update settings button is pressed'+
  ', it must display "2.00" has total of sms if radio of sms is pressed once and display "3.00" has total of call if radio of call is pressed once'+
   ' should display "5.00" has the overrall bill total when the user entered add button', function() {
    let update = billsettings();
    update.smsCost(2.00);
    update.callCost(3.00);
    update.calc("sms");
    update.calc("call");
    assert.equal(update.smsTotal(), 2.00);
    assert.equal(update.callTotal(), 3.00);
    assert.equal(update.total(), 5.00);
  });
 });

 describe("Update Warning Level",function(){
it("Should return second warning level if user update the warning level twice",function(){
  let update = billsettings();
    update.setWarning(50.00);
    update.setWarning(100.00);
    assert.equal(update.getWarning(),100.00)
});

it("Should return second critical level if user update the critical level twice",function(){
  let update = billsettings();
    update.setCritical(50.00);
    update.setCritical(100.00);
    assert.equal(update.getCritical(),100.00)
});

 });





























describe("Colour change",function(){
it("should return color warning if cost is greater than warning level",function(){
  let update = billsettings();
  update.callCost(4.00);
  update.setWarning(5.00);
  update.setCritical(10.00);
   update.calc("call");
   update.calc("call");
    update.total()
  assert.equal(update.check(),'warning');
});

it("should return color danger if cost is greater than critical level",function(){
  let update = billsettings();
  update.smsCost(4);
  update.callCost(4);
  update.setWarning(5.00);
  update.setCritical(10.00);
   update.calc("sms");
   update.calc('sms');
   update.calc('call');
   console.log(update.total())
  assert.equal(update.check(),'danger');
});
  });






