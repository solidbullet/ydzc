vuejs������ npm run server  
vuejs�����npm run build�������ɺ�����dist�ļ�������express����µ�publicĿ¼���棬��סexpress��app.js�ļ�����Ҫ�ѿ���Access-Control-Allow-Origin���ε�
2020.07.29�޸���queryclock �򿨼�¼�����ڸ�ʽ YY-MM-DD HH:mm ,mm����д��MM
�ļ���������: npm start

������json�����������ţ�΢�����ݿ⵼���ʱ������쳣����Ҫд������
��һ������excel�ļ���������http://www.bejson.com/json/col2json/��վ�����json
    {"real_name":"Ǯΰΰ","startDate":"2020/4/1","endDate":"2020/8/9"},
    {"real_name":"������","startDate":"2020/4/1","endDate":"2020/8/9"},

�ڶ�����
var fs = require("fs");
var data = fs.readFileSync('test.json');
//let json_data = JSON.parse(data)
let data1 = data.toString();
let data2 = data1.replace(/},/g, "}")
console.log("ͬ����ȡ: " + data.toString());
console.log(data2);
fs.writeFile('input.json', data2,  function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("����д��ɹ���");
 });

���������ݸ�ʽ
    {"real_name":"Ǯΰΰ","startDate":"2020/4/1","endDate":"2020/8/9"}
    {"real_name":"������","startDate":"2020/4/1","endDate":"2020/8/9"}