var express = require('express');
var router = express.Router();
var request = require('request');
var ENV = 'onemanage-wp6jn';



/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { username: req.session.user.username});
});

router.get('/clock', function(req, res, next) {
  
  res.render('queryclock', {username: req.session.user.username });
});
router.post('/getrecord', function(req, res, next) {

  function getManageToken(){
    return new Promise((resolve, reject) => {
        request('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxdffef8270c5936d5&secret=5356378b770dc7390fc80ee6a85638ea', function (error, response, body) {
        if (!error && response.statusCode == 200) {
              resolve(body) ;
          }
        });
    } )
  }

  getManageToken().then(qrres=>{

    let cloudurl="https://api.weixin.qq.com/tcb/invokecloudfunction?access_token="+JSON.parse(qrres).access_token+"&env=onemanage-wp6jn&name=clockrecord";

    var requestData={
        "action":"queryrecordbyname",
        "real_name":req.query.real_name,
        "startTime":req.query.startTime,
        "endTime":req.query.endTime
      };
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
    console.log(qrres)
})
  
});


module.exports = router;
