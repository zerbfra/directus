(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d073a0ac"],{"53ca":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("a4d3"),n("e01a"),n("d28b"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function a(t){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}},"8db2":function(t,e){t.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},primaryKey:{type:[Number,String],default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(t){return["half","half-left","half-right","full","fill"].includes(t)}}}}},d5d7:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"no-wrap"},[t._v(t._s(t.displayValue))])},l=[],i=(n("caad"),n("a15b"),n("ac1f"),n("2532"),n("5319"),n("1276"),n("96cf"),n("1da1")),r=n("53ca"),o=n("8db2"),u=n.n(o),c=n("2ef0"),d={mixins:[u.a],data:function(){return{loading:!1,data:null}},computed:{systemLanguage:function(){return this.$i18n.locale.split("-")[0]},displayValue:function(){var t=this,e=this.value,n=this.options.template;if(n.includes(".")){var a=n.split(".")[0].replace("{{",""),l=Object(c["findIndex"])(e[a],(function(e){return e.lang==t.systemLanguage})),i=n.split(".").join(".".concat(l,"."));n=i}return this.isPrimaryKey&&this.data&&!1===this.loading&&(e=this.data),e?this.$helpers.micromustache.render(n,e):"--"},isPrimaryKey:function(){return"object"!==Object(r["a"])(this.value)}},watch:{value:function(){this.isPrimaryKey&&this.fetchRelationalData()}},methods:{fetchRelationalData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(null===(n=t.relation)||void 0===n?void 0:null===(a=n.collection_one)||void 0===a?void 0:a.collection)){e.next=7;break}return t.loading=!0,e.next=4,t.$api.getItem(t.relation.collection_one.collection,t.value);case 4:l=e.sent,t.data=l.data,t.loading=!1;case 7:case"end":return e.stop()}}),e)})))()}}},s=d,f=n("2877"),p=Object(f["a"])(s,a,l,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-d073a0ac.f40daa5c.js.map