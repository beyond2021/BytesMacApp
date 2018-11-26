var express = require('express');
var router = express.Router();
var firebase = require('firebase')
firebase.initializeApp({
  serviceAccount: "caffenapoli-8774f-70f749c4457e.json",
  databaseURL: "https://caffenapoli-8774f.firebaseio.com/"
});
var db = firebase.database();
var ref = db.ref("services");
var cablingRef = db.ref("cabling");
var camerasRef = db.ref("cameras");
var computersRef = db.ref("computers");
var networkingRef = db.ref("networking");
var techCareRef = db.ref("techCare");
var wifiRef = db.ref("wifi");
// var cablingRef = db.ref("services/cabling");

var firebaseData = {}; // start empty
//grab database
//All services database
ref.on("value", function(snapshot) {
  firebaseData = snapshot.val();
  console.log(snapshot.val());
   // put the snapshot value in empty variable
}, function(errorObject){
  console.log("The read failed " + errorObject.code);
});
//We have all the data now we can pull out what we need.
 /* GET /api/v1/services../ request firebase data. */
 /*requst from the client Mac App to get it */
router.get('/services', function(req, res) {
  res.send(firebaseData);
});
/* GET /api/v1/cabling */
router.get('/cabling', function(req, res) {
  res.send(firebaseData['cabling']);
});
router.get('/cameras', function(req, res) {
  res.send(firebaseData['cameras']);
});
router.get('/computers', function(req, res) {
  res.send(firebaseData['computers']);
});
router.get('/networking', function(req, res) {
  res.send(firebaseData['networking']);
});
router.get('/techCare', function(req, res) {
  res.send(firebaseData['techCare']);
});
router.get('/wifi', function(req, res) {
  res.send(firebaseData['wifi']);
});

/*POST /api/v1/services/cabling*/
router.post('/services', function(req, res) {
if(!req.body) return res.sendStatus(400);/*if the request has a body retun 400*/
for (var key in req.body){
  /* we look at every key and update it in firebase*/
  /*cablingRef.child = the key and req.body[key]= the value */
  ref.child(key).set(req.body[key], function(error){
    if (error){
      console.log("Data could not be saved. " + error);
    } else {
      console.log("Data saved successfully.");
    }
  });
  /*for in loop ends here so success time to send status back to client*/
} res.sendStatus(200);

});

/*POST /api/v1/services/cabling*/
router.post('/cabling', function(req, res) {
if(!req.body) return res.sendStatus(400);/*if the request has a body retun 400*/
for (var key in req.body){
  /* we look at every key and update it in firebase*/
  /*cablingRef.child = the key and req.body[key]= the value */
  ref.child(key).set(req.body[key], function(error){
    if (error){
      console.log("Data could not be saved. " + error);
    } else {
      console.log("Data saved successfully.");
    }
  });
  /*for in loop ends here so success time to send status back to client*/
} res.sendStatus(200);

});

/*POST /api/v1/services/cabling*/
router.post('/cameras', function(req, res) {
if(!req.body) return res.sendStatus(400);/*if the request has a body retun 400*/
for (var key in req.body){
  /* we look at every key and update it in firebase*/
  /*cablingRef.child = the key and req.body[key]= the value */
  ref.child(key).set(req.body[key], function(error){
    if (error){
      console.log("Data could not be saved. " + error);
    } else {
      console.log("Data saved successfully.");
    }
  });
  /*for in loop ends here so success time to send status back to client*/
} res.sendStatus(200);

});
/*POST /api/v1/services/cabling*/
router.post('/computers', function(req, res) {
if(!req.body) return res.sendStatus(400);/*if the request has a body retun 400*/
for (var key in req.body){
  /* we look at every key and update it in firebase*/
  /*cablingRef.child = the key and req.body[key]= the value */
  ref.child(key).set(req.body[key], function(error){
    if (error){
      console.log("Data could not be saved. " + error);
    } else {
      console.log("Data saved successfully.");
    }
  });
  /*for in loop ends here so success time to send status back to client*/
} res.sendStatus(200);

});
/*POST /api/v1/services/cabling*/
router.post('/networking', function(req, res) {
if(!req.body) return res.sendStatus(400);/*if the request has a body retun 400*/
for (var key in req.body){
  /* we look at every key and update it in firebase*/
  /*cablingRef.child = the key and req.body[key]= the value */
  ref.child(key).set(req.body[key], function(error){
    if (error){
      console.log("Data could not be saved. " + error);
    } else {
      console.log("Data saved successfully.");
    }
  });
  /*for in loop ends here so success time to send status back to client*/
} res.sendStatus(200);

});
/*POST /api/v1/services/cabling*/
router.post('/techCare', function(req, res) {
if(!req.body) return res.sendStatus(400);/*if the request has a body retun 400*/
for (var key in req.body){
  /* we look at every key and update it in firebase*/
  /*cablingRef.child = the key and req.body[key]= the value */
  ref.child(key).set(req.body[key], function(error){
    if (error){
      console.log("Data could not be saved. " + error);
    } else {
      console.log("Data saved successfully.");
    }
  });
  /*for in loop ends here so success time to send status back to client*/
} res.sendStatus(200);

});
/*POST /api/v1/services/cabling*/
router.post('/wifi', function(req, res) {
if(!req.body) return res.sendStatus(400);/*if the request has a body retun 400*/
for (var key in req.body){
  /* we look at every key and update it in firebase*/
  /*cablingRef.child = the key and req.body[key]= the value */
  ref.child(key).set(req.body[key], function(error){
    if (error){
      console.log("Data could not be saved. " + error);
    } else {
      console.log("Data saved successfully.");
    }
  });
  /*for in loop ends here so success time to send status back to client*/
} res.sendStatus(200);

});






module.exports = router;
