import{r as t}from"./index-567cb7ad.js";function c(e,n){typeof e=="function"?e(n):e&&(e.current=n)}const r=typeof window<"u"?t.useLayoutEffect:t.useEffect,s=r;function o(e){const n=t.useRef(e);return s(()=>{n.current=e}),t.useCallback((...u)=>(0,n.current)(...u),[])}function a(...e){return t.useMemo(()=>e.every(n=>n==null)?null:n=>{e.forEach(u=>{c(u,n)})},e)}export{s as a,o as b,c as s,a as u};
