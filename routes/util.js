const rp = require('request-promise');
const config = require("../config.json")
const request = require('request');
const fs = require('fs');

async function getToken() {

    const curentTime = new Date().getTime()
    let url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${config.APPID}&secret=${config.SECRET}`
    let options = {
        uri: url,
        json: true
    }
    if (!config.access_token || curentTime - config.expires_time > 3600 * 1000) {
        let res = await rp(options)
        const { access_token } = res;
        config.access_token = access_token;
        config.expires_time = curentTime;

        const jsonstr = JSON.stringify(config)

        fs.writeFileSync('./config.json', jsonstr, err => {
            if (err) console.log(err)
        })
        console.log(access_token)
        return access_token

    } else return config.access_token
}

module.exports = {
  getToken: getToken

};