var express = require('express');
var router = express.Router();
var Data = require("../models/data.js");


router.post('/', function(req, res, next) {
    
  var newContact = req.body;

  if(!newContact.message) {
               res.sendStatus(400);
               return false;
         } else {
           var newContact = new Data(req.body);
           newContact.save(function(err) {
               if (err) {
                   res.json({info: 'error during saving the form contact', error: err});
               };
               res.json({info: 'form saved succesfully!'});
               
           });
         }
  });
  
  module.exports = router;