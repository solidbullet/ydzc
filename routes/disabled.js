const express = require('express');
const router = express.Router();
const request = require('request');
const WX = require("../config.json")
const util = require("./util.js")
const CLOUD_FUNCTION_NAME = "disabled"

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('disabled'); //, { username: req.session.user.username}
});
router.get('/showalldisableds', function(req, res, next) {
  res.render('showalldisableds'); //,{real_name:req.query.real_name,username: req.session.user.username}
});

router.get('/querydisabled', function(req, res, next) {
  res.render('querydisabled'); //, { username: req.session.user.username,role: req.session.user.role}
});

router.get('/showdisableddetail', function(req, res, next) {
  console.log(req.query.real_name)
  res.render('disableddetail');//,{real_name:req.query.real_name,role: req.session.user.role}
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

router.post('/savedisabled', function(req, res, next) {
    util.getToken().then(access_token=>{
      let cloudurl= WX.CLOUDFUNCTION + access_token + "&env=" + WX.CLOUD_ENV + "&name=" + CLOUD_FUNCTION_NAME;
      let requestData = {};
      requestData.action = "save";
      console.log('query:',req.query);
      console.log(req.body);
      requestData.disabled = req.body; //云函数接收event就是requestData
      
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

router.post('/getdisabledinit', function(req, res, next) {
  
  util.getToken().then(access_token=>{
    console.log(access_token)
    let cloudurl= WX.CLOUDFUNCTION + access_token + "&env=" + WX.CLOUD_ENV + "&name=" + CLOUD_FUNCTION_NAME;
    let requestData={
      "action":"initdisableds"
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
          console.log(body)
          res.send(body);
        }
    });
    //console.log(access_token)
})
});

router.post('/getdisableds', function(req, res, next) {
  util.getToken().then(access_token=>{
    let cloudurl= WX.CLOUDFUNCTION + access_token + "&env=" + WX.CLOUD_ENV + "&name=" + CLOUD_FUNCTION_NAME;
    let requestData = {};
    requestData.action = "querydisableds";
    if(req.body.real_name){
      requestData.real_name = req.body.real_name
    } 
    if(req.body.idCard){
      requestData.idCard = req.body.idCard
    } 
    if(req.body.assistantName){
      requestData.assistantName = req.body.assistantName
    } 
    if(req.body.district){
      requestData.district = req.body.district
    } 
    if(req.body.userType){
      requestData.userType = req.body.userType
    } 
    if(req.body.disabledContact){
      requestData.disabledContact = req.body.disabledContact
    } 
    
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
        "real_name":req.query.real_name || req.body.real_name
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
      "assistantName":req.body.real_name
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

router.post('/getcountbydistrict', function(req, res, next) {
  util.getToken().then(access_token=>{
    let cloudurl= WX.CLOUDFUNCTION + access_token + "&env=" + WX.CLOUD_ENV + "&name=" + CLOUD_FUNCTION_NAME;
    var requestData={
      "action":"getcountbydistrict",
      "district":req.body.district
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
    requestData.disabled_info = req.body; //云函数接收event就是requestData
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
