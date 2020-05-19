const express = require('express');
const router = express.Router();
const request = require('request');
const WX = require("../config.json")
const util = require("./util.js")
const CLOUD_FUNCTION_NAME = "demand"
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('demand');
});
router.get('/querydemand', function (req, res, next) {
  res.render('querydemand');
});
router.get('/showdemand', function (req, res, next) {
  res.render('showdemand'); //, { real_name: req.query.real_name, username: req.session.user.username }
});

router.get('/updatedemand', function (req, res, next) {
  res.render('updatedemand');
});


router.post('/savedemand', function (req, res, next) {
  util.getToken().then(access_token => {
    let cloudurl = WX.CLOUDFUNCTION + access_token + "&env=" + WX.CLOUD_ENV + "&name=" + CLOUD_FUNCTION_NAME;
    let requestData = {};
    requestData.action = "save";
    requestData.demand = req.body; //云函数接收event就是requestData
    console.log(requestData);
    request({
      url: cloudurl,
      method: "POST",
      json: true,
      headers: {
        "content-type": "application/json",
      },
      body: requestData
    }, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    });
    console.log(access_token)
  })

});

router.post('/initDemands', function (req, res, next) {
  util.getToken().then(access_token => {
    let cloudurl = WX.CLOUDFUNCTION + access_token + "&env=" + WX.CLOUD_ENV + "&name=" + CLOUD_FUNCTION_NAME;
    var requestData = {
      "action": "initDemands"
    };
    request({
      url: cloudurl,
      method: "POST",
      json: true,
      headers: {
        "content-type": "application/json",
      },
      body: requestData
    }, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    });
    console.log(access_token)
  })

});


router.post('/getdemandbyname', function (req, res, next) {
  util.getToken().then(access_token => {
    let cloudurl = WX.CLOUDFUNCTION + access_token + "&env=" + WX.CLOUD_ENV + "&name=" + CLOUD_FUNCTION_NAME;
    var requestData = {
      "action": "querybyname",
      "real_name": req.body.real_name 
    };
    request({
      url: cloudurl,
      method: "POST",
      json: true,
      headers: {
        "content-type": "application/json",
      },
      body: requestData
    }, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    });
    console.log(access_token)
  })

});

router.post('/updatedemandbyname', function (req, res, next) {

  util.getToken().then(access_token => {
    let cloudurl = WX.CLOUDFUNCTION + access_token + "&env=" + WX.CLOUD_ENV + "&name=" + CLOUD_FUNCTION_NAME;
    let requestData = {};
    requestData.action = "updatebyname";
    requestData.demand_info = req.body; //云函数接收event就是requestData
    request({
      url: cloudurl,
      method: "POST",
      json: true,
      headers: {
        "content-type": "application/json",
      },
      body: requestData
    }, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    });
    //console.log(access_token)
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

module.exports = router;
