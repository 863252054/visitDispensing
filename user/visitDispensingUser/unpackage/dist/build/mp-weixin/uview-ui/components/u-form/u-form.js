(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-form/u-form"],{"4c08":function(t,e,n){"use strict";n.r(e);var r=n("5c7c"),u=n("bb48");for(var i in u)"default"!==i&&function(t){n.d(e,t,(function(){return u[t]}))}(i);n("a7f1");var o,f=n("f0c5"),a=Object(f["a"])(u["default"],r["b"],r["c"],!1,null,"1cc99a02",null,!1,r["a"],o);e["default"]=a.exports},"4f63":function(t,e,n){},"5c7c":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var u=function(){var t=this,e=t.$createElement;t._self._c},i=[]},a7f1:function(t,e,n){"use strict";var r=n("4f63"),u=n.n(r);u.a},bb48:function(t,e,n){"use strict";n.r(e);var r=n("c0c3"),u=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=u.a},c0c3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"u-form",props:{model:{type:Object,default:function(){return{}}},errorType:{type:Array,default:function(){return["message","toast"]}},borderBottom:{type:Boolean,default:!0},labelPosition:{type:String,default:"left"},labelWidth:{type:[String,Number],default:90},labelAlign:{type:String,default:"left"},labelStyle:{type:Object,default:function(){return{}}}},provide:function(){return{uForm:this}},data:function(){return{rules:{}}},created:function(){this.fields=[]},methods:{setRules:function(t){this.rules=t},resetFields:function(){this.fields.map((function(t){t.resetField()}))},validate:function(t){var e=this;return new Promise((function(n){var r=!0,u=0,i=[];e.fields.map((function(o){o.validation("",(function(o){o&&(r=!1,i.push(o)),++u===e.fields.length&&(n(r),-1===e.errorType.indexOf("none")&&e.errorType.indexOf("toast")>=0&&i.length&&e.$u.toast(i[0]),"function"==typeof t&&t(r))}))}))}))}}};e.default=r}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-form/u-form-create-component',
    {
        'uview-ui/components/u-form/u-form-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("4c08"))
        })
    },
    [['uview-ui/components/u-form/u-form-create-component']]
]);
