var express = require('express');
var router = express.Router();
var request = require('request');
var ENV = 'onemanage-wp6jn';
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('demand', { username: req.session.user.username});
});
router.get('/querydemand', function(req, res, next) {
  res.render('querydemand', { username: req.session.user.username});
});
router.get('/showdemand', function(req, res, next) {
  res.render('showdemand',{real_name:req.query.real_name,username: req.session.user.username}); //,{real_name:req.query.real_name}
});

router.get('/updatedemand', function(req, res, next) {
  res.render('updatedemand', {real_name:req.query.real_name,role: req.session.user.role});
});

function getManageToken(){
  return new Promise((resolve, reject) => {
      request('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxdffef8270c5936d5&secret=5356378b770dc7390fc80ee6a85638ea', function (error, response, body) {
      if (!error && response.statusCode == 200) {
            resolve(body) ;
        }
      });
  } )
}

router.post('/savedemand', function(req, res, next) {
  getManageToken().then(qrres=>{
    let cloudurl="https://api.weixin.qq.com/tcb/invokecloudfunction?access_token="+JSON.parse(qrres).access_token+"&env=onemanage-wp6jn&name=demand";
    let requestData = {};
    requestData.action = "save";
    requestData.demand = req.query; //云函数接收event就是requestData
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
    console.log(qrres)
})
  
});

router.post('/getdemandbyname', function(req, res, next) {
  getManageToken().then(qrres=>{
    let cloudurl="https://api.weixin.qq.com/tcb/invokecloudfunction?access_token="+JSON.parse(qrres).access_token+"&env=onemanage-wp6jn&name=demand";
    var requestData={
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
    console.log(qrres)
})
  
});

router.post('/updatedemandbyname', function(req, res, next) {
  console.log( req.query)
  getManageToken().then(qrres=>{
    let cloudurl="https://api.weixin.qq.com/tcb/invokecloudfunction?access_token="+JSON.parse(qrres).access_token+"&env=onemanage-wp6jn&name=demand";
    let requestData = {};
    requestData.action = "updatebyname";
    requestData.demand_info = req.query; //云函数接收event就是requestData
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
    //console.log(qrres)
})
});

module.exports = router;
