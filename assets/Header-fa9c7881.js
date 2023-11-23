import{c as b,d as j,r as m,j as e,I as t,L as a,B as d,l as p,v as f,R as I,O as L,k as q,u as g,S as E,U as B}from"./index-ed05f829.js";const C="_header__container_1s2aq_1",P="_header__logo_1s2aq_28",R="_header__burgerMenu_1s2aq_68",D="_header__links_1s2aq_96",H="_header__list_1s2aq_110",z="_header__user_1s2aq_116",O="_avatarStyle_1s2aq_141",$="_header__settings_1s2aq_144",Q="_logout__button_1s2aq_173",W={header__container:C,header__logo:P,header__burgerMenu:R,header__links:D,"header__routing-container":"_header__routing-container_1s2aq_106",header__list:H,header__user:z,avatarStyle:O,header__settings:$,logout__button:Q},U="_burgerMenu__container_1veow_1",V="_burger__button_1veow_18",A="_menuItems__list_1veow_40",F="_logout__button_1veow_52",G={burgerMenu__container:U,burger__button:V,menuItems__list:A,logout__button:F},_=b.bind(G),J=({onClose:n})=>{const o=j(),c=m.useMediaQuery({minWidth:768}),r=()=>{o(p())};return e.jsxs("div",{className:_("burgerMenu__container"),children:[e.jsx("button",{onClick:n,className:_("burger__button"),children:e.jsx(t,{iconId:"icon-close",w:c?32:24,h:c?32:24})}),e.jsxs("ul",{className:_("menuItems__list"),children:[e.jsx("li",{children:e.jsx(a,{to:"/diary",children:e.jsx(d,{label:"Diary",buttonStyles:"orange"})})}),e.jsx("li",{children:e.jsx(a,{to:"/products",children:e.jsx(d,{label:"Products",buttonStyles:"orange"})})}),e.jsx("li",{children:e.jsx(a,{to:"/exercises",children:e.jsx(d,{label:"Exercises",buttonStyles:"orange"})})})]}),e.jsxs("button",{className:_("logout__button"),onClick:r,children:["Logout",e.jsx(t,{iconId:"icon-log-out",w:24,h:24,customStyles:{marginLeft:8}})]})]})},K=({onClose:n})=>{const o=document.getElementById("portal");return f.createPortal(e.jsx(J,{onClose:n}),o)},u=I(L)`
    background-color: transparent;

    font-size: 16px;
    font-weight: 500;
    text-align: center;
    line-height: 1.5;
    color: #efede8;

    display: block;

    padding: 10px 27px;

    border-radius: 12px;
    border: 1px solid #efede84d;

    transition-property: background-color, border-color, fill, color, stroke,
        border-radius, padding;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        background-color: transparent;

        border-color: #e6533c;
    }

    &:active {
        background-color: #10100f;
    }

    &.active {
        background-color: #e6533c;

        border: 1px solid #e6533c;
    }

    @media screen and (max-width: 375px) {
        font-size: 14px;
    }
`,s=b.bind(W),X=()=>{const[n,o]=q.useState(!1),c=j(),r=g(E),i=g(B),l=m.useMediaQuery({minWidth:768}),y={marginRight:8,width:l?"44px":"36px",height:l?"17px":"13px"},h=l?28:24,x=l?16:14,v=()=>{o(!0)},S=()=>{o(!1)},k=()=>{c(p())},w=r?{borderBottom:"1px solid #efede833"}:{},M=r?"/diary":"/welcome",N=e.jsxs("div",{className:s("header__routing-container"),children:[e.jsxs("ul",{className:s("header__links"),children:[e.jsx("li",{children:e.jsx(u,{to:"/diary",children:"Diary"})}),e.jsx("li",{children:e.jsx(u,{to:"/products",children:"Products"})}),e.jsx("li",{children:e.jsx(u,{to:"/exercises",children:"Exercises"})})]}),e.jsx("div",{className:s("header__user-links"),children:e.jsxs("ul",{className:s("header__list"),children:[e.jsx("li",{className:s("header__settings"),children:e.jsx(a,{to:"/profile",children:e.jsx(t,{iconId:"icon-settings",w:h,h})})}),e.jsx("li",{className:s("header__user",{avatarStyle:i}),children:i?e.jsx("img",{src:i||"",alt:"avatar"}):e.jsx(t,{iconId:"icon-user",w:x,h:x})}),e.jsx("li",{children:e.jsxs("button",{className:s("logout__button"),onClick:k,children:["Logout",e.jsx(t,{iconId:"icon-log-out",w:24,h:24,customStyles:{marginLeft:8}})]})})]})}),e.jsx("button",{className:s("header__burgerMenu"),onClick:v,children:e.jsx(t,{iconId:"icon-menu-02",w:24,h:24})})]});return e.jsxs("header",{style:w,children:[e.jsxs("div",{className:s("header__container"),children:[e.jsx("div",{className:s("header__logo"),children:e.jsxs(a,{to:M,children:[e.jsx(t,{iconId:"icon-Vector",w:36,h:13,customStyles:y}),e.jsx("span",{children:"PowerPulse"})]})}),r?N:null]}),n&&e.jsx(K,{onClose:S})]})};export{X as H};
