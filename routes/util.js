const WX = require("../config.js")
var request = require('request');

function getToken(){
    return new Promise((resolve, reject) => {
        request('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='+ WX.APPID +'&secret='+ WX.SECRETID, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            if(body){
                resolve(JSON.parse(body).access_token);
            }
          }
        });
    } )
  }

module.exports = {
    getToken:getToken
    
};