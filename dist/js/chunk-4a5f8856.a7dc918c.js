(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a5f8856"],{5083:function(t,e,a){"use strict";var o=a("8931"),r=a.n(o);r.a},8543:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"setting-container"},[a("a-card",{attrs:{hoverable:!0,bordered:!1}},[a("a-card",{attrs:{title:"基本资料",bordered:!1}},[a("account-base")],1),a("a-card",{attrs:{title:"安全设置",bordered:!1}},[a("security-setting")],1),a("a-card",{attrs:{title:"个性化",bordered:!1}},[a("custom-setting")],1)],1)],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-form-model",{ref:"accountFrom",staticClass:"account-from",attrs:{model:t.accountFrom,rules:t.accountRule,"label-col":{span:4},"wrapper-col":{span:16},hideRequiredMark:""}},[a("a-form-model-item",{attrs:{prop:"imgUrl",label:"头像"}},[a("a-avatar",{attrs:{src:t.accountFrom.imgUrl,size:108}})],1),a("a-form-model-item",{attrs:{prop:"username",label:"用户名",hasFeedback:""}},[a("a-input",{attrs:{placeholder:"请输入用户名","allow-clear":""},model:{value:t.accountFrom.username,callback:function(e){t.$set(t.accountFrom,"username",e)},expression:"accountFrom.username"}})],1),a("a-form-model-item",{attrs:{label:"权限"}},[a("a-input",{attrs:{disabled:""},model:{value:t.accountFrom.role,callback:function(e){t.$set(t.accountFrom,"role",e)},expression:"accountFrom.role"}})],1),a("a-form-model-item",{attrs:{prop:"position",label:"职位",hasFeedback:""}},[a("a-input",{attrs:{"allow-clear":""},model:{value:t.accountFrom.position,callback:function(e){t.$set(t.accountFrom,"position",e)},expression:"accountFrom.position"}})],1),a("a-form-model-item",{attrs:{prop:"location",label:"所在城市"}},[a("a-input",{attrs:{"allow-clear":""},model:{value:t.accountFrom.location,callback:function(e){t.$set(t.accountFrom,"location",e)},expression:"accountFrom.location"}})],1),a("a-form-model-item",{attrs:{prop:"label",label:"个人介绍"}},[a("a-textarea",{attrs:{placeholder:"请输入个人介绍...",autoSize:{minRows:4,maxRows:7}},model:{value:t.accountFrom.label,callback:function(e){t.$set(t.accountFrom,"label",e)},expression:"accountFrom.label"}})],1),a("a-form-model-item",{attrs:{prop:"skill",label:"技能"}},[a("a-select",{attrs:{mode:"tags",placeholder:"请输入个人技能",maxTagCount:3,allowClear:"","default-value":t.accountFrom.skill?t.accountFrom.skill.split(","):void 0},on:{change:t.changeSkill}},t._l(t.SKILL_LIST,(function(e){return a("a-select-option",{key:e.label},[t._v(" "+t._s(e.label)+" ")])})),1)],1),a("a-form-item",{staticClass:"text-center"},[a("a-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.updateValue}},[t._v(" 提交 ")]),a("a-button",{staticStyle:{"margin-left":"25px"},on:{click:t.resetFrom}},[t._v(" 取消 ")])],1)],1)},n=[],c=(a("a15b"),a("5530")),l=a("5880"),i={name:"accountBase",data:function(){return{loading:!1,accountFrom:{skill:"闪电五连鞭",imgUrl:""},accountRule:{imgUrl:[{required:!0,trigger:"blur"}],username:[{required:!0,trigger:"blur",message:"用户名不能为空！"}],position:[{required:!0,trigger:"blur",message:"职位不能为空！"}],location:[{required:!0,trigger:"blur",message:"请选择所在城市！"}],label:[{required:!0,trigger:"blur",message:"个人介绍不能为空！"}],skill:[{required:!0,trigger:"blur",message:"请至少勾选一项技能"}]}}},computed:Object(c["a"])({},Object(l["mapState"])({accountInfo:function(t){return t.user.accountInfo}})),mounted:function(){this.accountFrom=this.accountInfo,this.accountFrom.imgUrl=a("c1ec")},methods:{changeSkill:function(t){this.accountFrom.skill=t.join(",")},updateValue:function(){var t=this;this.$refs.accountFrom.validate((function(e){if(e){t.loading=!0;var a=t.accountFrom,o=a.username,r=a.position,s=a.location,n=a.label,c=a.skill,l=a.role;t.$store.dispatch("user/updateInfo",{username:o,position:r,location:s,label:n,skill:c,role:l}).then((function(){t.$message.success("修改成功,这里是逻辑修改！"),t.loading=!1}))}}))},resetFrom:function(){this.$refs.accountFrom.resetFields()}}},u=i,m=a("2877"),d=Object(m["a"])(u,s,n,!1,null,"c350c7d2",null),p=d.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-form-model",{ref:"securityFrom",staticClass:"security-from",attrs:{model:t.securityFrom,rules:t.securityRule,"label-col":{span:4},"wrapper-col":{span:16}}},[a("a-form-model-item",{attrs:{prop:"password",label:"登录密码"}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:16}},[a("a-input-password",{ref:"password",attrs:{placeholder:"请输入登录密码"},on:{focus:function(e){return t.changePassword("save")},blur:function(e){return t.changePassword("change")}},model:{value:t.securityFrom.password,callback:function(e){t.$set(t.securityFrom,"password",e)},expression:"securityFrom.password"}})],1),a("a-col",{attrs:{span:8}},["change"==t.passwordStatus?a("a-button",{attrs:{type:"link"},on:{click:function(e){return t.changePassword("save")}}},[t._v(" 修改 ")]):a("div",[a("a-button",{attrs:{type:"link"}},[t._v(" 保存 ")]),a("span",{staticStyle:{"margin-left":"-5px"}},[t._v(" 取消 ")])],1)],1)],1)],1),a("a-form-model-item",{attrs:{prop:"payPassword",label:"支付密码"}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:16}},[a("a-input-password",{ref:"payPassword",attrs:{placeholder:"请输入支付密码"},model:{value:t.securityFrom.payPassword,callback:function(e){t.$set(t.securityFrom,"payPassword",e)},expression:"securityFrom.payPassword"}})],1),a("a-col",{attrs:{span:8}},[a("a-button",{attrs:{type:"link"}},[t._v(" 修改 ")])],1)],1)],1),a("a-form-model-item",{attrs:{prop:"phone",label:"绑定手机"}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:16}},[a("a-input",{attrs:{placeholder:"请输入手机号"},model:{value:t.securityFrom.phone,callback:function(e){t.$set(t.securityFrom,"phone",e)},expression:"securityFrom.phone"}},[a("a-icon",{attrs:{slot:"suffix",type:t.showPhone?"eye":"eye-invisible"},nativeOn:{click:function(e){return t.changeEye(e)}},slot:"suffix"})],1)],1),a("a-col",{attrs:{span:8}},[a("a-button",{attrs:{type:"link"}},[t._v(" 修改 ")])],1)],1)],1),a("a-form-model-item",{attrs:{prop:"bankCard",label:"绑定银行卡"}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:16}},[a("a-input",{attrs:{placeholder:"请输入银行卡号",disabled:""},model:{value:t.securityFrom.bankCard,callback:function(e){t.$set(t.securityFrom,"bankCard",e)},expression:"securityFrom.bankCard"}})],1),a("a-col",{attrs:{span:8}},[a("a-button",{attrs:{type:"link"}},[t._v(" 解绑 ")])],1)],1)],1),a("a-form-model-item",{attrs:{prop:"bankCard",label:"绑定微信"}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:16}},[a("a-input",{attrs:{disabled:""},model:{value:t.securityFrom.wechat,callback:function(e){t.$set(t.securityFrom,"wechat",e)},expression:"securityFrom.wechat"}})],1),a("a-col",{attrs:{span:8}},[a("a-button",{attrs:{type:"link"}},[t._v(" 解绑 ")])],1)],1)],1)],1)},f=[],g={name:"securitySetting",data:function(){return{securityFrom:{password:"123456",payPassword:"88888888",phone:"13*****6666",bankCard:"422*************125",wechat:"Live"},showPhone:!1,passwordStatus:"change",securityRule:{}}},methods:{changePassword:function(t){this.passwordStatus=t,"save"==t&&this.$refs.password.focus()},changeEye:function(){this.showPhone=!this.showPhone}}},b=g,y=Object(m["a"])(b,h,f,!1,null,null,null),k=y.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"custom-wrapper"},[a("a-form-model",{ref:"customFrom",attrs:{"label-col":{span:4},"wrapper-col":{span:16}}},[a("a-form-model-item",{attrs:{prop:"customColor",label:"主题配置"}},[a("a-radio-group",{attrs:{"button-style":"solid",value:t.theme},on:{change:t.changeTheme}},t._l(t.THEME_LIST,(function(e){return a("a-radio-button",{key:e.key,attrs:{value:e.key}},[t._v(" "+t._s(e.label)+" ")])})),1)],1),a("a-form-model-item",{attrs:{prop:"layout",label:"布局方式"}},[a("a-radio-group",{attrs:{value:t.layout,"button-style":"solid"},on:{change:t.changeLayout}},t._l(t.LAYOUT_LIST,(function(e){return a("a-radio-button",{key:e.key,attrs:{value:e.key}},[t._v(" "+t._s(e.label)+" ")])})),1)],1),a("a-form-model-item",{attrs:{prop:"tagShow",label:"开启标签"}},[a("a-switch",{attrs:{checked:t.tagShow,"checked-children":"开","un-checked-children":"关"},on:{change:t.changeTag}})],1),a("a-form-model-item",{attrs:{prop:"fixedHeader",label:"固定头部"}},[a("a-switch",{attrs:{checked:t.fixHeader,"checked-children":"开","un-checked-children":"关"},on:{change:t.changeHeader}})],1)],1)],1)},v=[],F={name:"custom",data:function(){return{}},computed:{theme:{get:function(){return this.$store.state.setting.theme},set:function(t){this.$store.dispatch("setting/changeSetting",{key:"theme",value:t,cache:"THEME"}),document.getElementsByTagName("body")[0].className="vue-antd-admin-".concat(t,"Theme")}},layout:{get:function(){return this.$store.state.setting.layout},set:function(t){this.$store.dispatch("setting/changeSetting",{key:"layout",value:t,cache:"LAYOUT"})}},tagShow:{get:function(){return this.$store.state.setting.tagShow},set:function(t){this.$store.dispatch("setting/changeSetting",{key:"tagShow",value:t,cache:"TAG_SHOW"})}},fixHeader:{get:function(){return this.$store.state.setting.fixHeader},set:function(t){this.$store.dispatch("setting/changeSetting",{key:"fixHeader",value:t,cache:"FIX_HEARDER"})}}},methods:{changeHeader:function(t){this.fixHeader=t},changeTag:function(t){this.tagShow=t},changeLayout:function(t){this.layout=t.target.value},changeTheme:function(t){this.theme=t.target.value}}},_=F,x=Object(m["a"])(_,w,v,!1,null,"441b902c",null),S=x.exports,$={name:"setting",components:{accountBase:p,securitySetting:k,customSetting:S},data:function(){return{}}},T=$,C=(a("5083"),Object(m["a"])(T,o,r,!1,null,"a62b5550",null));e["default"]=C.exports},8931:function(t,e,a){}}]);