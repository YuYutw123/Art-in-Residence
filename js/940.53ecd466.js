"use strict";(self["webpackChunkart_in_residence"]=self["webpackChunkart_in_residence"]||[]).push([[940],{1940:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var a=t(641);const g=e=>((0,a.Qi)("data-v-290f8c1b"),e=e(),(0,a.jt)(),e),o={class:"warp"},s={class:"container"},c={class:"justify-content-center"},r={class:"map-container justify-content-center d-flex"},i=["src"],u=["src"],l=["src"],p=["src"],d=["src"],m=["src"],S=["src"],f=g((()=>(0,a.Lk)("footer",{class:"mt-5"},[(0,a.Lk)("div",{class:"container"},[(0,a.Lk)("div",{class:"row"},[(0,a.Lk)("p",{class:"text-center"},"©2024 八斗故事村")])])],-1)));function h(e,n,t,g,h,k){return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("div",o,[(0,a.Lk)("div",s,[(0,a.Lk)("div",c,[(0,a.Lk)("div",r,[(0,a.Lk)("img",{src:h.blankMapSrc,class:"map-img m-5",alt:""},null,8,i),(0,a.Lk)("img",{src:h.dapingSrc,class:"daping scene-img",alt:"",onClick:n[0]||(n[0]=e=>k.goToTargetPage(14))},null,8,u),(0,a.Lk)("img",{src:h.dutiangongSrc,class:"dutiangong scene-img",alt:"",onClick:n[1]||(n[1]=e=>k.goToTargetPage(9))},null,8,l),(0,a.Lk)("img",{src:h.fossilSrc,class:"fossil scene-img",alt:"",onClick:n[2]||(n[2]=e=>k.goToTargetPage(11))},null,8,p),(0,a.Lk)("img",{src:h.oldhouseSrc,class:"oldhouse scene-img",alt:"",onClick:n[3]||(n[3]=e=>k.goToTargetPage(12))},null,8,d),(0,a.Lk)("img",{src:h.shengdougongSrc,class:"shengdougong scene-img",alt:"",onClick:n[4]||(n[4]=e=>k.goToTargetPage(5))},null,8,m),(0,a.Lk)("img",{src:h.WangyoujuSrc,class:"Wangyouju scene-img",alt:"",onClick:n[5]||(n[5]=e=>k.goToTargetPage(7))},null,8,S)])])])]),f],64)}t(4114);var k={name:"NavbarComponent",props:{activePage:{type:Number,required:!0}},data(){return{pageList:["Home","Story","About"],pageName:["八斗里簡介","實境解謎","製作團隊"],activePageNum:0,blankMapSrc:t(866),dapingSrc:t(5875),dutiangongSrc:t(8161),fossilSrc:t(7763),oldhouseSrc:t(1690),shengdougongSrc:t(6445),WangyoujuSrc:t(4830)}},created(){this.activePageNum=this.activePage,console.log("Active Page Number is "+this.activePage),this.updateImageSrcs()},methods:{goToTargetPage(e){this.$emit("updatePageIndex",e),this.activePageNum=e,this.$router.push({name:"SubPage"+e})},updateImageSrcs(){let e="true"===localStorage.getItem("var1"),n="true"===localStorage.getItem("var2"),a="true"===localStorage.getItem("var3"),g="true"===localStorage.getItem("var4"),o="true"===localStorage.getItem("var5"),s="true"===localStorage.getItem("var6");s&&(this.dapingSrc=t(1357)),a&&(this.dutiangongSrc=t(5067)),g&&(this.fossilSrc=t(7405)),o&&(this.oldhouseSrc=t(4904)),e&&(this.shengdougongSrc=t(4631)),n&&(this.WangyoujuSrc=t(3660))}}},v=t(6262);const b=(0,v.A)(k,[["render",h],["__scopeId","data-v-290f8c1b"]]);var x=b},5875:function(e,n,t){e.exports=t.p+"img/DapingShore.45734ab6.png"},1357:function(e,n,t){e.exports=t.p+"img/DapingShore_end.a36855e6.png"},8161:function(e,n,t){e.exports=t.p+"img/Dutiangong.bcb31a71.png"},5067:function(e,n,t){e.exports=t.p+"img/Dutiangong_end.8cbedead.png"},1690:function(e,n,t){e.exports=t.p+"img/Oldhouse.0e71701f.png"},4904:function(e,n,t){e.exports=t.p+"img/Oldhouse_end.5d85b0d9.png"},6445:function(e,n,t){e.exports=t.p+"img/Shengdougong.8b7e8c24.png"},4631:function(e,n,t){e.exports=t.p+"img/Shengdougong_end.be556ebb.png"},4830:function(e,n,t){e.exports=t.p+"img/Wangyouju.195e9846.png"},3660:function(e,n,t){e.exports=t.p+"img/Wangyouju_end.b24ba082.png"},866:function(e,n,t){e.exports=t.p+"img/blank_map.1aadc683.png"},7763:function(e,n,t){e.exports=t.p+"img/fossil.248e19e5.png"},7405:function(e,n,t){e.exports=t.p+"img/fossil_end.2f8c4a21.png"}}]);
//# sourceMappingURL=940.53ecd466.js.map