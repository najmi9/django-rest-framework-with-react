(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/ssh.eb799a21.md"},101:function(e,t,a){e.exports=a.p+"static/media/web_scraping.51c09c7b.md"},102:function(e,t,a){e.exports=a.p+"static/media/react_blog.242c7ce1.md"},103:function(e,t,a){e.exports=a.p+"static/media/fc_automate_post.5ef476c7.md"},105:function(e,t,a){e.exports=a(442)},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},18:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n="https://imad-najmi.herokuapp.com/api"},20:function(e,t,a){"use strict";var n=a(4),l=a(0),r=a.n(l),c=a(3),o=a(8),i=a(5),s=(a(135),function(e){e.className;return r.a.createElement("div",{className:"error500"},"Sorry ): ! Error 500. We will fix it as soon as possible !")}),m=a(21);t.a=function(e){var t=e.title,a=e.loading,u=e.error,d=e.Component,p=Object(l.useState)(!1),E=Object(n.a)(p,2),h=E[0],f=E[1];return console.log(a),Object(l.useEffect)((function(){u.request?(o.b.error("Network Error : "+u.message),f(!0)):500==u.status?(f(!0),o.b.error("Ooops! We are sorry, It's our bad!, an unexpected error happened !")):401==u.status?(o.b.error("Unthorized Request"+u.message),Object(i.a)("/login")):403==u.status&&(o.b.error("Forbidden !"+u.message),Object(i.a)("/login")),400==u.status?(o.b.error("Bad Request : "+u.message),console.log(u.response)):404==u.status&&o.b.error("Sorry ! requested resource Not Found ): 404")}),[u]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-page mt-5"},r.a.createElement(c.a,null,r.a.createElement("title",null,"najmi-imad.com| ",t," ")),!h&&!a&&r.a.createElement(d,null)),r.a.createElement("div",{className:"main-loader"},!h&&a&&r.a.createElement(m.a,null)),r.a.createElement("div",{className:"main-error"},h&&r.a.createElement(s,null)))}},21:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(){return l.a.createElement("spinning-dots",{style:{width:"200px",strokeWidth:"20px",color:"#535FF6"},dots:"8"})}},25:function(e,t,a){"use strict";a.d(t,"d",(function(){return u})),a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return p})),a.d(t,"a",(function(){return E}));var n=a(6),l=a.n(n),r=a(13),c=a(7),o=a.n(c),i=a(18),s=i.a+"/courses",m=i.a+"/chapters",u=function(){var e=Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(s);case 2:return t=e.sent,console.log(t),e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(s+"/"+t+"/data/");case 2:return a=e.sent,console.log(a),e.next=6,a.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(s+"/"+t+"/chapters/");case 2:return a=e.sent,e.t0=console,e.next=6,a;case 6:return e.t1=e.sent,e.t0.log.call(e.t0,e.t1),e.next=10,a.data;case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(m+"/"+t);case 2:return a=e.sent,e.t0=console,e.next=6,a;case 6:return e.t1=e.sent,e.t0.log.call(e.t0,e.t1),e.next=10,a.data;case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},33:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){var t=e.isVideo,a=e.media,n=e.title,r=e.width,c=e.height;return l.a.createElement("div",{className:"chapter-media text-center"},t&&l.a.createElement("video",{controls:!0,width:r,height:c},l.a.createElement("source",{src:a,type:"video/webm",width:r,height:c}),l.a.createElement("source",{src:a,type:"video/mp4",width:r,height:c})),!t&&l.a.createElement("img",{src:a,alt:n,width:r,height:c}))}},439:function(e,t,a){},440:function(e,t,a){},442:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),c=a.n(r),o=a(1),i=(a(110),a(111),a(112),a(3)),s=function(){return l.a.createElement("div",{className:"main-container"},l.a.createElement(i.a,null,l.a.createElement("title",null,"najmi-imad.com| Home")),l.a.createElement("div",{className:"card2",style:{position:"relative"}},l.a.createElement("div",{className:"div-image"},l.a.createElement("img",{src:"imgs/imad.jpg",className:"my-image"})),l.a.createElement("div",{className:"my-description"},l.a.createElement("h3",null,"Hi,"),l.a.createElement("p",null,"I'm Imad Najmi, I'm Web Developer, I am specialized in PHP, Symfony, Javascript, React and Python technologies."),l.a.createElement("p",null,"I am always learning more about my field to both stay current and to expand on my skills. "),l.a.createElement("button",{className:"btn"},"more about me"))),l.a.createElement("div",{className:"card1"},l.a.createElement("h3",{className:"artices"},"Recent Articles : "),l.a.createElement("div",{className:"post"},l.a.createElement(o.b,null,"How to Create a Technical Blog by using React, Markdown and Syntax Highlighter Code ?")),l.a.createElement("div",{className:"post"},l.a.createElement(o.b,null,"Implementation of Mercure Protocol With Symfony and Api Platform bundle")),l.a.createElement("div",{className:"post"},l.a.createElement(o.b,null,"Create posts automatically on Facebook with Selenium and Python")),l.a.createElement("div",{style:{position:"relative"}},l.a.createElement("button",{className:"btn"},"more articles..."))))},m=function(e){var t=e.history;return l.a.createElement("div",{className:"container bg-light border"},l.a.createElement(i.a,null,l.a.createElement("title",null,"najmi-imad.com| About me")),l.a.createElement("h1",null," my Name is Imad Najmi ! "),l.a.createElement("div",null,l.a.createElement("img",{src:"/imgs/najmi.jpg",width:"200px",height:"200px",alt:"imad najmi"})),l.a.createElement("h5",null,"Email: imadnajmi9@gmail.com   "),l.a.createElement("h5",null,"Tel: +212 07 62 95 17 42  "),l.a.createElement("h5",null,"Adress: Morroco marakech Chichaoua  "),l.a.createElement("h5",null,"Age: 22/03/1999  "),l.a.createElement("h5",null," I have a physics degree at 2019 "),l.a.createElement("h5",null,"I am freelancer in Web Developpement "),l.a.createElement("h5",null,"Now I am Student at Cady Ayyad University in Marrakech "),l.a.createElement("h5",null," I deal with those technologies :"),l.a.createElement("ul",null,l.a.createElement("li",null," HTML, CSS and Javascript "),l.a.createElement("li",null," Node JS and Express "),l.a.createElement("li",null," Php and Symfony Framework "),l.a.createElement("li",null," React JS and Api-Platform "),l.a.createElement("li",null," Python and django Framework"),l.a.createElement("li",null," Linux and SQL language")),l.a.createElement("h5",null," I speak  Arabic, Frensh and English  "),l.a.createElement("h2",null," my Works : "),l.a.createElement("section",null,l.a.createElement("div",{className:"work-item"},l.a.createElement("h3",null," e-commerce website "),l.a.createElement("p",null,"responsive website shows products to clients, which an user can authenticate to buy a product, and see his pannel that contains old and new chosen products, payement is with paypal, I used jwt-authencation-bundle for security."),l.a.createElement("p",null," ",l.a.createElement("a",{href:"https://shopping-najmi.herokuapp.com"},"link here ")," "),l.a.createElement("p",null,l.a.createElement("img",{src:"./imgs/shopping.png",width:"200px",height:"350px",alt:"shopping-website"})),l.a.createElement("h4",null," Used Technologies "),l.a.createElement("ul",null,l.a.createElement("li",null,"  Symfony and ApiPlatform   "),l.a.createElement("li",null,"  React and Redux "),l.a.createElement("li",null,"  Bootstrap "),l.a.createElement("li",null,"  Axios "))),l.a.createElement("div",{className:"work-item"},l.a.createElement("h3",null," Vertime website "),l.a.createElement("p",null,"responsive website maded by symfony when students can sign up to the school to be candidats and when they accept by the admin, so the can see thier courses , notes and prof announces. Each prof can add a student note, course and announce besides to see his salary. The admin control all the organasation, he can add a prof remove a students, add classes and see statistics."),l.a.createElement("p",null," ",l.a.createElement("a",{href:"https://najmi-accademy.herokuapp.com"},"link here ")," "),l.a.createElement("p",null,l.a.createElement("img",{src:"../imgs/accademy.png",width:"400px",height:"200px",alt:"shopping-website"})),l.a.createElement("h4",null," Used Technologies "),l.a.createElement("ul",null,l.a.createElement("li",null,"  Symfony  "),l.a.createElement("li",null,"  Bootstrap ")))),l.a.createElement("div",{className:"interests"},l.a.createElement("h2",null," my interests :  "),l.a.createElement("h5",null," I interest in my familly and friends "),l.a.createElement("h5",null," I like science and physics, I have a licence in physics "),l.a.createElement("h5",null," I do sport, my favorite is running and body builder. "),l.a.createElement("h5",null," I listen all kind of music. ")),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{className:"btn btn-outline-primary",onClick:t.goBack},"<--Back"),l.a.createElement("button",{className:"btn btn-outline-primary",onClick:t.goForward},"Forward--\x3e")))},u=a(4),d=a(6),p=a.n(d),E=a(13),h=a(7),f=a.n(h),b=a(18),g=b.a+"/posts",v=function(){var e=Object(E.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(g+"/"+t);case 2:return a=e.sent,e.next=5,a.data;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=a(21),N=function(e){var t=e.match.params.id,a=Object(n.useState)({}),r=Object(u.a)(a,2),c=r[0],o=r[1],s=Object(n.useState)(!1),m=Object(u.a)(s,2),d=m[0],p=m[1];return Object(n.useEffect)((function(){try{o(v(parseInt(t))),p(!0)}catch(e){console.log(e)}}),[t]),l.a.createElement("div",null,l.a.createElement(i.a,null,l.a.createElement("title",null,"najmi-imad.com| Post Details")),l.a.createElement("section",null,!d&&l.a.createElement(y.a,null)),l.a.createElement("section",null,d&&l.a.createElement("div",null,l.a.createElement("h1",null," ",c.title," "),l.a.createElement("div",null," ",l.a.createElement("img",{src:c.picture,alt:c.title})),l.a.createElement("div",null," ",c.content," "),l.a.createElement("small",null," ",c.createdAT," "))))},w=(a(134),function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"footer-main"},l.a.createElement("div",{className:"",style:{"justify-self":"center"}},l.a.createElement(o.b,{to:"",title:"Facebook"},l.a.createElement("i",{className:"fab fa-facebook"})),l.a.createElement(o.b,{to:"",title:"Github"}," ",l.a.createElement("i",{className:"fab fa-github"})),l.a.createElement(o.b,{to:"",title:"Youtube"}," ",l.a.createElement("i",{className:"fab fa-youtube"})),l.a.createElement(o.b,{to:"",title:"Linked-in"}," ",l.a.createElement("i",{className:"fab fa-linkedin"}))),l.a.createElement("div",{style:{"justify-self":"center"}},l.a.createElement("p",null,l.a.createElement("i",{className:"fas fa-phone-volume"})," +212 07 62 95 17 42"),l.a.createElement("p",null,l.a.createElement("i",{className:"fas fa-envelope"})," imadnajmi9@gmail.com"))),l.a.createElement("div",{className:"Copyrights fire"},"\xa9 2020 Copyright: All Rightd Reserved"))}),j=function(e){var t=e.post;return l.a.createElement("div",null,l.a.createElement(o.b,{to:"/blog-"+t.id},l.a.createElement("h1",null," ",t.title," ")),l.a.createElement("div",null," ",l.a.createElement("img",{src:t.picture,alt:t.title})),l.a.createElement("small",null," ",t.createdAT," "))},x=function(){return l.a.createElement("div",{className:"list-group"},l.a.createElement(o.b,{to:"/django-demo-app",className:"list-group-item list-group-item-action btn-link"},"Explain Basic Django App"),l.a.createElement(o.b,{to:"/use-open-ssh-connection",className:"list-group-item list-group-item-action btn-link"},"What is SSH, How it's work, How we can use it and How to secure a open SSH connection?"),l.a.createElement(o.b,{to:"/math-for-developers",className:"list-group-item list-group-item-action"},"What are the math concepts  I should know it as a developer ?"),l.a.createElement(o.b,{to:"/mercure-protocol-with-symfony",className:"list-group-item list-group-item-action"},"How to use Mercure Protocol with Symfony and API Platform ?"),l.a.createElement(o.b,{to:"/node-express-app",className:"list-group-item list-group-item-action"},"Hello World Express application using Sequelize ?"),l.a.createElement(o.b,{to:"/symfony-react",className:"list-group-item list-group-item-action"},"How to use Symfony and React in the same project ?"),l.a.createElement(o.b,{to:"/web-scraping",className:"list-group-item list-group-item-action"},"Web Scraping and Automation with python: Parctical examples"),l.a.createElement(o.b,{to:"/react-markdown-syntaxhlighter",className:"list-group-item list-group-item-action"},"How to Create a Technical Blog by using React, Markdown and Syntax Highlighter Code ?"),l.a.createElement(o.b,{to:"/automate-publishing-posts-on-facbook",className:"list-group-item list-group-item-action"},"Automate publishing posts on Facebook with Selenium and Python"))},k=function(e){var t=e.history,a=Object(n.useState)(!1),r=Object(u.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){o(!0)}),[]),l.a.createElement("div",null,l.a.createElement(i.a,null,l.a.createElement("title",null,"najmi-imad.com| My Blog")),!c&&l.a.createElement("section",null,l.a.createElement("spinning-dots",{style:{width:"200px",strokeWidth:"20px",color:"#535FF6"},dots:"8"})),c&&l.a.createElement("section",null,[].map((function(e){return l.a.createElement(j,{post:e})})),l.a.createElement(x,null)),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{className:"btn btn-outline-primary",onClick:t.goBack},"<--Back"),l.a.createElement("button",{className:"btn btn-outline-primary",onClick:t.goForward},"Forward--\x3e")))},O=a(25),S=a(33),C=a(20),I=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),i=Object(u.a)(c,2),s=i[0],m=i[1],d=Object(n.useState)({}),p=Object(u.a)(d,2),E=p[0],h=p[1];Object(n.useEffect)((function(){Object(O.d)().then((function(e){r(e),m(!0)})).catch((function(e){h(e),console.log(e)}))}),[]);return l.a.createElement(C.a,{title:"courses",loading:s,error:E,Component:function(){return l.a.createElement("div",null,a.map((function(e){return l.a.createElement("div",{className:"course"},l.a.createElement(o.b,{to:"/courses-"+e.slug},l.a.createElement("h1",null," ",e.title," "),l.a.createElement(S.a,{isVideo:e.is_video,title:e.title,media:e.media,width:300,height:300})),l.a.createElement("div",null,e.objectifs,l.a.createElement("p",null," lorem ipsum dolor sit"),l.a.createElement("p",null," lorem ipsum dolor sit"),l.a.createElement("p",null," lorem ipsum dolor sit")))})))}})},A=(a(136),function(e){var t=e.course;return l.a.createElement("div",null,l.a.createElement("h4",null," ",t.title," "),l.a.createElement("div",null,l.a.createElement("i",{className:"fas fa-user"})," Author : ",l.a.createElement("strong",{className:"text-italic"},"  Imad Najmi "),l.a.createElement("small",{className:"text-muted text-italic"},l.a.createElement("i",{className:"fas fa-clock"})," ",t.createdAt," ")),l.a.createElement(S.a,{isVideo:t.is_video,title:t.slug,media:t.media,width:600,height:300}),l.a.createElement("div",{className:"card"},l.a.createElement("h5",null,"What you'll learn ?"),l.a.createElement("div",{className:""},"By the end of this course you will understand the fundamentals of the Linux operating system and be able to apply that knowledge in a practical and useful manner. This course is an introduction to Linux operating system, il will help  beginners to understand the system and how it works, we are going to discover this system and useful commands together.")),l.a.createElement("div",{className:"bg-light card"},l.a.createElement("ul",null,l.a.createElement("h5",null,"This course aims to :"),l.a.createElement("li",null," ",l.a.createElement("i",{className:"fas fa-check"})," Teach you the fundamentals of the Linux operating system. "),l.a.createElement("li",null," ",l.a.createElement("i",{className:"fas fa-check"})," Help you to understand the linux OS an dhow it works. "),l.a.createElement("li",null," ",l.a.createElement("i",{className:"fas fa-check"}),"Show you how to use the basic commands with examples. "),l.a.createElement("li",null," ",l.a.createElement("i",{className:"fas fa-check"})," Help you to understand the security system in Linux. "),l.a.createElement("li",null," ",l.a.createElement("i",{className:"fas fa-check"}),"Teach you How to use the terminal in Linux. "),l.a.createElement("li",null," ",l.a.createElement("i",{className:"fas fa-check"})," Help you to set up a Ubuntu web server. "),l.a.createElement("li",null," ",l.a.createElement("i",{className:"fas fa-check"})," Help you to have a hacker terminal. "))))}),H=a(89),F=a.n(H),T=function(e){return l.a.createElement("div",{className:"bg-light m- p-5"},l.a.createElement("h1",null,"Error! "),l.a.createElement("button",{onClick:e.retry,className:"btn btn-warning text-light"},"Retry ",l.a.createElement("i",{className:"fas fa-load"})))};function P(e){return e.error?l.a.createElement(T,null):e.timedOut?l.a.createElement("div",null,"Taking a long time... ",l.a.createElement("button",{onClick:e.retry},"Retry")):e.pastDelay?l.a.createElement(y.a,null):null}var R=function(e){var t=e.course,r=e.chapters,o=Object(n.useState)(0),i=Object(u.a)(o,2),s=i[0],m=i[1],d=function(e){var t=document.querySelector("div.chapter-view");document.querySelector("div#chap"+e).classList.add("currentChap");var n=document.querySelector("div#chap"+s);n&&n.classList.remove("currentChap"),m(e);var r,o=(r={loader:function(){return a.e(3).then(a.bind(null,449))}},F()(Object.assign({loading:P,delay:200,timeout:1e4},r)));c.a.unmountComponentAtNode(t),c.a.render(l.a.createElement(o,{id:e}),t)};return l.a.createElement("div",{className:"course-template"},l.a.createElement("div",{className:"course_head"},l.a.createElement("h4",null," ",t.title," "),l.a.createElement("div",null,l.a.createElement("i",{className:"fas fa-user"})," Author : ",l.a.createElement("strong",{className:"text-italic"},"  Imad Najmi "),l.a.createElement("small",{className:"text-muted text-italic"},l.a.createElement("i",{className:"fas fa-clock"})," ",t.createdAt," "))),l.a.createElement("div",{className:"course-body"},l.a.createElement("div",{className:"chapters"},l.a.createElement("div",{className:"chapter-detail"},l.a.createElement("h4",null," ",l.a.createElement("i",{className:"fas fa-book-open"})," "," Chapters : ")),r.map((function(e,t){return l.a.createElement("div",{key:e.id,onClick:function(){return d(t+1)},className:"chapter-detail",id:"chap"+parseInt(t+1)},l.a.createElement("i",{className:"fas fa-play"}),"chapter",t+1," : ",l.a.createElement("strong",null," ",e.title," "))}))),l.a.createElement("div",{className:"chapter-view"},l.a.createElement(A,{course:t}))))},W=function(e){var t=e.match.params.slug,a=Object(n.useState)({}),r=Object(u.a)(a,2),c=r[0],o=r[1],i=Object(n.useState)([]),s=Object(u.a)(i,2),m=s[0],d=s[1],p=Object(n.useState)(!1),E=Object(u.a)(p,2),h=E[0],f=E[1],b=Object(n.useState)({}),g=Object(u.a)(b,2),v=g[0],y=g[1];Object(n.useEffect)((function(){try{Object(O.c)(t).then((function(e){return o(e)})),Object(O.b)(t).then((function(e){d(e),f(!0)}))}catch(e){y(e)}}),[t]);return l.a.createElement(C.a,{title:t,loading:h,error:v,Component:function(){return l.a.createElement(R,{course:c,chapters:m})}})},B=a(34),L=a(90),_=b.a+"/token/";function q(e){return f.a.post(_,e).then((function(e){return e.data})).then((function(e){console.log(e),window.localStorage.setItem("authToken",e.access),window.localStorage.setItem("authRefreshToken",e.refresh),M(e.access)}))}function M(e){f.a.defaults.headers.Authorization="Bearer "+e}var z=function(){var e=Object(E.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=window.localStorage.getItem("authToken"))&&M(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=a(8),J=function(e){var t=e.history,a=Object(n.useState)({email:"",password:""}),r=Object(u.a)(a,2),c=r[0],i=r[1],s=Object(n.useState)(!1),m=Object(u.a)(s,2),d=m[0],h=m[1],f=Object(n.useState)({}),b=Object(u.a)(f,2),g=b[0],v=b[1],y=Object(n.useCallback)((function(e){var t=e.currentTarget,a=t.name,n=t.value;i(Object(L.a)({},c,Object(B.a)({},a,n)))}),[d]),N=function(){var e=Object(E.a)(p.a.mark((function e(a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),a.preventDefault(),e.prev=2,e.next=5,q(c);case 5:D.b.success("Votre connexion a \xe9t\xe9 bien fait"),h(!1),t.push("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),v(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(C.a,{title:"Login Page",loading:d,error:g,Component:function(){return l.a.createElement("div",{className:"bg-light container p-4 mt-4",id:"login-desktop"},l.a.createElement("h5",{className:"text-center text-success m-3"}," Connexion au site"),l.a.createElement("div",{className:"bg-light text-center m-2"},l.a.createElement("form",{onSubmit:N},l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"input-group mb-2"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("div",{className:"input-group-text"},l.a.createElement("i",{className:"fas fa-envelope"}))),l.a.createElement("input",{type:"email",placeholder:"Entrez votre email ...",className:"form-control",onChange:y,value:c.email,name:"email",required:!0}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"input-group mb-2"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("div",{className:"input-group-text"},l.a.createElement("i",{className:"fas fa-lock"}))),l.a.createElement("input",{type:"password",placeholder:"Entrez votre mot de pass ...",className:"form-control",name:"password",onChange:y,value:c.password,required:!0}))),l.a.createElement("button",{type:"submit",className:"btn btn-primary"}," Connexion !")),l.a.createElement("div",{className:"m-3"},l.a.createElement(o.b,{to:"/reset-password",className:"btn"},"J'ai oubli\xe9 le mot de passe ?"))))}})},U=function(){return Object(n.useEffect)((function(){f.a.get("http://shopping-najmi.herokuapp.com/api/products/").then((function(e){return console.log(e)})).catch((function(e){console.log(e.status),console.log(e.message),console.log(e.request),console.log(e.response)}))}),[]),l.a.createElement(i.a,null,l.a.createElement("title",null,"najmi-imad.com| Web Scraping"))},V=a(5),G=a(91),Q=a.n(G),Y=a(92),$=a.n(Y),K=a(448),X=a(447),Z=function(e){var t=e.language,a=e.value;return l.a.createElement(K.a,{language:t,showLineNumbers:!0,style:X.a},a)},ee=function(e){var t=e.content,a=Object(n.useState)(""),r=Object(u.a)(a,2),c=r[0],o=r[1],i=Object(n.useState)(!1),s=Object(u.a)(i,2),m=s[0],d=s[1];return Object(n.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){o(e),d(!0)})).catch((function(e){d(!1),D.b.error("unexpected error happen when we tryinig to load the post !")}))}),[t]),l.a.createElement(l.a.Fragment,null,m&&l.a.createElement("div",{className:"container"},l.a.createElement($.a,{source:c,skipHtml:!1,escapeHtml:!1,renderers:{code:Z}})))},te=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement("title",null,"Django Rest Framework ApiView and React JS")),l.a.createElement("div",{className:"main"},l.a.createElement(ee,{content:Q.a})))},ae=a(96),ne=a.n(ae),le=function(){return l.a.createElement("div",{className:"main"},l.a.createElement(i.a,null,l.a.createElement("title",null,"najmi-imad.com| Math for Develpers")),l.a.createElement(ee,{content:ne.a}))},re=a(97),ce=a.n(re),oe=function(){return l.a.createElement("div",{className:"main"},l.a.createElement(i.a,null,l.a.createElement("title",null,"najmi-imad.com| Using Mercure in Symfony and Api Platform")),l.a.createElement(ee,{content:ce.a}))},ie=a(98),se=a.n(ie),me=function(){return l.a.createElement("div",{className:"main"},l.a.createElement(i.a,null,l.a.createElement("title",null,"najmi-imad.com| React in Symfony Project")),l.a.createElement(ee,{content:se.a}))},ue=a(99),de=a.n(ue),pe=function(){return l.a.createElement("div",{className:"main"},l.a.createElement(i.a,null,l.a.createElement("title",null,"najmi-imad.com| Express and Sequelize Application")),l.a.createElement(ee,{content:de.a}))},Ee=a(100),he=a.n(Ee),fe=function(){return l.a.createElement("div",{className:"main"},l.a.createElement(i.a,null,l.a.createElement("title",null,"najmi-imad.com| Open SSH Connection on Linux")),l.a.createElement(ee,{content:he.a}))},be=a(101),ge=a.n(be),ve=function(){return l.a.createElement("div",{className:"main"},l.a.createElement(i.a,null,l.a.createElement("title",null,"najmi-imad.com| Web Scraping With Python")),l.a.createElement(ee,{content:ge.a}))},ye=a(102),Ne=a.n(ye),we=function(e){e.className;return l.a.createElement("div",{className:"main"},l.a.createElement(i.a,null,l.a.createElement("title",null,"najmi-imad.com| Create React Markdown blog with highlight code")),l.a.createElement(ee,{content:Ne.a}))},je=a(103),xe=a.n(je),ke=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement("title",null,"Automate publishing posts on Facebook")),l.a.createElement("div",{className:"main"},l.a.createElement(ee,{content:xe.a})))},Oe=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(V.b,{path:"/django-demo-app",component:te}),l.a.createElement(V.b,{path:"/math-for-developers",component:le}),l.a.createElement(V.b,{path:"/mercure-protocol-with-symfony",component:oe}),l.a.createElement(V.b,{path:"/node-express-app",component:pe}),l.a.createElement(V.b,{path:"/symfony-react",component:me}),l.a.createElement(V.b,{path:"/use-open-ssh-connection",component:fe}),l.a.createElement(V.b,{path:"/web-scraping",component:ve}),l.a.createElement(V.b,{path:"/react-markdown-syntaxhlighter",component:we}),l.a.createElement(V.b,{path:"/automate-publishing-posts-on-facbook",component:ke}))},Se=(a(439),function(){return l.a.createElement("header",null,l.a.createElement("input",{type:"checkbox",id:"check"}),l.a.createElement("label",{for:"check",class:"checkbtn"},l.a.createElement("i",{class:"fas fa-bars"})),l.a.createElement("label",{class:"logo fire"},"Imad Najmi"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{className:"active",to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/about-me"},"About")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"blog"},"Articles")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/contact"},"Contact")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/login"},"Login"))))});a(440),a(441);z();var Ce=function(){return l.a.createElement(o.a,null,l.a.createElement(Se,null),l.a.createElement("main",null,l.a.createElement(V.d,null,l.a.createElement(V.b,{path:"/",component:s,exact:!0}),l.a.createElement(V.b,{path:"/blog-:id",component:N}),l.a.createElement(V.b,{path:"/about-me",component:m}),l.a.createElement(V.b,{path:"/blog",component:k}),l.a.createElement(V.b,{path:"/courses-:slug",component:W}),l.a.createElement(V.b,{path:"/courses/",component:I}),l.a.createElement(V.b,{path:"/login/",component:J}),l.a.createElement(V.b,{path:"/web/",component:U}),l.a.createElement(Oe,null))),l.a.createElement(w,null),l.a.createElement(D.a,{position:D.b.POSITION.BOTTOM_LEFT}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ie=a(104);customElements.define("spinning-dots",Ie.a),c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},91:function(e,t,a){e.exports=a.p+"static/media/django_api.270fdf0f.md"},96:function(e,t,a){e.exports=a.p+"static/media/math_for_developers.de703503.md"},97:function(e,t,a){e.exports=a.p+"static/media/mercure_symfony.0a8b7cf3.md"},98:function(e,t,a){e.exports=a.p+"static/media/react_symfony.7399279c.md"},99:function(e,t,a){e.exports=a.p+"static/media/node_express_sequelize.ad1277e5.md"}},[[105,1,2]]]);
//# sourceMappingURL=main.d87f0093.chunk.js.map