(this.webpackJsonpecommerceweb=this.webpackJsonpecommerceweb||[]).push([[0],{121:function(e,t,a){},177:function(e,t,a){},295:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(1),c=a.n(r),i=a(14),s=a.n(i),o=(a(177),a(112)),l=(a.p,a(121),a(149)),j=a.n(l),d=a(162),m=a(339),b=a(124),u=a(334),h=(a(335),a(338),a(337),a(336),a(98)),x=a(347),O=Object(b.a)({root:{maxWidth:345},media:{height:140}});function p(e){O();return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(j.a,{children:[{name:"Winter Collection Volume III",image:"https://cdn.shopify.com/s/files/1/2466/2147/files/winter_vol3_category_banner_ad82eee8-f487-4de4-a05b-7ab254f2c77b.jpg?v=1608023631"},{name:"MANS WEAR",image:"https://cdn.shopify.com/s/files/1/2466/2147/files/men_jacket_Category_Banner.jpg?v=1605247873"},{name:"fOOT WEAR",image:"https://cdn.shopify.com/s/files/1/2466/2147/files/WOMAN_FOOTWEAR_9001cc7e-0ecd-4aea-ab44-1bd6ff0682a7.jpg?v=1605337923"}].map((function(e,t){return Object(n.jsx)(g,{item:e},t)}))})})}function g(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)("h2",{children:e.item.name}),Object(n.jsx)("img",{style:{width:"100%",height:"90%"},src:e.item.image}),Object(n.jsx)(m.a,{style:{marginTop:"1%",backgroundColor:"#00aecc"},className:"CheckButton",children:"Check it out!"})]})})}var f=a(20),v=Object(b.a)((function(e){return{container:{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gridGap:e.spacing(3)},paper:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary,whiteSpace:"nowrap",marginBottom:e.spacing(1)},divider:{margin:e.spacing(2,0)}}}));var y=function(e){var t=e.product;return v(),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"title",children:t.category}),Object(n.jsx)("div",{children:Object(n.jsx)("img",{width:"100px",height:"100px",src:t.image})}),Object(n.jsx)("button",{className:"buyBtn",children:"Buy Now"})]},t.id)},N=a(340),C=Object(b.a)((function(e){return{container:{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gridGap:e.spacing(3)},paper:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary,whiteSpace:"nowrap",marginBottom:e.spacing(1)},divider:{margin:e.spacing(2,0)}}}));function S(){var e=C(),t=Object(r.useState)([]),a=Object(f.a)(t,2),c=a[0],i=a[1];return Object(r.useEffect)((function(){fetch("https://fakestoreapi.com/products").then((function(e){return e.json()})).then((function(e){console.log(e),i(e)}))}),[]),console.log(c),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(x.a,{mx:2,children:Object(n.jsx)(N.a,{style:{marginTop:"2%"},container:!0,spacing:3,children:c.map((function(t){return Object(n.jsx)(N.a,{item:!0,xs:3,children:Object(n.jsx)(d.a,{className:e.paper,children:Object(n.jsx)(y,{product:t})})})}))})})})}var w=a(341),k=a(342),F=a(343),A=Object(b.a)((function(e){return{textCenter:{textAlign:"center"},button:{margin:e.spacing(1)}}})),E=function(e){var t=e.formData,a=e.prevStep,r=e.nextStep,c=A(),i=t.firstName,s=t.lastName,o=t.email,l=t.address,j=t.city,d=t.phonenumber;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{children:[Object(n.jsxs)(w.a,{children:[Object(n.jsx)(k.a,{children:Object(n.jsx)(F.a,{primary:"First Name",secondary:i,className:c.textCenter})}),Object(n.jsx)(k.a,{children:Object(n.jsx)(F.a,{primary:"Last Name",secondary:s,className:c.textCenter})}),Object(n.jsx)(k.a,{children:Object(n.jsx)(F.a,{primary:"Email",secondary:o,className:c.textCenter})}),Object(n.jsx)(k.a,{children:Object(n.jsx)(F.a,{primary:"Address",secondary:l,className:c.textCenter})}),Object(n.jsx)(k.a,{children:Object(n.jsx)(F.a,{primary:"City",secondary:j,className:c.textCenter})}),Object(n.jsx)(k.a,{children:Object(n.jsx)(F.a,{primary:"Phone Number",secondary:d,className:c.textCenter})})]}),Object(n.jsxs)("div",{className:c.textCenter,children:[Object(n.jsx)(m.a,{color:"secondary",variant:"contained",className:c.button,onClick:function(){return a()},children:"Back"}),Object(n.jsx)(m.a,{color:"primary",variant:"contained",className:c.button,onClick:function(){return r()},children:"Confirm & Continue"})]})]})})},T=a(32),B=a(346),D=Object(b.a)((function(e){return{form:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},button:{margin:e.spacing(1)}}})),I=function(e){var t=e.formData,a=e.setFormData,c=e.nextStep,i=e.prevStep,s=D(),o=Object(r.useState)("back"),l=Object(f.a)(o,2),j=l[0],d=l[1];return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(T.c,{initialValues:t,onSubmit:function(e){a(e),"back"===j?i():c()},children:Object(n.jsxs)(T.b,{className:s.form,children:[Object(n.jsx)(T.a,{name:"address",label:"Address",margin:"normal",as:B.a}),Object(n.jsx)(T.a,{name:"city",label:"City",margin:"normal",as:B.a}),Object(n.jsx)(T.a,{name:"phonenumber",label:"Phonenumber",margin:"normal",type:"number",as:B.a}),Object(n.jsxs)("div",{children:[Object(n.jsx)(m.a,{type:"submit",variant:"contained",color:"primary",className:s.button,onClick:function(){return d("back")},children:"Back"}),Object(n.jsx)(m.a,{type:"submit",variant:"contained",color:"primary",className:s.button,onClick:function(){return d("forward")},children:"Continue"})]})]})})})},_=a(76),L=Object(b.a)((function(e){return{form:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},button:{margin:e.spacing(1)}}})),P=_.a({firstName:_.b().required("First Name is required").max(20),lastName:_.b().required("Last Name is required").max(20),email:_.b().email("Invalid email").required("Email is required")}),q=function(e){var t=e.formData,a=e.setFormData,r=e.nextStep,c=L();return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(T.c,{initialValues:t,onSubmit:function(e){a(e),r()},validationSchema:P,children:function(e){var t=e.errors,a=e.touched;return Object(n.jsxs)(T.b,{className:c.form,children:[Object(n.jsx)(T.a,{name:"firstName",label:"First Name *",margin:"normal",as:B.a,error:a.firstName&&t.firstName,helperText:a.firstName&&t.firstName}),Object(n.jsx)(T.a,{name:"lastName",label:"Last Name *",margin:"normal",as:B.a,error:a.lastName&&t.lastName,helperText:a.lastName&&t.lastName}),Object(n.jsx)(T.a,{type:"email",name:"email",label:"Email *",margin:"normal",as:B.a,error:a.email&&t.email,helperText:a.email&&t.email}),Object(n.jsx)(m.a,{type:"submit",variant:"contained",color:"primary",className:c.button,children:"Continue"})]})}})})},W=Object(b.a)((function(e){return{textCenter:{textAlign:"center"}}})),R=function(){var e=W();return Object(n.jsxs)("div",{className:e.textCenter,children:[Object(n.jsx)("h1",{children:"Thank You For Your Submission"}),Object(n.jsx)("p",{children:"You will get an email with further instructions"})]})},G=function(){var e=Object(r.useState)(1),t=Object(f.a)(e,2),a=t[0],c=t[1],i=Object(r.useState)({firstName:"",lastName:"",email:"",address:"",city:"",phonenumber:""}),s=Object(f.a)(i,2),o=s[0],l=s[1],j=function(){return c((function(e){return e+1}))},d=function(){return c((function(e){return e-1}))};switch(a){case 1:return Object(n.jsx)(q,{formData:o,setFormData:l,nextStep:j});case 2:return Object(n.jsx)(I,{formData:o,setFormData:l,nextStep:j,prevStep:d});case 3:return Object(n.jsx)(E,{formData:o,nextStep:j,prevStep:d});default:return Object(n.jsx)(R,{})}},H=a(158),M=a.n(H);function U(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{style:{marginTop:"5%"},children:Object(n.jsx)(M.a,{fontSize:"large"})}),Object(n.jsx)("h2",{children:"Registration Form"}),Object(n.jsx)(G,{})]})}var J=a(58),V=a(17),Y=a(344),z=a(345),K=a(123),Q=a(159),X=a.n(Q),Z=Object(b.a)({root:{width:"30%",margin:"auto",justifyContent:"end",textAlign:"center",marginTop:"70px"}}),$=function(e){var t=e.email,a=e.setEmail,r=e.password,c=e.setPassword,i=e.handleLogin,s=e.handleSignup,o=e.hasAccount,l=e.setHasAccount,j=e.emailError,d=e.passwordError,b=Z();return Object(n.jsxs)(u.a,{className:b.root,children:[Object(n.jsx)(h.a,{variant:"h5",component:"h2",children:"Please Login Here!!"}),Object(n.jsx)(B.a,{id:"standard-basic",label:"Username",type:"text",autoFocus:!0,required:!0,value:t,onChange:function(e){return a(e.target.value)}}),Object(n.jsx)("p",{children:j}),Object(n.jsx)(B.a,{id:"standard-basic",label:"Password",type:"password",autoFocus:!0,required:!0,value:r,onChange:function(e){return c(e.target.value)}}),Object(n.jsx)("p",{children:d}),Object(n.jsx)("div",{children:o?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m.a,{variant:"contained",color:"primary",onClick:i,children:"Sign In"}),Object(n.jsxs)("p",{children:["Don't have an account?",Object(n.jsx)("span",{onClick:function(){return l(!o)},children:"Sign Up"})]})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m.a,{variant:"contained",color:"primary",onClick:s,children:"Sign Up"}),Object(n.jsxs)("p",{children:["Have an account?",Object(n.jsx)("span",{onClick:function(){return l(!o)},children:"Sign In"})]})]})})]})},ee=a(160).a.initializeApp({apiKey:"AIzaSyCJUhNrq0uJAMpEf05L_OhhTMNmYiRrVao",authDomain:"login-d8d11.firebaseapp.com",projectId:"login-d8d11",storageBucket:"login-d8d11.appspot.com",messagingSenderId:"151161928076",appId:"1:151161928076:web:2a231069a0272e2ff8fea9"});var te=function(){var e=Object(r.useState)(""),t=Object(f.a)(e,2),a=t[0],c=t[1],i=Object(r.useState)(""),s=Object(f.a)(i,2),o=s[0],l=s[1],j=Object(r.useState)(""),d=Object(f.a)(j,2),m=d[0],b=d[1],u=Object(r.useState)(""),h=Object(f.a)(u,2),x=h[0],O=h[1],g=Object(r.useState)(""),v=Object(f.a)(g,2),y=v[0],N=v[1],C=Object(r.useState)(!1),S=Object(f.a)(C,2),w=S[0],k=S[1],F=function(){O(""),N("")},A=function(){ee.auth().onAuthStateChanged((function(e){e?(l(""),b(""),c(e)):c("")}))};return Object(r.useEffect)((function(){A()}),[]),Object(n.jsx)("div",{children:a?Object(n.jsx)(p,{}):Object(n.jsx)($,{email:o,setEmail:l,password:m,setPassword:b,passwordError:y,handleLogin:function(){F(),ee.auth().signInWithEmailAndPassword(o,m).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":O(e.message);break;case"auth/wrong-password":N(e.message)}}))},handleSignup:function(){F(),ee.auth().createUserWithEmailAndPassword(o,m).catch((function(e){switch(e.code){case"auth/email-already-in-use":case"auth/invalid-email":O(e.message);break;case"auth/weak-password":N(e.message)}}))},hasAccount:w,setHasAccount:k,emailError:x,setpasswordError:N})})},ae=Object(b.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));var ne=function(){var e,t=ae();return Object(n.jsxs)(J.a,{children:[Object(n.jsx)("div",(e={className:t.root},Object(o.a)(e,"className","navbar"),Object(o.a)(e,"children",Object(n.jsx)(Y.a,{position:"static",children:Object(n.jsxs)(z.a,{children:[Object(n.jsx)(K.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",children:Object(n.jsx)(X.a,{})}),Object(n.jsx)(h.a,{variant:"h6",className:t.title,children:Object(n.jsx)("img",{style:{height:"60px"},src:"https://cdn.shopify.com/s/files/1/2466/2147/files/BTW_LOGO_BLACK_410x.png?v=1573816919"})}),Object(n.jsx)(m.a,{color:"inherit",children:Object(n.jsx)(J.b,{to:"/",className:"link",children:"Home"})}),Object(n.jsx)(m.a,{color:"inherit",children:Object(n.jsx)(J.b,{to:"/product",className:"link",children:"Product"})}),Object(n.jsxs)(m.a,{color:"inherit",children:[" ",Object(n.jsx)(J.b,{to:"/register",className:"link",children:"Register"})]}),Object(n.jsxs)(m.a,{color:"inherit",children:[" ",Object(n.jsx)(J.b,{to:"/login",className:"link",children:"Login"})]})]})})),e)),Object(n.jsx)("div",{className:"App",children:Object(n.jsx)("header",{children:Object(n.jsx)("div",{children:Object(n.jsxs)(V.c,{children:[Object(n.jsx)(V.a,{path:"/product",children:Object(n.jsx)(S,{})}),Object(n.jsx)(V.a,{path:"/register",children:Object(n.jsx)(U,{})}),Object(n.jsx)(V.a,{path:"/login",children:Object(n.jsx)(te,{})}),Object(n.jsx)(V.a,{path:"/",children:Object(n.jsx)(p,{})})]})})})})]})},re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,350)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(ne,{})}),document.getElementById("root")),re()}},[[295,1,2]]]);
//# sourceMappingURL=main.1b6a48b6.chunk.js.map