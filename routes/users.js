const express = require('express');
const router = express.Router();
const request = require('request');
const WX = require("../config.js")
const util = require("./util.js")
const CLOUD_FUNCTION_NAME = "admin"
/* GET users listing. */




router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/vue', function(req, res, next) {
  res.render('vue/index');
});
router.get('/vue/welcome', function(req, res, next) {
  res.render('vue/welcome');
});


router.get('/loginout', function(req, res, next) {
  req.session.user = null;
  res.redirect('login');
});

router.post('/login', function(req, res, next) {
    util.getToken().then(access_token=>{
      let cloudurl= WX.CLOUDFUNCTION + access_token + "&env=" + WX.CLOUD_ENV + "&name=" + CLOUD_FUNCTION_NAME;
      let requestData={
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
