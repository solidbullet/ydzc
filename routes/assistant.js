const express = require('express');
const router = express.Router();
const request = require('request');
const WX = require("../config.json")
const util = require("./util.js")
const CLOUD_FUNCTION_NAME = "assistant"

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('assistant');
});

router.get('/queryassistant', function(req, res, next) {
  res.render('queryassistant');
});

router.get('/updateassistant', function(req, res, next) {
  res.render('updateassistant'); //, {real_name:req.query.real_name,role: req.session.user.role}
});

router.post('/getallcount', function(req, res, next) {
  util.getToken().then(access_token=>{
    let cloudurl= WX.CLOUDFUNCTION + access_token + "&env=" + WX.CLOUD_ENV + "&name=" + CLOUD_FUNCTION_NAME;
    let requestData = {};
    requestData.action = "getallcount";
    request({
        url: cloudurl,
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json",
        },
        body: requestData
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
          res.send(body);
        }
    });
    //console.log(access_token)
  })
});

router.post('/initAssistants', function(req, res, next) {
  console.log("/initAssistantsy")
  util.getToken().then(access_token=>{
    let cloudurl= WX.CLOUDFUNCTION + access_token + "&env=" + WX.CLOUD_ENV + "&name=" + CLOUD_FUNCTION_NAME;
    let requestData = {};
    requestData.action = "initAssistants";
    request({
        url: cloudurl,
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json",
        },
        body: requestData
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
          res.send(body);
        }
    });
    //console.log(access_token)
  })
});

router.post('/saveassistant', function(req, res, next) {
  util.getToken().then(access_token=>{
    let cloudurl= WX.CLOUDFUNCTION + access_token + "&env=" + WX.CLOUD_ENV + "&name=" + CLOUD_FUNCTION_NAME;
    let requestData = {};
    requestData.action = "save";
    requestData.assistant = req.body; //云函数接收event就是requestData
    console.log(requestData);
    request({
        url: cloudurl,
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json",
        },
        body: requestData
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
          res.send(body);
        }
    });
    console.log(access_token)
})
  
});
router.post('/getassistants', function(req, res, next) {
  let requestData={};
  let real_name = req.body.real_name
  let idCard = req.body.idCard
  let contact = req.body.contact
  if(real_name){
    requestData.action = "querybyname";
    requestData.real_name = real_name
  }
  if(idCard){
    requestData.action = "querybyidcard";
    requestData.idCard = idCard
  }
  if(contact){
    console.log(contact)
    requestData.action = "querybycontact";
    requestData.contact = contact
  }

  util.getToken().then(access_token=>{
      let cloudurl= WX.CLOUDFUNCTION + access_token + "&env=" + WX.CLOUD_ENV + "&name=" + CLOUD_FUNCTION_NAME;
      request({
          url: cloudurl,
          method: "POST",
          json: true,
          headers: {
              "content-type": "application/json",
          },
          body: requestData
      }, function(error, response, body) {
          if (!error && response.statusCode == 200) {
            res.send(body);
          }
      });
      console.log(access_token)
  })
});

router.post('/delbyname', function(req, res, next) {
  util.getToken().then(access_token=>{
    let cloudurl= WX.CLOUDFUNCTION + access_token + "&env=" + WX.CLOUD_ENV + "&name=" + CLOUD_FUNCTION_NAME;
    var requestData={
      "action":"delbyname",
      "real_name":req.body.real_name
    };
    request({
        url: cloudurl,
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json",
        },
        body: requestData
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
          res.send(body);
        }
    });
    //console.log(access_token)
})
});

router.post('/getassistantbyname', function(req, res, next) {
  let name =  req.body.real_name
  console.log(name)
  util.getToken().then(access_token=>{
      let cloudurl= WX.CLOUDFUNCTION + access_token + "&env=" + WX.CLOUD_ENV + "&name=" + CLOUD_FUNCTION_NAME;
      let requestData={
        "action":"querybyname",
        "real_name":name
      };
      request({
          url: cloudurl,
          method: "POST",
          json: true,
          headers: {
              "content-type": "application/json",
          },
          body: requestData
      }, function(error, response, body) {
          if (!error && response.statusCode == 200) {
            res.send(body);
          }
      });
      console.log(access_token)
  })
});


router.post('/updateassistantbyname', function(req, res, next) {
  util.getToken().then(access_token=>{
    let cloudurl= WX.CLOUDFUNCTION + access_token + "&env=" + WX.CLOUD_ENV + "&name=" + CLOUD_FUNCTION_NAME;
    let requestData = {};
    requestData.action = "updatebyname";
    requestData.assistant_info = req.body; //云函数接收event就是requestData
    console.log(requestData)
    request({
        url: cloudurl,
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json",
        },
        body: requestData
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
          res.send(body);
        }
    });
    console.log(access_token)
})
});
module.exports = router;
