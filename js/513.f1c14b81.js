(self["webpackChunklioi_app"]=self["webpackChunklioi_app"]||[]).push([[513],{5513:function(e,i,o){"use strict";o.r(i),o.d(i,{default:function(){return V}});var r=o(3396),l=o(7139),t=o(4870),g=o(9242);const d={class:"d-flex flex-wrap mb-3 justify-content-center"},c=["checked","id","value"],a=["for"];var s=(0,r.aZ)({__name:"ColorRadio",props:{colors:null,modelValue:null},emits:["update:modelValue"],setup(e,{emit:i}){const s=e;function n(e){return{"background-image":`url(${o(8626)(`./${e.imageSrc}`)})`}}const u=(0,t.iH)(s.colors[0]);return(0,r.YP)((()=>u.value),(()=>{i("update:modelValue",u.value)})),(0,r.YP)((()=>s.modelValue),(()=>{u.value.id!=s.modelValue.id&&(u.value=s.modelValue)}),{immediate:!0}),(i,o)=>((0,r.wg)(),(0,r.iD)("div",d,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.colors,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id,class:"selector"},[(0,r.wy)((0,r._)("input",{checked:e.id==u.value.id,type:"radio",id:e.id,value:e,"onUpdate:modelValue":o[0]||(o[0]=e=>u.value=e)},null,8,c),[[g.G2,u.value]]),(0,r._)("label",{style:(0,l.j5)(n(e)),class:"selector-label fabrics",for:e.id},null,12,a)])))),128))]))}}),n=o(89);const u=(0,n.Z)(s,[["__scopeId","data-v-1ec34537"]]);var p=u;const h=(0,r._)("br",null,null,-1),w={key:0,class:"row justify-content-between gx-1 section-mb"},j=["src"],D={key:1};var I=(0,r.aZ)({__name:"ColorInfo",props:{colorName:null,colorInfo:null},setup(e){return(i,t)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("h3",null,(0,l.zw)(e.colorName),1),(0,r._)("p",null,[(0,r.Uk)((0,l.zw)(e.colorInfo.description),1),h,(0,r.Uk)((0,l.zw)(e.colorInfo.weightDescription),1)]),e.colorInfo.imageSources.length?((0,r.wg)(),(0,r.iD)("div",w,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.colorInfo.imageSources,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e,class:"col"},[(0,r._)("img",{class:"img-fluid",src:o(7884)(`./${e}`)},null,8,j)])))),128))])):((0,r.wg)(),(0,r.iD)("div",D,[(0,r._)("p",null,(0,l.zw)(i.$t("color-guide.no-product-images-info")),1)]))],64))}});const v=I;var f=v,F=o(7327),b=o(1377);class k{constructor(e,i,o,r,l=!0){(0,F.Z)(this,"id",void 0),(0,F.Z)(this,"nameEng",void 0),(0,F.Z)(this,"nameEst",void 0),(0,F.Z)(this,"isChecked",void 0),(0,F.Z)(this,"imageSrc",void 0),(0,F.Z)(this,"isVisible",void 0),this.id=e,this.nameEng=i,this.nameEst=o,this.imageSrc=r,this.isVisible=l}getLocalizedName(){return b.Z.isEstonian?this.nameEst:this.nameEng}}class m{constructor(){(0,F.Z)(this,"colors",[new k(6,"Light rose","Heleroosa","Light_rose.jpg"),new k(28,"Light lavender","Hele lavendel","Light_lavender.png"),new k(7,"Lilac","Sirel","Lilac.jpg"),new k(10,"Wine","Veinipunane","Wine.png"),new k(11,"Strawberry","Maasikas","Strawberry.jpg"),new k(2,"Cloudberry","Murakas","Cloudberry.jpg"),new k(1,"Cookie","Küpsis","Cookie.jpg"),new k(25,"Dark vanilla","Beež","Dark_vanilla.jpg"),new k(33,"Natural","Naturaalne","Natural.jpg"),new k(5,"Sage","Salvei","Sage.jpg"),new k(4,"Teal","Mereroheline","Teal.png"),new k(24,"Dark stone blue","Kulunud sinine","Dark_stone_blue.png"),new k(8,"Cornflower","Rukkilill","Cornflower.jpg"),new k(9,"Sky blue","Taevasinine","Sky_blue.jpg"),new k(15,"Blue flowers","Sinised lilled","Blue_flowers.jpg"),new k(13,"Orchids","Orhidee","Orchids.png"),new k(36,"Natural white","Loodusvalge","Natural_white.png"),new k(19,"Charcoal","Kulunud must","Charcoal.png")])}getAllColors(){return this.colors}getAllVisible(){return this.colors.filter((e=>e.isVisible))}}const _=new m;class M{constructor(e,i,o,r){(0,F.Z)(this,"id",void 0),(0,F.Z)(this,"description",void 0),(0,F.Z)(this,"weightDescription",void 0),(0,F.Z)(this,"imageSources",void 0),this.id=e,this.description=i,this.weightDescription=o,this.imageSources=r}}class W{constructor(){(0,F.Z)(this,"colors",[new M(1,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new M(2,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new M(3,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-daffodil/color-guide-daffodil-1.jpg","color-guide-daffodil/color-guide-daffodil-2.jpg"]),new M(4,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-teal/color-guide-teal-1.jpg","color-guide-teal/color-guide-teal-2.jpg"]),new M(5,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-sage/color-guide-sage-1.jpg","color-guide-sage/color-guide-sage-2.jpg"]),new M(6,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-light-rose/color-guide-light-rose-1.jpg","color-guide-light-rose/color-guide-light-rose-2.jpg"]),new M(7,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-lilac/color-guide-lilac-1.jpg","color-guide-lilac/color-guide-lilac-2.jpg"]),new M(8,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new M(9,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new M(10,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-wine/color-guide-wine-1.jpg","color-guide-wine/color-guide-wine-2.jpg"]),new M(11,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-strawberry/color-guide-strawberry-1.jpg","color-guide-strawberry/color-guide-strawberry-2.jpg"]),new M(12,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new M(13,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-orchids/color-guide-orchids-1.jpg","color-guide-orchids/color-guide-orchids-2.jpg"]),new M(14,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new M(15,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-blue-flowers/color-guide-blue-flowers-1.jpg","color-guide-blue-flowers/color-guide-blue-flowers-2.jpg"]),new M(16,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new M(17,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new M(18,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new M(19,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-charcoal/color-guide-charcoal-1.jpg","color-guide-charcoal/color-guide-charcoal-2.jpg"]),new M(20,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new M(21,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new M(22,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new M(23,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new M(24,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-dark-stone-blue/color-guide-dark-stone-blue-1.jpg","color-guide-dark-stone-blue/color-guide-dark-stone-blue-2.jpg"]),new M(25,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-dark-vanilla/color-guide-dark-vanilla-1.jpg","color-guide-dark-vanilla/color-guide-dark-vanilla-2.jpg"]),new M(26,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new M(27,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new M(28,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-light-lavender/color-guide-light-lavender-1.jpg","color-guide-light-lavender/color-guide-light-lavender-2.jpg"]),new M(29,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new M(30,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new M(31,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new M(32,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new M(33,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-natural/color-guide-natural-1.jpg","color-guide-natural/color-guide-natural-2.jpg"]),new M(34,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new M(35,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new M(36,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),["color-guide-natural-white/color-guide-natural-white-1.jpg","color-guide-natural-white/color-guide-natural-white-2.jpg"]),new M(37,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new M(38,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new M(39,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new M(40,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[]),new M(41,this.getMaterialDescriptionForId(1),this.getWeightDescriptionForId(1),[])])}getAllColors(){return this.colors}getMaterialDescriptionForId(e){const i=W.materialDescriptions.find((i=>i.id===e));return b.Z.isEstonian?i.descriptionEst:i.descriptionEng}getWeightDescriptionForId(e){const i=W.weightDescriptions.find((i=>i.id===e));return b.Z.isEstonian?i.descriptionEst:i.descriptionEng}}(0,F.Z)(W,"materialDescriptions",[{id:1,descriptionEng:"Soft and non-stretchy",descriptionEst:"Pehme ja mitteveniv"},{id:2,descriptionEng:"Soft and non-stretchy",descriptionEst:"Pehme ja mitteveniv"}]),(0,F.Z)(W,"weightDescriptions",[{id:1,descriptionEng:"Medium-weight (185 g/m2)",descriptionEst:"Keskmise paksusega (185 g/m2)"},{id:2,descriptionEng:"Medium-weight (185 g/m2)",descriptionEst:"Keskmine kaal (185 g/m2)"}]);const y=new W,C={class:"container-fluid page-pt"},E={class:"heading-mb text-center"},S={class:"row justify-content-center mb-4"},Z={class:"col-12 col-lg-10 col-xxl-8"},L={class:"col-12 col-lg-10 col-xxl-8"};var N=(0,r.aZ)({__name:"ColorGuideView",setup(e){const i=_.getAllVisible(),o=y.getAllColors(),g=(0,t.iH)(i[0]);return(e,d)=>((0,r.wg)(),(0,r.iD)("div",C,[(0,r._)("h1",E,(0,l.zw)(e.$t("color-guide.heading")),1),(0,r._)("div",S,[(0,r._)("div",Z,[(0,r._)("p",null,(0,l.zw)(e.$t("color-guide.paragraph-1")),1),(0,r._)("p",null,(0,l.zw)(e.$t("color-guide.paragraph-2")),1)]),(0,r._)("div",L,[(0,r.Wm)(p,{colors:(0,t.SU)(i),modelValue:g.value,"onUpdate:modelValue":d[0]||(d[0]=e=>g.value=e)},null,8,["colors","modelValue"]),(0,r.Wm)(f,{"color-info":(0,t.SU)(o).find((e=>e.id==g.value.id)),"color-name":g.value.getLocalizedName()},null,8,["color-info","color-name"])])])]))}});const O=(0,n.Z)(N,[["__scopeId","data-v-033c8bda"]]);var V=O},7884:function(e,i,o){var r={"./color-guide-blue-flowers/color-guide-blue-flowers-1.jpg":8646,"./color-guide-blue-flowers/color-guide-blue-flowers-2.jpg":1355,"./color-guide-charcoal/color-guide-charcoal-1.jpg":8395,"./color-guide-charcoal/color-guide-charcoal-2.jpg":4055,"./color-guide-daffodil/color-guide-daffodil-1.jpg":6520,"./color-guide-daffodil/color-guide-daffodil-2.jpg":280,"./color-guide-dark-stone-blue/LIOI_sügis-301.jpg":8469,"./color-guide-dark-stone-blue/color-guide-dark-stone-blue-1.jpg":3689,"./color-guide-dark-stone-blue/color-guide-dark-stone-blue-2.jpg":7837,"./color-guide-dark-vanilla/color-guide-dark-vanilla-1.jpg":7465,"./color-guide-dark-vanilla/color-guide-dark-vanilla-2.jpg":1316,"./color-guide-light-lavender/color-guide-light-lavender-1.jpg":3197,"./color-guide-light-lavender/color-guide-light-lavender-2.jpg":5320,"./color-guide-light-rose/color-guide-light-rose-1.jpg":5760,"./color-guide-light-rose/color-guide-light-rose-2.jpg":1751,"./color-guide-lilac/color-guide-lilac-1.jpg":6362,"./color-guide-lilac/color-guide-lilac-2.jpg":584,"./color-guide-natural-white/color-guide-natural-white-1.jpg":566,"./color-guide-natural-white/color-guide-natural-white-2.jpg":2904,"./color-guide-natural/color-guide-natural-1.jpg":3843,"./color-guide-natural/color-guide-natural-2.jpg":72,"./color-guide-orchids/color-guide-orchids-1.jpg":7026,"./color-guide-orchids/color-guide-orchids-2.jpg":4337,"./color-guide-sage/LIOIsuvi_TO-veeb-398.jpg":9519,"./color-guide-sage/color-guide-sage-1.jpg":638,"./color-guide-sage/color-guide-sage-2.jpg":3093,"./color-guide-strawberry/color-guide-strawberry-1.jpg":4127,"./color-guide-strawberry/color-guide-strawberry-2.jpg":2646,"./color-guide-teal/color-guide-teal-1.jpg":736,"./color-guide-teal/color-guide-teal-2.jpg":9468,"./color-guide-wine/color-guide-wine-1.jpg":221,"./color-guide-wine/color-guide-wine-2.jpg":936};function l(e){var i=t(e);return o(i)}function t(e){if(!o.o(r,e)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return r[e]}l.keys=function(){return Object.keys(r)},l.resolve=t,e.exports=l,l.id=7884},8626:function(e,i,o){var r={"./Baby_pink.png":7975,"./Blue_flowers.jpg":1513,"./Blue_stripes.jpg":3058,"./Bluebell.jpg":5027,"./Brown.png":4681,"./Carolina_blue.png":8285,"./Charcoal.png":8618,"./Cinnamon.jpg":8905,"./Cloudberry.jpg":2992,"./Cookie.jpg":8003,"./Cornflower.jpg":6680,"./Cornflowers.jpg":498,"./Cream.jpg":4292,"./Daffodil.jpg":3606,"./Dark_gray.jpg":360,"./Dark_green.jpg":1694,"./Dark_stone_blue.png":9788,"./Dark_vanilla.jpg":8934,"./Heather_rose.png":5358,"./Light_gray.jpg":5959,"./Light_lavender.png":8094,"./Light_rose.jpg":7776,"./Light_steel_blue.jpg":898,"./Lilac.jpg":1690,"./Mint_green.png":3697,"./Mustard.png":2170,"./Natural.jpg":2524,"./Natural_squares.jpg":5463,"./Natural_stripes.jpg":1894,"./Natural_white.png":6818,"./Navy.jpg":2055,"./Orchids.png":7514,"./Plum.jpg":1603,"./Purpureus.png":3524,"./Sage.jpg":4278,"./Sepia_yellow.jpg":6617,"./Sky_blue.jpg":7780,"./Strawberry.jpg":9527,"./Teal.png":7079,"./Wine.png":894,"./color-guide/color-guide-blue-flowers/color-guide-blue-flowers-1.jpg":8646,"./color-guide/color-guide-blue-flowers/color-guide-blue-flowers-2.jpg":1355,"./color-guide/color-guide-charcoal/color-guide-charcoal-1.jpg":8395,"./color-guide/color-guide-charcoal/color-guide-charcoal-2.jpg":4055,"./color-guide/color-guide-daffodil/color-guide-daffodil-1.jpg":6520,"./color-guide/color-guide-daffodil/color-guide-daffodil-2.jpg":280,"./color-guide/color-guide-dark-stone-blue/LIOI_sügis-301.jpg":8469,"./color-guide/color-guide-dark-stone-blue/color-guide-dark-stone-blue-1.jpg":3689,"./color-guide/color-guide-dark-stone-blue/color-guide-dark-stone-blue-2.jpg":7837,"./color-guide/color-guide-dark-vanilla/color-guide-dark-vanilla-1.jpg":7465,"./color-guide/color-guide-dark-vanilla/color-guide-dark-vanilla-2.jpg":1316,"./color-guide/color-guide-light-lavender/color-guide-light-lavender-1.jpg":3197,"./color-guide/color-guide-light-lavender/color-guide-light-lavender-2.jpg":5320,"./color-guide/color-guide-light-rose/color-guide-light-rose-1.jpg":5760,"./color-guide/color-guide-light-rose/color-guide-light-rose-2.jpg":1751,"./color-guide/color-guide-lilac/color-guide-lilac-1.jpg":6362,"./color-guide/color-guide-lilac/color-guide-lilac-2.jpg":584,"./color-guide/color-guide-natural-white/color-guide-natural-white-1.jpg":566,"./color-guide/color-guide-natural-white/color-guide-natural-white-2.jpg":2904,"./color-guide/color-guide-natural/color-guide-natural-1.jpg":3843,"./color-guide/color-guide-natural/color-guide-natural-2.jpg":72,"./color-guide/color-guide-orchids/color-guide-orchids-1.jpg":7026,"./color-guide/color-guide-orchids/color-guide-orchids-2.jpg":4337,"./color-guide/color-guide-sage/LIOIsuvi_TO-veeb-398.jpg":9519,"./color-guide/color-guide-sage/color-guide-sage-1.jpg":638,"./color-guide/color-guide-sage/color-guide-sage-2.jpg":3093,"./color-guide/color-guide-strawberry/color-guide-strawberry-1.jpg":4127,"./color-guide/color-guide-strawberry/color-guide-strawberry-2.jpg":2646,"./color-guide/color-guide-teal/color-guide-teal-1.jpg":736,"./color-guide/color-guide-teal/color-guide-teal-2.jpg":9468,"./color-guide/color-guide-wine/color-guide-wine-1.jpg":221,"./color-guide/color-guide-wine/color-guide-wine-2.jpg":936};function l(e){var i=t(e);return o(i)}function t(e){if(!o.o(r,e)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return r[e]}l.keys=function(){return Object.keys(r)},l.resolve=t,e.exports=l,l.id=8626}}]);
//# sourceMappingURL=513.f1c14b81.js.map