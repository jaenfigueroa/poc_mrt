import{r as s,c as W,b as Re,j as H,_ as w,g as se,a as re,s as X,u as ie,d as q,f as ae,E as ke}from"./index-567cb7ad.js";import"./react-is.production.min-a192e302.js";import{T as _e,r as Ne,g as ye,b as je,M as ze,P as He}from"./Modal-a633b611.js";import{u as le,a as Ae}from"./useForkRef-4d8a3207.js";import{o as J,a as xe,d as Ke}from"./ownerWindow-598c61de.js";import{u as Q,i as We}from"./useSlotProps-b3737701.js";const Ue=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function ne(t){return`scale(${t}, ${t**2})`}const Ge={entering:{opacity:1,transform:ne(1)},entered:{opacity:1,transform:"none"}},ee=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Te=s.forwardRef(function(e,o){const{addEndListener:g,appear:P=!0,children:v,easing:f,in:p,onEnter:u,onEntered:y,onEntering:T,onExit:x,onExited:I,onExiting:E,style:N,timeout:M="auto",TransitionComponent:m=_e}=e,a=W(e,Ue),_=s.useRef(),n=s.useRef(),r=Re(),c=s.useRef(null),b=le(c,v.ref,o),i=l=>S=>{if(l){const C=c.current;S===void 0?l(C):l(C,S)}},$=i(T),F=i((l,S)=>{Ne(l);const{duration:C,delay:j,easing:d}=ye({style:N,timeout:M,easing:f},{mode:"enter"});let L;M==="auto"?(L=r.transitions.getAutoHeightDuration(l.clientHeight),n.current=L):L=C,l.style.transition=[r.transitions.create("opacity",{duration:L,delay:j}),r.transitions.create("transform",{duration:ee?L:L*.666,delay:j,easing:d})].join(","),u&&u(l,S)}),A=i(y),U=i(E),O=i(l=>{const{duration:S,delay:C,easing:j}=ye({style:N,timeout:M,easing:f},{mode:"exit"});let d;M==="auto"?(d=r.transitions.getAutoHeightDuration(l.clientHeight),n.current=d):d=S,l.style.transition=[r.transitions.create("opacity",{duration:d,delay:C}),r.transitions.create("transform",{duration:ee?d:d*.666,delay:ee?C:C||d*.333,easing:j})].join(","),l.style.opacity=0,l.style.transform=ne(.75),x&&x(l)}),G=i(I),K=l=>{M==="auto"&&(_.current=setTimeout(l,n.current||0)),g&&g(c.current,l)};return s.useEffect(()=>()=>{clearTimeout(_.current)},[]),H.jsx(m,w({appear:P,in:p,nodeRef:c,onEnter:F,onEntered:A,onEntering:$,onExit:O,onExited:G,onExiting:U,addEndListener:K,timeout:M==="auto"?null:M},a,{children:(l,S)=>s.cloneElement(v,w({style:w({opacity:0,transform:ne(.75),visibility:l==="exited"&&!p?"hidden":void 0},Ge[l],N,v.props.style),ref:b},S))}))});Te.muiSupportAuto=!0;const Ve=Te,Be=s.createContext({}),Xe=Be;function Ye(t){return se("MuiList",t)}re("MuiList",["root","padding","dense","subheader"]);const qe=["children","className","component","dense","disablePadding","subheader"],Je=t=>{const{classes:e,disablePadding:o,dense:g,subheader:P}=t;return ae({root:["root",!o&&"padding",g&&"dense",P&&"subheader"]},Ye,e)},Qe=X("ul",{name:"MuiList",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,!o.disablePadding&&e.padding,o.dense&&e.dense,o.subheader&&e.subheader]}})(({ownerState:t})=>w({listStyle:"none",margin:0,padding:0,position:"relative"},!t.disablePadding&&{paddingTop:8,paddingBottom:8},t.subheader&&{paddingTop:0})),Ze=s.forwardRef(function(e,o){const g=ie({props:e,name:"MuiList"}),{children:P,className:v,component:f="ul",dense:p=!1,disablePadding:u=!1,subheader:y}=g,T=W(g,qe),x=s.useMemo(()=>({dense:p}),[p]),I=w({},g,{component:f,dense:p,disablePadding:u}),E=Je(I);return H.jsx(Xe.Provider,{value:x,children:H.jsxs(Qe,w({as:f,className:q(E.root,v),ref:o,ownerState:I},T,{children:[y,P]}))})}),et=Ze,tt=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function te(t,e,o){return t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:o?null:t.firstChild}function Ee(t,e,o){return t===e?o?t.firstChild:t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:o?null:t.lastChild}function Se(t,e){if(e===void 0)return!0;let o=t.innerText;return o===void 0&&(o=t.textContent),o=o.trim().toLowerCase(),o.length===0?!1:e.repeating?o[0]===e.keys[0]:o.indexOf(e.keys.join(""))===0}function Y(t,e,o,g,P,v){let f=!1,p=P(t,e,e?o:!1);for(;p;){if(p===t.firstChild){if(f)return!1;f=!0}const u=g?!1:p.disabled||p.getAttribute("aria-disabled")==="true";if(!p.hasAttribute("tabindex")||!Se(p,v)||u)p=P(t,p,o);else return p.focus(),!0}return!1}const ot=s.forwardRef(function(e,o){const{actions:g,autoFocus:P=!1,autoFocusItem:v=!1,children:f,className:p,disabledItemsFocusable:u=!1,disableListWrap:y=!1,onKeyDown:T,variant:x="selectedMenu"}=e,I=W(e,tt),E=s.useRef(null),N=s.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Ae(()=>{P&&E.current.focus()},[P]),s.useImperativeHandle(g,()=>({adjustStyleForScrollbar:(n,r)=>{const c=!E.current.style.width;if(n.clientHeight<E.current.clientHeight&&c){const b=`${je(J(n))}px`;E.current.style[r.direction==="rtl"?"paddingLeft":"paddingRight"]=b,E.current.style.width=`calc(100% + ${b})`}return E.current}}),[]);const M=n=>{const r=E.current,c=n.key,b=J(r).activeElement;if(c==="ArrowDown")n.preventDefault(),Y(r,b,y,u,te);else if(c==="ArrowUp")n.preventDefault(),Y(r,b,y,u,Ee);else if(c==="Home")n.preventDefault(),Y(r,null,y,u,te);else if(c==="End")n.preventDefault(),Y(r,null,y,u,Ee);else if(c.length===1){const i=N.current,$=c.toLowerCase(),F=performance.now();i.keys.length>0&&(F-i.lastTime>500?(i.keys=[],i.repeating=!0,i.previousKeyMatched=!0):i.repeating&&$!==i.keys[0]&&(i.repeating=!1)),i.lastTime=F,i.keys.push($);const A=b&&!i.repeating&&Se(b,i);i.previousKeyMatched&&(A||Y(r,b,!1,u,te,i))?n.preventDefault():i.previousKeyMatched=!1}T&&T(n)},m=le(E,o);let a=-1;s.Children.forEach(f,(n,r)=>{if(!s.isValidElement(n)){a===r&&(a+=1,a>=f.length&&(a=-1));return}n.props.disabled||(x==="selectedMenu"&&n.props.selected||a===-1)&&(a=r),a===r&&(n.props.disabled||n.props.muiSkipListHighlight||n.type.muiSkipListHighlight)&&(a+=1,a>=f.length&&(a=-1))});const _=s.Children.map(f,(n,r)=>{if(r===a){const c={};return v&&(c.autoFocus=!0),n.props.tabIndex===void 0&&x==="selectedMenu"&&(c.tabIndex=0),s.cloneElement(n,c)}return n});return H.jsx(et,w({role:"menu",ref:m,className:p,onKeyDown:M,tabIndex:P?0:-1},I,{children:_}))}),nt=ot;function st(t){return se("MuiPopover",t)}re("MuiPopover",["root","paper"]);const rt=["onEntering"],it=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],at=["slotProps"];function be(t,e){let o=0;return typeof e=="number"?o=e:e==="center"?o=t.height/2:e==="bottom"&&(o=t.height),o}function we(t,e){let o=0;return typeof e=="number"?o=e:e==="center"?o=t.width/2:e==="right"&&(o=t.width),o}function Me(t){return[t.horizontal,t.vertical].map(e=>typeof e=="number"?`${e}px`:e).join(" ")}function oe(t){return typeof t=="function"?t():t}const lt=t=>{const{classes:e}=t;return ae({root:["root"],paper:["paper"]},st,e)},ct=X(ze,{name:"MuiPopover",slot:"Root",overridesResolver:(t,e)=>e.root})({}),Ce=X(He,{name:"MuiPopover",slot:"Paper",overridesResolver:(t,e)=>e.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),ut=s.forwardRef(function(e,o){var g,P,v;const f=ie({props:e,name:"MuiPopover"}),{action:p,anchorEl:u,anchorOrigin:y={vertical:"top",horizontal:"left"},anchorPosition:T,anchorReference:x="anchorEl",children:I,className:E,container:N,elevation:M=8,marginThreshold:m=16,open:a,PaperProps:_={},slots:n,slotProps:r,transformOrigin:c={vertical:"top",horizontal:"left"},TransitionComponent:b=Ve,transitionDuration:i="auto",TransitionProps:{onEntering:$}={},disableScrollLock:F=!1}=f,A=W(f.TransitionProps,rt),U=W(f,it),O=(g=r==null?void 0:r.paper)!=null?g:_,G=s.useRef(),K=le(G,O.ref),l=w({},f,{anchorOrigin:y,anchorReference:x,elevation:M,marginThreshold:m,externalPaperSlotProps:O,transformOrigin:c,TransitionComponent:b,transitionDuration:i,TransitionProps:A}),S=lt(l),C=s.useCallback(()=>{if(x==="anchorPosition")return T;const h=oe(u),D=(h&&h.nodeType===1?h:J(G.current).body).getBoundingClientRect();return{top:D.top+be(D,y.vertical),left:D.left+we(D,y.horizontal)}},[u,y.horizontal,y.vertical,T,x]),j=s.useCallback(h=>({vertical:be(h,c.vertical),horizontal:we(h,c.horizontal)}),[c.horizontal,c.vertical]),d=s.useCallback(h=>{const R={width:h.offsetWidth,height:h.offsetHeight},D=j(R);if(x==="none")return{top:null,left:null,transformOrigin:Me(D)};const fe=C();let V=fe.top-D.vertical,B=fe.left-D.horizontal;const he=V+R.height,me=B+R.width,ge=xe(oe(u)),Pe=ge.innerHeight-m,ve=ge.innerWidth-m;if(m!==null&&V<m){const k=V-m;V-=k,D.vertical+=k}else if(m!==null&&he>Pe){const k=he-Pe;V-=k,D.vertical+=k}if(m!==null&&B<m){const k=B-m;B-=k,D.horizontal+=k}else if(me>ve){const k=me-ve;B-=k,D.horizontal+=k}return{top:`${Math.round(V)}px`,left:`${Math.round(B)}px`,transformOrigin:Me(D)}},[u,x,C,j,m]),[L,ce]=s.useState(a),z=s.useCallback(()=>{const h=G.current;if(!h)return;const R=d(h);R.top!==null&&(h.style.top=R.top),R.left!==null&&(h.style.left=R.left),h.style.transformOrigin=R.transformOrigin,ce(!0)},[d]);s.useEffect(()=>(F&&window.addEventListener("scroll",z),()=>window.removeEventListener("scroll",z)),[u,F,z]);const Le=(h,R)=>{$&&$(h,R),z()},De=()=>{ce(!1)};s.useEffect(()=>{a&&z()}),s.useImperativeHandle(p,()=>a?{updatePosition:()=>{z()}}:null,[a,z]),s.useEffect(()=>{if(!a)return;const h=Ke(()=>{z()}),R=xe(u);return R.addEventListener("resize",h),()=>{h.clear(),R.removeEventListener("resize",h)}},[u,a,z]);let ue=i;i==="auto"&&!b.muiSupportAuto&&(ue=void 0);const $e=N||(u?J(oe(u)).body:void 0),Z=(P=n==null?void 0:n.root)!=null?P:ct,pe=(v=n==null?void 0:n.paper)!=null?v:Ce,Fe=Q({elementType:pe,externalSlotProps:w({},O,{style:L?O.style:w({},O.style,{opacity:0})}),additionalProps:{elevation:M,ref:K},ownerState:l,className:q(S.paper,O==null?void 0:O.className)}),de=Q({elementType:Z,externalSlotProps:(r==null?void 0:r.root)||{},externalForwardedProps:U,additionalProps:{ref:o,slotProps:{backdrop:{invisible:!0}},container:$e,open:a},ownerState:l,className:q(S.root,E)}),{slotProps:Ie}=de,Oe=W(de,at);return H.jsx(Z,w({},Oe,!We(Z)&&{slotProps:Ie,disableScrollLock:F},{children:H.jsx(b,w({appear:!0,in:a,onEntering:Le,onExited:De,timeout:ue},A,{children:H.jsx(pe,w({},Fe,{children:I}))}))}))}),pt=ut;function dt(t){return se("MuiMenu",t)}re("MuiMenu",["root","paper","list"]);const ft=["onEntering"],ht=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],mt={vertical:"top",horizontal:"right"},gt={vertical:"top",horizontal:"left"},Pt=t=>{const{classes:e}=t;return ae({root:["root"],paper:["paper"],list:["list"]},dt,e)},vt=X(pt,{shouldForwardProp:t=>ke(t)||t==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(t,e)=>e.root})({}),yt=X(Ce,{name:"MuiMenu",slot:"Paper",overridesResolver:(t,e)=>e.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),xt=X(nt,{name:"MuiMenu",slot:"List",overridesResolver:(t,e)=>e.list})({outline:0}),Et=s.forwardRef(function(e,o){var g,P;const v=ie({props:e,name:"MuiMenu"}),{autoFocus:f=!0,children:p,className:u,disableAutoFocusItem:y=!1,MenuListProps:T={},onClose:x,open:I,PaperProps:E={},PopoverClasses:N,transitionDuration:M="auto",TransitionProps:{onEntering:m}={},variant:a="selectedMenu",slots:_={},slotProps:n={}}=v,r=W(v.TransitionProps,ft),c=W(v,ht),b=Re(),i=b.direction==="rtl",$=w({},v,{autoFocus:f,disableAutoFocusItem:y,MenuListProps:T,onEntering:m,PaperProps:E,transitionDuration:M,TransitionProps:r,variant:a}),F=Pt($),A=f&&!y&&I,U=s.useRef(null),O=(d,L)=>{U.current&&U.current.adjustStyleForScrollbar(d,b),m&&m(d,L)},G=d=>{d.key==="Tab"&&(d.preventDefault(),x&&x(d,"tabKeyDown"))};let K=-1;s.Children.map(p,(d,L)=>{s.isValidElement(d)&&(d.props.disabled||(a==="selectedMenu"&&d.props.selected||K===-1)&&(K=L))});const l=(g=_.paper)!=null?g:yt,S=(P=n.paper)!=null?P:E,C=Q({elementType:_.root,externalSlotProps:n.root,ownerState:$,className:[F.root,u]}),j=Q({elementType:l,externalSlotProps:S,ownerState:$,className:F.paper});return H.jsx(vt,w({onClose:x,anchorOrigin:{vertical:"bottom",horizontal:i?"right":"left"},transformOrigin:i?mt:gt,slots:{paper:l,root:_.root},slotProps:{root:C,paper:j},open:I,ref:o,transitionDuration:M,TransitionProps:w({onEntering:O},r),ownerState:$},c,{classes:N,children:H.jsx(xt,w({onKeyDown:G,actions:U,autoFocus:f&&(K===-1||y),autoFocusItem:A,variant:a},T,{className:q(F.list,T.className),children:p}))}))}),Ct=Et;export{Ve as G,Xe as L,Ct as M};
