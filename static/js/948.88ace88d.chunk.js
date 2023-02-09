"use strict";(self.webpackChunkakimov_frontend_2=self.webpackChunkakimov_frontend_2||[]).push([[948],{948:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(885),s=n(791),a=n(331),c=n(648),o=n(362),l=n(871),i=n(184);function u(e){var t=e.isOpen,n=e.handleClose,r=e.handleDelete,c=(0,s.useRef)(null);return(0,s.useEffect)((function(){t?a.ZP.to(c.current,{display:"flex",height:"100%"}):a.ZP.to(c.current,{display:"none",height:0})}),[t]),(0,i.jsx)("div",{className:"confirm-delete",ref:c,children:(0,i.jsxs)("div",{className:"confirm-delete__content",children:[(0,i.jsx)("p",{className:"confirm-delete__question",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b ?"}),(0,i.jsx)("button",{className:"confirm-delete__button confirm-delete__button_yes",type:"button",onClick:r,children:"\u0414\u0410"}),(0,i.jsx)("button",{className:"confirm-delete__button confirm-delete__button_no",type:"button",onClick:n,children:"\u041d\u0415\u0422"})]})})}function p(e){var t=e.item,n=(0,s.useContext)(c.Z),a=n.increaseItemCount,o=n.decreaseItemCount,p=n.deleteFromCart,d=n.setCartIsOpen,m=n.cartItems,_=(0,s.useState)(!1),x=(0,r.Z)(_,2),f=x[0],h=x[1],b=(0,l.s0)();return(0,i.jsxs)("li",{className:"cart-item",children:[(0,i.jsxs)("div",{className:"cart-item__description",children:[(0,i.jsx)("p",{className:"cart-item__text",children:t.type}),(0,i.jsx)("p",{className:"cart-item__text",children:t.name}),(0,i.jsx)("p",{className:"cart-item__text",children:"gold"===t.material?"\u0437\u043e\u043b\u043e\u0442\u043e 585":"\u0441\u0435\u0440\u0435\u0431\u0440\u043e 925"}),(0,i.jsx)("p",{className:"cart-item__text",children:t.gems}),(0,i.jsx)("p",{className:"cart-item__text",children:"".concat(t.size," \u043c\u043c")}),(0,i.jsx)("p",{className:"cart-item__text",children:"".concat(t.weight," \u0433\u0440")})]}),(0,i.jsx)("img",{className:"cart-item__image",src:"/items/".concat(t.article,"_").concat(t.material,".webp"),alt:t.name,onClick:function(){b("details/".concat(t.article)),d(!1)}}),(0,i.jsx)("div",{className:"cart-item__counter",children:(0,i.jsxs)("div",{className:"counter",children:[(0,i.jsxs)("div",{className:"counter__elements",children:[(0,i.jsx)("button",{className:"counter__element counter__button",onClick:function(){1===t.count?h(!0):o(t)},type:"button",children:"-"}),(0,i.jsx)("p",{className:"counter__element",children:t.count}),(0,i.jsx)("button",{className:"counter__element counter__button",onClick:function(){a(t)},type:"button",children:"+"})]}),(0,i.jsx)("p",{className:"counter__total",children:"".concat(t.price.split("").filter((function(e){return" "!==e})).join("")*t.count," \u0440")})]})}),(0,i.jsx)(u,{isOpen:f,handleClose:function(){h(!1)},handleDelete:function(){1===m.length&&d(!1),p(t)}})]})}var d=n(504);function m(e){var t=e.isOpen;return(0,i.jsxs)("div",{className:"confirm-order-popup ".concat(t&&"confirm-order-popup_opened"),children:[(0,i.jsx)("div",{className:"#"}),(0,i.jsxs)("p",{className:"confirm-order-popup__text",children:["\u0417\u0430\u043a\u0430\u0437",(0,i.jsx)("br",{}),"\u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d"]}),(0,i.jsx)("div",{className:"confirm-order-popup__checkmark"}),(0,i.jsx)("p",{className:"confirm-order-popup__message",children:"\u0412 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0441 \u0432\u0430\u043c\u0438 \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f \u043d\u0430\u0448 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440. \u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0437\u0430\u043a\u0430\u0437!"}),(0,i.jsxs)("button",{type:"button",className:"confirm-order-popup__button",onClick:function(){location.reload()},children:[(0,i.jsx)(d.rU,{className:"confirm-order-popup__button-text",to:"/catalogue",children:"\u0432 \u0438\u043a\u041e\u043d\u041e\u0442\u0435\u043a\u0443"}),(0,i.jsx)("div",{className:"confirm-order-popup__button-image"})]})]})}var _=n(461),x=n(86);function f(e){var t=e.isOpen,n=e.switchPopup,a=(0,s.useRef)(),o=(0,s.useContext)(_.Z),l=(0,s.useState)(!1),u=(0,r.Z)(l,2),p=u[0],d=u[1],f=(0,s.useContext)(c.Z),h=f.totalPrice,b=f.cartItems,j=f.setCartItems,N=(0,s.useState)(!1),v=(0,r.Z)(N,2),g=v[0],C=v[1],y=function(e){var t=a.current.querySelector(".order-popup__confirm-button");t.textContent=e,setTimeout((function(){return t.textContent="\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"}),1500)};return(0,s.useEffect)((function(){t&&d(!1)}),[t]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"order-popup ".concat(t&&"order-popup_opened"),ref:a,children:[t&&(0,i.jsx)("button",{className:"order-popup__close-button",type:"button",onClick:n,"aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),o>=1024?(0,i.jsxs)("p",{className:"order-button__policy-agreement",children:["\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u044f, \u0432\u044b \u0441\u043e\u0433\u043b\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044c \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0432\u0438\u0438",(0,i.jsx)("br",{}),"\xa0\u0441\xa0",(0,i.jsx)("a",{className:"order-popup__span-text",href:"https://privacy-check.ru/policy/da54133bfdc117c95080311118df63231b848fbdffc19e7375a0c8b451c135b0/",target:"_blank",rel:"noreferrer",children:"\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438"})]}):(0,i.jsxs)("button",{className:"order-popup__price-button",onClick:n,type:"button",disabled:0===b.length,children:[(0,i.jsx)("p",{className:"order-popup__price",children:"".concat(h," \u0440")}),(0,i.jsx)("h3",{className:"order-popup__text",children:0===b.length?"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430":"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})]}),(0,i.jsxs)("form",{className:"order-popup__form",name:"order",onSubmit:function(e){e.preventDefault();var t={customer:{name:e.target.name.value,email:e.target.email.value,number:e.target.number.value,order_text:e.target.wishes.value},order:b};C(!0),(0,x.g)(t).then((function(e){"email send!"===e.message?(d(!0),a.current.classList.add("order-popup_fullscreen"),j([])):y("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a... ")})).catch((function(){y("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a...")})).finally((function(){return C(!1)}))},method:"POST",children:[(0,i.jsx)("input",{className:"order-popup__input",name:"name",type:"text",placeholder:"\u041a\u0430\u043a \u0432\u0430\u0441 \u0437\u043e\u0432\u0443\u0442",min:2,max:30,required:!0}),(0,i.jsx)("input",{className:"order-popup__input",name:"number",type:"tel",placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",required:!0}),(0,i.jsx)("input",{className:"order-popup__input",name:"email",type:"email",placeholder:"\u041f\u043e\u0447\u0442\u0430",required:!0}),(0,i.jsx)("textarea",{className:"order-popup__input order-popup__input_type_textarea",name:"wishes",placeholder:"\u0417\u0434\u0435\u0441\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0432\u043e\u0438 \u043f\u043e\u0436\u0435\u043b\u0430\u043d\u0438\u044f \u043a \u0437\u0430\u043a\u0430\u0437\u0443"}),(0,i.jsxs)("button",{className:"order-popup__confirm-button",type:"submit",disabled:g,children:["\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c",(0,i.jsx)("br",{}),"\u0437\u0430\u044f\u0432\u043a\u0443"]})]}),(0,i.jsx)(m,{isOpen:p})]}),(0,i.jsx)("div",{className:"order-popup-over",onClick:function(e){"string"===typeof e.target.className&&e.target.className.includes("order-popup-over")&&n()}})]})}var h=n(259);function b(e){var t=e.handleButtonClick,n=(0,s.useContext)(c.Z),r=n.totalPrice,a=n.cartItems;return(0,i.jsx)("div",{className:"order-table",children:(0,i.jsxs)("button",{className:"order-table__order-button",type:"button",onClick:t,disabled:0===a.length,children:[(0,i.jsx)("p",{className:"order-table__text order-table__text_big",children:0===a.length?"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430":"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"}),(0,i.jsxs)("p",{className:"order-table__text order-table__text_small",children:[r," \u0440"]})]})})}function j(){var e=(0,s.useContext)(c.Z),t=e.cartIsOpen,n=e.setCartIsOpen,l=e.cartItems,u=(0,s.useRef)(null),d=(0,s.useState)(!1),m=(0,r.Z)(d,2),_=m[0],x=m[1],j=function(){x(!_)};return(0,s.useEffect)((function(){t?a.ZP.to(u.current,{opacity:1,display:"block"}):a.ZP.to(u.current,{opacity:0,display:"none"}),x(!1)}),[t]),(0,i.jsxs)("div",{className:"cart-popup animate-bg",ref:u,onScroll:function(e){return e.stopPropagation()},children:[(0,i.jsx)(o.Z,{buttonImage:h.Z,buttonHandler:function(){n(!1)},text:"\u043a\u043e\u0420\u0417\u0418\u041d\u0410"}),(0,i.jsx)("ul",{className:"cart-popup__items",children:l.map((function(e){return(0,i.jsx)(p,{item:e},e.article+e.material+e.size)}))}),(0,i.jsx)(b,{handleButtonClick:j}),(0,i.jsx)(f,{isOpen:_,switchPopup:j})]})}}}]);
//# sourceMappingURL=948.88ace88d.chunk.js.map