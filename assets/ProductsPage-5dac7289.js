import{c as _,b as a,j as t,F as v,o as y,p as f,I as h,T as N}from"./index-c54e08ce.js";const g="_form_container_kicus_1",k="_form_container_input_kicus_41",C="_input_kicus_45",S="_button_form_kicus_67",I="_button_close_kicus_77",E={form_container:g,form_container_input:k,input:C,button_form:S,button_close:I},F="_dropdown_1yvb9_1",P="_dropdown_button_1yvb9_5",$="_dropdown_list_1yvb9_33",L="_dropdown_list_visible_1yvb9_51",T="_dropdown_item_1yvb9_66",R="_dropdown_input_1yvb9_73",A={dropdown:F,dropdown_button:P,dropdown_list:$,dropdown_list_visible:L,dropdown_item:T,dropdown_input:R},o=_.bind(A),j=({list:i,customSelectStyle:e,customListSelectStyle:d})=>{const[c,l]=a.useState(!1),[u,m]=a.useState("Categories"),p=()=>{l(!c)},s=b=>{const w=b.target.textContent;m(w),l(!c)},x=b=>{b.code==="Escape"&&l(!1)};return a.useEffect(()=>(window.addEventListener("keydown",x),()=>{window.removeEventListener("keydown",x)})),t.jsx("div",{className:o("form_group"),children:t.jsxs("div",{className:o("dropdown"),children:[t.jsx("button",{type:"button",style:e||{},onClick:p,className:o("dropdown_button"),children:u}),t.jsxs("ul",{style:d||{},className:o(c?"dropdown_list":"dropdown_list_visible"),children:[t.jsx("li",{onClick:s,className:o("dropdown_item"),"data-value":"all",children:"all"}),t.jsx("li",{onClick:s,className:o("dropdown_item"),"data-value":"all",children:"all"}),t.jsx("li",{onClick:s,className:o("dropdown_item"),"data-value":"all",children:"all"})]})]})})},r=_.bind(E),B=()=>{const[i,e]=a.useState(""),d=s=>{e(s.target.value)},c=()=>{e("")},l={},u={width:173},m={height:98,overflow:"hidden"},p=["All","Recommended","Not recommended"];return t.jsx(t.Fragment,{children:t.jsx(v,{initialValues:{search:""},onSubmit:s=>{console.log(s)},children:t.jsxs(y,{className:r("form_container"),children:[t.jsxs("div",{className:r("form_container_input"),children:[t.jsx(f,{className:r("input"),type:"text",name:"search",value:i,autoComplete:"off",autoFocus:!0,placeholder:"Search",onChange:d}),i&&t.jsx("button",{type:"button",className:r("button_close"),onClick:c,children:t.jsx(h,{iconId:"icon-error",w:18,h:18,customStyles:l})}),t.jsx("button",{className:r("button_form"),type:"submit",children:"o"})]}),t.jsx(j,{}),t.jsx(j,{list:p,customSelectStyle:u,customListSelectStyle:m})]})})})},V="_item_1d6b9_1",O="_item_container_1d6b9_12",D="_diet_1d6b9_18",H="_button_container_1d6b9_29",K="_text_1d6b9_36",W="_button_1d6b9_29",q="_title_container_1d6b9_53",z="_title_1d6b9_53",G="_item_list_container_1d6b9_65",J={item:V,item_container:O,diet:D,button_container:H,text:K,button:W,title_container:q,title:z,item_list_container:G},n=_.bind(J),M=()=>{const i={backgroundColor:" #EFA082",width:24,height:24,borderRadius:50},e={marginLeft:8};return t.jsxs("li",{className:n("item"),children:[t.jsxs("div",{className:n("item_container"),children:[t.jsx("p",{className:n("diet"),children:"DIET"}),t.jsxs("div",{className:n("button_container"),children:[t.jsx("p",{className:n("text"),children:"Recommended"}),t.jsxs("button",{className:n("button"),children:["Add",t.jsx(h,{iconId:"icon-next",w:20,h:20,customStyles:e})]})]})]}),t.jsxs("div",{className:n("title_container"),children:[t.jsx(h,{iconId:"icon-running-stick",w:12,h:14,customStyles:i}),t.jsx("h2",{className:n("title"),children:"Bread Hercules grain"})]}),t.jsxs("div",{className:n("item_list_container"),children:[t.jsx("p",{children:"Calories:"}),t.jsx("p",{children:"Category:"}),t.jsx("p",{children:"Weight:"})]})]})},Q="_list_1rbhg_1",U={list:Q},X=_.bind(U),Y=()=>t.jsx("ul",{className:X("list"),children:t.jsx(M,{})}),tt=()=>t.jsxs("div",{children:[t.jsx(N,{title:"Products"}),t.jsx(B,{}),t.jsx(Y,{})]});export{tt as default};
