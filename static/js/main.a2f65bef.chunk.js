(this.webpackJsonpmyprofile=this.webpackJsonpmyprofile||[]).push([[0],{64:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),c=a(17),i=a.n(c),r=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,89)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))},l=a(41),o=a.n(l),d=a(3);var j=function(e){var t=Object(s.useContext)(M);return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"cover-bg p-3 p-lg-4 text-white",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-lg-4 col-md-5",children:Object(d.jsx)("div",{className:"avatar hover-effect bg-white shadow-sm p-1",children:Object(d.jsx)("img",{src:"static/images/avatar.jpg",width:"200",height:"200",alt:"User name"})})}),Object(d.jsxs)("div",{className:"col-lg-8 col-md-7 text-center text-md-start",children:[Object(d.jsx)("h2",{className:"h1 mt-2","data-aos":"fade-left","data-aos-delay":"0",children:t.name}),Object(d.jsx)("p",{"data-aos":"fade-left","data-aos-delay":"100",children:t.designation}),Object(d.jsxs)("div",{className:"d-print-none","data-aos":"fade-left","data-aos-delay":"200",children:[Object(d.jsx)("a",{className:"btn btn-light text-dark shadow-sm mt-1 me-1",href:t.cv_link,target:"_blank",rel:"noopener noreferrer",children:"Download CV"}),Object(d.jsx)("a",{className:"btn btn-success shadow-sm mt-1",href:"#contact",children:"Hire Me"})]})]})]})})})};var m=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"col-sm-4",children:Object(d.jsx)("div",{className:"pb-1",children:e.title})}),Object(d.jsx)("div",{className:"col-sm-8",children:Object(d.jsx)("div",{className:"pb-1 text-secondary",children:e.datavalue})})]})};var b=function(){var e=Object(s.useContext)(M);return Object(d.jsx)("div",{className:"about-section pt-4 px-3 px-lg-4 mt-1",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-md-6",children:[Object(d.jsx)("h2",{className:"h3 mb-3",children:"About Me"}),Object(d.jsx)("p",{style:{textAlign:"justify"},children:e.about_me})]}),Object(d.jsx)("div",{className:"col-md-5 offset-md-1",children:Object(d.jsxs)("div",{className:"row mt-4",children:[Object(d.jsx)(m,{title:"Age",datavalue:e.age}),Object(d.jsx)(m,{title:"Experience",datavalue:e.totalExperience}),Object(d.jsx)(m,{title:"Email",datavalue:e.emailId}),Object(d.jsx)(m,{title:"Address",datavalue:e.address})]})})]})})};var h=function(){return Object(d.jsx)("hr",{className:"d-print-none"})};var u=function(e){return Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsxs)("span",{children:[" ",e.title," "]}),Object(d.jsx)("div",{className:"progress my-1",children:Object(d.jsx)("div",{className:"progress-bar bg-primary",role:"progressbar","data-aos":"zoom-in-right","data-aos-delay":"200","data-aos-anchor":".skills-section",style:{width:e.percentage+"%"},"aria-valuenow":e.percentage,"aria-valuemin":"0","aria-valuemax":"100"})})]})};function x(e){return Object(d.jsx)("div",{className:"col-md-6",children:e.children})}var O=function(){var e=Object(s.useContext)(M).professionalSkills.map((function(e,t){return Object(d.jsx)(x,{children:Object(d.jsx)(u,{title:e.skillName,percentage:e.rating})},t)}));return Object(d.jsxs)("div",{className:"skills-section px-3 px-lg-4",children:[Object(d.jsx)("h2",{className:"h3 mb-3",children:"Professional Skills"}),Object(d.jsx)("div",{className:"row",children:e})]})},p=a(19);function v(e){var t=e.details.map((function(e,t){return Object(d.jsx)("li",{children:e},t)}));return Object(d.jsx)("ul",{children:t})}var g=function(e){return Object(d.jsx)("div",{className:"timeline-card timeline-card-primary card shadow-sm",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("div",{className:"h5 mb-1",children:[e.title,Object(d.jsxs)("span",{className:"text-muted h6",children:[" ",e.subtitle," "]})]}),Object(d.jsx)("div",{className:e.details?"text-muted text-small mb-2":"text-muted text-small",children:e.timeperiod}),e.details&&Object(d.jsx)("div",{children:Object(d.jsx)(v,{details:e.details})})]})})};var f=function(){var e=Object(s.useContext)(M).workExperience.map((function(e,t){return Object(s.createElement)(g,Object(p.a)(Object(p.a)({},e),{},{key:t}))}));return Object(d.jsxs)("div",{className:"work-experience-section px-3 px-lg-4",children:[Object(d.jsx)("h2",{className:"h3 mb-4",children:"Work Experience"}),Object(d.jsx)("div",{className:"timeline",children:e})]})};var N=function(){return Object(d.jsx)("div",{className:"page-break"})};var y=function(){var e=Object(s.useContext)(M).educationList.map((function(e,t){return Object(s.createElement)(g,Object(p.a)(Object(p.a)({},e),{},{key:t}))}));return Object(d.jsxs)("div",{className:"education-section px-3 px-lg-4",children:[Object(d.jsx)("h2",{className:"h3 mb-4",children:"Education"}),Object(d.jsx)("div",{className:"timeline",children:e})]})},k=a(26),w=a(86),C=a(87),S=a(43).a.initializeApp({apiKey:"AIzaSyA2YgiOehWOft3xNapHvirHqf2cgmkOGQw",authDomain:"codingloop-21c8d.firebaseapp.com",databaseURL:"https://codingloop-21c8d-default-rtdb.firebaseio.com",projectId:"codingloop-21c8d",storageBucket:"codingloop-21c8d.appspot.com",messagingSenderId:"47361600162",appId:"1:47361600162:web:6dc18c9f7edb65d5e505fb",measurementId:"G-CZXBXN4C6P"}).database().ref();function I(e){return Object(d.jsx)(w.a,Object(p.a)({elevation:6,variant:"filled"},e))}var A=function(){var e=Object(s.useState)(""),t=Object(k.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(""),i=Object(k.a)(c,2),r=i[0],l=i[1],o=Object(s.useState)(""),j=Object(k.a)(o,2),m=j[0],b=j[1],h=Object(s.useState)(!1),u=Object(k.a)(h,2),x=u[0],O=u[1],p=Object(s.useState)(""),v=Object(k.a)(p,2),g=v[0],f=v[1],N=Object(s.useState)(""),y=Object(k.a)(N,2),w=y[0],A=y[1],E=Object(s.useContext)(M),P=function(){O(!1)};return Object(d.jsxs)("div",{className:"contant-section px-3 px-lg-4 pb-4",id:"contact",children:[Object(d.jsx)("h2",{className:"h3 text mb-3",children:"Contact"}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-7 d-print-none",children:Object(d.jsx)("div",{className:"my-2",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),S.child("profile-communications").push({name:a,emailId:r,message:m},(function(e){e?(console.log(e),f("Error occured while sending message, please try again"),A("error")):(n(""),l(""),b(""),f("Message sent successfully"),A("success")),O(!0)}))},children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-6",children:Object(d.jsx)("input",{className:"form-control",type:"text",id:"name",value:a,onChange:function(e){return n(e.target.value)},name:"name",placeholder:"Your Name",required:!0})}),Object(d.jsx)("div",{className:"col-6",children:Object(d.jsx)("input",{className:"form-control",type:"email",id:"email",value:r,onChange:function(e){return l(e.target.value)},name:"_replyto",placeholder:"Your E-mail",required:!0})})]}),Object(d.jsx)("div",{className:"form-group my-2",children:Object(d.jsx)("textarea",{className:"form-control",style:{resize:"none"},id:"message",value:m,onChange:function(e){return b(e.target.value)},name:"message",rows:"4",placeholder:"Your Message",required:!0})}),Object(d.jsx)("button",{className:"btn btn-primary mt-2",type:"submit",children:"Send"})]})})}),Object(d.jsx)("div",{className:"col",children:Object(d.jsxs)("div",{className:"mt-2",children:[Object(d.jsx)("h3",{className:"h6",children:"Address"}),Object(d.jsx)("div",{className:"pb-2 text-secondary",children:E.address}),Object(d.jsx)("h3",{className:"h6",children:"Email"}),Object(d.jsx)("div",{className:"pb-2 text-secondary",children:E.emailId})]})})]}),Object(d.jsx)(C.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:x,autoHideDuration:6e3,onClose:P,children:Object(d.jsx)(I,{onClose:P,severity:w,children:g})})]})};var E=function(e){return Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("div",{className:"h5 mb-1",children:Object(d.jsx)("a",{href:e.verifyLink||null,children:e.title})}),Object(d.jsxs)("span",{className:"text-muted h6",children:[" ",e.issuedBy," "]})]})})};var P=function(e){var t=Object(s.useContext)(M).licencesAndCerts.map((function(e,t){return Object(s.createElement)(E,Object(p.a)(Object(p.a)({},e),{},{key:t}))}));return Object(d.jsxs)("div",{className:"education-section px-3 px-lg-4 pb-4",children:[Object(d.jsx)("h2",{className:"h3 mb-4",children:"Licenses & Certifications"}),Object(d.jsx)("div",{className:"card shadow-sm",children:Object(d.jsx)("div",{className:"row",children:t})})]})};var B=function(e){return Object(d.jsx)("div",{className:"page-content",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"cover shadow-lg bg-white",children:[Object(d.jsx)(j,{}),Object(d.jsx)(b,{}),Object(d.jsx)(h,{}),Object(d.jsx)(O,{}),Object(d.jsx)(h,{}),Object(d.jsx)(f,{}),Object(d.jsx)(h,{}),Object(d.jsx)(N,{}),Object(d.jsx)(y,{}),Object(d.jsx)(h,{}),Object(d.jsx)(P,{}),Object(d.jsx)(h,{}),Object(d.jsx)(A,{})]})})})};var L=function(e){return Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsxs)("a",{className:"nav-link",href:e.pagelink,title:e.title,children:[Object(d.jsx)("i",{className:e.iclass}),Object(d.jsxs)("span",{className:"menu-title sr-only",children:[" ",e.title," "]})]})})};var z=function(){var e=Object(s.useContext)(M),t=e.name,a=e.navigations.map((function(e,t){return Object(d.jsx)(L,{title:e.title,pagelink:e.pagelink,iclass:e.iclass},t)}));return Object(d.jsx)("header",{className:"d-print-none",children:Object(d.jsx)("div",{className:"container text-center text-lg-left",children:Object(d.jsxs)("div",{className:"py-3 clearfix",children:[Object(d.jsxs)("h1",{className:"site-title mb-0",children:[" ",t," "]}),Object(d.jsx)("div",{className:"site-nav",children:Object(d.jsx)("nav",{role:"navigation",children:Object(d.jsx)("ul",{className:"nav justify-content-center",children:a})})})]})})})};var D=function(e){var t=Object(s.useContext)(M),a=t.navigations.map((function(e,t){return Object(d.jsx)(L,{title:e.title,pagelink:e.pagelink,iclass:e.iclass},t)}));return Object(d.jsx)("footer",{className:"pt-4 pb-4 text-muted text-center d-print-none",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"my-3",children:[Object(d.jsx)("div",{className:"h4",children:t.name}),Object(d.jsx)("div",{className:"footer-nav",children:Object(d.jsx)("nav",{role:"navigation",children:Object(d.jsx)("ul",{className:"nav justify-content-center",children:a})})})]})})})},F={name:"Ishwar Bhat",age:26,emailId:"ishwar.13cs045@email.com",totalExperience:"3 years 3 months",contactNo:"9449517518",address:"Yellapura, Karnataka - 581347 IN",designation:"Software Engineer",cv_link:"",about_me:"Hello! I\u2019m Ishwar Bhat. I am passionate programmer who loves to code. I have more than 3 years of experience, specializing in Object-Oriented Design. Strong engineering professional in shaping business needs into engineering solutions by guaranteeing high quality of code, accessibility, security and scalability.",navigations:[{title:"Github",pagelink:"https://github.com/coding-loop",iclass:"fab fa-github"},{title:"LinkedIn",pagelink:"https://linkedin.com/in/ishwar-bhat-b78b51146",iclass:"fab fa-linkedin"}],professionalSkills:[{skillName:"Python",rating:"95"},{skillName:"Java",rating:"70"},{skillName:"Django",rating:"90"},{skillName:"Javascript",rating:"90"},{skillName:"React JS",rating:"85"},{skillName:"Android",rating:"60"},{skillName:"Postgres",rating:"85"},{skillName:"HTML",rating:"80"},{skillName:"CSS",rating:"70"},{skillName:"Flutter",rating:"40"}],workExperience:[{title:"Software Engineer",subtitle:"At Soroco India Pvt. Ltd.",timeperiod:"Aug 2019 - Present",details:["Worked mainly in amazon internal developer environment","Design, develop and deployment of dashboard for reconciliation","Implementation of monitoring dashboards and cloudwatch setups","Development of components in python to handle and manage ticketing / case management systems through API\u2019s","Implementation of health monitoring for hardwares and warehouse services","End to end setup of amazon\u2019s apollo environments","Automation of package updates through quilt pipelines"]},{title:"Software Engineer",subtitle:"Freelancer in startup",timeperiod:"Feb 2018 - Jun 2019",details:["Worked as an ABAP and python developer","Design and development of web applications using django","Maintaining and enhancing SAP SRM systems","Development of application to create and maintain complex organizational structures","Enhancing the e-procurement tools in existing applications"]}],educationList:[{title:"Computer science and engineering",subtitle:"From Global Academy of Technology",timeperiod:"2013 - 2017",details:""}],licencesAndCerts:[{title:"Python - Advanced",issuedBy:"Issued by Cutshort",verifyLink:"https://cutshort.io/certificate/46400"},{title:"Writing Testable Code for ABAP",issuedBy:"Issued by SAP",verifyLink:"https://open.sap.com/verify/xiret-zumut-pymit-lodek-cetad"},{title:"Virtualization for Beginners",issuedBy:"Issued by VMWare",verifyLink:"https://www.credly.com/badges/31411a86-9f9b-44e4-ba9b-0af7eefd4cf1"}]},M=n.a.createContext();var q=function(e){return Object(s.useEffect)((function(){o.a.init({anchorPlacement:"top-left",duration:1e3})}),[]),Object(d.jsx)(M.Provider,{value:F,children:Object(d.jsxs)("div",{children:[Object(d.jsx)(z,{}),Object(d.jsx)(B,{}),Object(d.jsx)(D,{})]})})};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(q,{})}),document.getElementById("root")),r()}},[[64,1,2]]]);
//# sourceMappingURL=main.a2f65bef.chunk.js.map