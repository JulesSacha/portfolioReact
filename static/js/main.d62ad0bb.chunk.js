(this["webpackJsonpreact-cv"]=this["webpackJsonpreact-cv"]||[]).push([[0],{38:function(e,t,s){},39:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(22),i=s.n(n),r=s(7),o=s(2),l=s(8),j=s(20),d=s(24),u=s(0),b=!1,h={current:0,prevPosition:10,startPosition:0},m={current:0,prevPosition:0,startPosition:0};var x=function(e){var t=e.children,s=e.cubeSize,a=void 0===s?"300px":s,n=e.reveal,i=void 0!==n&&n,r=e.viewportSize,o=void 0===r?"350px":r,l=Object(d.a)(e,["children","cubeSize","reveal","viewportSize"]),x=Object(c.useRef)(null);Object(c.useLayoutEffect)((function(){var e=x.current.style;e.setProperty("--cube-size",a),e.setProperty("--viewport-size",o)}),[]),Object(c.useLayoutEffect)((function(){var e=x.current,t=a.split(/(\d+)/),s=t[1]/2+t[2];if(i){var c=getComputedStyle(e).getPropertyValue("--translateZ"),n=parseInt(c);s=-(n+.25*n)+t[2]}e.style.setProperty("--translateZ",s)}),[i]);var O=function(e){h.startPosition=e.clientX,m.startPosition=e.clientY},p=function(){if(h.startPosition||m.startPosition){var e=Math.abs(m.current%360);b=e>=90&&e<=270,h.startPosition=m.startPosition=0,h.prevPosition=h.current,m.prevPosition=m.current}},f=function(e){if(h.startPosition||m.startPosition){var t=e.clientX-h.startPosition,s=e.clientY-m.startPosition,c=b?h.prevPosition-t:h.prevPosition+t,a=m.prevPosition-s,n=c>h.current+15||c<h.current-15,i=a>m.current+15||a<m.current-15;(n||i)&&(h.current=c,m.current=a,function(e,t){var s=x.current.style;s.setProperty("--x",e+"deg"),s.setProperty("--y",t+"deg")}(c,a))}};return Object(u.jsx)("div",Object(j.a)(Object(j.a)({},l),{},{children:Object(u.jsx)("div",{id:"-cube-viewport",onMouseDownCapture:O,onMouseMoveCapture:f,onMouseUpCapture:p,onMouseOutCapture:p,onTouchStartCapture:function(e){return O(e.changedTouches[0])},onTouchMoveCapture:function(e){return f(e.changedTouches[0])},onTouchEndCapture:p,ref:x,children:Object(u.jsx)("div",{id:"-cube-axis",children:t.map((function(e,t){return Object(u.jsx)("div",{className:"-cube-side",id:"-cube-side-".concat(t),children:e},String(t))}))})})}))};var O=function(){return Object(u.jsxs)("svg",{viewBox:"0 80 160 150",xmlns:"http://www.w3.org/2000/svg",className:"icon",children:[Object(u.jsxs)("defs",{children:[Object(u.jsx)("path",{id:"d",className:"svg-elem-1",d:"M-236.107 573.402h164.6V724.51h-164.6z"}),Object(u.jsx)("path",{id:"c",className:"svg-elem-2",d:"M-254.995 597.688h186.187v149.759h-186.187z"}),Object(u.jsx)("path",{id:"b",className:"svg-elem-3",d:"M-215.869 470.865H16.19v265.789h-232.059z"}),Object(u.jsxs)("linearGradient",{id:"a",children:[Object(u.jsx)("stop",{offset:0}),Object(u.jsx)("stop",{offset:1,stopOpacity:0})]})]}),Object(u.jsx)("rect",{width:89.243,height:87.458,x:33.912,y:108.341,ry:15.707,className:"svg-elem-4",fill:"#5061cd",fillOpacity:.707}),Object(u.jsx)("text",{style:{lineHeight:1.25,whiteSpace:"pre",inlineSize:55.6875},x:-63.898,y:197.762,fontWeight:400,fontSize:50.8,fontFamily:"sans-serif",stroke:"#000",strokeWidth:.265,strokeDasharray:".265,.53",children:Object(u.jsx)("tspan",{x:-63.898,y:197.762})}),Object(u.jsx)("rect",{width:89.243,height:87.458,x:44.978,y:118.871,ry:15.707,className:"svg-elem-8",fill:"#5271ff",fillOpacity:.706}),Object(u.jsx)("text",{transform:"matrix(1.07447 0 0 1.07447 333.879 -458.275)",fontSize:40,fontFamily:"Fredoka One",fill:"#ececec",children:Object(u.jsx)("tspan",{x:-236.107,y:610.601,children:"JF"})})]})};var p=function(){var e=document.body.style,t=Object(c.useState)(""),s=Object(l.a)(t,2),a=(s[0],s[1]),n=Object(c.useState)(!1),i=Object(l.a)(n,2),r=i[0],o=i[1],j=function(e){var t=e.target;a(t.textContent)};return Object(u.jsx)("main",{children:Object(u.jsxs)(x,{className:"cube-viewport",cubeSize:"200px",onMouseDown:function(){e.setProperty("--cursor","grabbing")},onMouseUp:function(){e.setProperty("--cursor","grab")},onClick:function(){o((function(e){return!e}))},reveal:r,viewportSize:"350px",children:[Object(u.jsx)("section",{onDoubleClick:j,style:{background:"#b1e6f0"},children:Object(u.jsx)(O,{})}),Object(u.jsx)("section",{onClick:j,style:{background:"#5671E0"},children:Object(u.jsx)("h1",{children:"React JS"})}),Object(u.jsx)("section",{onClick:j,style:{background:"#5671E0"},children:Object(u.jsx)("h1",{children:"Wordpress"})}),Object(u.jsx)("section",{onClick:j,style:{background:"#5671E0"},children:Object(u.jsx)("h1",{children:"PHP/Symphony"})}),Object(u.jsx)("section",{onClick:j,style:{background:"#5671E0"},children:Object(u.jsx)("h1",{children:"Javascript"})}),Object(u.jsx)("section",{onClick:j,style:{background:"#5671E0"}})]})})};var f=function(){var e=document.getElementById("label-text"),t=document.body,s=document.getElementById("signature");t.classList.toggle("dark-mode"),s.classList.toggle("dark-mode-signature"),"Mode nuit"===e.innerText?e.innerText="Mode jour":e.innerText="Mode nuit"},v=s.p+"static/media/photo-cv-fond.79fb8eaa.jpg",g=function(){return Object(u.jsxs)("div",{className:"sidebar",children:[Object(u.jsx)("div",{className:"id",children:Object(u.jsxs)("div",{className:"idContent",children:[Object(u.jsx)("img",{src:v,width:"140px",height:"140px",alt:"Img de profil"}),"                    ",Object(u.jsx)("h3",{children:"Jules Fernsner"})]})}),Object(u.jsxs)("div",{className:"navigation",children:[Object(u.jsxs)("ul",{children:[Object(u.jsx)(r.b,{exact:!0,to:"/",activeClassName:"navActive",children:Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{className:"fa fa-home"}),Object(u.jsx)("span",{children:"Accueil"})]})}),Object(u.jsx)(r.b,{exact:!0,to:"/Competences",activeClassName:"navActive",children:Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{class:"fas fa-tools"}),Object(u.jsx)("span",{children:"Comp\xe9tences"})]})}),Object(u.jsx)(r.b,{exact:!0,to:"/Portfolio",activeClassName:"navActive",children:Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{class:"fas fa-project-diagram"}),Object(u.jsx)("span",{children:"Portfolio"})]})}),Object(u.jsx)(r.b,{exact:!0,to:"/Contact",activeClassName:"navActive",children:Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{class:"fas fa-link"}),Object(u.jsx)("span",{children:"Contact"})]})})]}),Object(u.jsxs)("label",{className:"label",children:[Object(u.jsxs)("div",{className:"toggle",children:[Object(u.jsx)("input",{className:"toggle-state",type:"checkbox",name:"check",value:"check",onClick:f}),Object(u.jsx)("div",{className:"indicator"})]}),Object(u.jsx)("div",{id:"label-text",children:"Mode nuit"})]})]})]})},y=function(){return Object(u.jsxs)("div",{className:"footer",children:[Object(u.jsx)("div",{id:"signature",children:Object(u.jsx)("h4",{children:"Jules Fernsner | D\xe9veloppeur web "})}),Object(u.jsx)("div",{className:"socialNetwork",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://www.google.com",target:"blank",rel:"noopener noreferrer",children:Object(u.jsx)("i",{className:"fab fa-linkedin"})})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://www.google.com",target:"blank",rel:"noopener noreferrer",children:Object(u.jsx)("i",{className:"fab fa-github"})})})]})})]})},N=function(){return Object(u.jsxs)("div",{className:"home",children:[Object(u.jsx)(g,{}),Object(u.jsx)(p,{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(y,{})]})},C=function(){return Object(u.jsxs)("div",{className:"experience",children:[Object(u.jsx)("h3",{children:"Autres comp\xe9tences"}),Object(u.jsx)("div",{className:"list",children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{className:"fas fa-check-square"})," UX/UI"]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{className:"fas fa-check-square"})," Git"]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{className:"fas fa-check-square"})," Integration WordPress / Cr\xe9ation de templates"]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{className:"fas fa-check-square"})," M\xe9thode AGILE / SCRUM"]})]})})]})},k=function(){return Object(u.jsxs)("div",{className:"CV",children:[Object(u.jsx)("h3",{children:"CV"}),Object(u.jsx)("div",{className:"pdf",children:Object(u.jsx)("a",{href:"./media/CV.pdf",target:"blank",children:"T\xe9l\xe9charger CV"})})]})},w=s(10),P=s(11),S=s(13),I=s(12),z=function(e){return console.log(e),Object(u.jsxs)("div",{className:e.className,children:[Object(u.jsx)("h3",{children:e.title}),Object(u.jsxs)("div",{className:"years",children:[Object(u.jsx)("span",{children:"Exp\xe9rience"}),Object(u.jsx)("span",{children:"6 mois"}),Object(u.jsx)("span",{children:"1 ans"})]}),Object(u.jsx)("div",{children:e.languages.map((function(e){var t=e.xp/1*100+"%";return Object(u.jsxs)("div",{className:"languagesList",children:[Object(u.jsx)("li",{children:e.value}),Object(u.jsx)("div",{className:"progressBar",style:{width:t}})]},e.id)}))})]})},M=function(e){Object(S.a)(s,e);var t=Object(I.a)(s);function s(){var e;Object(w.a)(this,s);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={languages:[{id:1,value:"Javascript",xp:.6},{id:2,value:"Php",xp:.8},{id:3,value:"SQL",xp:.8}],frameworks:[{id:1,value:"React.js",xp:.3},{id:2,value:"Symfony",xp:.6},{id:3,value:"Sass/Bootstrap",xp:.8}]},e}return Object(P.a)(s,[{key:"render",value:function(){var e=this.state,t=e.languages,s=e.frameworks;return Object(u.jsxs)("div",{className:"languagesFrameworks",children:[Object(u.jsx)(z,{className:"languagesDisplay",languages:t,title:"languages"}),Object(u.jsx)(z,{className:"frameworksDisplay",languages:s,title:"frameworks & biblioth\xe8ques"})]})}}]),s}(c.Component),E=function(){return Object(u.jsxs)("div",{className:"otherSkills",children:[Object(u.jsx)("h3",{children:"Formation"}),Object(u.jsx)("div",{className:"exp1",children:Object(u.jsx)("li",{children:"Web Force 3 - Strasbourg | D\xe9veloppement Web"})})]})},F=function(){return Object(u.jsxs)("div",{className:"knowledges",children:[Object(u.jsx)(g,{}),Object(u.jsxs)("div",{className:"knowledgesContent",children:[Object(u.jsx)(M,{}),Object(u.jsx)(C,{}),Object(u.jsx)(E,{}),Object(u.jsx)(k,{})]}),Object(u.jsx)(y,{})]})},T=[{id:1,name:"Talkngo",languages:["php","symfony"],languagesIcons:["fab fa-js","fab fa-symfony3-alt"],source:"http://www.github.com",info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.",picture:"./media/photo-cv.png"},{id:2,name:"Movizzz",languages:["javascript"],languagesIcons:["fab fa-js","fab fa-react"],source:"http://www.github.com",info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.",picture:"../media/movizzz.png"},{id:3,name:"Portfolio",languages:["javascript","react"],languagesIcons:["fab fa-js","fab fa-react"],source:"http://www.github.com",info:"",picture:"./media/talkngo.jpg"}],A=function(e){Object(S.a)(s,e);var t=Object(I.a)(s);function s(){var e;Object(w.a)(this,s);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={showInfo:!1},e.handleInfo=function(){e.setState({showInfo:!e.state.showInfo})},e}return Object(P.a)(s,[{key:"render",value:function(){var e=this.props.item,t=e.name,s=e.languagesIcons,c=e.source,a=e.info,n=e.picture;return Object(u.jsxs)("div",{className:"project",children:[Object(u.jsx)("img",{src:n,alt:"Img Projet",onClick:this.handleInfo}),Object(u.jsx)("div",{className:"icons",children:s.map((function(e){return Object(u.jsx)("i",{className:e},e)}))}),Object(u.jsx)("h3",{children:t}),Object(u.jsx)("span",{className:"infos",onClick:this.handleInfo,children:Object(u.jsx)("i",{className:"far fa-plus-square"})}),this.state.showInfo&&Object(u.jsx)("div",{className:"showInfos",children:Object(u.jsxs)("div",{className:"infosContent",children:[Object(u.jsxs)("div",{className:"head",children:[Object(u.jsx)("h2",{children:t}),Object(u.jsxs)("div",{className:"sourceCode",children:[Object(u.jsx)("a",{href:c,rel:"noopener noreferrer",className:"button",target:"blank",children:"Code source"}),Object(u.jsx)("br",{})]})]}),Object(u.jsx)("p",{className:"text",children:a}),Object(u.jsx)("div",{className:"button return",onClick:this.handleInfo,children:"Retourner sur la page"})]})})]})}}]),s}(c.Component),L=function(e){Object(S.a)(s,e);var t=Object(I.a)(s);function s(){var e;Object(w.a)(this,s);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={projects:T,radios:[{id:1,value:"javascript"},{id:2,value:"react"},{id:3,value:"php"},{id:4,value:"symfony"}],selectedRadio:"javascript"},e.handleRadio=function(t){var s=t.target.value;e.setState({selectedRadio:s})},e}return Object(P.a)(s,[{key:"render",value:function(){var e=this,t=this.state,s=t.projects,c=t.radios,a=t.selectedRadio;return Object(u.jsxs)("div",{className:"portfolioContent",children:[Object(u.jsx)("ul",{className:"radioDisplay",children:c.map((function(t){return Object(u.jsxs)("li",{children:[Object(u.jsx)("input",{type:"radio",id:t.value,name:"radios",checked:t.value===a,value:t.value,onChange:e.handleRadio}),Object(u.jsx)("label",{htmlFor:t.value,children:t.value})]},t.id)}))}),Object(u.jsx)("div",{className:"projects",children:s.filter((function(e){return e.languages.includes(a)})).map((function(e){return Object(u.jsx)(A,{item:e},e.id)}))})]})}}]),s}(c.Component),q=function(){return Object(u.jsxs)("div",{className:"portfolio",children:[Object(u.jsx)(g,{}),Object(u.jsx)(L,{}),Object(u.jsx)(y,{})]})},D=s(19),R=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),i=Object(l.a)(n,2),r=i[0],o=i[1],j=Object(c.useState)(""),d=Object(l.a)(j,2),b=d[0],h=d[1],m=Object(c.useState)(""),x=Object(l.a)(m,2),O=x[0],p=x[1],f=Object(c.useState)(""),v=Object(l.a)(f,2),g=v[0],y=v[1],N=function(e,t){window.emailjs.send("gmail",e,t).then((function(e){console.log("success !"),a(""),o(""),h(""),p(""),y("")})).catch((function(e){return document.querySelector(".form-message").innerHTML="Une erreur s'est produite, veuillez r\xe9essayer."}))};return Object(u.jsxs)("form",{className:"contact-form",children:[Object(u.jsxs)("div",{className:"form-content",children:[Object(u.jsx)("input",{type:"text",id:"name",name:"name",onChange:function(e){return a(e.target.value)},placeholder:"nom *",value:s,autoComplete:"off"}),Object(u.jsx)("input",{type:"text",id:"company",name:"company",onChange:function(e){return o(e.target.value)},placeholder:"soci\xe9t\xe9",value:r}),Object(u.jsx)("input",{type:"text",id:"phone",name:"phone",onChange:function(e){return h(e.target.value)},placeholder:"t\xe9l\xe9phone",value:b}),Object(u.jsxs)("div",{className:"email-content",children:[Object(u.jsx)("label",{id:"not-mail",children:"Email non valide"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"mail",id:"email",name:"email",onChange:function(e){return p(e.target.value)},placeholder:"email *",value:O,autoComplete:"off"})]}),Object(u.jsx)("textarea",{id:"message",name:"message",onChange:function(e){return y(e.target.value)},placeholder:"message *",value:g})]}),Object(u.jsx)("input",{className:"button",type:"button",value:"Envoyer",onClick:function(e){e.preventDefault(),N("template_7yolxyj",{name:s,company:r,phone:b,email:O,message:g})}}),Object(u.jsx)("div",{className:"form-message"})]})},W=function(){return Object(u.jsxs)("div",{className:"contact",children:[Object(u.jsx)(g,{}),Object(u.jsx)("div",{className:"contactContent",children:Object(u.jsxs)("div",{className:"contactBox",children:[Object(u.jsx)("h1",{children:"Contactez-moi !"}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{className:"fas fa-map-marker-alt"}),Object(u.jsx)("span",{children:"Strasbourg"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{className:"fas fa-mobile-alt"}),Object(u.jsx)(D.CopyToClipboard,{text:"+33 6 78 67 30 99",children:Object(u.jsx)("span",{className:"clickInput",onClick:function(){alert("T\xe9l\xe9phone copi\xe9")},children:"+33 6 78 67 30 99"})})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{className:"fas fa-envelope"}),Object(u.jsx)(D.CopyToClipboard,{text:"fernsner.j@gmail.com",children:Object(u.jsx)("span",{className:"clickInput",onClick:function(){alert("Email copi\xe9")},children:"fernsner.j@gmail.com"})})]})]}),Object(u.jsx)(R,{})]})}),Object(u.jsx)(y,{})]})},B=function(){return Object(u.jsx)("div",{className:"notFound",children:Object(u.jsxs)("div",{className:"notFoundContent",children:[Object(u.jsx)("h3",{children:"D\xe9sol\xe9, cette page n'existe pas..."}),Object(u.jsxs)(r.b,{exact:!0,to:"/",children:[Object(u.jsx)("i",{className:"fas fa-home"}),Object(u.jsx)("span",{children:"Acceuil"})]})]})})},J=function(){return"serviceWorker"in navigator&&navigator.serviceWorker.register("/serviceWorker.js"),Object(u.jsx)(r.a,{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/",exact:!0,component:N}),Object(u.jsx)(o.a,{path:"/competences",component:F}),Object(u.jsx)(o.a,{path:"/Portfolio",component:q}),Object(u.jsx)(o.a,{path:"/Contact",component:W}),Object(u.jsx)(o.a,{component:B})]})})},U=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,40)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};s(38);i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(J,{})}),document.getElementById("root")),U()}},[[39,1,2]]]);
//# sourceMappingURL=main.d62ad0bb.chunk.js.map