import{c as S,k as a,j as e,d as P,r as O,u as E,H as k,J as U,F as H,m as q,n as z,I as L,b as V,R as D,B as Y,L as G,f as Q,h as K,K as J,T as X,M as Z}from"./index-0aa6d22f.js";const tt="_form_container_tojwr_1",et="_form_container_input_tojwr_24",nt="_input_tojwr_28",st="_button_form_tojwr_55",ot="_button_close_tojwr_65",rt={form_container:tt,form_container_input:et,input:nt,button_form:st,button_close:ot},it="_dropdown_hyd24_1",ct="_dropdown_button_hyd24_5",at="_dropdown_list_hyd24_38",lt="_dropdown_list_visible_hyd24_60",dt="_dropdown_item_hyd24_75",ut="_dropdown_input_hyd24_98",ht={dropdown:it,dropdown_button:ct,dropdown_list:at,dropdown_list_visible:lt,dropdown_item:dt,dropdown_input:ut},T=S.bind(ht),I=({value:o,customSelectStyle:r,customListSelectStyle:n,handleCategoryChange:t})=>{const[s,i]=a.useState(!1),[c,d]=a.useState("Categories"),h=(l=>l.charAt(0).toUpperCase()+l.slice(1))(c),f=()=>{i(!s)},_=l=>{const y=l.target.getAttribute("data-value");d(y),i(!s),t(y)},m=l=>{l.code==="Escape"&&i(!1)};return a.useEffect(()=>(window.addEventListener("keydown",m),()=>{window.removeEventListener("keydown",m)})),e.jsx("div",{className:T("form_group"),children:e.jsxs("div",{className:T("dropdown"),children:[e.jsx("button",{type:"button",style:r||{},onClick:f,className:T("dropdown_button"),children:h}),e.jsx("ul",{style:n||{},className:T(s?"dropdown_list":"dropdown_list_visible"),children:o&&o.map(l=>e.jsx("li",{onClick:_,className:T("dropdown_item"),"data-value":l,children:l},l))})]})})},pt=o=>o.products.products,_t=o=>o.products.categories,W=o=>o.products.param,C=S.bind(rt),mt=()=>{const o=P(),r=O.useMediaQuery({minWidth:768}),n=E(W),{list:t}=E(_t),[s,i]=a.useState(""),[c,d]=a.useState(null),[u,h]=a.useState(""),f=async x=>{switch(x){case"Recommended":d(!0);break;case"Not recommended":d(!1);break;default:d(null);break}};a.useEffect(()=>{(n.category!==u||n.recommend!==c)&&o(k({...n,category:u,recommend:c,query:s,page:1}))},[u,o,s,c,n]);const _=async()=>{await o(k({...n,query:s,page:1}))},m={stroke:"#EFEDE8"},l={stroke:"#E6533C",strokeWidth:4},g={width:r?204:173},w={height:112,overflow:"visible"};a.useEffect(()=>{o(U())},[o]);const b=["All","Recommended","Not recommended"];return e.jsx(e.Fragment,{children:e.jsx(H,{initialValues:{search:""},onSubmit:_,children:e.jsxs(q,{className:C("form_container"),children:[e.jsxs("div",{className:C("form_container_input"),children:[e.jsx(z,{className:C("input"),type:"text",name:"search",value:s,autoComplete:"off",autoFocus:!0,placeholder:"Search",onChange:x=>i(x.target.value)}),s&&e.jsx("button",{type:"button",className:C("button_close"),onClick:()=>i(""),children:e.jsx(L,{iconId:"icon-close",w:15,h:17,customStyles:l})}),e.jsx("button",{className:C("button_form"),type:"submit",children:e.jsx(L,{iconId:"icon-search",w:18,h:18,customStyles:m})})]}),e.jsx(I,{value:t,handleCategoryChange:x=>h(x)}),e.jsx(I,{value:b,customSelectStyle:g,customListSelectStyle:w,handleCategoryChange:f})]})})})},ft="_not_find_text_1h0k8_1",gt="_item_1h0k8_20",yt="_item_container_1h0k8_36",vt="_diet_1h0k8_42",xt="_button_container_1h0k8_53",wt="_text_1h0k8_60",bt="_green_1h0k8_67",St="_red_1h0k8_78",jt="_button_1h0k8_53",Et="_title_container_1h0k8_99",Tt="_title_1h0k8_99",Ct="_item_list_container_1h0k8_116",Nt={not_find_text:ft,item:gt,item_container:yt,diet:vt,button_container:xt,text:wt,green:bt,red:St,button:jt,title_container:Et,title:Tt,item_list_container:Ct},p=S.bind(Nt),Lt=({open:o,items:r})=>{const n=P(),{blood:t}=E(V);a.useEffect(()=>{n(k({query:"",category:"",recommend:null,page:1}))},[n]);const s={backgroundColor:" #EFA082",width:24,height:24,borderRadius:50},i={marginLeft:8};return e.jsx(e.Fragment,{children:!r||r.length===0?e.jsxs("div",{className:p("not_find_text"),children:[e.jsxs("p",{children:["Sorry, no results were found"," ",e.jsx("span",{children:"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."})]}),e.jsx("p",{children:"Try changing the search parameters."})]}):r&&r.map(c=>{const u=!c.groupBloodNotAllowed[t];return e.jsxs("li",{className:p("item"),children:[e.jsxs("div",{className:p("item_container"),children:[e.jsx("p",{className:p("diet"),children:"DIET"}),e.jsxs("div",{className:p("button_container"),children:[e.jsx("p",{className:p("text",{green:u,red:!u}),children:u?" Recommended":"Not Recommended"}),e.jsxs("button",{className:p("button"),onClick:()=>o(c.title,c.calories,c._id),children:["Add",e.jsx(L,{iconId:"icon-next",w:20,h:20,customStyles:i})]})]})]}),e.jsxs("div",{className:p("title_container"),children:[e.jsx(L,{iconId:"icon-run",w:12,h:14,customStyles:s}),e.jsx("h2",{className:p("title"),children:c.title})]}),e.jsxs("div",{className:p("item_list_container"),children:[e.jsxs("p",{children:["Calories:",e.jsx("span",{className:p("list_text"),children:c.calories})]}),e.jsxs("p",{children:["Category:",e.jsx("span",{className:p("list_text"),children:c.category})]}),e.jsxs("p",{children:["Weight:",e.jsx("span",{className:p("list_text"),children:c.weight})]})]})]},c._id)})})},Dt="_list_1acjh_1",kt={list:Dt};/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var F=function(o,r){return F=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var s in t)t.hasOwnProperty(s)&&(n[s]=t[s])},F(o,r)};function Pt(o,r){F(o,r);function n(){this.constructor=o}o.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}var N=function(){return N=Object.assign||function(r){for(var n,t=1,s=arguments.length;t<s;t++){n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])}return r},N.apply(this,arguments)};function Mt(o,r,n,t){var s,i=!1,c=0;function d(){s&&clearTimeout(s)}function u(){d(),i=!0}typeof r!="boolean"&&(t=n,n=r,r=void 0);function h(){var f=this,_=Date.now()-c,m=arguments;if(i)return;function l(){c=Date.now(),n.apply(f,m)}function y(){s=void 0}t&&!s&&l(),d(),t===void 0&&_>o?l():r!==!0&&(s=setTimeout(t?y:l,t===void 0?o-_:o))}return h.cancel=u,h}var j={Pixel:"Pixel",Percent:"Percent"},B={unit:j.Percent,value:.8};function $(o){return typeof o=="number"?{unit:j.Percent,value:o*100}:typeof o=="string"?o.match(/^(\d*(\.\d+)?)px$/)?{unit:j.Pixel,value:parseFloat(o)}:o.match(/^(\d*(\.\d+)?)%$/)?{unit:j.Percent,value:parseFloat(o)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),B):(console.warn("scrollThreshold should be string or number"),B)}var Rt=function(o){Pt(r,o);function r(n){var t=o.call(this,n)||this;return t.lastScrollTop=0,t.actionTriggered=!1,t.startY=0,t.currentY=0,t.dragging=!1,t.maxPullDownDistance=0,t.getScrollableTarget=function(){return t.props.scrollableTarget instanceof HTMLElement?t.props.scrollableTarget:typeof t.props.scrollableTarget=="string"?document.getElementById(t.props.scrollableTarget):(t.props.scrollableTarget===null&&console.warn(`You are trying to pass scrollableTarget but it is null. This might
        happen because the element may not have been added to DOM yet.
        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.
      `),null)},t.onStart=function(s){t.lastScrollTop||(t.dragging=!0,s instanceof MouseEvent?t.startY=s.pageY:s instanceof TouchEvent&&(t.startY=s.touches[0].pageY),t.currentY=t.startY,t._infScroll&&(t._infScroll.style.willChange="transform",t._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},t.onMove=function(s){t.dragging&&(s instanceof MouseEvent?t.currentY=s.pageY:s instanceof TouchEvent&&(t.currentY=s.touches[0].pageY),!(t.currentY<t.startY)&&(t.currentY-t.startY>=Number(t.props.pullDownToRefreshThreshold)&&t.setState({pullToRefreshThresholdBreached:!0}),!(t.currentY-t.startY>t.maxPullDownDistance*1.5)&&t._infScroll&&(t._infScroll.style.overflow="visible",t._infScroll.style.transform="translate3d(0px, "+(t.currentY-t.startY)+"px, 0px)")))},t.onEnd=function(){t.startY=0,t.currentY=0,t.dragging=!1,t.state.pullToRefreshThresholdBreached&&(t.props.refreshFunction&&t.props.refreshFunction(),t.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){t._infScroll&&(t._infScroll.style.overflow="auto",t._infScroll.style.transform="none",t._infScroll.style.willChange="unset")})},t.onScrollListener=function(s){typeof t.props.onScroll=="function"&&setTimeout(function(){return t.props.onScroll&&t.props.onScroll(s)},0);var i=t.props.height||t._scrollableNode?s.target:document.documentElement.scrollTop?document.documentElement:document.body;if(!t.actionTriggered){var c=t.props.inverse?t.isElementAtTop(i,t.props.scrollThreshold):t.isElementAtBottom(i,t.props.scrollThreshold);c&&t.props.hasMore&&(t.actionTriggered=!0,t.setState({showLoader:!0}),t.props.next&&t.props.next()),t.lastScrollTop=i.scrollTop}},t.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:n.dataLength},t.throttledOnScrollListener=Mt(150,t.onScrollListener).bind(t),t.onStart=t.onStart.bind(t),t.onMove=t.onMove.bind(t),t.onEnd=t.onEnd.bind(t),t}return r.prototype.componentDidMount=function(){if(typeof this.props.dataLength>"u")throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),typeof this.props.initialScrollY=="number"&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),typeof this.props.refreshFunction!="function"))throw new Error(`Mandatory prop "refreshFunction" missing.
          Pull Down To Refresh functionality will not work
          as expected. Check README.md for usage'`)},r.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},r.prototype.componentDidUpdate=function(n){this.props.dataLength!==n.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},r.getDerivedStateFromProps=function(n,t){var s=n.dataLength!==t.prevDataLength;return s?N(N({},t),{prevDataLength:n.dataLength}):null},r.prototype.isElementAtTop=function(n,t){t===void 0&&(t=.8);var s=n===document.body||n===document.documentElement?window.screen.availHeight:n.clientHeight,i=$(t);return i.unit===j.Pixel?n.scrollTop<=i.value+s-n.scrollHeight+1:n.scrollTop<=i.value/100+s-n.scrollHeight+1},r.prototype.isElementAtBottom=function(n,t){t===void 0&&(t=.8);var s=n===document.body||n===document.documentElement?window.screen.availHeight:n.clientHeight,i=$(t);return i.unit===j.Pixel?n.scrollTop+s>=n.scrollHeight-i.value:n.scrollTop+s>=i.value/100*n.scrollHeight},r.prototype.render=function(){var n=this,t=N({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),s=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),i=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return D.createElement("div",{style:i,className:"infinite-scroll-component__outerdiv"},D.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(c){return n._infScroll=c},style:t},this.props.pullDownToRefresh&&D.createElement("div",{style:{position:"relative"},ref:function(c){return n._pullDown=c}},D.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!s&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},r}(a.Component);const Yt=S.bind(kt),Ft=({open:o})=>{const r=P(),n=E(W),{items:t}=E(pt),s=t&&t.length===0?{overflowY:"auto"}:{},[i,c]=a.useState([]),[d,u]=a.useState(""),[h,f]=a.useState(!0),[_,m]=a.useState(2),[l,y]=a.useState(""),[g,w]=a.useState("");a.useEffect(()=>{f(!0),u(n.query),y(n.category),w(n.recommend),(l!==n.category||g!==n.recommend||d!==n.query)&&(m(2),c(t),document.getElementById("scrollableDiv").scrollTo({top:0})),i.length===0&&c(t)},[l,i.length,t,_,n.category,n.query,n.recommend,d,g]);const b=async()=>{const x=await r(k({...n,page:_}));await c(M=>[...M,...x.payload.products]),m(M=>M+1),(i.length===0||i.length<20)&&await f(!1)};return e.jsx(Rt,{dataLength:i.length,next:b,hasMore:h,scrollableTarget:"scrollableDiv",scrollThreshold:"200px",children:e.jsx("ul",{id:"scrollableDiv",className:Yt("list"),style:s,children:e.jsx(Lt,{open:o,items:i})})})},It="_products__container_65gk2_1",Bt="_products__page_container_65gk2_19",$t={products__container:It,products__page_container:Bt},At="_input_12csy_1",Ot="_input_container_12csy_27",Ht="_button_container_12csy_67",qt="_title_calories_12csy_73",zt="_inputs_12csy_85",Wt="_product_12csy_96",Ut="_input__title_12csy_111",Vt="_container_12csy_122",Gt={input:At,"input_container-grams":"_input_container-grams_12csy_27",input_container:Ot,"input-grams":"_input-grams_12csy_41",button_container:Ht,title_calories:qt,inputs:zt,product:Wt,input__title:Ut,container:Vt},Qt="_successModal_856xh_1",Kt="_title_calories_856xh_35",Jt="_button_856xh_49",Xt={successModal:Qt,title_calories:Kt,button:Jt},R=S.bind(Xt),Zt=({onClose:o,calories:r})=>{const n={marginLeft:6,fill:"#EFEDE84D",stroke:"#EFEDE84D"},t={marginBottom:"28px",fontSize:"16px"};return e.jsxs("div",{className:R("successModal"),children:[e.jsx("h2",{children:"Well done"}),e.jsxs("p",{className:R("title_calories"),children:["Calories: ",e.jsx("span",{children:r})]}),e.jsx(Y,{label:"Next product",action:o,customContainerStyles:t,buttonStyles:"orange"}),e.jsxs("button",{className:R("button"),children:[e.jsx(G,{to:"/diary",children:"To the diary"}),e.jsx(L,{iconId:"icon-arrow-big",w:16,h:16,customStyles:n})]})]})},v=S.bind(Gt),te=({close:o,product:r})=>{const n=P(),t=E(g=>g.diary.selectedDate),[s,i]=a.useState(!1),[c,d]=a.useState(0),u=Q({grams:K().required("Grams is required").positive("Grams must be a positive number").integer("Grams must be an integer")}),h=O.useMediaQuery({minWidth:768}),f={fontSize:16,width:151,height:h?52:42,padding:"12px 32px",color:"rgba(239, 237, 232, 1)"},_={fontSize:h?20:16,width:h?142:121,padding:"12px 36px",height:h?52:42},m={grams:""},l=g=>{const w=r._id;n(J({id:w,date:t,weight:g.grams})).then(()=>{i(!0)})},y=()=>{i(!1),o()};return e.jsx(e.Fragment,{children:s?e.jsx(Zt,{onClose:y,calories:c}):e.jsx("div",{className:v("container"),children:e.jsx(H,{initialValues:m,onSubmit:l,validationSchema:u,children:({values:g,handleSubmit:w})=>{const b=Math.round(r.cal/100*g.grams);return a.useEffect(()=>{d(b)},[b]),e.jsx(q,{onSubmit:w,children:e.jsxs("div",{className:v("product_modal"),children:[e.jsxs("div",{className:v("inputs"),children:[e.jsx("div",{className:v("product"),children:r.name}),e.jsxs("div",{className:v("input_container-grams"),children:[e.jsx(z,{type:"text",id:"grams",name:"grams",className:v("input-grams")}),e.jsx("span",{className:v("input__title"),children:"grams"})]})]}),e.jsxs("p",{className:v("title_calories"),children:["Calories: ",c]}),e.jsxs("div",{className:v("button_container"),children:[e.jsx(Y,{label:"Add to diary",type:"submit",customContainerStyles:f}),e.jsx(Y,{label:"Cancel",action:o,customContainerStyles:_,buttonStyles:"gray"})]})]})})}})})})},A=S.bind($t),ne=()=>{const[o,r]=a.useState(!1),[n,t]=a.useState({}),s={},i=(d,u,h)=>{t({name:d,cal:u,_id:h}),r(!0)},c=()=>{r(!1)};return e.jsxs("div",{className:A("products__container"),children:[e.jsxs("div",{className:A("products__page_container"),children:[e.jsx(X,{title:"Products",customContainerStyles:s}),e.jsx(mt,{})]}),e.jsx(Ft,{open:i}),o&&e.jsx(Z,{customClose:c,children:e.jsx(te,{close:c,product:n})})]})};export{ne as default};
