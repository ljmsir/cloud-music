webpackJsonp([9],{sL6p:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={data:function(){return{}},created:function(){this.touch={}},methods:{back:function(){this.$router.back()},touchStart:function(t){this.touch.initialed=!0;var n=t.touches[0].pageX;this.touch.startX=n},touchMove:function(t){if(this.touch.initialed){var n=t.touches[0].pageX,e=this.touch.startX-n;return console.log(e),!(e<0)&&void 0}},touchEnd:function(){this.touch.initialed=!1}}},i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"slide"}},[e("div",{ref:"menuSlide",staticClass:"menu-wrapper",on:{touchstart:function(n){n.preventDefault(),t.touchStart(n)},touchmove:function(n){n.preventDefault(),t.touchMove(n)},touchend:function(n){n.preventDefault(),t.touchEnd(n)}}},[e("i",{staticClass:"icon iconfont icon-fanhuijiantou",on:{click:t.back}})])])},staticRenderFns:[]},c=e("VU/8")(o,i,!1,function(t){e("x/Gr")},"data-v-07dfa744",null);n.default=c.exports},"x/Gr":function(t,n){}});
//# sourceMappingURL=9.a0eda1bc6d3e98259f40.js.map