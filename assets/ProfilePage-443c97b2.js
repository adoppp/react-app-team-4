import{c as B,u as g,a as I,b as R,d as F,r as L,j as e,I as n,e as M,l as $,f as U,g as k,h as u,i as O,k as C,F as q,m as V,n as t,B as E,o as T,p as Q,q as Y,T as H}from"./index-a23cab31.js";const K="_usercard__container_vpjx9_1",z="_container__svg_vpjx9_22",G="_usercard__VectorProfile_vpjx9_29",J="_usercard__checkMark_vpjx9_72",X="_userName__container_vpjx9_105",Z="_user__name_vpjx9_113",ee="_user__user_vpjx9_127",se="_daily__container_vpjx9_135",ie="_daily__calorieAndNorm_vpjx9_143",ae="_daily__calorieContainer_vpjx9_161",le="_daily__icon_vpjx9_165",ce="_daily__value_vpjx9_180",ne="_daily__valueMin_vpjx9_193",te="_profile__warning_vpjx9_206",re="_logout__container_vpjx9_227",oe="_logout__button_vpjx9_232",_e={usercard__container:K,container__svg:z,usercard__VectorProfile:G,usercard__checkMark:J,userName__container:X,user__name:Z,user__user:ee,daily__container:se,daily__calorieAndNorm:ie,daily__calorieContainer:ae,daily__icon:le,daily__value:ce,daily__valueMin:ne,profile__warning:te,logout__container:re,logout__button:oe},c=B.bind(_e),de=()=>{const r=g(I),l=g(R),_=F(),o=L.useMediaQuery({minWidth:768}),d=o?16:14,v=j=>{j.preventDefault();const A=j.target.files[0],i=new FormData;i.append("avatar",A),_(M(i))},p=()=>{_($())},N=Object.keys(l).includes("BMR")?Math.round(l.BMR):0,f=Object.keys(l).includes("dailyExerciseTime")?l.dailyExerciseTime:0;return e.jsx("div",{className:c("usercard__container"),children:e.jsxs("div",{className:c("usercard__profile"),children:[e.jsxs("div",{className:c("container__svg"),children:[e.jsx("div",{className:c("usercard__VectorProfile"),children:r.avatarURL?e.jsx("img",{src:r.avatarURL?`${r.avatarURL}`:"",alt:"avatar"}):e.jsx(n,{iconId:"icon-user",w:d,h:d})}),e.jsxs("div",{className:c("usercard__checkMark"),children:[e.jsx(n,{iconId:"icon-check-mark",w:o?32:24,h:o?32:24}),e.jsx("input",{type:"file",name:"avatar",id:"avatar",onChange:v})]})]}),e.jsxs("div",{className:c("userName__container"),children:[e.jsx("h3",{className:c("user__name"),children:r.name}),e.jsx("p",{className:c("user__user"),children:"User"})]}),e.jsxs("div",{className:c("daily__container"),children:[e.jsx("div",{className:c("daily__calorieAndNorm"),children:e.jsxs("div",{className:c("daily__calorieContainer"),children:[e.jsxs("div",{className:c("daily__icon"),children:[e.jsx(n,{iconId:"icon-fluent_food",w:20,h:20}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx("div",{className:c("daily__value"),children:N})]})}),e.jsx("div",{className:c("daily__calorieAndNorm"),children:e.jsxs("div",{className:c("daily__calorieContainer"),children:[e.jsxs("div",{className:c("daily__icon"),children:[e.jsx(n,{iconId:"icon-dumbbell",w:20,h:20}),e.jsx("p",{children:"Daily physical activity"})]}),e.jsxs("div",{className:c("daily__valueMin"),children:[`${f} `,"min"]})]})})]}),e.jsxs("div",{className:c("profile__warning"),children:[e.jsx("div",{children:e.jsx(n,{iconId:"icon-icons",w:24,h:24})}),e.jsx("p",{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsx("div",{className:c("logout__container"),children:e.jsxs("button",{className:c("logout__button"),onClick:p,children:["Logout",e.jsx(n,{iconId:"icon-log-out",w:24,h:24,customStyles:{marginLeft:8}})]})})]})})},me="_UserFrom__container_1lo0s_1",he="_basic__infoNameContainer_1lo0s_12",xe="_basic__infoName_1lo0s_12",ue="_basic__infoMail_1lo0s_45",ve="_basic__info_1lo0s_12",je="_basic__infoInputContainer_1lo0s_81",be="_basic__calendary_1lo0s_93",ye="_blood__containerParent_1lo0s_98",ge="_blood__container_1lo0s_98",pe="_circle_1lo0s_136",Ne="_sex__container_1lo0s_144",fe="_sex__label_1lo0s_153",Ae="_levelActivity__container_1lo0s_164",Se="_levelActivity__label_1lo0s_168",Be="_errorLabel_1lo0s_180",we="_successLabel_1lo0s_191",We="_input_1lo0s_202",ke="_disabled_1lo0s_218",Ce="_error_1lo0s_180",Ie="_success_1lo0s_191",Re="_radioBtn_1lo0s_245",Fe="_customRadioBtn_1lo0s_258",Le="_sex__wrapper_1lo0s_284",De={UserFrom__container:me,basic__infoNameContainer:he,basic__infoName:xe,basic__infoMail:ue,basic__info:ve,basic__infoInputContainer:je,basic__calendary:be,blood__containerParent:ye,blood__container:ge,circle:pe,sex__container:Ne,sex__label:fe,levelActivity__container:Ae,levelActivity__label:Se,errorLabel:Be,successLabel:we,input:We,disabled:ke,error:Ce,success:Ie,radioBtn:Re,customRadioBtn:Fe,sex__wrapper:Le,"sex__checkbox-wrapper":"_sex__checkbox-wrapper_1lo0s_288"},s=B.bind(De),Pe=U().shape({name:k().required(),height:u().min(150).required(),currentWeight:u().min(35).required(),desiredWeight:u().min(35).required(),birthday:O().required().test("is-adult",function(r){const l=new Date,_=new Date(r);return l.getFullYear()-_.getFullYear()<18?this.createError({message:"Користувач повинен бути старше 18 років"}):!0}),blood:u().oneOf([1,2,3,4]).required(),sex:k().oneOf(["male","female"]).required(),levelActivity:u().oneOf([1,2,3,4,5]).required()}),Me=()=>{const r=g(I),l=g(R),[_,o]=C.useState(!1),d=F(),v=i=>{const[a,h,m]=i.split("-");return`${a}-${h}-${m}`},p={name:r.name,height:l.height,currentWeight:l.currentWeight,desiredWeight:l.desiredWeight,birthday:l.birthday?v(l.birthday):"",blood:String(l.blood),sex:l.sex,levelActivity:String(l.levelActivity)},N={name:r.name,height:0,currentWeight:0,desiredWeight:0,birthday:"",blood:"",sex:"",levelActivity:""},f=(i,a)=>{const h=Object.keys(i),m={};return h.forEach(x=>{const b=i[x],S=a[x];b!==S&&(m[x]=b)}),m},j=i=>{const{height:a,currentWeight:h,desiredWeight:m,birthday:x,sex:b}=i,S=Number(i.blood),D=Number(i.levelActivity),P=v(x),w={height:a,currentWeight:h,desiredWeight:m,birthday:P,sex:b,blood:S,levelActivity:D},W=f(w,l);Object.keys(W).length===0&&Object.keys(l).length>0?o(!1):r.name===i.name?Object.keys(l).length>0?d(T(W)):d(Q(w)):r.name!==i.name&&d(Y({name:i.name}))},A=()=>{o(!0)};return C.useEffect(()=>{Object.keys(l).length>0&&o(!0),o(!1)},[l]),e.jsx("div",{className:s("UserFrom__container"),children:e.jsx(q,{initialValues:Object.keys(l).length>0?p:N,validationSchema:Pe,onSubmit:j,children:({errors:i,touched:a})=>e.jsxs(V,{onChange:A,children:[e.jsxs("div",{className:s("basic__infoNameContainer"),children:[e.jsxs("div",{className:s("basic__infoName"),children:[e.jsx("label",{children:"Basic info"}),e.jsx(t,{name:"name",className:s("input",{error:i.name&&a.name},{success:!i.name&&a.name})}),i.name&&a.name?e.jsxs("div",{className:s({errorLabel:i.name&&a.name}),children:[e.jsx(n,{iconId:"icon-checkbox-circle",w:16,h:16,customStyles:{marginRight:4,fill:"#D80027"}}),e.jsx("span",{children:i.name})]}):null,!i.name&&a.name?e.jsxs("div",{className:s({successLabel:!i.name&&a.name}),children:[e.jsx(n,{iconId:"icon-checkbox-circle",w:16,h:16,customStyles:{marginRight:4,fill:"#3CBF61"}}),e.jsx("span",{children:"Success name"})]}):null]}),e.jsx("div",{className:s("basic__infoMail"),children:e.jsx(t,{type:"email",name:"email",readOnly:!0,placeholder:`${r.email}`,className:s("input","disabled")})})]}),e.jsxs("div",{className:s("basic__infoInputContainer"),children:[e.jsxs("div",{className:s("basic__info"),children:[e.jsx("label",{children:"Height"}),e.jsx(t,{type:"number",name:"height",className:s("input",{error:i.height&&a.height},{success:!i.height&&a.height})}),i.height&&a.height?e.jsxs("div",{className:s({errorLabel:i.height&&a.height}),children:[e.jsx(n,{iconId:"icon-checkbox-circle",w:16,h:16,customStyles:{marginRight:4,fill:"#D80027"}}),e.jsx("span",{children:i.height})]}):null,!i.height&&a.height?e.jsxs("div",{className:s({successLabel:!i.height&&a.height}),children:[e.jsx(n,{iconId:"icon-checkbox-circle",w:16,h:16,customStyles:{marginRight:4,fill:"#3CBF61"}}),e.jsx("span",{children:"Success height"})]}):null]}),e.jsxs("div",{className:s("basic__info"),children:[e.jsx("label",{children:"Current Weight"}),e.jsx(t,{type:"number",name:"currentWeight",className:s("input",{error:i.currentWeight&&a.currentWeight},{success:!i.currentWeight&&a.currentWeight})}),i.currentWeight&&a.currentWeight?e.jsxs("div",{className:s({errorLabel:i.currentWeight&&a.currentWeight}),children:[e.jsx(n,{iconId:"icon-checkbox-circle",w:16,h:16,customStyles:{marginRight:4,fill:"#D80027"}}),e.jsx("span",{children:i.currentWeight})]}):null,!i.currentWeight&&a.currentWeight?e.jsxs("div",{className:s({successLabel:!i.currentWeight&&a.currentWeight}),children:[e.jsx(n,{iconId:"icon-checkbox-circle",w:16,h:16,customStyles:{marginRight:4,fill:"#3CBF61"}}),e.jsx("span",{children:"Success current weight"})]}):null]}),e.jsxs("div",{className:s("basic__info"),children:[e.jsx("label",{children:"Desired Weight"}),e.jsx(t,{type:"number",name:"desiredWeight",className:s("input",{error:i.desiredWeight&&a.desiredWeight},{success:!i.desiredWeight&&a.desiredWeight})}),i.desiredWeight&&a.desiredWeight?e.jsxs("div",{className:s({errorLabel:i.desiredWeight&&a.desiredWeight}),children:[e.jsx(n,{iconId:"icon-checkbox-circle",w:16,h:16,customStyles:{marginRight:4,fill:"#D80027"}}),e.jsx("span",{children:i.desiredWeight})]}):null,!i.desiredWeight&&a.desiredWeight?e.jsxs("div",{className:s({successLabel:!i.desiredWeight&&a.desiredWeight}),children:[e.jsx(n,{iconId:"icon-checkbox-circle",w:16,h:16,customStyles:{marginRight:4,fill:"#3CBF61"}}),e.jsx("span",{children:"Success desired weight"})]}):null]}),e.jsx("div",{className:s("basic__info"),children:e.jsx("div",{className:s("basic__calendary"),children:e.jsx(t,{type:"date",name:"birthday",className:s("input","bdInput"),style:{marginBottom:0,marginTop:22}})})})]}),e.jsxs("div",{className:s("blood__containerParent"),children:[e.jsxs("div",{children:[e.jsx("label",{className:s("label__blood"),children:"Blood"}),e.jsxs("div",{className:s("blood__container"),style:{marginBottom:8},children:[e.jsxs("label",{children:[e.jsx(t,{type:"radio",id:"blood1",name:"blood",value:"1",className:s("radioBtn")}),e.jsx("span",{className:s("customRadioBtn")}),e.jsx("p",{className:s("circle"),children:"1"})]}),e.jsxs("label",{htmlFor:"blood2",children:[e.jsx(t,{type:"radio",id:"blood2",name:"blood",value:"2",className:s("radioBtn")}),e.jsx("span",{className:s("customRadioBtn")}),e.jsx("p",{className:s("circle"),children:"2"})]}),e.jsxs("label",{htmlFor:"blood3",children:[e.jsx(t,{type:"radio",id:"blood3",name:"blood",value:"3",className:s("radioBtn")}),e.jsx("span",{className:s("customRadioBtn")}),e.jsx("p",{className:s("circle"),children:"3"})]}),e.jsxs("label",{htmlFor:"blood4",children:[e.jsx(t,{type:"radio",id:"blood4",name:"blood",value:"4",className:s("radioBtn")}),e.jsx("span",{className:s("customRadioBtn")}),e.jsx("p",{className:s("circle"),children:"4"})]})]}),i.blood&&a.blood?e.jsxs("div",{className:s({errorLabel:i.blood&&a.blood}),children:[e.jsx(n,{iconId:"icon-checkbox-circle",w:16,h:16,customStyles:{marginRight:4,fill:"#D80027"}}),e.jsx("span",{children:i.blood})]}):null,!i.blood&&a.blood?e.jsxs("div",{className:s({successLabel:!i.blood&&a.blood}),children:[e.jsx(n,{iconId:"icon-checkbox-circle",w:16,h:16,customStyles:{marginRight:4,fill:"#3CBF61"}}),e.jsx("span",{children:"Success blood"})]}):null]}),e.jsx("div",{className:s("sex__container"),children:e.jsxs("div",{className:s("sex__wrapper"),children:[e.jsxs("div",{className:s("sex__checkbox-wrapper"),children:[e.jsxs("label",{className:s("sex__label"),children:[e.jsx(t,{type:"radio",name:"sex",value:"male",className:s("radioBtn")}),e.jsx("span",{className:s("customRadioBtn")}),e.jsx("p",{className:s("circle"),children:"Male"})]}),e.jsxs("label",{className:s("sex__label"),children:[e.jsx(t,{type:"radio",name:"sex",value:"female",className:s("radioBtn")}),e.jsx("span",{className:s("customRadioBtn")}),e.jsx("p",{className:s("circle"),children:"Female"})]})]}),i.sex&&a.sex?e.jsxs("div",{className:s({errorLabel:i.sex&&a.sex}),children:[e.jsx(n,{iconId:"icon-checkbox-circle",w:16,h:16,customStyles:{marginRight:4,fill:"#D80027"}}),e.jsx("span",{children:i.sex})]}):null,!i.sex&&a.sex?e.jsxs("div",{className:s({successLabel:!i.sex&&a.sex}),children:[e.jsx(n,{iconId:"icon-checkbox-circle",w:16,h:16,customStyles:{marginRight:4,fill:"#3CBF61"}}),e.jsx("span",{children:"Success sex"})]}):null]})})]}),e.jsxs("div",{className:s("levelActivity__container"),children:[e.jsxs("label",{className:s("levelActivity__label"),htmlFor:"levelActivity1",children:[e.jsx(t,{type:"radio",id:"levelActivity1",name:"levelActivity",value:"1",className:s("radioBtn")}),e.jsx("span",{className:s("customRadioBtn")}),e.jsx("p",{className:s("circle"),children:"Sedentary lifestyle (little or no physical activity)"})]}),e.jsxs("label",{className:s("levelActivity__label"),htmlFor:"levelActivity2",children:[e.jsx(t,{type:"radio",id:"levelActivity2",name:"levelActivity",value:"2",className:s("radioBtn")}),e.jsx("span",{className:s("customRadioBtn")}),e.jsx("p",{className:s("circle"),children:"Light activity (light exercises/sports 1-3 days per week)"})]}),e.jsxs("label",{className:s("levelActivity__label"),htmlFor:"levelActivity3",children:[e.jsx(t,{type:"radio",id:"levelActivity3",name:"levelActivity",value:"3",className:s("radioBtn")}),e.jsx("span",{className:s("customRadioBtn")}),e.jsx("p",{className:s("circle"),children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]}),e.jsxs("label",{className:s("levelActivity__label"),htmlFor:"levelActivity4",children:[e.jsx(t,{type:"radio",id:"levelActivity4",name:"levelActivity",value:"4",className:s("radioBtn")}),e.jsx("span",{className:s("customRadioBtn")}),e.jsx("p",{className:s("circle"),children:"Very active (intense exercises/sports 6-7 days per week)"})]}),e.jsxs("label",{className:s("levelActivity__label"),htmlFor:"levelActivity5",children:[e.jsx(t,{type:"radio",id:"levelActivity5",name:"levelActivity",value:"5",className:s("radioBtn")}),e.jsx("span",{className:s("customRadioBtn")}),e.jsx("p",{className:s("circle"),children:"Extremely active (very strenuous exercises/sports and physical work)"})]}),i.levelActivity&&a.levelActivity?e.jsxs("div",{className:s({errorLabel:i.levelActivity&&a.levelActivity}),children:[e.jsx(n,{iconId:"icon-checkbox-circle",w:16,h:16,customStyles:{marginRight:4,fill:"#D80027"}}),e.jsx("span",{children:i.levelActivity})]}):null,!i.levelActivity&&a.levelActivity?e.jsxs("div",{className:s({successLabel:!i.levelActivity&&a.levelActivity}),children:[e.jsx(n,{iconId:"icon-checkbox-circle",w:16,h:16,customStyles:{marginRight:4,fill:"#3CBF61"}}),e.jsx("span",{children:"Success level activity"})]}):null]}),e.jsx("div",{children:e.jsx(E,{label:"Save",type:"submit",isDisabled:!_})})]})})})},$e="_Profile__Settings_8swpo_1",Ue="_Profile__SettingsContainer_8swpo_6",Oe="_container_8swpo_10",qe={Profile__Settings:$e,Profile__SettingsContainer:Ue,container:Oe,"decorative-line":"_decorative-line_8swpo_32"},y=B.bind(qe),Ee=()=>{const l=L.useMediaQuery({minWidth:768})?{marginTop:72}:{marginTop:40};return e.jsx("div",{className:y("Profile__Settings"),children:e.jsxs("div",{className:y("Profile__SettingsContainer"),children:[e.jsx(H,{title:"Profile Settings",customContainerStyles:l}),e.jsxs("div",{className:y("container"),children:[e.jsx(de,{}),e.jsx("div",{className:y("decorative-line")}),e.jsx(Me,{})]})]})})};export{Ee as default};
