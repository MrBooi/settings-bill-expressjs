 "use strict";
 const express = require('express');
 const exphbs = require('express-handlebars');
 const bodyParser = require('body-parser');
 var UpdateBillWithSettings = require('./settings-bill');

 const app = express();

 // lsof -i :3000

 var PORT = process.env.PORT || 3000;

 app.use(express.static('public'));
 const billsettings = UpdateBillWithSettings();
 app.use(bodyParser.urlencoded({
   extended: false
 }));
 app.use(bodyParser.json());


 app.engine('handlebars', exphbs({
   defaultLayout: 'main'
 }));
 app.set('view engine', 'handlebars');

 app.get("/", function(req, res) {
   var displayTotal = {
     call: billsettings.callTotal(),
     sms: billsettings.smsTotal(),
     total: billsettings.total(),
     totalAlert: billsettings.check()
   }
   res.render("settings", {
     displayTotal
   });
 });

 app.post("/calculate", function(req, res) {
   var billType = req.body.billtype;
   billsettings.calc(billType);

   var displayTotal = {
     call: billsettings.callTotal(),
     sms: billsettings.smsTotal(),
     total: billsettings.total(),
     totalAlert: billsettings.check()
   }

   res.render("settings", {
     displayTotal
   })
 });

 app.post('/settings', function(req, res) {
   let sms = req.body.smsCost;
   let call = req.body.callCost;
   let warning = req.body.warning;
   let critical = req.body.critical;

   billsettings.callCost(call),
     billsettings.smsCost(sms),
     billsettings.setWarning(warning),
     billsettings.setCritical(critical)

   res.redirect('/');
 });


 app.listen(PORT, function() {
   console.log('App starting on port', PORT)
 });
