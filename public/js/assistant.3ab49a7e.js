(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["assistant"],{"055a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("LayOut",{scopedSlots:e._u([{key:"content",fn:function(){return[a("a-form-model",{attrs:{layout:"inline",model:e.formInline}},[a("a-form-model-item",[a("a-input",{attrs:{placeholder:"姓名"},model:{value:e.formInline.real_name,callback:function(t){e.$set(e.formInline,"real_name",t)},expression:"formInline.real_name"}})],1),a("a-form-model-item",[a("a-input",{attrs:{placeholder:"身份证"},model:{value:e.formInline.idCard,callback:function(t){e.$set(e.formInline,"idCard",t)},expression:"formInline.idCard"}})],1),a("a-form-model-item",[a("a-input",{attrs:{placeholder:"联系方式"},model:{value:e.formInline.contact,callback:function(t){e.$set(e.formInline,"contact",t)},expression:"formInline.contact"}})],1),a("a-form-model-item",[a("a-button",{attrs:{type:"primary","html-type":"submit"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1),a("a-divider"),a("a-table",{attrs:{columns:e.columns,pagination:e.pagination,"data-source":e.data},scopedSlots:e._u([{key:"action",fn:function(t){return a("span",{},[a("router-link",{attrs:{to:{path:"/assistantdetail",query:{real_name:t.real_name}}}},[e._v("详情")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"您确定要删除吗?","ok-text":"Yes","cancel-text":"No"},on:{confirm:function(a){return e.confirm(t.real_name)},cancel:e.cancel}},[a("a",[e._v("删除")])]),a("a-divider",{attrs:{type:"vertical"}}),a("router-link",{attrs:{to:{path:"/servicepersons",query:{real_name:t.real_name}}}},[e._v("服务对象")])],1)}}])})]},proxy:!0}])})],1)},r=[],o=(a("96cf"),a("1da1")),i=a("4ec3"),l=a("75ff"),c=[{dataIndex:"real_name",key:"real_name",title:"姓名"},{title:"联系方式",dataIndex:"contact",key:"contact"},{title:"居住地址",dataIndex:"address",key:"address"},{title:"证书",key:"certificate",dataIndex:"certificate"},{title:"服务户数",key:"serverNum",dataIndex:"serverNum"},{title:"工作年限",key:"workSeniority",dataIndex:"workSeniority"},{title:"保险",key:"insurance",dataIndex:"insurance"},{title:"银行卡号",key:"bankCard",dataIndex:"bankCard"},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],s=[],m={data:function(){return{pagination:{total:0,pageSize:10,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(e){return"共有 ".concat(e," 条数据")}},data:s,columns:c,formInline:{real_name:"",idCard:"",assistantName:"",disabledContact:"",userType:"",district:""}}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["g"])();case 2:a=t.sent,e.data=a;case 4:case"end":return t.stop()}}),t)})))()},methods:{onSubmit:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.formInline),e.next=3,Object(i["l"])(t.formInline);case 3:a=e.sent,t.data=a;case 5:case"end":return e.stop()}}),e)})))()},confirm:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(i["a"])(e);case 2:if(n=a.sent,"ok"!=n.data.errmsg){a.next=9;break}return t.$message.success("删除成功"),a.next=7,Object(i["g"])();case 7:r=a.sent,t.data=r;case 9:case"end":return a.stop()}}),a)})))()},cancel:function(e){console.log(e)}},components:{LayOut:l["a"]}},u=m,d=a("2877"),f=Object(d["a"])(u,n,r,!1,null,null,null);t["default"]=f.exports},1148:function(e,t,a){"use strict";var n=a("a691"),r=a("1d80");e.exports="".repeat||function(e){var t=String(r(this)),a="",o=n(e);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(a+=t);return a}},"408a":function(e,t,a){var n=a("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=n(e))throw TypeError("Incorrect invocation");return+e}},"51e1":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("LayOut",{scopedSlots:e._u([{key:"content",fn:function(){return[0!=e.work_total_time?a("p",[e._v("> 累计工作时间:"+e._s(e.work_total_time)+"小时")]):e._e(),a("a-form-model",{attrs:{layout:"inline",model:e.formInline}},[a("a-form-model-item",[a("a-input",{attrs:{placeholder:"服务人员姓名"},model:{value:e.formInline.real_name,callback:function(t){e.$set(e.formInline,"real_name",t)},expression:"formInline.real_name"}})],1),a("a-form-model-item",[a("a-input",{attrs:{placeholder:"服务对象姓名"},model:{value:e.formInline.cus_name,callback:function(t){e.$set(e.formInline,"cus_name",t)},expression:"formInline.cus_name"}})],1),a("a-form-model-item",{attrs:{label:"开始日期",required:"",prop:"startTime"}},[a("a-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"开始日期"},model:{value:e.formInline.startTime,callback:function(t){e.$set(e.formInline,"startTime",t)},expression:"formInline.startTime"}})],1),a("a-form-model-item",{attrs:{label:"结束日期",required:"",prop:"endTime"}},[a("a-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"结束日期"},model:{value:e.formInline.endTime,callback:function(t){e.$set(e.formInline,"endTime",t)},expression:"formInline.endTime"}})],1),a("a-form-model-item",[a("a-button",{attrs:{type:"primary","html-type":"submit"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1),a("a-divider"),a("a-table",{attrs:{columns:e.columns,pagination:e.pagination,"data-source":e.data}})]},proxy:!0}])})],1)},r=[],o=(a("b680"),a("96cf"),a("1da1")),i=a("4ec3"),l=a("75ff"),c=[{dataIndex:"real_name",key:"real_name",title:"服务人员姓名"},{title:"服务对象姓名",dataIndex:"cus_name",key:"cus_name"},{title:"上班时间",dataIndex:"on_duty_time",key:"on_duty_time"},{title:"下班时间",key:"off_duty_time",dataIndex:"off_duty_time"},{title:"工作时长",key:"timediff",dataIndex:"timediff"}],s=[],m={data:function(){return{work_total_time:0,pagination:{total:0,pageSize:50,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(e){return"共有 ".concat(e," 条数据")}},data:s,columns:c,formInline:{}}},methods:{onSubmit:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["m"])(t.formInline);case 2:for(a=e.sent,n=0,r=0;r<a.length;r++)a[r].off_duty_time?(a[r].timediff=((new Date(a[r].off_duty_time).getTime()-new Date(a[r].on_duty_time).getTime())/3600/1e3).toFixed(3),a[r].off_duty_time=t.$moment(a[r].off_duty_time).format("YYYY-MM-DD HH:mm"),a[r].on_duty_time=t.$moment(a[r].on_duty_time).format("YYYY-MM-DD HH:mm"),n+=parseFloat(a[r].timediff)):(a[r].on_duty_time=t.$moment(a[r].on_duty_time).format("YYYY-MM-DD HH:mm"),a[r].timediff="下班未打卡");t.work_total_time=n.toFixed(3),t.pagination.total=a.length,t.data=a;case 8:case"end":return e.stop()}}),e)})))()}},components:{LayOut:l["a"]}},u=m,d=a("2877"),f=Object(d["a"])(u,n,r,!1,null,null,null);t["default"]=f.exports},6116:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("LayOut",{scopedSlots:e._u([{key:"content",fn:function(){return[a("a-table",{attrs:{columns:e.columns,pagination:e.pagination,"data-source":e.data},scopedSlots:e._u([{key:"action",fn:function(t){return a("span",{},[a("router-link",{attrs:{to:{path:"/disableddetail",query:{real_name:t.real_name}}}},[e._v("详情")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(a){return e.delDisbaled(t.real_name)}}},[e._v("删除")]),a("a-divider",{attrs:{type:"vertical"}}),a("router-link",{attrs:{to:{path:"/qrcode",query:{real_name:t.real_name}}}},[e._v("二维码")])],1)}}])})]},proxy:!0}])})],1)},r=[],o=(a("96cf"),a("1da1")),i=a("4ec3"),l=a("75ff"),c=[{dataIndex:"real_name",key:"real_name",title:"受助人姓名"},{title:"区域",dataIndex:"district",key:"district"},{title:"性别",dataIndex:"sex",key:"sex"},{title:"用户类型",key:"userType",dataIndex:"userType"},{title:"服务人员姓名",key:"assistantName",dataIndex:"assistantName"},{title:"服务人员电话",key:"assistantContact",dataIndex:"assistantContact"},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],s=[],m={data:function(){return{pagination:{total:0,pageSize:10,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],showTotal:function(e){return"共有 ".concat(e," 条数据")}},data:s,columns:c,formInline:{real_name:"",idCard:"",assistantName:"",disabledContact:"",userType:"",district:""}}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["r"])(e.$route.query.real_name);case 2:a=t.sent,e.data=a;case 4:case"end":return t.stop()}}),t)})))()},components:{LayOut:l["a"]}},u=m,d=a("2877"),f=Object(d["a"])(u,n,r,!1,null,null,null);t["default"]=f.exports},a934:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("LayOut",{scopedSlots:e._u([{key:"content",fn:function(){return[a("a-form-model",{attrs:{model:e.form,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{attrs:{label:"姓名"}},[a("a-input",{model:{value:e.form.real_name,callback:function(t){e.$set(e.form,"real_name",t)},expression:"form.real_name"}})],1),a("a-form-model-item",{attrs:{label:"联系方式"}},[a("a-input",{model:{value:e.form.contact,callback:function(t){e.$set(e.form,"contact",t)},expression:"form.contact"}})],1),a("a-form-model-item",{attrs:{label:"居住地址"}},[a("a-input",{model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),a("a-form-model-item",{attrs:{label:"证书"}},[a("a-input",{model:{value:e.form.certificate,callback:function(t){e.$set(e.form,"certificate",t)},expression:"form.certificate"}})],1),a("a-form-model-item",{attrs:{label:"服务户数"}},[a("a-input",{model:{value:e.form.serverNum,callback:function(t){e.$set(e.form,"serverNum",t)},expression:"form.serverNum"}})],1),a("a-form-model-item",{attrs:{label:"工作年限"}},[a("a-input",{model:{value:e.form.workSeniority,callback:function(t){e.$set(e.form,"workSeniority",t)},expression:"form.workSeniority"}})],1),a("a-form-model-item",{attrs:{label:"保险"}},[a("a-input",{model:{value:e.form.insurance,callback:function(t){e.$set(e.form,"insurance",t)},expression:"form.insurance"}})],1),a("a-form-model-item",{attrs:{label:"银行卡号"}},[a("a-input",{model:{value:e.form.bankCard,callback:function(t){e.$set(e.form,"bankCard",t)},expression:"form.bankCard"}})],1),a("a-form-model-item",{attrs:{label:"备注"}},[a("a-input",{model:{value:e.form.specification,callback:function(t){e.$set(e.form,"specification",t)},expression:"form.specification"}})],1),a("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[0==e.role?a("a-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("修改")]):e._e()],1)],1)]},proxy:!0}])})],1)},r=[],o=(a("96cf"),a("1da1")),i=a("4ec3"),l=a("75ff");i["v"];var c={data:function(){return{role:0,labelCol:{span:4},wrapperCol:{span:12},form:{}}},layout:{labelCol:{span:4},wrapperCol:{span:14}},components:{LayOut:l["a"]},methods:{onSubmit:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.form),e.next=3,Object(i["v"])(t.form);case 3:a=e.sent,console.log(a),"ok"==a.data.errmsg&&alert("修改成功");case 6:case"end":return e.stop()}}),e)})))()}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["k"])(e.$route.query.real_name);case 2:a=t.sent,delete a[0]._id,e.form=a[0];case 5:case"end":return t.stop()}}),t)})))()}},s=c,m=a("2877"),u=Object(m["a"])(s,n,r,!1,null,null,null);t["default"]=u.exports},b680:function(e,t,a){"use strict";var n=a("23e7"),r=a("a691"),o=a("408a"),i=a("1148"),l=a("d039"),c=1..toFixed,s=Math.floor,m=function(e,t,a){return 0===t?a:t%2===1?m(e,t-1,a*e):m(e*e,t/2,a)},u=function(e){var t=0,a=e;while(a>=4096)t+=12,a/=4096;while(a>=2)t+=1,a/=2;return t},d=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!l((function(){c.call({})}));n({target:"Number",proto:!0,forced:d},{toFixed:function(e){var t,a,n,l,c=o(this),d=r(e),f=[0,0,0,0,0,0],p="",_="0",v=function(e,t){var a=-1,n=t;while(++a<6)n+=e*f[a],f[a]=n%1e7,n=s(n/1e7)},y=function(e){var t=6,a=0;while(--t>=0)a+=f[t],f[t]=s(a/e),a=a%e*1e7},b=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==f[e]){var a=String(f[e]);t=""===t?a:t+i.call("0",7-a.length)+a}return t};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(p="-",c=-c),c>1e-21)if(t=u(c*m(2,69,1))-69,a=t<0?c*m(2,-t,1):c/m(2,t,1),a*=4503599627370496,t=52-t,t>0){v(0,a),n=d;while(n>=7)v(1e7,0),n-=7;v(m(10,n,1),0),n=t-1;while(n>=23)y(1<<23),n-=23;y(1<<n),v(1,1),y(2),_=b()}else v(0,a),v(1<<-t,0),_=b()+i.call("0",d);return d>0?(l=_.length,_=p+(l<=d?"0."+i.call("0",d-l)+_:_.slice(0,l-d)+"."+_.slice(l-d))):_=p+_,_}})}}]);
//# sourceMappingURL=assistant.3ab49a7e.js.map