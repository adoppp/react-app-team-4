import{c as b,u as j,r as m,j as e,I as t,L as a,B as d,l as p,a as M,s as I,N as z,b as L,d as g,e as E,f as B}from"./index-20d6343a.js";const C="_header__container_1wuzs_1",P="_header__logo_1wuzs_28",D="_header__burgerMenu_1wuzs_68",H="_header__links_1wuzs_96",R="_header__list_1wuzs_110",$="_header__user_1wuzs_116",O="_avatarStyle_1wuzs_141",Q="_header__settings_1wuzs_144",W="_logout__button_1wuzs_172",V={header__container:C,header__logo:P,header__burgerMenu:D,header__links:H,"header__routing-container":"_header__routing-container_1wuzs_106",header__list:R,header__user:$,avatarStyle:O,header__settings:Q,logout__button:W},q="_burgerMenu__container_1veow_1",A="_burger__button_1veow_18",F="_menuItems__list_1veow_40",G="_logout__button_1veow_52",J={burgerMenu__container:q,burger__button:A,menuItems__list:F,logout__button:G},_=b.bind(J),K=({onClose:n})=>{const o=j(),c=m.useMediaQuery({minWidth:768}),r=()=>{o(p())};return e.jsxs("div",{className:_("burgerMenu__container"),children:[e.jsx("button",{onClick:n,className:_("burger__button"),children:e.jsx(t,{iconId:"icon-close",w:c?32:24,h:c?32:24})}),e.jsxs("ul",{className:_("menuItems__list"),children:[e.jsx("li",{children:e.jsx(a,{to:"/diary",children:e.jsx(d,{label:"Diary",buttonStyles:"orange"})})}),e.jsx("li",{children:e.jsx(a,{to:"/products",children:e.jsx(d,{label:"Products",buttonStyles:"orange"})})}),e.jsx("li",{children:e.jsx(a,{to:"/exercises",children:e.jsx(d,{label:"Exercises",buttonStyles:"orange"})})})]}),e.jsxs("button",{className:_("logout__button"),onClick:r,children:["Logout",e.jsx(t,{iconId:"icon-log-out",w:24,h:24,customStyles:{marginLeft:8}})]})]})},T=({onClose:n})=>{const o=document.getElementById("portal");return M.createPortal(e.jsx(K,{onClose:n}),o)},u=I(z)`
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
`,s=b.bind(V),X=()=>{const[n,o]=L.useState(!1),c=j(),r=g(E),i=g(B),l=m.useMediaQuery({minWidth:768}),y={marginRight:8,width:l?"44px":"36px",height:l?"17px":"13px"},h=l?28:24,x=l?16:14,w=()=>{o(!0)},v=()=>{o(!1)},S=()=>{c(p())},k=r?{borderBottom:"1px solid #efede833"}:{},N=r?"/diary":"/welcome",f=e.jsxs("div",{className:s("header__routing-container"),children:[e.jsxs("ul",{className:s("header__links"),children:[e.jsx("li",{children:e.jsx(u,{to:"/diary",children:"Diary"})}),e.jsx("li",{children:e.jsx(u,{to:"/products",children:"Products"})}),e.jsx("li",{children:e.jsx(u,{to:"/exercises",children:"Exercises"})})]}),e.jsx("div",{className:s("header__user-links"),children:e.jsxs("ul",{className:s("header__list"),children:[e.jsx("li",{className:s("header__settings"),children:e.jsx(a,{to:"/profile",children:e.jsx(t,{iconId:"icon-settings",w:h,h})})}),e.jsx("li",{className:s("header__user",{avatarStyle:i}),children:i?e.jsx("img",{src:i||"",alt:"avatar"}):e.jsx(t,{iconId:"icon-user",w:x,h:x})}),e.jsx("li",{children:e.jsxs("button",{className:s("logout__button"),onClick:S,children:["Logout",e.jsx(t,{iconId:"icon-log-out",w:24,h:24,customStyles:{marginLeft:8}})]})})]})}),e.jsx("button",{className:s("header__burgerMenu"),onClick:w,children:e.jsx(t,{iconId:"icon-menu-02",w:24,h:24})})]});return e.jsxs("header",{style:k,children:[e.jsxs("div",{className:s("header__container"),children:[e.jsx("div",{className:s("header__logo"),children:e.jsxs(a,{to:N,children:[e.jsx(t,{iconId:"icon-Vector",w:36,h:13,customStyles:y}),e.jsx("span",{children:"PowerPulse"})]})}),r?f:null]}),n&&e.jsx(T,{onClose:v})]})};export{X as H};
