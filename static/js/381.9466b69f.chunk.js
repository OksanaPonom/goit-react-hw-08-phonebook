"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[381],{9381:function(n,t,e){e.r(t),e.d(t,{default:function(){return R}});var r,o,x,p,i,a,s,l,c=e(9142),d=e(9434),g=e(168),h=e(5867),u=h.ZP.ul(r||(r=(0,g.Z)(["\n  list-style: none;\n  margin: 30px auto 60px auto;\n  padding: 0;\n  width: 600px;\n"]))),b=h.ZP.p(o||(o=(0,g.Z)(["\n  margin: 30px auto 0 auto;\n  padding: 20px;\n  width: 560px;\n  border-radius: 12px;\n  background-color: #9f94ab7f;\n  box-shadow: 9px -1px 8px 1px rgba(0, 0, 0, 0.76);\n  font-size: 20px;\n  font-weight: 500;\n  text-align: center;\n"]))),f=h.ZP.div(x||(x=(0,g.Z)(["\n  width: 300px;\n  margin: 30px auto;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 500;\n"]))),w=e(4683),m=e(208),Z=e(719),j=h.ZP.li(p||(p=(0,g.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  width: 560px;\n  height: 70px;\n  border-radius: 12px;\n  background-color: #9f94ab7f;\n  box-shadow: 9px -1px 8px 1px rgba(0, 0, 0, 0.76);\n  &:not(:last-child) {\n    margin-bottom: 40px;\n  }\n"]))),v=h.ZP.span(i||(i=(0,g.Z)(["\n  font-size: 30px;\n  font-weight: 500;\n"]))),k=h.ZP.span(a||(a=(0,g.Z)(["\n  font-size: 28px;\n  font-weight: 500;\n  font-style: italic;\n"]))),y=h.ZP.button(s||(s=(0,g.Z)(["\n  display: block;\n  height: 48px;\n  width: 48px;\n  border-radius: 50%;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  background-color: rgba(30, 0, 255, 0.496);\n  transition: box-shadow 250ms ease-in;\n  &:hover,\n  &:focus {\n    box-shadow: 3px 1px 32px 0px rgba(28, 18, 227, 1);\n  }\n"]))),P=(0,h.ZP)(Z.HKN)(l||(l=(0,g.Z)(["\n  height: 24px;\n  width: 24px;\n  fill: #000000ae;\n  pointer-events: none;\n"]))),z=e(184);function C(n){var t=n.contact,e=t.id,r=t.name,o=t.number,x=(0,d.I0)();return(0,z.jsxs)(j,{children:[(0,z.jsxs)("p",{children:[(0,z.jsxs)(v,{children:[r,":\xa0"]}),(0,z.jsx)(k,{children:o})]}),(0,z.jsx)(y,{type:"button",onClick:function(){return x((0,m.GK)(e))},children:(0,z.jsx)(P,{})})]})}var T,F,I,L=e(2791);function N(){var n=(0,d.v9)(w.Af),t=(0,d.v9)(w.AD),e=(0,d.v9)(w.xU),r=(0,d.v9)(w.zh),o=(0,d.I0)();(0,L.useEffect)((function(){o((0,m.Qd)())}),[o]);var x=function(){return null===n||void 0===n?void 0:n.filter((function(n){return n.name.toLowerCase().includes((t||"").toLowerCase())}))};return(0,z.jsxs)(z.Fragment,{children:[e&&!r&&(0,z.jsx)(f,{children:"Loading..."}),r&&!e&&(0,z.jsx)(f,{children:"Sorry, there was an error. Try again later..."}),0===x().length&&0===n.length&&!e&&(0,z.jsx)(b,{children:"No contacts available."}),0===x().length&&0!==n.length&&(0,z.jsx)(b,{children:"Contact not found"}),0!==x().length&&(0,z.jsx)(u,{children:x().map((function(n){return(0,z.jsx)(C,{contact:n},n.id)}))})]})}var A,D,K=h.ZP.label(T||(T=(0,g.Z)(["\n  position: relative;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 600px;\n  font-size: 20px;\n  font-weight: 500;\n"]))),S=h.ZP.input(F||(F=(0,g.Z)(["\n  display: block;\n  width: 300px;\n  padding: 10px 10px 10px 50px;\n  font-size: 20px;\n  border-radius: 12px;\n  outline: none;\n  border-color: #0000ffe0;\n  margin-top: 16px;\n\n  &:focus {\n    box-shadow: 3px 1px 32px 0px rgba(28, 18, 227, 1);\n  }\n  &::placeholder {\n    margin-left: 50px;\n  }\n"]))),E=(0,h.ZP)(Z.wTD)(I||(I=(0,g.Z)(["\n  position: absolute;\n  left: 25px;\n  top: 75%;\n  transform: translateY(-50%);\n  fill: grey;\n"]))),G=e(6895);function H(){var n=(0,d.I0)();return(0,z.jsxs)(K,{children:["Find contacts by name:",(0,z.jsx)(S,{type:"text",onChange:function(t){return n((0,G.M)(t.target.value))},placeholder:"Search contact"}),(0,z.jsx)(E,{})]})}var M=h.ZP.h1(A||(A=(0,g.Z)(["\n  text-align: center;\n  text-transform: uppercase;\n  text-decoration: underline;\n  margin-top: 40px;\n\n  font-weight: 700;\n  text-shadow: 0px 1px 0 rgb(8, 57, 61), 0px 2px 0 rgb(6, 45, 49),\n    0px 3px 0 rgb(5, 34, 37), 0px 4px 0 rgb(3, 23, 24), 0px 5px 0 rgb(2, 11, 12),\n    0px 6px 1px rgba(0, 0, 0, 1);\n  -webkit-text-shadow: 0px 1px 0 rgb(8, 57, 61), 0px 2px 0 rgb(6, 45, 49),\n    0px 3px 0 rgb(5, 34, 37), 0px 4px 0 rgb(3, 23, 24), 0px 5px 0 rgb(2, 11, 12),\n    0px 6px 1px rgba(0, 0, 0, 1);\n  -moz-text-shadow: 0px 1px 0 rgb(8, 57, 61), 0px 2px 0 rgb(6, 45, 49),\n    0px 3px 0 rgb(5, 34, 37), 0px 4px 0 rgb(3, 23, 24), 0px 5px 0 rgb(2, 11, 12),\n    0px 6px 1px rgba(0, 0, 0, 1);\n  color: #094449;\n  font-size: 50px;\n  font-family: 'Times New Roman', Times, serif;\n"]))),Q=h.ZP.h2(D||(D=(0,g.Z)(["\n  text-align: center;\n  margin-top: 40px;\n  font-size: 40px;\n  color: rgba(0, 0, 0, 0.736);\n"]))),R=function(){return(0,z.jsxs)("div",{children:[(0,z.jsx)(M,{children:"Phonebook"}),(0,z.jsx)(c.F,{}),(0,z.jsx)(Q,{children:"Contacts"}),(0,z.jsx)(H,{}),(0,z.jsx)(N,{})]})}}}]);
//# sourceMappingURL=381.9466b69f.chunk.js.map