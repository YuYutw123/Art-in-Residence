"use strict";(self["webpackChunkart_in_residence"]=self["webpackChunkart_in_residence"]||[]).push([[592],{7795:function(e,o,t){t.r(o),t.d(o,{default:function(){return T}});var i=t(641),s=t.p+"media/video26.5a4401c9.mp4",n=t.p+"media/video27.1a2508ad.mp4";const r=e=>((0,i.Qi)("data-v-ccb3bc82"),e=e(),(0,i.jt)(),e),a={class:"warp"},l={class:"container"},d={class:"video-wrapper"},c={ref:"video1",id:"my-video-1",class:"video-play video-js aos-init aos-animate","data-aos":"fade-in",controls:"",muted:"",playsinline:"",loop:"",preload:"auto"},u=r((()=>(0,i.Lk)("source",{src:s,type:"video/mp4"},null,-1))),v=[u],p={class:"video-wrapper"},h={ref:"video2",id:"my-video-2",class:"video-play video-js aos-init aos-animate","data-aos":"fade-in",controls:"",muted:"",playsinline:"",loop:"",preload:"auto"},m=r((()=>(0,i.Lk)("source",{src:n,type:"video/mp4"},null,-1))),f=[m],w=r((()=>(0,i.Lk)("footer",{class:"mt-5"},[(0,i.Lk)("div",{class:"container"},[(0,i.Lk)("div",{class:"row"},[(0,i.Lk)("p",{class:"text-center"},"©2024 八斗故事村")])])],-1)));function b(e,o,t,s,n,r){return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("div",a,[(0,i.Lk)("div",l,[(0,i.Lk)("div",d,[(0,i.Lk)("video",c,v,512)]),(0,i.Lk)("div",p,[(0,i.Lk)("video",h,f,512)])])]),w],64)}t(4114);var g={name:"NavbarComponent",props:{activePage:{type:Number,required:!0}},data(){return{activePageNum:0,lastScrollTop:0,debounceTimeout:null,debounceDelay:50}},mounted(){this.setupIntersectionObserver(),window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},methods:{goToTargetPage(e){this.$emit("updatePageIndex",e),this.activePageNum=e,this.$router.push({name:"SubPage"+e}),localStorage.setItem("var6",!0)},setupIntersectionObserver(){const e={root:null,rootMargin:"0px",threshold:.5},o=e=>{e.forEach((e=>{const o=e.target;e.isIntersecting?o.play():o.pause()}))},t=new IntersectionObserver(o,e);this.$refs.video1&&t.observe(this.$refs.video1),this.$refs.video2&&t.observe(this.$refs.video2)},handleScroll(){this.debounceTimeout&&clearTimeout(this.debounceTimeout),this.debounceTimeout=setTimeout((()=>{const e=window.scrollY||document.documentElement.scrollTop;e>this.lastScrollTop?this.positionVideo("down"):e<this.lastScrollTop&&this.positionVideo("up"),this.lastScrollTop=e<=0?0:e}),this.debounceDelay)},positionVideo(e){const o=[this.$refs.video1,this.$refs.video2],t=window.innerHeight;let i=null;for(let s of o)if(s){const e=s.getBoundingClientRect();if(e.top<=t&&e.bottom>=0){i=s;break}}if(i){let o=null;if("down"===e?o=i===this.$refs.video1?this.$refs.video2:null:"up"===e&&(o=i===this.$refs.video2?this.$refs.video1:null),o){const e=o.getBoundingClientRect(),i=window.scrollY+e.top-t/2+e.height/2,s=1e3,n=Math.abs(i-window.scrollY),r=Math.min(n,s);window.scrollTo({top:window.scrollY+(i>window.scrollY?r:-r),behavior:"smooth"})}}}}},k=t(6262);const L=(0,k.A)(g,[["render",b],["__scopeId","data-v-ccb3bc82"]]);var T=L}}]);
//# sourceMappingURL=592.0e629141.js.map