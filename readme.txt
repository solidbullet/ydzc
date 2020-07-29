vuejs：启动 npm run server  
vuejs打包：npm run build，打包完成后生成dist文件拷贝到express框架下的public目录下面，记住express的app.js文件中需要把跨域Access-Control-Allow-Origin屏蔽掉
2020.07.29修改了queryclock 打卡记录的日期格式 YY-MM-DD HH:mm ,mm不能写成MM
文件启动命令: npm start

正常的json对象后面带逗号，微信数据库导入的时候会有异常，需要写程序处理
第一步：把excel文件拷贝到此http://www.bejson.com/json/col2json/网站处理成json
    {"real_name":"钱伟伟","startDate":"2020/4/1","endDate":"2020/8/9"},
    {"real_name":"杜文龙","startDate":"2020/4/1","endDate":"2020/8/9"},

第二步：
var fs = require("fs");
var data = fs.readFileSync('test.json');
//let json_data = JSON.parse(data)
let data1 = data.toString();
let data2 = data1.replace(/},/g, "}")
console.log("同步读取: " + data.toString());
console.log(data2);
fs.writeFile('input.json', data2,  function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("数据写入成功！");
 });

处理后的数据格式
    {"real_name":"钱伟伟","startDate":"2020/4/1","endDate":"2020/8/9"}
    {"real_name":"杜文龙","startDate":"2020/4/1","endDate":"2020/8/9"}