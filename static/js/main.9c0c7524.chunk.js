(this.webpackJsonpenable_dark_mode=this.webpackJsonpenable_dark_mode||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),o=a(4),s=a.n(o),r=a(2),l=a(0);var i=function(e){return e.alert&&Object(l.jsxs)("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",children:[e.alert.type,":",e.alert.msg]})};function b(e){return Object(l.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:[Object(l.jsx)("a",{className:"navbar-brand",href:"/",children:"Dark-Mode"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(l.jsx)("li",{className:"nav-item active",children:Object(l.jsxs)("a",{className:"nav-link",href:"/",children:[e.home," ",Object(l.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:"/",children:e.aboutText})})]}),Object(l.jsxs)("div",{className:"custom-control custom-switch text-".concat("dark"===e.mode?"light":"dark"),children:[Object(l.jsx)("input",{type:"checkbox",onClick:e.toggleMode,className:"custom-control-input",id:"customSwitch1"}),Object(l.jsx)("label",{className:"custom-control-label",htmlFor:"customSwitch1",children:"Enable Dark Mode"})]})]})]})}function d(e){var t=Object(c.useState)({color:"red",backgroundColor:"black"}),a=Object(r.a)(t,2),n=a[0],o=a[1],s=Object(c.useState)("Enable Light Mode"),i=Object(r.a)(s,2),b=i[0],d=i[1],u=Object(c.useState)("Delete and start writing"),m=Object(r.a)(u,2),j=m[0],h=m[1];return Object(l.jsxs)("div",{className:"container",style:n,children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"myBox",className:"form-label",children:e.heading}),Object(l.jsx)("textarea",{className:"form-control",style:n,value:j,onChange:function(e){h(),h(e.target.value)},id:"myBox",rows:"15"})]}),Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){console.log("onclickpressed");var t=j.toUpperCase();h(t),e.showAlert(" Letter succesfully converted to uppercase","Success")},children:"Cover To UpperCase"}),Object(l.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("onclickpressed");var t=j.toLowerCase();h(t),e.showAlert(" Letter succesfully converted to lowercase","Success")},children:"Cover To LowerCase"}),Object(l.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){"red"===n.color?(o({color:"black",backgroundColor:"white"}),d("Enable Dark Mode"),e.showAlert(" Light mode on textarea enabled","Success")):(o({color:"red",backgroundColor:"black"}),d("Enable Light Mode"),e.showAlert(" Dark mode on textarea enabled","Success"))},children:b}),Object(l.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert(" Letter succesfully copied","Success")},children:"Copy"})]})}var u=function(){var e=Object(c.useState)("light"),t=Object(r.a)(e,2),a=t[0],n=t[1],o=Object(c.useState)(null),s=Object(r.a)(o,2),u=s[0],m=s[1],j=function(e,t){m({msg:e,type:t}),setTimeout((function(){m(null)}),1500)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{home:"HOME",mode:a,toggleMode:function(){"dark"===a?(n("light"),document.body.style.backgroundColor="white",j(" Light mode enabled","Success")):(n("dark"),document.body.style.backgroundColor="#042743",j(" Dark mode enabled","Success"))},aboutText:"ABOUT"}),Object(l.jsx)(i,{alert:u}),Object(l.jsx)("div",{className:"container my-3",children:Object(l.jsx)(d,{showAlert:j,heading:"Enter the text to analyse",mode:a})})]})};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.9c0c7524.chunk.js.map