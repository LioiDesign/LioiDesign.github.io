if(!self.define){let l,i={};const r=(r,e)=>(r=new URL(r+".js",e).href,i[r]||new Promise((i=>{if("document"in self){const l=document.createElement("script");l.src=r,l.onload=i,document.head.appendChild(l)}else l=r,importScripts(r),i()})).then((()=>{let l=i[r];if(!l)throw new Error(`Module ${r} didn’t register its module`);return l})));self.define=(e,n)=>{const u=l||("document"in self?document.currentScript.src:"")||location.href;if(i[u])return;let g={};const o=l=>r(l,u),s={module:{uri:u},exports:g,require:o};i[u]=Promise.all(e.map((l=>s[l]||o(l)))).then((l=>(n(...l),g)))}}define(["./workbox-db5fc017"],(function(l){"use strict";l.setCacheNameDetails({prefix:"lioi-app"}),self.addEventListener("message",(l=>{l.data&&"SKIP_WAITING"===l.data.type&&self.skipWaiting()})),l.precacheAndRoute([{url:"/css/229.0d3123de.css",revision:null},{url:"/css/331.2e5665a7.css",revision:null},{url:"/css/335.4ddc7228.css",revision:null},{url:"/css/410.b03d30cd.css",revision:null},{url:"/css/531.2bc3691b.css",revision:null},{url:"/css/536.cd1816d2.css",revision:null},{url:"/css/643.37fde40c.css",revision:null},{url:"/css/847.75a9b9e7.css",revision:null},{url:"/css/848.4f034e44.css",revision:null},{url:"/css/885.09fb9a7b.css",revision:null},{url:"/css/about.ec1e5883.css",revision:null},{url:"/css/app.ec42d547.css",revision:null},{url:"/favicon.png",revision:"ce46bcc654be43982cb397766cf22d47"},{url:"/img/Baby_pink.b6d91e4d.jpg",revision:null},{url:"/img/Blue_flowers.79dc5296.jpg",revision:null},{url:"/img/Blue_stripes.529fe3ad.jpg",revision:null},{url:"/img/Bluebell.a1acf4a5.jpg",revision:null},{url:"/img/Brown.4321755e.jpg",revision:null},{url:"/img/Carolina_blue.488c1b33.jpg",revision:null},{url:"/img/Charcoal.64c5d16a.jpg",revision:null},{url:"/img/Cinnamon.a87a0d60.jpg",revision:null},{url:"/img/Cloudberry.612e99bf.jpg",revision:null},{url:"/img/Cookie.56a008d8.jpg",revision:null},{url:"/img/Cornflower.ece67c42.jpg",revision:null},{url:"/img/Cornflowers.1774cf7e.jpg",revision:null},{url:"/img/Cream.b3b15566.jpg",revision:null},{url:"/img/Daffodil.cc837383.jpg",revision:null},{url:"/img/Dark_gray.c4543a01.jpg",revision:null},{url:"/img/Dark_green.b54101e4.jpg",revision:null},{url:"/img/Dark_stone_blue.f3f2ad54.jpg",revision:null},{url:"/img/Dark_vanilla.20fdc1e1.jpg",revision:null},{url:"/img/ENG.599c8f74.png",revision:null},{url:"/img/Heather_rose.0628c6e1.jpg",revision:null},{url:"/img/Light_gray.49da09d5.jpg",revision:null},{url:"/img/Light_lavender.197fa621.jpg",revision:null},{url:"/img/Light_rose.5430edc1.jpg",revision:null},{url:"/img/Light_steel_blue.2b688c2a.jpg",revision:null},{url:"/img/Lilac.e2dc3838.jpg",revision:null},{url:"/img/Mint_green.4ea219d7.jpg",revision:null},{url:"/img/Mustard.e752269b.jpg",revision:null},{url:"/img/Natural.3493b054.jpg",revision:null},{url:"/img/Natural_squares.6cf20549.jpg",revision:null},{url:"/img/Natural_stripes.86a29d54.jpg",revision:null},{url:"/img/Natural_white.8e1c583d.jpg",revision:null},{url:"/img/Navy.d57dd3c7.jpg",revision:null},{url:"/img/Orchids.498d39f8.jpg",revision:null},{url:"/img/Plum.bfbae916.jpg",revision:null},{url:"/img/Purpureus.c3a293c1.jpg",revision:null},{url:"/img/Sage.8085daee.jpg",revision:null},{url:"/img/Sepia_yellow.7f75d9c3.jpg",revision:null},{url:"/img/Sky_blue.6bc13448.jpg",revision:null},{url:"/img/Strawberry.eb0ec8ba.jpg",revision:null},{url:"/img/Teal.4d8bbec1.jpg",revision:null},{url:"/img/Wine.f0b3c199.jpg",revision:null},{url:"/img/about-1.5227c50d.jpg",revision:null},{url:"/img/about-2.cab31cbc.jpg",revision:null},{url:"/img/about-3.a056cd99.jpg",revision:null},{url:"/img/aurelia-1.f2aa877a.jpg",revision:null},{url:"/img/aurelia-10.883a111b.jpg",revision:null},{url:"/img/aurelia-2.f8286750.jpg",revision:null},{url:"/img/aurelia-3.65ac6fbc.jpg",revision:null},{url:"/img/aurelia-4.23ed9494.jpg",revision:null},{url:"/img/aurelia-5.50dd3761.jpg",revision:null},{url:"/img/aurelia-6.bd0f450f.jpg",revision:null},{url:"/img/aurelia-7.05cbb36a.jpg",revision:null},{url:"/img/aurelia-8.a957c10d.jpg",revision:null},{url:"/img/aurelia-9.0b015bc0.jpg",revision:null},{url:"/img/aurora-1.75f51d0d.jpg",revision:null},{url:"/img/aurora-2.a33acbe2.jpg",revision:null},{url:"/img/aurora-3.f05a01d7.jpg",revision:null},{url:"/img/aurora-4.c93a9623.jpg",revision:null},{url:"/img/aurora-5.ae443752.jpg",revision:null},{url:"/img/aurora-6.054fb41f.jpg",revision:null},{url:"/img/aurora-7.d79f6898.jpg",revision:null},{url:"/img/aurora-8.e3a23b19.jpg",revision:null},{url:"/img/basket.svg",revision:"91d0fcc0b216ce0eb0cc29c548e7e3f9"},{url:"/img/basket3.svg",revision:"0f0b1f0465ff2e07ef0219f321f1ff16"},{url:"/img/bootstrap-icons.1776a72d.svg",revision:null},{url:"/img/brandLogo.9e7b7a36.png",revision:null},{url:"/img/care-label.408ffaf1.png",revision:null},{url:"/img/care-label.88d4785e.svg",revision:null},{url:"/img/care-label.svg",revision:"4714e2a24bdf215cf6343b12fadda32c"},{url:"/img/caret-down.svg",revision:"467418315987c71d44eee7bc39f2ada0"},{url:"/img/color-guide-blue-flowers-1.75f51d0d.jpg",revision:null},{url:"/img/color-guide-blue-flowers-2.f05a01d7.jpg",revision:null},{url:"/img/color-guide-charcoal-1.6032fce2.jpg",revision:null},{url:"/img/color-guide-charcoal-2.62d0fffb.jpg",revision:null},{url:"/img/color-guide-daffodil-1.e128424a.jpg",revision:null},{url:"/img/color-guide-daffodil-2.b19740fc.jpg",revision:null},{url:"/img/color-guide-dark-stone-blue-1.e1ebaded.jpg",revision:null},{url:"/img/color-guide-dark-stone-blue-2.a957c10d.jpg",revision:null},{url:"/img/color-guide-dark-vanilla-1.b0de6d88.jpg",revision:null},{url:"/img/color-guide-dark-vanilla-2.cb87d1ba.jpg",revision:null},{url:"/img/color-guide-light-lavender-1.7e30a1d9.jpg",revision:null},{url:"/img/color-guide-light-lavender-2.f16bd9ae.jpg",revision:null},{url:"/img/color-guide-light-rose-1.7f3b9839.jpg",revision:null},{url:"/img/color-guide-light-rose-2.5aa9b086.jpg",revision:null},{url:"/img/color-guide-lilac-1.284930b8.jpg",revision:null},{url:"/img/color-guide-lilac-2.6bc0fe89.jpg",revision:null},{url:"/img/color-guide-natural-1.46a357b9.jpg",revision:null},{url:"/img/color-guide-natural-2.2a035be2.jpg",revision:null},{url:"/img/color-guide-natural-white-1.5c8f5711.jpg",revision:null},{url:"/img/color-guide-natural-white-2.3ec70604.jpg",revision:null},{url:"/img/color-guide-orchids-1.1ea8e781.jpg",revision:null},{url:"/img/color-guide-orchids-2.580378ba.jpg",revision:null},{url:"/img/color-guide-sage-1.333acd0f.jpg",revision:null},{url:"/img/color-guide-sage-2.875b2602.jpg",revision:null},{url:"/img/color-guide-strawberry-1.b1f27492.jpg",revision:null},{url:"/img/color-guide-strawberry-2.100ace10.jpg",revision:null},{url:"/img/color-guide-teal-1.a094164d.jpg",revision:null},{url:"/img/color-guide-teal-2.2ad10b3c.jpg",revision:null},{url:"/img/color-guide-wine-1.d31a9434.jpg",revision:null},{url:"/img/color-guide-wine-2.f555b4a8.jpg",revision:null},{url:"/img/contact-1.f1625895.jpg",revision:null},{url:"/img/custom-made-1.95651272.jpg",revision:null},{url:"/img/delivery-1.e08e5bd0.jpg",revision:null},{url:"/img/eleanor-1.01df12b1.jpg",revision:null},{url:"/img/eleanor-10.b1b79efb.jpg",revision:null},{url:"/img/eleanor-11.4ce247d4.jpg",revision:null},{url:"/img/eleanor-2.a8242d6a.jpg",revision:null},{url:"/img/eleanor-3.78cf2efc.jpg",revision:null},{url:"/img/eleanor-4.d38b0e8d.jpg",revision:null},{url:"/img/eleanor-5.9af35ef9.jpg",revision:null},{url:"/img/eleanor-6.a3613551.jpg",revision:null},{url:"/img/eleanor-7.fd238921.jpg",revision:null},{url:"/img/eleanor-8.2ada1655.jpg",revision:null},{url:"/img/eleanor-9.05ac2881.jpg",revision:null},{url:"/img/elena-1.6f55a4a0.jpg",revision:null},{url:"/img/elena-2.2731af69.jpg",revision:null},{url:"/img/elena-3.9d8a2159.jpg",revision:null},{url:"/img/elena-4.ed8fb9e7.jpg",revision:null},{url:"/img/elena-5.3372d656.jpg",revision:null},{url:"/img/elena-6.e8d65cc1.jpg",revision:null},{url:"/img/elena-7.ba45234c.jpg",revision:null},{url:"/img/elena-8.9165a3e6.jpg",revision:null},{url:"/img/emery-1.333acd0f.jpg",revision:null},{url:"/img/emery-2.69fce31f.jpg",revision:null},{url:"/img/emery-3.3866a85f.jpg",revision:null},{url:"/img/emery-4.e613706b.jpg",revision:null},{url:"/img/emery-5.875b2602.jpg",revision:null},{url:"/img/emery-6.ddee14a2.jpg",revision:null},{url:"/img/facebook.svg",revision:"09511483bd8390e42736ee78411339f4"},{url:"/img/garment-care-1.cd8cf22a.jpg",revision:null},{url:"/img/gift-card.08bb65c7.jpg",revision:null},{url:"/img/hazel-1.46a357b9.jpg",revision:null},{url:"/img/hazel-2.ebfe644d.jpg",revision:null},{url:"/img/hazel-3.16d126a5.jpg",revision:null},{url:"/img/hazel-4.9b1db7df.jpg",revision:null},{url:"/img/hazel-5.2c99c21d.jpg",revision:null},{url:"/img/hazel-6.d6e11b29.jpg",revision:null},{url:"/img/hazel-7.58065e46.jpg",revision:null},{url:"/img/hazel-8.c3cc8e1d.jpg",revision:null},{url:"/img/headband-1.e49c0133.jpg",revision:null},{url:"/img/headband-2.beff7eef.jpg",revision:null},{url:"/img/headband-3.e2c84e28.jpg",revision:null},{url:"/img/headband-4.f7ce9321.jpg",revision:null},{url:"/img/headband-5.2b5cee40.jpg",revision:null},{url:"/img/headband-6.ef0d5774.jpg",revision:null},{url:"/img/headband-7.3c5df127.jpg",revision:null},{url:"/img/headband-8.fbd23bd1.jpg",revision:null},{url:"/img/heidi-1.799ae242.jpg",revision:null},{url:"/img/heidi-2.09a57f7b.jpg",revision:null},{url:"/img/heidi-3.3e55efe4.jpg",revision:null},{url:"/img/heidi-4.ed32c546.jpg",revision:null},{url:"/img/heidi-5.5438cec0.jpg",revision:null},{url:"/img/heidi-6.2dbe05b6.jpg",revision:null},{url:"/img/heidi-7.005b103d.jpg",revision:null},{url:"/img/heidi-8.7452f110.jpg",revision:null},{url:"/img/hero-1.3173ccb1.jpg",revision:null},{url:"/img/home-about-1.1cf8298e.jpg",revision:null},{url:"/img/idalia-1.881e32bb.jpg",revision:null},{url:"/img/idalia-10.f4cfc83b.jpg",revision:null},{url:"/img/idalia-11.4f784c56.jpg",revision:null},{url:"/img/idalia-2.d6e11b29.jpg",revision:null},{url:"/img/idalia-3.bd6a3d49.jpg",revision:null},{url:"/img/idalia-4.e613706b.jpg",revision:null},{url:"/img/idalia-5.69fce31f.jpg",revision:null},{url:"/img/idalia-6.92bb19be.jpg",revision:null},{url:"/img/idalia-7.b0de6d88.jpg",revision:null},{url:"/img/idalia-8.a76773b5.jpg",revision:null},{url:"/img/idalia-9.ddee14a2.jpg",revision:null},{url:"/img/instagram.svg",revision:"a2581432a9739f754c15e8225630f4e4"},{url:"/img/kaelene-1.ff2ef70b.jpg",revision:null},{url:"/img/kaelene-2.2a035be2.jpg",revision:null},{url:"/img/kaelene-3.37b8707d.jpg",revision:null},{url:"/img/kaelene-4.09e9cfe2.jpg",revision:null},{url:"/img/kaelene-5.46a357b9.jpg",revision:null},{url:"/img/kaelene-6.e3e57963.jpg",revision:null},{url:"/img/kaelene-7.8b974cb1.jpg",revision:null},{url:"/img/kaelene-8.70219afe.jpg",revision:null},{url:"/img/label-dry-clean.7f160da6.png",revision:null},{url:"/img/label-iron.735d48b7.png",revision:null},{url:"/img/label-no-bleach.b432fb77.png",revision:null},{url:"/img/label-no-trumble-dry.c8cb3ceb.png",revision:null},{url:"/img/layla-1.0e47cd4a.jpg",revision:null},{url:"/img/layla-10.ff2ee56b.jpg",revision:null},{url:"/img/layla-2.e4d0a73c.jpg",revision:null},{url:"/img/layla-3.4323161c.jpg",revision:null},{url:"/img/layla-4.b0de6d88.jpg",revision:null},{url:"/img/layla-5.f9b5a374.jpg",revision:null},{url:"/img/layla-6.9e5e0ee8.jpg",revision:null},{url:"/img/layla-7.cb87d1ba.jpg",revision:null},{url:"/img/layla-8.5d0ea157.jpg",revision:null},{url:"/img/layla-9.f16f9067.jpg",revision:null},{url:"/img/leanne-1.afa2c733.jpg",revision:null},{url:"/img/leanne-2.0bbc0e3e.jpg",revision:null},{url:"/img/leanne-3.5e36b048.jpg",revision:null},{url:"/img/leanne-4.a9b78297.jpg",revision:null},{url:"/img/leanne-5.2cb336e0.jpg",revision:null},{url:"/img/leanne-6.dd87fdd1.jpg",revision:null},{url:"/img/leanne-7.a16bd8b0.jpg",revision:null},{url:"/img/list.svg",revision:"cd5eb623b7a9f3cf53039d80636c887d"},{url:"/img/mannequin-1.af7a694c.jpg",revision:null},{url:"/img/naomi-1.8e8a14bb.jpg",revision:null},{url:"/img/naomi-2.b08ed2ec.jpg",revision:null},{url:"/img/naomi-3.f16bd9ae.jpg",revision:null},{url:"/img/naomi-4.50c398dd.jpg",revision:null},{url:"/img/naomi-5.b56c6825.jpg",revision:null},{url:"/img/naomi-6.6b288538.jpg",revision:null},{url:"/img/naomi-7.bcc8fef4.jpg",revision:null},{url:"/img/naomi-8.8912e6b7.jpg",revision:null},{url:"/img/noelle-1.62aa20bd.jpg",revision:null},{url:"/img/noelle-2.89dc7ac3.jpg",revision:null},{url:"/img/noelle-3.5c8f5711.jpg",revision:null},{url:"/img/noelle-4.3ec70604.jpg",revision:null},{url:"/img/noelle-5.7f3a63bd.jpg",revision:null},{url:"/img/noelle-6.2c99c21d.jpg",revision:null},{url:"/img/noelle-7.71c59a1e.jpg",revision:null},{url:"/img/noelle-8.bf4406b5.jpg",revision:null},{url:"/img/noelle-9.c3cc8e1d.jpg",revision:null},{url:"/img/nora-1.f6f6c117.jpg",revision:null},{url:"/img/nora-2.eb520721.jpg",revision:null},{url:"/img/nora-3.3f03e76b.jpg",revision:null},{url:"/img/nora-4.7f298921.jpg",revision:null},{url:"/img/nora-5.a5ee217b.jpg",revision:null},{url:"/img/nora-6.ad197980.jpg",revision:null},{url:"/img/nora-7.a4b14a35.jpg",revision:null},{url:"/img/nora-8.71e2d4b0.jpg",revision:null},{url:"/img/nora-9.7d76ef04.jpg",revision:null},{url:"/img/rosie-1.1cc49b2b.jpg",revision:null},{url:"/img/rosie-2.f8eb81c0.jpg",revision:null},{url:"/img/rosie-3.c6cdffb3.jpg",revision:null},{url:"/img/rosie-4.58065e46.jpg",revision:null},{url:"/img/rosie-5.f1563eb5.jpg",revision:null},{url:"/img/rosie-6.cb87d1ba.jpg",revision:null},{url:"/img/rosie-7.2ade4db8.jpg",revision:null},{url:"/img/rosie-8.5d0ea157.jpg",revision:null},{url:"/img/sara-1.dc380f87.jpg",revision:null},{url:"/img/sara-2.ef4b8b36.jpg",revision:null},{url:"/img/sara-3.205dde89.jpg",revision:null},{url:"/img/sara-4.34822373.jpg",revision:null},{url:"/img/sara-5.b84d075c.jpg",revision:null},{url:"/img/sara-6.2dbe05b6.jpg",revision:null},{url:"/img/sara-7.5438cec0.jpg",revision:null},{url:"/img/sara-8.8c34e529.jpg",revision:null},{url:"/img/sara-9.89e5c9f1.jpg",revision:null},{url:"/img/scarf-1.bc3bd73e.jpg",revision:null},{url:"/img/scarf-2.3a085dd5.jpg",revision:null},{url:"/img/scarf-3.bb4d18bb.jpg",revision:null},{url:"/img/scarf-4.0064d82a.jpg",revision:null},{url:"/img/scarf-5.35016763.jpg",revision:null},{url:"/img/scarf-6.fbd23bd1.jpg",revision:null},{url:"/img/scrunchie-1.12f4b458.jpg",revision:null},{url:"/img/scrunchie-2.792c097a.jpg",revision:null},{url:"/img/scrunchie-3.2d9f5e27.jpg",revision:null},{url:"/img/scrunchie-4.cb035dc8.jpg",revision:null},{url:"/img/scrunchie-5.4f328ff4.jpg",revision:null},{url:"/img/scrunchie-6.df28d6b3.jpg",revision:null},{url:"/img/sophia-1.62d0fffb.jpg",revision:null},{url:"/img/sophia-2.7095f95d.jpg",revision:null},{url:"/img/sophia-3.31ec29dd.jpg",revision:null},{url:"/img/sophia-4.6032fce2.jpg",revision:null},{url:"/img/sophia-4.8e1d93b4.jpg",revision:null},{url:"/img/sophia-5.87a3416f.jpg",revision:null},{url:"/img/sophia-6.ffae14b5.jpg",revision:null},{url:"/img/sophia-7.db164449.jpg",revision:null},{url:"/img/team-cats.f29c2da7.jpg",revision:null},{url:"/img/team-liis-oja.4081f46a.jpg",revision:null},{url:"/img/team-tiina-oja.c176e084.jpg",revision:null},{url:"/img/tiktok.svg",revision:"8ae3b619929fe7d95c7b0ddfd5397dd1"},{url:"/index.html",revision:"d17f6aa9cee3475dbe3db682805b0984"},{url:"/js/229.d13129f3.js",revision:null},{url:"/js/259.6fb98e69.js",revision:null},{url:"/js/331.e99a939a.js",revision:null},{url:"/js/335.9afe079c.js",revision:null},{url:"/js/407.433b809b.js",revision:null},{url:"/js/410.058b3ca4.js",revision:null},{url:"/js/531.e31eb1b9.js",revision:null},{url:"/js/536.09cda12a.js",revision:null},{url:"/js/643.9918b35c.js",revision:null},{url:"/js/660.550fb697.js",revision:null},{url:"/js/847.e7ec051b.js",revision:null},{url:"/js/848.b57fca01.js",revision:null},{url:"/js/885.9a8a591d.js",revision:null},{url:"/js/about.53d410ae.js",revision:null},{url:"/js/app.f2f50183.js",revision:null},{url:"/js/chunk-vendors.6d491c33.js",revision:null},{url:"/manifest.json",revision:"d9665fbc1bbd4211fa6d12c74a5fa9df"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
