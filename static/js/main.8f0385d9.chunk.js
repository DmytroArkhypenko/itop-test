(this["webpackJsonpitop-test"]=this["webpackJsonpitop-test"]||[]).push([[0],{20:function(t,n,e){},21:function(t,n,e){"use strict";e.r(n);var c=e(1),r=e(0),i=e(9),a=e.n(i),o=e(2),s=e(23),u=e(3),b=e(4);function j(){var t=Object(u.a)(["\n  background: black;\n  color: white;\n  border-radius: 5px;\n  margin-top: 30px;\n  margin-left: 5px;\n  padding: 12px 20px;\n  font-size: 16px;\n  width: 150px;\n  transition: background 0.3s;\n  cursor: pointer;\n  &:hover {\n    border: 2px solid black;\n    background: white;\n    color: black;\n  }\n"]);return j=function(){return t},t}function d(){var t=Object(u.a)(["\n  width: 500px;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n"]);return d=function(){return t},t}var l=b.a.div(d()),f=b.a.button(j()),p=function(t){var n,e,r=t.isActive,i=t.timer,a=t.startTimer,o=t.stopTimer,s=t.resetTimer,u=function(){s(),a()};return Object(c.jsx)(c.Fragment,{children:r?Object(c.jsxs)(l,{children:[Object(c.jsx)(f,{onClick:function(){o(),s()},children:"Stop"}),Object(c.jsx)(f,{onClick:function(t){return function(t){var c=(new Date).getTime(),r=c-n;clearTimeout(e),r<300&&r>0?(o(),t.preventDefault()):e=setTimeout((function(){clearTimeout(e)}),300),n=c}(t)},children:"Wait"}),Object(c.jsx)(f,{onClick:u,children:"Reset"})]}):0===i?Object(c.jsx)(l,{children:Object(c.jsx)(f,{onClick:a,children:"Start"})}):Object(c.jsxs)(l,{children:[Object(c.jsx)(f,{onClick:a,children:"Start"}),Object(c.jsx)(f,{onClick:u,children:"Reset"})]})})};function x(){var t=Object(u.a)(["\n  background: black;\n  color: #fff;\n  display: inline-block;\n  font-size: 22px;\n  padding: 20px;\n  border-radius: 5px;\n  width: 300px;\n"]);return x=function(){return t},t}var O=b.a.div(x()),h=function(t){var n=t.timer,e=Object(r.useState)(0),i=Object(o.a)(e,2),a=i[0],s=i[1],u=Object(r.useState)(0),b=Object(o.a)(u,2),j=b[0],d=b[1],l=Object(r.useState)(0),f=Object(o.a)(l,2),p=f[0],x=f[1];return Object(r.useEffect)((function(){x(Math.floor(n/3600)),d(Math.floor(n/60)-60*p),s(n-3600*p-60*j)}),[p,j,n]),Object(c.jsx)(O,{children:Object(c.jsxs)("p",{children:[p>=10?p:"0".concat(p),":",j>=10?j:"0".concat(j),":",a>=10?a:"0".concat(a)]})})};function m(){var t=Object(u.a)(["\n  width: 100%;\n  background: #fff;\n  margin: 30px auto;\n  position: relative;\n  padding: 60px 0px;\n  text-align: center;\n"]);return m=function(){return t},t}var v=b.a.div(m()),k=(e(20),Object(s.a)(1e3)),g=function(){var t=Object(r.useState)(5854),n=Object(o.a)(t,2),e=n[0],i=n[1],a=Object(r.useState)(),s=Object(o.a)(a,2),u=s[0],b=s[1],j=Object(r.useState)(!1),d=Object(o.a)(j,2),l=d[0],f=d[1];return Object(c.jsx)(v,{children:Object(c.jsxs)("div",{className:"stopwatch",children:[Object(c.jsx)(h,{timer:e}),Object(c.jsx)(p,{isActive:l,timer:e,startTimer:function(){f(!0);var t=e;b(k.subscribe((function(){i(t+=1)})))},stopTimer:function(){u.unsubscribe(),f(!1)},resetTimer:function(){u.unsubscribe(),f(!1),i(0)}})]})})};a.a.render(Object(c.jsx)(g,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.8f0385d9.chunk.js.map