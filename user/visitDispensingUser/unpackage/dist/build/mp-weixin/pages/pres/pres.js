(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pres/pres"],{"0db9":function(t,e,n){},"68df":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uTabsSwiper:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-tabs-swiper/u-tabs-swiper")]).then(n.bind(null,"1b79"))}},r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.getCost(t.medicineList1)),i=t.getCost(t.medicineList2);t.$mp.data=Object.assign({},{$root:{m0:n,m1:i}})},a=[]},"77fb":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{loadModal:!1,doctorId:"",list:[{name:"处方1"},{name:"处方2"}],current:0,swiperCurrent:0,barStyle:{height:"10rpx","border-radius":"0"},medicineList1:[],medicineList2:[],consultId:"",patienceInfo:{},presId:[],doctorName:""}},methods:{tabsChange:function(t){this.swiperCurrent=t},transition:function(t){var e=t.detail.dx;this.$refs.uTabs.setDx(e)},animationfinish:function(t){var e=t.detail.current;this.$refs.uTabs.setFinishCurrent(e),this.swiperCurrent=e,this.current=e},getPresInfo:function(){var e=this;t.getStorage({key:"patienceInfo",success:function(t){e.patienceInfo=t.data,e.patienceInfo.finishTime=e.patienceInfo.finishTime.substr(0,10)}}),t.getStorage({key:"consultId",success:function(n){e.consultId=n.data,t.request({url:"http://47.111.10.102:8886/pres_info/findByConsultId",data:{id:e.consultId},success:function(t){e.doctorName=t.data.data[0].doctorName;for(var n=0;n<t.data.data.length;n++)e.presId.push(t.data.data[n].id);console.log(e.presId),e.getMedicineInfo()}})}})},getMedicineInfo:function(){for(var e=this,n=function(n){t.request({url:"http://47.111.10.102:8886/pres_drug/findByPresId",data:{id:e.presId[n]},success:function(t){0==n?(e.medicineList1=t.data.data,console.log(e.medicineList1)):(e.medicineList2=t.data.data,console.log(e.medicineList2))}})},i=0;i<e.presId.length;i++)n(i)},getCost:function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n].price*t[n].quantity;return e}},computed:{},mounted:function(){this.getPresInfo()}};e.default=n}).call(this,n("543d")["default"])},"85cc":function(t,e,n){"use strict";(function(t){n("cfbe");i(n("66fd"));var e=i(n("a1b0"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"877f":function(t,e,n){"use strict";var i=n("0db9"),r=n.n(i);r.a},a1b0:function(t,e,n){"use strict";n.r(e);var i=n("68df"),r=n("d51d");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("877f");var s,o=n("f0c5"),u=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=u.exports},d51d:function(t,e,n){"use strict";n.r(e);var i=n("77fb"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a}},[["85cc","common/runtime","common/vendor"]]]);