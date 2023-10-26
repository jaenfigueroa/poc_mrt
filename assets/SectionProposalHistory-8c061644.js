import{_ as O}from"./index-60d0262e.js";import{ab as f,ac as C,ad as w,ae as T,af as v,ag as g,_ as i,j as s,ah as h,ai as y,f as M,aj as U,v as _,S as R,ak as D,A as x}from"./material-544325ae.js";import{r as a}from"./react-ce8bd5b3.js";import{u as I}from"./useQuery-7d7188ff.js";import"./router-9a8b59f6.js";const P=a.createContext({}),j=P;function k(e){return f("MuiTimeline",e)}C("MuiTimeline",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);function d(e){return e==="alternate-reverse"?"positionAlternateReverse":`position${w(e)}`}const E=["position","className"],L=e=>{const{position:o,classes:t}=e,n={root:["root",o&&d(o)]};return y(n,k,t)},G=T("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.position&&o[d(t.position)]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1}),H=a.forwardRef(function(o,t){const n=v({props:o,name:"MuiTimeline"}),{position:r="right",className:p}=n,c=g(n,E),l=i({},n,{position:r}),m=L(l),u=a.useMemo(()=>({position:r}),[r]);return s.jsx(j.Provider,{value:u,children:s.jsx(G,i({className:h(m.root,p),ownerState:l,ref:t},c))})}),V=H;function z(e){return f("MuiTimelineContent",e)}const W=C("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),F=W,Q=["className"],q=e=>{const{position:o,classes:t}=e,n={root:["root",d(o)]};return y(n,z,t)},B=T(M,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[d(t.position)]]}})(({ownerState:e})=>i({flex:1,padding:"6px 16px",textAlign:"left"},e.position==="left"&&{textAlign:"right"})),J=a.forwardRef(function(o,t){const n=v({props:o,name:"MuiTimelineContent"}),{className:r}=n,p=g(n,Q),{position:c}=a.useContext(j),l=i({},n,{position:c||"right"}),m=q(l);return s.jsx(B,i({component:"div",className:h(m.root,r),ownerState:l,ref:t},p))}),K=J;function X(e){return f("MuiTimelineOppositeContent",e)}const Y=C("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),$=Y,Z=["className"],ee=e=>{const{position:o,classes:t}=e,n={root:["root",d(o)]};return y(n,X,t)},oe=T(M,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[d(t.position)]]}})(({ownerState:e})=>i({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1},e.position==="left"&&{textAlign:"left"})),S=a.forwardRef(function(o,t){const n=v({props:o,name:"MuiTimelineOppositeContent"}),{className:r}=n,p=g(n,Z),{position:c}=a.useContext(j),l=i({},n,{position:c||"left"}),m=ee(l);return s.jsx(oe,i({component:"div",className:h(m.root,r),ownerState:l,ref:t},p))});S.muiName="TimelineOppositeContent";const te=S;function ne(e){return f("MuiTimelineItem",e)}C("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse","missingOppositeContent"]);const se=["position","className"],ie=e=>{const{position:o,classes:t,hasOppositeContent:n}=e,r={root:["root",d(o),!n&&"missingOppositeContent"]};return y(r,ne,t)},re=T("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[d(t.position)]]}})(({ownerState:e})=>i({listStyle:"none",display:"flex",position:"relative",minHeight:70},e.position==="left"&&{flexDirection:"row-reverse"},(e.position==="alternate"||e.position==="alternate-reverse")&&{[`&:nth-of-type(${e.position==="alternate"?"even":"odd"})`]:{flexDirection:"row-reverse",[`& .${F.root}`]:{textAlign:"right"},[`& .${$.root}`]:{textAlign:"left"}}},!e.hasOppositeContent&&{"&:before":{content:'""',flex:1,padding:"6px 16px"}})),ae=a.forwardRef(function(o,t){const n=v({props:o,name:"MuiTimelineItem"}),{position:r,className:p}=n,c=g(n,se),{position:l}=a.useContext(j);let m=!1;a.Children.forEach(n.children,A=>{U(A,["TimelineOppositeContent"])&&(m=!0)});const u=i({},n,{position:r||l||"right",hasOppositeContent:m}),N=ie(u),b=a.useMemo(()=>({position:u.position}),[u.position]);return s.jsx(j.Provider,{value:b,children:s.jsx(re,i({className:h(N.root,p),ownerState:u,ref:t},c))})}),le=ae;function ce(e){return f("MuiTimelineSeparator",e)}C("MuiTimelineSeparator",["root"]);const pe=["className"],me=e=>{const{classes:o}=e;return y({root:["root"]},ce,o)},ue=T("div",{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"}),de=a.forwardRef(function(o,t){const n=v({props:o,name:"MuiTimelineSeparator"}),{className:r}=n,p=g(n,pe),c=n,l=me(c);return s.jsx(ue,i({className:h(l.root,r),ownerState:c,ref:t},p))}),xe=de;function fe(e){return f("MuiTimelineConnector",e)}C("MuiTimelineConnector",["root"]);const Ce=["className"],Te=e=>{const{classes:o}=e;return y({root:["root"]},fe,o)},ve=T("span",{name:"MuiTimelineConnector",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e})=>({width:2,backgroundColor:(e.vars||e).palette.grey[400],flexGrow:1})),ge=a.forwardRef(function(o,t){const n=v({props:o,name:"MuiTimelineConnector"}),{className:r}=n,p=g(n,Ce),c=n,l=Te(c);return s.jsx(ve,i({className:h(l.root,r),ownerState:c,ref:t},p))}),he=ge;function ye(e){return f("MuiTimelineDot",e)}C("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);const je=["className","color","variant"],Re=e=>{const{color:o,variant:t,classes:n}=e,r={root:["root",t,o!=="inherit"&&`${t}${w(o)}`]};return y(r,ye,n)},we=T("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[t.color!=="inherit"&&`${t.variant}${w(t.color)}`],o[t.variant]]}})(({ownerState:e,theme:o})=>i({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(o.vars||o).shadows[1],margin:"11.5px 0"},e.variant==="filled"&&i({borderColor:"transparent"},e.color!=="inherit"&&i({},e.color==="grey"?{color:(o.vars||o).palette.grey[50],backgroundColor:(o.vars||o).palette.grey[400]}:{color:(o.vars||o).palette[e.color].contrastText,backgroundColor:(o.vars||o).palette[e.color].main})),e.variant==="outlined"&&i({boxShadow:"none",backgroundColor:"transparent"},e.color!=="inherit"&&i({},e.color==="grey"?{borderColor:(o.vars||o).palette.grey[400]}:{borderColor:(o.vars||o).palette[e.color].main})))),Me=a.forwardRef(function(o,t){const n=v({props:o,name:"MuiTimelineDot"}),{className:r,color:p="grey",variant:c="filled"}=n,l=g(n,je),m=i({},n,{color:p,variant:c}),u=Re(m);return s.jsx(we,i({className:h(u.root,r),ownerState:m,ref:t},l))}),$e=Me,Se=()=>s.jsxs(_,{children:[s.jsx(R,{animation:"wave",variant:"circular",height:40,width:40}),s.jsx(R,{animation:"wave",variant:"text",height:60}),s.jsx(R,{animation:"wave",variant:"rounded",height:150})]}),Ne=a.lazy(()=>O(()=>import("./CardHistory-7134bbdd.js"),["./CardHistory-7134bbdd.js","./material-544325ae.js","./react-ce8bd5b3.js"],import.meta.url)),be=async()=>(await(await fetch("https://raw.githubusercontent.com/jaenfigueroa/cdn-example/main/new-rules-admin/history.json")).json()).history,Ie=()=>{const{data:e}=I("proposals",be);return s.jsxs(s.Fragment,{children:[s.jsx(a.Suspense,{fallback:s.jsx(R,{animation:"wave",height:100}),children:s.jsxs(D,{max:10,children:[s.jsx(x,{}),s.jsx(x,{}),s.jsx(x,{}),s.jsx(x,{}),s.jsx(x,{}),s.jsx(x,{}),s.jsx(x,{})]})}),s.jsx(V,{sx:{[`& .${$.root}`]:{flex:.2}},children:e==null?void 0:e.map(o=>s.jsxs(le,{children:[s.jsx(te,{children:o.time}),s.jsxs(xe,{children:[s.jsx($e,{}),s.jsx(he,{})]}),s.jsx(K,{children:s.jsx(a.Suspense,{fallback:s.jsx(Se,{}),children:s.jsx(Ne,{user:o.user,action:o.action,reason:o.reason,time:o.time})})})]},crypto.randomUUID()))})]})};export{Ie as default};