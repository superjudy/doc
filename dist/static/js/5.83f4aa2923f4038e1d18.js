webpackJsonp([5],{Ik39:function(t,i){},"U/b5":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});s("jIve");var e={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"mine"},[i("div",{staticClass:"mine-top"},[i("div",{staticClass:"bg bg-blur"}),this._v(" "),i("div",[this.isLogin?i("div",{staticClass:"top-info"},[i("img",{attrs:{src:"https://i8.mifile.cn/v1/a1/ecb64c5e-9741-1535-dab6-28d47e2b0d10.webp?width=360&height=360"}}),this._v(" "),i("p",[this._v(this._s(this.userName))])]):this._e(),this._v(" "),this.isLogin?this._e():i("router-link",{staticClass:"top-info",attrs:{to:"/login",tag:"div"}},[i("button",[this._v("登 录")])])],1)]),this._v(" "),i("div",{staticClass:"mine-bd"},[i("ul",[this._m(0),this._v(" "),i("router-link",{attrs:{to:"/manageAddress",tag:"li"}},[this._v("\n        我的收货地址\n        "),i("span")]),this._v(" "),this._m(1),this._v(" "),this._m(2)],1),this._v(" "),this._m(3)]),this._v(" "),i("div",{staticClass:"loginOut",on:{click:this.signOut}},[this._v("注 销")])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("li",[this._v("账户与安全\n        "),i("span")])},function(){var t=this.$createElement,i=this._self._c||t;return i("li",[this._v("隐私\n        "),i("span")])},function(){var t=this.$createElement,i=this._self._c||t;return i("li",[this._v("通用\n        "),i("span")])},function(){var t=this.$createElement,i=this._self._c||t;return i("ul",{staticClass:"ul2"},[i("li",[this._v("通知\n        "),i("span")]),this._v(" "),i("li",[this._v("关于mi\n        "),i("span")]),this._v(" "),i("li",[this._v("我的客服\n        "),i("span")])])}]},n=s("8AGX")({name:"mine",data:function(){return{isLogin:!1,userName:""}},created:function(){var t=this.$local.fetch("miPre");this.isLogin=t.login,this.userName=t.userName},components:{},methods:{signOut:function(){this.$local.save("miPre",null),this.$router.push({path:"/login"})}}},e,!1,function(t){s("Ik39")},"data-v-7f192d1e",null);i.default=n.exports}});
//# sourceMappingURL=5.83f4aa2923f4038e1d18.js.map