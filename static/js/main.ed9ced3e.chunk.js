(this["webpackJsonpimage-glitcher"]=this["webpackJsonpimage-glitcher"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),i=n.n(c),s=n(3),r=n.n(s);n(12),n(13);var o=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("h1",{className:"App-title",children:"Image Glitcher"})})},l=n(6),u=n(5),d=(n(14),n(15),n(4)),j=n.n(d),h=function(e){var t=Object(c.useRef)(null),n=Object(c.useState)(0),s=Object(u.a)(n,2),r=s[0],o=s[1],d=i.a.createRef();return Object(a.jsxs)("div",{className:"Canvas-bigcontainer",children:[Object(a.jsx)("input",{type:"file",ref:d,onChange:function(e){var n=t.current,a=n.getContext("2d"),c=new FileReader;c.onload=function(e){var t=new Image;t.onload=function(){n.width=t.width,n.height=t.height,a.drawImage(t,0,0)},t.src=e.target.result},c.readAsDataURL(e.target.files[0])}}),Object(a.jsx)("h2",{className:"Canvas-label",children:"Amount"}),Object(a.jsx)("div",{className:"Canvas-slidecontainer",children:Object(a.jsx)("input",{type:"range",min:"1",max:"99",onChange:function(e){o(e.target.value)},defaultValue:"0",className:"Canvas-slider",id:"myRange"})}),Object(a.jsx)("div",{className:"Canvas-container",children:Object(a.jsx)("canvas",Object(l.a)({className:"Canvas-canvas",ref:t},e))}),Object(a.jsxs)("div",{className:"btnContainer",children:[Object(a.jsx)("button",{onClick:function(){d.current.click()},className:"Button-button Load Image",name:"Load Image",children:"Load Image"}),Object(a.jsx)("button",{onClick:function(){var e=t.current,n=e.getContext("2d"),a=n.getImageData(0,0,e.width,e.height),c={amount:5,quality:64,iterations:parseInt(r),seed:25};console.log(c),j()(c).fromImageData(a).toDataURL().then((function(t){var a=new Image;a.src=t,a.onload=function(){n.drawImage(a,0,0,e.width,e.height)}}))},className:"Button-button Glitch",name:"Glitch",children:"Glitch"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{})]})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};r.a.render(Object(a.jsxs)(i.a.StrictMode,{children:[Object(a.jsx)(o,{}),Object(a.jsx)(h,{})]}),document.getElementById("root")),g()}],[[16,1,2]]]);
//# sourceMappingURL=main.ed9ced3e.chunk.js.map