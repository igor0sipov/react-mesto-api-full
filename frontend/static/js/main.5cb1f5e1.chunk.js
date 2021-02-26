(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{31:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(1),s=a.n(i),c=a(22),o=a.n(c),l=a(9),r=(a(31),a(24)),u=a(14),d=a(4),p=a(2),h=a(3);var m=function(e){var t=Object(h.f)().pathname;return Object(n.jsxs)("header",{className:"header header_spaced",children:[Object(n.jsx)(l.b,{className:"header__logo",to:"".concat(e.loggedIn?"/":"/sign-in")}),Object(n.jsx)("div",{className:"header__user-menu",children:e.loggedIn?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{className:"header__email",children:e.currentEmail}),Object(n.jsx)("button",{className:"header__button",onClick:e.handleSignOut,children:"\u0412\u044b\u0445\u043e\u0434"})]}):"/sign-up"===t?Object(n.jsx)(l.b,{className:"header__link",to:"/sign-in",children:"\u0412\u0445\u043e\u0434"}):Object(n.jsx)(l.b,{className:"header__link",to:"/sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]})},b=s.a.createContext();var j=function(e){var t=e.card.owner===e.currentUser._id,a=e.card.likes.some((function(t){return t===e.currentUser._id}));return Object(n.jsxs)("li",{className:"element",children:[Object(n.jsx)("button",{className:"element__delete-button ".concat(t?"":"element__delete-button_hidden"),onClick:function(){e.onDeleteClick(e.card)}}),Object(n.jsx)("img",{src:e.card.link,alt:"#",className:"element__picture",onClick:function(){e.onCardClick(e.card)}}),Object(n.jsx)("h2",{className:"element__name",children:e.card.name}),Object(n.jsxs)("figure",{className:"element__like",children:[Object(n.jsx)("button",{className:"element__like-button ".concat(a?"element__like-button_active":""),onClick:function(){e.onCardLike(e.card,a)}}),Object(n.jsx)("figcaption",{className:"element__like-counter",children:e.card.likes.length})]})]})},v=a.p+"static/media/edit-avatar-icon.ae1a976d.svg";var _=function(e){var t=s.a.useContext(b);return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("main",{className:"main sizer",children:[Object(n.jsxs)("section",{className:"profile profile_spaced sizer",children:[Object(n.jsxs)("div",{className:"profile__avatar-wrapper",children:[Object(n.jsx)("img",{src:t.avatar,alt:"User Avatar",className:"profile__avatar"}),Object(n.jsx)("button",{className:"profile__edit-avatar-button",onClick:e.handleEditAvatarClick,children:Object(n.jsx)("img",{src:v,alt:"",className:"profile__edit-avatar-icon"})})]}),Object(n.jsxs)("div",{className:"profile__info",children:[Object(n.jsx)("h1",{className:"profile__name",children:t.name}),Object(n.jsx)("p",{className:"profile__bio",children:t.about}),Object(n.jsx)("button",{className:"profile__edit-button",onClick:e.handleEditProfileClick})]}),Object(n.jsx)("button",{className:"profile__add-button",onClick:e.handleAddPlaceClick})]}),Object(n.jsx)("ul",{className:"elements",children:e.cards.map((function(a){return Object(n.jsx)(j,{card:a,onCardClick:e.handleCardClick,onDeleteClick:e.handleDeleteButtonClick,onCardLike:e.handleCardLike,currentUser:t},a._id)}))})]})})};var O=Object(h.g)((function(e){var t=s.a.useState(!1),a=Object(p.a)(t,2),i=a[0],c=a[1],o=s.a.useState({email:{value:""},password:{value:""}}),l=Object(p.a)(o,2),r=l[0],u=l[1];function d(t){e.setValues(r,u,t)}return s.a.useEffect((function(){r.email.isValid&&r.password.isValid?c(!0):c(!1)}),[r.email.isValid,r.password.isValid]),Object(n.jsxs)("section",{className:"auth sizer",children:[Object(n.jsx)("h1",{className:"auth__type",children:"\u0412\u0445\u043e\u0434"}),Object(n.jsxs)("form",{className:"auth__form",onSubmit:function(t){t.preventDefault(),e.onSubmit({email:r.email.value,password:r.password.value},e)},noValidate:!0,children:[Object(n.jsx)("input",{name:"email",className:"auth__input",type:"email",placeholder:"Email",onChange:d,minLength:"2",maxLength:"30",required:!0,value:r.email.value}),Object(n.jsx)("span",{className:"auth__input-error ".concat(r.email.isValid?"":"auth__input-error_visible"),children:r.email.validationMessage}),Object(n.jsx)("input",{name:"password",className:"auth__input",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",autoComplete:"on",onChange:d,minLength:"2",maxLength:"30",required:!0,value:r.password.value}),Object(n.jsx)("span",{className:"auth__input-error ".concat(r.password.isValid?"":"auth__input-error_visible"),children:r.password.validationMessage}),Object(n.jsx)("button",{type:"submit",className:"auth__button ".concat(i?"":"auth__button_disabled"),children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}));var f=Object(h.g)((function(e){var t=s.a.useState(!1),a=Object(p.a)(t,2),i=a[0],c=a[1],o=s.a.useState({email:{value:""},password:{value:""},name:{value:""},about:{value:""},avatar:{value:""}}),r=Object(p.a)(o,2),u=r[0],d=r[1];function h(t){e.setValues(u,d,t)}return s.a.useEffect((function(){u.email.isValid&&u.password.isValid?c(!0):c(!1)}),[u.email.isValid,u.password.isValid,u.name.isValid,u.about.isValid,u.avatar.isValid]),Object(n.jsxs)("section",{className:"auth sizer",children:[Object(n.jsx)("h1",{className:"auth__type",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(n.jsxs)("form",{className:"auth__form",onSubmit:function(t){t.preventDefault(),e.onSubmit({email:u.email.value,password:u.password.value,name:""===u.name.value?void 0:u.name.value,about:""===u.about.value?void 0:u.about.value,avatar:""===u.avatar.value?void 0:u.avatar.value},e)},noValidate:!0,children:[Object(n.jsx)("input",{name:"email",className:"auth__input",type:"email",placeholder:"Email",onChange:h,minLength:"2",maxLength:"30",required:!0,value:u.email.value}),Object(n.jsx)("span",{className:"auth__input-error ".concat(u.email.isValid?"":"auth__input-error_visible"),children:u.email.validationMessage}),Object(n.jsx)("input",{name:"password",className:"auth__input",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",autoComplete:"on",onChange:h,minLength:"2",maxLength:"30",required:!0,value:u.password.value}),Object(n.jsx)("span",{className:"auth__input-error ".concat(u.password.isValid?"":"auth__input-error_visible"),children:u.password.validationMessage}),Object(n.jsx)("input",{name:"name",className:"auth__input",type:"text",placeholder:"\u0418\u043c\u044f",autoComplete:"on",onChange:h,minLength:"2",maxLength:"32",value:u.name.value}),Object(n.jsx)("span",{className:"auth__input-error ".concat(u.name.isValid?"":"auth__input-error_visible"),children:u.name.validationMessage}),Object(n.jsx)("input",{name:"about",className:"auth__input",type:"text",placeholder:"\u041e \u0441\u0435\u0431\u0435",autoComplete:"on",onChange:h,minLength:"2",maxLength:"32",value:u.about.value}),Object(n.jsx)("span",{className:"auth__input-error ".concat(u.about.isValid?"":"auth__input-error_visible"),children:u.about.validationMessage}),Object(n.jsx)("input",{name:"avatar",className:"auth__input",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",autoComplete:"on",onChange:h,minLength:"2",maxLength:"32",value:u.avatar.value}),Object(n.jsx)("span",{className:"auth__input-error ".concat(u.avatar.isValid?"":"auth__input-error_visible"),children:u.avatar.validationMessage}),Object(n.jsx)("button",{type:"submit",className:"auth__button ".concat(i?"":"auth__button_disabled"),children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(n.jsx)(l.b,{className:"auth__link",to:"/sign-in",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})]})})),g=a(25);var x=function(e){var t=e.component,a=Object(g.a)(e,["component"]);return Object(n.jsx)(h.b,{path:a.path,children:a.loggedIn?Object(n.jsx)(t,Object(d.a)({},a)):Object(n.jsx)(h.a,{to:"/sign-in"})})},C=a.p+"static/media/auth-error.d4ce2a26.svg",k=a.p+"static/media/auth-success.a9eb6caf.svg";var N=function(e){s.a.useEffect((function(){return document.addEventListener("keydown",e.escClosing),function(){document.removeEventListener("keydown",e.escClosing)}}),[]);var t="\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c",a="\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.";return Object(n.jsx)("section",{className:"popup ".concat(e.isOpened.state&&"popup_opened"),onClick:e.onOverlay,children:Object(n.jsxs)("div",{className:"popup__content container",children:[Object(n.jsx)("button",{type:"button",className:"popup__close-icon",onClick:e.onClose}),Object(n.jsx)("img",{className:"popup__status-pic",src:e.isOpened.status?k:C,alt:"\u0421\u0442\u0430\u0442\u0443\u0441 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438"}),Object(n.jsx)("p",{className:"popup__status-text",children:e.isOpened.status?t:a})]})})},y=a(15),V=a(16),S="http://localhost:3000/api",w=new(function(){function e(){Object(y.a)(this,e),this._baseUrl=S}return Object(V.a)(e,[{key:"_handleOriginalResponse",value:function(e){return e.ok?e:Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"signIn",value:function(e){var t=e.email,a=e.password;return fetch(this._baseUrl+"/signin",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:a})}).then(this._handleOriginalResponse).then((function(e){return e.json()}))}},{key:"signUp",value:function(e){var t=e.email,a=e.password,n=e.name,i=e.about,s=e.avatar;return fetch(this._baseUrl+"/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:a,name:n,about:i,avatar:s})}).then(this._handleOriginalResponse).then((function(e){return e.json()}))}},{key:"getUser",value:function(){return fetch(this._baseUrl+"/users/me",{credentials:"include",headers:{"Content-Type":"application/json"}}).then(this._handleOriginalResponse).then((function(e){return e.json()}))}},{key:"logout",value:function(){return fetch(this._baseUrl+"/signout",{method:"POST",credentials:"include"})}}]),e}()),L=new(function(){function e(t){Object(y.a)(this,e),this._baseUrl=t,this._cardsUrl=this._baseUrl+"/cards/",this._userProfileUrl=this._baseUrl+"/users/me/"}return Object(V.a)(e,[{key:"_handleOriginalResponse",value:function(e){return e.ok?e:Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getCards",value:function(){return fetch(this._cardsUrl,{credentials:"include"}).then(this._handleOriginalResponse).then((function(e){return e.json()}))}},{key:"editProfile",value:function(e){var t=e.name,a=e.about;return fetch(this._userProfileUrl,{credentials:"include",method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,about:a})}).then(this._handleOriginalResponse).then((function(e){return e.json()}))}},{key:"addCard",value:function(e){var t=e.name,a=e.link;return fetch(this._cardsUrl,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,link:a})}).then(this._handleOriginalResponse).then((function(e){return e.json()}))}},{key:"deleteCard",value:function(e){return fetch(this._cardsUrl+e,{credentials:"include",method:"DELETE"}).then(this._handleOriginalResponse).then((function(e){return e}))}},{key:"like",value:function(e){return fetch(this._cardsUrl+e+"/likes/",{credentials:"include",method:"PUT"}).then(this._handleOriginalResponse).then((function(e){return e.json()}))}},{key:"removeLike",value:function(e){return fetch(this._cardsUrl+e+"/likes/",{credentials:"include",method:"DELETE"}).then(this._handleOriginalResponse).then((function(e){return e.json()}))}},{key:"updateAvatar",value:function(e){return fetch(this._userProfileUrl+"avatar/",{credentials:"include",method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then(this._handleOriginalResponse).then((function(e){return e.json()}))}}]),e}())(S);var U=function(){return Object(n.jsx)("footer",{className:"footer sizer",children:Object(n.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var T=function(e){return Object(n.jsx)("section",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpened&&"popup_opened"),onClick:e.onOverlay,children:Object(n.jsxs)("form",{className:"popup__content container",name:e.name,onSubmit:e.onSubmit,noValidate:!0,children:[Object(n.jsx)("button",{type:"button",className:"popup__close-icon",onClick:e.onClose}),Object(n.jsx)("h3",{className:"popup__title",children:e.title}),e.children,Object(n.jsx)("button",{type:"submit",className:"popup__submit-button ".concat(e.isValid?"":"popup__submit-button_disabled"),children:e.buttonText})]})})};var P=function(e){var t=s.a.useContext(b),a=s.a.useState({name:{value:t.name,isValid:!0},about:{value:t.about,isvalid:!0}}),i=Object(p.a)(a,2),c=i[0],o=i[1],l=s.a.useState(!1),r=Object(p.a)(l,2),u=r[0],d=r[1];function h(t){e.setValues(c,o,t)}return s.a.useEffect((function(){o({name:{value:t.name,isValid:!0},about:{value:t.about,isValid:!0}})}),[t,e.isOpened]),s.a.useEffect((function(){c.name.isValid&&c.about.isValid?d(!0):d(!1)}),[c.name.isValid,c.about.isValid]),Object(n.jsxs)(T,{name:"editProfile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpened:e.isOpened,onClose:e.onClose,buttonText:e.buttonText,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c.name.value,about:c.about.value})},isValid:u,onOverlay:e.onOverlay,children:[Object(n.jsx)("input",{name:"name",type:"text",className:"popup__input",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40",value:c.name.value,onChange:h}),Object(n.jsx)("span",{className:"popup__input-error ".concat(c.name.isValid?"":"popup__input-error_visible"),children:c.name.validationMessage}),Object(n.jsx)("input",{name:"about",type:"text",className:"popup__input",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,minLength:"2",maxLength:"200",value:c.about.value,onChange:h}),Object(n.jsx)("span",{className:"popup__input-error ".concat(c.about.isValid?"":"popup__input-error_visible"),children:c.about.validationMessage})]})};var E=function(e){var t=s.a.useState({avatar:{value:""}}),a=Object(p.a)(t,2),i=a[0],c=a[1],o=s.a.useState(!1),l=Object(p.a)(o,2),r=l[0],u=l[1];return s.a.useEffect((function(){i.avatar.isValid?u(!0):u(!1)}),[i.avatar.isValid]),s.a.useEffect((function(){e.isOpened||c({avatar:{value:""}})}),[e.isOpened]),Object(n.jsxs)(T,{name:"updateAvatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpened:e.isOpened,onClose:e.onClose,buttonText:e.buttonText,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar(i.avatar.value)},isValid:r,onOverlay:e.onOverlay,children:[Object(n.jsx)("input",{name:"avatar",type:"url",className:"popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0,minLength:"2",maxLength:"200",value:i.avatar.value,onChange:function(t){e.setValues(i,c,t)}}),Object(n.jsx)("span",{className:"popup__input-error ".concat(i.avatar.isValid?"":"popup__input-error_visible"),children:i.avatar.validationMessage})]})};var D=function(e){var t=s.a.useState({name:{value:""},link:{value:""}}),a=Object(p.a)(t,2),i=a[0],c=a[1],o=s.a.useState(!1),l=Object(p.a)(o,2),r=l[0],u=l[1];function d(t){e.setValues(i,c,t)}return s.a.useEffect((function(){i.name.isValid&&i.link.isValid?u(!0):u(!1)}),[i.name.isValid,i.link.isValid]),s.a.useEffect((function(){e.isOpened||c({name:{value:""},link:{value:""}})}),[e.isOpened]),Object(n.jsxs)(T,{name:"addPlace",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpened:e.isOpened,onClose:e.onClose,buttonText:e.buttonText,onSubmit:function(t){t.preventDefault(),e.onSubmit({name:i.name.value,link:i.link.value})},isValid:r,onOverlay:e.onOverlay,children:[Object(n.jsx)("input",{name:"name",type:"text",className:"popup__input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0,value:i.name.value,onChange:d}),Object(n.jsx)("span",{className:"popup__input-error ".concat(i.name.isValid?"":"popup__input-error_visible"),children:i.name.validationMessage}),Object(n.jsx)("input",{name:"link",type:"url",className:"popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,value:i.link.value,onChange:d}),Object(n.jsx)("span",{className:"popup__input-error ".concat(i.link.isValid?"":"popup__input-error_visible"),children:i.link.validationMessage})]})};var A=function(e){return Object(n.jsx)(T,{name:"confirmDelete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpened:e.isOpened,onClose:e.onClose,buttonText:e.buttonText,onOverlay:e.onOverlay,isValid:!0,onSubmit:function(t){t.preventDefault(),e.onSubmit(e.deleteCard)}})};var M=function(e){return Object(n.jsx)("section",{className:"popup fullsize-picture ".concat(e.isOpened&&"popup_opened"),onClick:e.onOverlay,children:Object(n.jsxs)("figure",{className:"popup__content",children:[Object(n.jsx)("button",{type:"button",className:"popup__close-icon",onClick:e.onClose}),Object(n.jsx)("img",{src:e.card.link,alt:e.card.name,className:"popup__picture"}),Object(n.jsx)("figcaption",{className:"popup__caption",children:e.card.name})]})})};var R=function(){var e="\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",t="\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",a=s.a.useState({}),i=Object(p.a)(a,2),c=i[0],o=i[1],l=s.a.useState({addPlace:e,editProfile:e,editAvatar:e,confirmDelete:"\u0414\u0430"}),j=Object(p.a)(l,2),v=j[0],g=j[1],C=s.a.useState({}),k=Object(p.a)(C,2),y=k[0],V=k[1],S=s.a.useState([]),T=Object(p.a)(S,2),R=T[0],I=T[1],q=s.a.useState({name:"User Name",about:"User Bio"}),J=Object(p.a)(q,2),z=J[0],F=J[1],B=s.a.useState(""),H=Object(p.a)(B,2),G=H[0],K=H[1],Q=s.a.useState(!1),W=Object(p.a)(Q,2),X=W[0],Y=W[1],Z=s.a.useState({state:!1,status:!0}),$=Object(p.a)(Z,2),ee=$[0],te=$[1],ae=s.a.useState(!1),ne=Object(p.a)(ae,2),ie=ne[0],se=ne[1],ce=s.a.useState(!1),oe=Object(p.a)(ce,2),le=oe[0],re=oe[1],ue=s.a.useState(!1),de=Object(p.a)(ue,2),pe=de[0],he=de[1],me=s.a.useState(!1),be=Object(p.a)(me,2),je=be[0],ve=be[1],_e=s.a.useState(!1),Oe=Object(p.a)(_e,2),fe=Oe[0],ge=Oe[1];function xe(e){console.log(e)}function Ce(e,t,a){var n=a.target.name;t(Object(d.a)(Object(d.a)({},e),{},Object(u.a)({},n,{value:a.target.value,isValid:a.target.validity.valid,validationMessage:a.target.validationMessage})))}function ke(){he(!1),se(!1),re(!1),ve(!1),ge(!1),te(!1)}function Ne(e){e.target===e.currentTarget&&ke()}function ye(e){27===e.keyCode&&ke()}return s.a.useEffect((function(){w.getUser().then((function(e){K(e.email),Y(!0)})).catch(xe)}),[]),s.a.useEffect((function(){X&&Promise.all([w.getUser(),L.getCards()]).then((function(e){var t=Object(p.a)(e,2),a=t[0],n=t[1];F(a),I(n.reverse())})).catch(xe)}),[X]),s.a.useEffect((function(){return document.addEventListener("keydown",ye),function(){document.removeEventListener("keydown",ye)}}),[]),Object(n.jsxs)("div",{className:"page",children:[X?Object(n.jsx)(h.a,{to:"/"}):Object(n.jsx)(h.a,{to:"/sign-in"}),Object(n.jsxs)(b.Provider,{value:z,children:[Object(n.jsx)(m,{loggedIn:X,setLoggedIn:Y,currentEmail:G,handleSignOut:function(){w.logout().then((function(){Y(!1),K("")})).catch(xe)}}),Object(n.jsx)(N,{isOpened:ee,onClose:ke,onOverlay:Ne,escClosing:ye}),Object(n.jsx)(h.b,{path:"/sign-up",children:Object(n.jsx)(f,{onSubmit:function(e,t){var a=e.email,n=e.password,i=e.name,s=e.about,c=e.avatar;w.signUp({email:a,password:n,name:i,about:s,avatar:c}).then((function(){te({state:!0,status:!0}),setTimeout((function(){te({state:!1,status:!0}),t.history.push("/sign-in")}),2e3)})).catch((function(e){console.log(e),te({state:!0,status:!1}),setTimeout((function(){te({state:!1,status:!1})}),2e3)}))},setIsInfoPopupOpened:te,setValues:Ce})}),Object(n.jsx)(h.b,{path:"/sign-in",children:Object(n.jsx)(O,{onSubmit:function(e,t){var a=e.email,n=e.password;w.signIn({email:a,password:n}).then((function(){K(a),Y(!0),t.history.push("/")})).catch((function(e){console.log(e),te({state:!0,status:!1}),setTimeout((function(){te({state:!1,status:!1})}),2e3)}))},setValues:Ce})}),Object(n.jsx)(x,{exact:!0,path:"/",component:_,cards:R,loggedIn:X,handleEditAvatarClick:function(){he(!0)},handleEditProfileClick:function(){se(!0)},handleAddPlaceClick:function(){re(!0)},handleCardClick:function(e){o(e),ve(!0)},handleDeleteButtonClick:function(e){ge(!0),V(e)},handleCardLike:function(e,t){function a(t){var a=R.map((function(a){return a._id===e._id?t:a}));I(a)}t?L.removeLike(e._id).then(a).catch(xe):L.like(e._id).then(a).catch(xe)}}),Object(n.jsx)(P,{setValues:Ce,isOpened:ie,onClose:ke,onUpdateUser:function(a){var n=a.name,i=a.about;g(Object(d.a)(Object(d.a)({},v),{},{editProfile:t})),L.editProfile({name:n,about:i}).then((function(t){F(t),g(Object(d.a)(Object(d.a)({},v),{},{editProfile:e})),ke()})).catch(xe)},buttonText:v.editProfile,onOverlay:Ne}),Object(n.jsx)(D,{setValues:Ce,isOpened:le,onClose:ke,onSubmit:function(a){var n=a.name,i=a.link;g(Object(d.a)(Object(d.a)({},v),{},{addPlace:t})),L.addCard({name:n,link:i}).then((function(t){I([t].concat(Object(r.a)(R))),g(Object(d.a)(Object(d.a)({},v),{},{addPlace:e})),ke()})).catch(xe)},buttonText:v.addPlace,onOverlay:Ne}),Object(n.jsx)(E,{setValues:Ce,isOpened:pe,onClose:ke,onUpdateAvatar:function(a){g(Object(d.a)(Object(d.a)({},v),{},{editAvatar:t})),L.updateAvatar(a).then((function(t){F(t),g(Object(d.a)(Object(d.a)({},v),{},{editAvatar:e})),ke()})).catch(xe)},buttonText:v.editAvatar,onOverlay:Ne}),Object(n.jsx)(A,{isOpened:fe,onClose:ke,buttonText:v.confirmDelete,onOverlay:Ne,onSubmit:function(e){g(Object(d.a)(Object(d.a)({},v),{},{confirmDelete:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435..."})),L.deleteCard(e._id).then((function(t){if(t.ok){var a=R.filter((function(t){return t._id!==e._id}));I(a)}else console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ",t.status);g(Object(d.a)(Object(d.a)({},v),{},{confirmDelete:"\u0414\u0430"})),ke()})).catch(xe)},deleteCard:y}),Object(n.jsx)(M,{card:c,isOpened:je,onClose:ke,onOverlay:Ne}),Object(n.jsx)(U,{})]})]})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),s(e),c(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(l.a,{children:Object(n.jsx)(R,{})})}),document.getElementById("root")),I()}},[[37,1,2]]]);