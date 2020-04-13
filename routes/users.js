var express = require('express');
var router = express.Router();
var request = require('request');
var ENV = 'onemanage-wp6jn';
/* GET users listing. */

function getManageToken(){
  return new Promise((resolve, reject) => {
      request('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxdffef8270c5936d5&secret=5356378b770dc7390fc80ee6a85638ea', function (error, response, body) {
      if (!error && response.statusCode == 200) {
            resolve(body) ;
        }
      });
  } )
}



router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/loginout', function(req, res, next) {
  req.session.user = null;
  res.redirect('login');
});

router.post('/login', function(req, res, next) {
    getManageToken().then(qrres=>{
      let cloudurl="https://api.weixin.qq.com/tcb/invokecloudfunction?access_token="+JSON.parse(qrres).access_token+"&env=onemanage-wp6jn&name=admin";
      var requestData={
        "username":req.query.username,
        "password":req.query.password
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
            let user; 
            try {
              user = JSON.parse(body.resp_data).data[0]; 
           }
           catch(err){
                console.log(err)
           }
            console.log(user)
            req.session.user = user;
            res.send(JSON.parse(body.resp_data));
          }
      });
  })
});

module.exports = router;
