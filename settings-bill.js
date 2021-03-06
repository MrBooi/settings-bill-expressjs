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
    if(value !==""){
      callCost = parseFloat(value);
    }
  }
  function getcallCost(){
      return callCost.toFixed(2);
  }

  function getsmsCost(){
    return smsCost.toFixed(2);
}

  var setSmsCost = function(value) {
    if(value !==""){
      smsCost = parseFloat(value);
    }
  }
  var setWarningLevel = function(value) {
    if(value !==""){
      warning = parseFloat(value);
    }
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


  // Radio button clicked
  var Calculate = function(billtext) {
  if(billtext === 'call'|| billtext==='sms' && smsCost>0 && callCost>0){
    if(total > danger ){
     return;
    }
    let bill = {
      type: billtext,
      timestamp: new Date()
  
     }
    if (billtext === 'sms') {
      totalSms += smsCost;
      bill.cost = smsCost
    } else if (billtext === 'call') {
      totalCall += callCost;
      bill.cost= callCost
    }
      // total = totalSms+totalSms;
    billlRecords.unshift(bill);
 
  
}
}

var changeColor = function() {
  
  if ( total > danger && total !=0) {
    return"danger";
 }

 else if (total > warning) {
  return "warning"; 
  } 

 
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

   function refresh(){
    billlRecords=[];
    totalCall = 0;
     totalSms = 0;
     total = 0;
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
     getcostSms :getsmsCost,
     getcostCall : getcallCost,
    smsRecords:smsHistory,
    callRecords:callHistory,
    totalRecord:totalHistory,
    clearHistory :refresh

  }
}
