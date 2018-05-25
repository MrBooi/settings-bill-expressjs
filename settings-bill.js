 const Moment =require('moment');
    var moment = Moment();
module.exports=function () {
  var smsCost = 0;
  var callCost = 0;
  var totalCall = 0;
  var totalSms = 0;
  var warning = 0;
  var danger = 0;
  var total = 0;
var billlRecords=[];
  // setters
  var setCallCost = function(value) {
      callCost = parseFloat(value);

  }
  var setSmsCost = function(value) {
    smsCost = parseFloat(value);

  }
  var setWarningLevel = function(value) {
    warning = parseFloat(value);

  }
  var setCriticalLevel = function(value) {
    danger = parseFloat(value);
  }
  // getters
  var getCallTotal = function() {
    return totalCall.toFixed(2);
  }

  var getSmsTotal = function() {
    return totalSms.toFixed(2);
  }

  var getWarningLevel = function() {
    return warning.toFixed(2);
  }

  var getCriticalLevel = function() {

    return danger.toFixed(2);
  }

  var billTotal = function() {
    total = (totalCall + totalSms).toFixed(2)
    return total;
  }

  var changeColor = function() {
    var Color = "";
    if (total >= warning && total < danger) {
       // totalSettingsElem.classList.remove("danger");
      Color = "warning";

    } else if (total > danger) {

      Color = "danger";
    }
    return Color;
  }
    var removeColor = function(){
      var colorRemove = "";

      if(total<warning){
        colorRemove ="removeWarning";
      }
       else if (total <danger ) {
        colorRemove  = "removeDanger";
      }
      if(total <warning && total< danger){
        colorRemove = "WarnDanger";

      }

      return colorRemove;
    }

  // Radio button clicked
  var Calculate = function(billtext) {
   let bill = {
    type: billtext,
    timestamp: moment.startOf('now').fromNow()

   }
   
    if (billtext === 'sms') {
      totalSms += smsCost;
      bill.cost = smsCost
    } else if (billtext === 'call') {
      totalCall += callCost;
      bill.cost= callCost
    }
      total = totalSms+totalSms;
    billlRecords.push(bill);
 
  }


var callHistory =function() {
  return  billlRecords.filter(bill =>bill.type==='call');
}

var smsHistory =function(){
  return billlRecords.filter(bill =>bill.type==='sms');
}

var totalHistory =function() {
  return billlRecords;
}


  return {
    calc: Calculate,
    callCost: setCallCost,
    smsCost: setSmsCost,
    setWarning: setWarningLevel,
    setCritical: setCriticalLevel,
    total: billTotal,
    callTotal: getCallTotal,
    smsTotal: getSmsTotal,
    getWarning: getWarningLevel,
    getCritical: getCriticalLevel,
    check: changeColor,
    removecolor : removeColor,
    smsRecords:smsHistory,
    callRecords:callHistory,
    totalRecord:totalHistory

  }
}
