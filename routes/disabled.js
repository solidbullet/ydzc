const express = require('express');
const router = express.Router();
const request = require('request');
const WX = require("../config.js")
const util = require("./util.js")
const CLOUD_FUNCTION_NAME = "disabled"

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('disabled', { username: req.session.user.username});
});
router.get('/showalldisableds', function(req, res, next) {
  res.render('showalldisableds',{real_name:req.query.real_name,username: req.session.user.username});
});

router.get('/querydisabled', function(req, res, next) {
  res.render('querydisabled', { username: req.session.user.username});
});

router.get('/showdisableddetail', function(req, res, next) {
  res.render('disableddetail',{real_name:req.query.real_name,role: req.session.user.role});
});



router.post('/savedisabled', function(req, res, next) {
  util.getToken().then(access_token=>{
    let cloudurl= WX.CLOUDFUNCTION + access_token + "&env=" + WX.CLOUD_ENV + "&name=" + CLOUD_FUNCTION_NAME;
    let requestData = {};
    requestData.action = "save";
    requestData.disabled = req.query; //云函数接收event就是requestData
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
    //console.log(access_token)
})
  
});

router.post('/getdisabledbyname', function(req, res, next) {
    util.getToken().then(access_token=>{
      let cloudurl= WX.CLOUDFUNCTION + access_token + "&env=" + WX.CLOUD_ENV + "&name=" + CLOUD_FUNCTION_NAME;
      let requestData={
        "action":"querybyname",
        "real_name":req.query.real_name
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

router.post('/getdisabledsbyusertype', function(req, res, next) {
  util.getToken().then(access_token=>{
    let cloudurl= WX.CLOUDFUNCTION + access_token + "&env=" + WX.CLOUD_ENV + "&name=" + CLOUD_FUNCTION_NAME;
    let requestData={
      "action":"querybyusertype",
      "usertype":req.query.usertype
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

router.post('/getdisabledsbyclass', function(req, res, next) {
  util.getToken().then(access_token=>{
    let cloudurl= WX.CLOUDFUNCTION + access_token + "&env=" + WX.CLOUD_ENV + "&name=" + CLOUD_FUNCTION_NAME;
    let requestData={
      "action":"querybydisabledclass",
      "disabledclass":req.query.disabledclass
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

router.post('/getalldisabledsbyassistant', function(req, res, next) {

  util.getToken().then(access_token=>{
    let cloudurl= WX.CLOUDFUNCTION + access_token + "&env=" + WX.CLOUD_ENV + "&name=" + CLOUD_FUNCTION_NAME;
    let requestData={
      "action":"queryallbyassistant",
      "assistantName":req.query.real_name
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

router.post('/getdisabledsbydistrict', function(req, res, next) {
    util.getToken().then(access_token=>{
      let cloudurl= WX.CLOUDFUNCTION + access_token + "&env=" + WX.CLOUD_ENV + "&name=" + CLOUD_FUNCTION_NAME;
      var requestData={
        "action":"querybydistrict",
        "district":req.query.district
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

router.post('/updatedisabledbyname', function(req, res, next) {
  util.getToken().then(access_token=>{
    let cloudurl= WX.CLOUDFUNCTION + access_token + "&env=" + WX.CLOUD_ENV + "&name=" + CLOUD_FUNCTION_NAME;
    let requestData = {};
    requestData.action = "updatebyname";
    requestData.disabled_info = req.query; //云函数接收event就是requestData
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
    //console.log(access_token)
})
});

module.exports = router;
