import{c as x,k as a,j as t,r as P,d as I,u as $,J as O,F as B,m as D,n as L,I as N,K as E,B as k,L as V,f as W,h as G,M as q,T as K,N as Q}from"./index-32ae8abb.js";const U="_form_container_tojwr_1",Y="_form_container_input_tojwr_24",J="_input_tojwr_28",H="_button_form_tojwr_55",X="_button_close_tojwr_65",Z={form_container:U,form_container_input:Y,input:J,button_form:H,button_close:X},tt="_dropdown_vsv3g_1",st="_dropdown_button_vsv3g_5",et="_dropdown_list_vsv3g_38",nt="_dropdown_list_visible_vsv3g_60",ot="_dropdown_item_vsv3g_75",ct="_dropdown_input_vsv3g_98",it={dropdown:tt,dropdown_button:st,dropdown_list:et,dropdown_list_visible:nt,dropdown_item:ot,dropdown_input:ct},S=x.bind(it),M=({value:s,customSelectStyle:e,customListSelectStyle:o,handleCategoryChange:c})=>{const[_,i]=a.useState(!1),[n,u]=a.useState("Categories"),m=(r=>r.charAt(0).toUpperCase()+r.slice(1))(n),b=()=>{i(!_)},w=r=>{const j=r.target.getAttribute("data-value");u(j),i(!_),c(j)},g=r=>{r.code==="Escape"&&i(!1)};return a.useEffect(()=>(window.addEventListener("keydown",g),()=>{window.removeEventListener("keydown",g)})),t.jsx("div",{className:S("form_group"),children:t.jsxs("div",{className:S("dropdown"),children:[t.jsx("button",{type:"button",style:e||{},onClick:b,className:S("dropdown_button"),children:m}),t.jsx("ul",{style:o||{},className:S(_?"dropdown_list":"dropdown_list_visible"),children:s&&s.map(r=>t.jsx("li",{onClick:w,className:S("dropdown_item"),"data-value":r,children:r},r))})]})})},R=s=>s.products.products,rt=s=>s.products.categories,v=x.bind(Z),at=()=>{const[s,e]=a.useState(""),o=P.useMediaQuery({minWidth:768}),c=I(),{list:_}=$(rt),[i,n]=a.useState(""),[u,d]=a.useState(null),m=y=>{const z=y.target.value;e(z)},b=()=>{e("")},w=y=>{n(y),c(E({inputValue:s,category:i,isRecommended:u}))},g=y=>{y=="Recommended"?d(!0):y=="Not recommended"?d(!1):d(null),c(E({inputValue:s,category:i,isRecommended:u}))},r=()=>{c(E({inputValue:s,category:i,isRecommended:u}))},j={stroke:"#EFEDE8"},h={stroke:"#E6533C",strokeWidth:4},f={width:o?204:173},A={height:112,overflow:"visible"};a.useEffect(()=>{r()},[i,u]),a.useEffect(()=>{c(O())},[c]);const T=["All","Recommended","Not recommended"];return t.jsx(t.Fragment,{children:t.jsx(B,{initialValues:{search:""},onSubmit:r,children:t.jsxs(D,{className:v("form_container"),children:[t.jsxs("div",{className:v("form_container_input"),children:[t.jsx(L,{className:v("input"),type:"text",name:"search",value:s,autoComplete:"off",autoFocus:!0,placeholder:"Search",onChange:m}),s&&t.jsx("button",{type:"button",className:v("button_close"),onClick:b,children:t.jsx(N,{iconId:"icon-close",w:15,h:17,customStyles:h})}),t.jsx("button",{className:v("button_form"),type:"submit",children:t.jsx(N,{iconId:"icon-search",w:18,h:18,customStyles:j})})]}),t.jsx(M,{value:_,handleCategoryChange:w}),t.jsx(M,{value:T,customSelectStyle:f,customListSelectStyle:A,handleCategoryChange:g})]})})})},lt="_not_find_text_wm4ss_1",dt="_item_wm4ss_20",_t="_item_container_wm4ss_45",ut="_diet_wm4ss_51",mt="_button_container_wm4ss_62",pt="_text_wm4ss_69",ht="_green_wm4ss_76",xt="_red_wm4ss_87",gt="_button_wm4ss_62",jt="_title_container_wm4ss_108",yt="_title_wm4ss_108",bt="_item_list_container_wm4ss_125",wt={not_find_text:lt,item:dt,item_container:_t,diet:ut,button_container:mt,text:pt,green:ht,red:xt,button:gt,title_container:jt,title:yt,item_list_container:bt},l=x.bind(wt),ft=({open:s})=>{const e=I(),{items:o}=$(R),c=2;a.useEffect(()=>{e(E({inputValue:"",category:"",isRecommended:null}))},[e]);const _={backgroundColor:" #EFA082",width:24,height:24,borderRadius:50},i={marginLeft:8};return t.jsx(t.Fragment,{children:!o||o.length===0?t.jsxs("div",{className:l("not_find_text"),children:[t.jsxs("p",{children:["Sorry, no results were found"," ",t.jsx("span",{children:"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."})]}),t.jsx("p",{children:"Try changing the search parameters."})]}):o&&o.map(n=>{const d=!n.groupBloodNotAllowed[c];return t.jsxs("li",{className:l("item"),children:[t.jsxs("div",{className:l("item_container"),children:[t.jsx("p",{className:l("diet"),children:"DIET"}),t.jsxs("div",{className:l("button_container"),children:[t.jsx("p",{className:l("text",{green:d,red:!d}),children:d?" Recommended":"Not Recommended"}),t.jsxs("button",{className:l("button"),onClick:()=>s(n.title,n.calories,n._id),children:["Add",t.jsx(N,{iconId:"icon-next",w:20,h:20,customStyles:i})]})]})]}),t.jsxs("div",{className:l("title_container"),children:[t.jsx(N,{iconId:"icon-run",w:12,h:14,customStyles:_}),t.jsx("h2",{className:l("title"),children:n.title})]}),t.jsxs("div",{className:l("item_list_container"),children:[t.jsxs("p",{children:["Calories:",t.jsx("span",{className:l("list_text"),children:n.calories})]}),t.jsxs("p",{children:["Category:",t.jsx("span",{className:l("list_text"),children:n.category})]}),t.jsxs("p",{children:["Weight:",t.jsx("span",{className:l("list_text"),children:n.weight})]})]})]},n.title)})})},St="_list_16ygl_1",vt={list:St},Nt=x.bind(vt),Ct=({open:s})=>{const{items:e}=$(R),o=e&&e.length===0?{overflowY:"auto"}:{};return t.jsx("ul",{className:Nt("list"),style:o,children:t.jsx(ft,{open:s})})},Et="_products_page_container_145ro_1",It={products_page_container:Et},$t="_input_12csy_1",Ft="_input_container_12csy_27",kt="_button_container_12csy_67",Mt="_title_calories_12csy_73",Pt="_inputs_12csy_85",Bt="_product_12csy_96",Dt="_input__title_12csy_111",Lt="_container_12csy_122",Rt={input:$t,"input_container-grams":"_input_container-grams_12csy_27",input_container:Ft,"input-grams":"_input-grams_12csy_41",button_container:kt,title_calories:Mt,inputs:Pt,product:Bt,input__title:Dt,container:Lt},At="_successModal_856xh_1",Tt="_title_calories_856xh_35",zt="_button_856xh_49",Ot={successModal:At,title_calories:Tt,button:zt},F=x.bind(Ot),Vt=({onClose:s,calories:e})=>{const o={marginLeft:6,fill:"#EFEDE84D",stroke:"#EFEDE84D"},c={marginBottom:"28px",fontSize:"16px"};return t.jsxs("div",{className:F("successModal"),children:[t.jsx("h2",{children:"Well done"}),t.jsxs("p",{className:F("title_calories"),children:["Calories: ",t.jsx("span",{children:e})]}),t.jsx(k,{label:"Next product",action:s,customContainerStyles:c,buttonStyles:"orange"}),t.jsxs("button",{className:F("button"),children:[t.jsx(V,{to:"/diary",children:"To the diary"}),t.jsx(N,{iconId:"icon-arrow-big",w:16,h:16,customStyles:o})]})]})},p=x.bind(Rt),Wt=({close:s,product:e})=>{const o=I(),c=$(h=>h.diary.selectedDate),[_,i]=a.useState(!1),[n,u]=a.useState(0),d=W({grams:G().required("Grams is required").positive("Grams must be a positive number").integer("Grams must be an integer")}),m=P.useMediaQuery({minWidth:768}),b={fontSize:16,width:151,height:m?52:42,padding:"12px 32px",color:"rgba(239, 237, 232, 1)"},w={fontSize:m?20:16,width:m?142:121,padding:"12px 36px",height:m?52:42},g={grams:""},r=h=>{const C=e._id;o(q({id:C,date:c,weight:h.grams})).then(()=>{i(!0)})},j=()=>{i(!1),s()};return t.jsx(t.Fragment,{children:_?t.jsx(Vt,{onClose:j,calories:n}):t.jsx("div",{className:p("container"),children:t.jsx(B,{initialValues:g,onSubmit:r,validationSchema:d,children:({values:h,handleSubmit:C})=>{const f=Math.round(e.cal/100*h.grams);return a.useEffect(()=>{u(f)},[f]),t.jsx(D,{onSubmit:C,children:t.jsxs("div",{className:p("product_modal"),children:[t.jsxs("div",{className:p("inputs"),children:[t.jsx("div",{className:p("product"),children:e.name}),t.jsxs("div",{className:p("input_container-grams"),children:[t.jsx(L,{type:"text",id:"grams",name:"grams",className:p("input-grams")}),t.jsx("span",{className:p("input__title"),children:"grams"})]})]}),t.jsxs("p",{className:p("title_calories"),children:["Calories: ",n]}),t.jsxs("div",{className:p("button_container"),children:[t.jsx(k,{label:"Add to diary",type:"submit",customContainerStyles:b}),t.jsx(k,{label:"Cancel",action:s,customContainerStyles:w,buttonStyles:"gray"})]})]})})}})})})},Gt=x.bind(It),Kt=()=>{const[s,e]=a.useState(!1),[o,c]=a.useState({});I();const _={},i=(u,d,m)=>{c({name:u,cal:d,_id:m}),e(!0)},n=()=>{e(!1)};return t.jsxs("div",{children:[t.jsxs("div",{className:Gt("products_page_container"),children:[t.jsx(K,{title:"Products",customContainerStyles:_}),t.jsx(at,{})]}),t.jsx(Ct,{open:i}),s&&t.jsx(Q,{customClose:n,children:t.jsx(Wt,{close:n,product:o})})]})};export{Kt as default};
