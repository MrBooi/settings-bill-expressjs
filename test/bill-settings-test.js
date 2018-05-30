"use strict"
var assert = require("assert");
var billsettings = require('../settings-bill');

// describe('The Setting bill function', function() {
//   it('should display "1.50" has total of sms if user entered "0.75" in the settings sms cost field then pressed update settings button'+
//   '  after pressed radio button two times, it must display "0.00" has total of calls and display "1.50" overrall total of bill ' , function() {
//     let update = billsettings();
//     update.smsCost(0.75);
//     update.calc("sms");
//     update.calc("sms");
//     assert.equal(update.smsTotal(), 1.50);
//     assert.equal(update.callTotal(), 0.00);
//     assert.equal(update.total(), 1.50);
//   });

//   it('should display "2.00" has total of sms if user entered "2.00" in the settings sms cost field and also must display "3.00" in the call cost  field  when the update settings button is pressed'+
//   ', it must display "2.00" has total of sms if radio of sms is pressed once and display "3.00" has total of call if radio of call is pressed once'+
//    ' should display "5.00" has the overrall bill total when the user entered add button', function() {
//     let update = billsettings();
//     update.smsCost(2.00);
//     update.callCost(3.00);
//     update.calc("sms");
//     update.calc("call");
//     assert.equal(update.smsTotal(), 2.00);
//     assert.equal(update.callTotal(), 3.00);
//     assert.equal(update.total(), 5.00);
//   });

//   it('should display "2.00" in the settings sms cost field and also must display "3.00" in the call cost  field  when the update settings button is pressed'+
//   ', it must display "2.00" has total of sms if radio of sms is pressed once and display "3.00" has total of call if radio of call is pressed once'+
//    ' should display "5.00" has the overrall bill total when the user entered add button', function() {
//     let update = billsettings();
//     update.smsCost(2.00);
//     update.callCost(3.00);
//     update.calc("sms");
//     update.calc("call");
//     assert.equal(update.smsTotal(), 2.00);
//     assert.equal(update.callTotal(), 3.00);
//     assert.equal(update.total(), 5.00);
//   });
// });

describe("Colour change",function(){
it("should return color warning if cost is greater than warning",function(){
  let updates = billsettings();
  updates.smsCost(4.00);
  updates.setWarning(5.00);
  updates.setCritical(10.00);
   updates.calc("sms");
   

   console.log(updates.check())
  assert.equal(updates.check(),'warning');
});


// it("should return color danger if cost is greater than warning",function(){
//   let updates = billsettings();
//   updates.smsCost(4.00);
//   updates.callCost(4.00);
//   updates.setWarning(5.00);
//   updates.setCritical(10.00);
//    updates.calc("sms");
//    updates.calc('sms');
//    updates.calc('sms');
//    console.log(updates.check())
//   assert.equal(updates.check(),'danger');
// });
  });






