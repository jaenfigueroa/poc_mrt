import{_ as i}from"./index-71ea4768.js";import{j as e,L as c,B as u,e as m}from"./material-544325ae.js";import{r}from"./react-ce8bd5b3.js";const p=r.createContext({}),x=({children:t})=>{const[s,o]=r.useState(!1),[a,n]=r.useState(1),l=r.useMemo(()=>({isOpenDrawer:s,setIsOpenDrawer:o,columnActive:a,setColumnActive:n}),[s,o,a,n]);return e.jsx(p.Provider,{value:l,children:t})},_=r.lazy(()=>i(()=>import("./index-616be546.js").then(t=>t.i),["./index-616be546.js","./index-71ea4768.js","./material-544325ae.js","./react-ce8bd5b3.js","./router-abd1984d.js","./createSvgIcon-d4564fbc.js","./Save-5f9c8e0f.js","./useQuery-ebe555cb.js"],import.meta.url)),d=r.lazy(()=>i(()=>import("./index-37dafc2b.js"),["./index-37dafc2b.js","./index-71ea4768.js","./material-544325ae.js","./react-ce8bd5b3.js","./router-abd1984d.js"],import.meta.url)),j=()=>e.jsx(r.Suspense,{fallback:e.jsx(c,{}),children:e.jsxs(x,{children:[e.jsx(r.Suspense,{fallback:e.jsxs(u,{display:"flex",justifyContent:"center",alignItems:"center",height:"90vh",children:[e.jsx(m,{})," "]}),children:e.jsx(_,{})}),e.jsx(d,{})]})}),D=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));export{D as A,p as D};