"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[970],{7167:function(e,t,n){var r=n(7294);let o=r.createContext(void 0);t.Z=o},5704:function(e,t,n){n.d(t,{Z:function(){return r}});function r({props:e,states:t,muiFormControl:n}){return t.reduce((t,r)=>(t[r]=e[r],n&&void 0===e[r]&&(t[r]=n[r]),t),{})}},4423:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),o=n(7167);function l(){return r.useContext(o.Z)}},3970:function(e,t,n){n.d(t,{rA:function(){return W},Ej:function(){return H},ZP:function(){return P},_o:function(){return L},Gx:function(){return I}});var r=n(3366),o=n(7462),l=n(1387),i=n(7294),a=n(6010),u=n(4780),d=n(3935),s=n(67),c=n(8290),p=n(7596),f=n(6600),m=n(5893);let h=["onChange","maxRows","minRows","style","value"];function b(e){return parseInt(e,10)||0}let y={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function v(e){return null==e||0===Object.keys(e).length||0===e.outerHeightStyle&&!e.overflow}let Z=i.forwardRef(function(e,t){let{onChange:n,maxRows:l,minRows:a=1,style:u,value:Z}=e,g=(0,r.Z)(e,h),{current:x}=i.useRef(null!=Z),S=i.useRef(null),w=(0,s.Z)(t,S),C=i.useRef(null),k=i.useRef(0),[z,R]=i.useState({outerHeightStyle:0}),A=i.useCallback(()=>{let t=S.current,n=(0,c.Z)(t),r=n.getComputedStyle(t);if("0px"===r.width)return{outerHeightStyle:0};let o=C.current;o.style.width=r.width,o.value=t.value||e.placeholder||"x","\n"===o.value.slice(-1)&&(o.value+=" ");let i=r.boxSizing,u=b(r.paddingBottom)+b(r.paddingTop),d=b(r.borderBottomWidth)+b(r.borderTopWidth),s=o.scrollHeight;o.value="x";let p=o.scrollHeight,f=s;a&&(f=Math.max(Number(a)*p,f)),l&&(f=Math.min(Number(l)*p,f)),f=Math.max(f,p);let m=f+("border-box"===i?u+d:0),h=1>=Math.abs(f-s);return{outerHeightStyle:m,overflow:h}},[l,a,e.placeholder]),E=(e,t)=>{let{outerHeightStyle:n,overflow:r}=t;return k.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==r)?(k.current+=1,{overflow:r,outerHeightStyle:n}):e},B=i.useCallback(()=>{let e=A();v(e)||R(t=>E(t,e))},[A]),M=()=>{let e=A();v(e)||d.flushSync(()=>{R(t=>E(t,e))})};i.useEffect(()=>{let e;let t=(0,p.Z)(()=>{k.current=0,S.current&&M()}),n=S.current,r=(0,c.Z)(n);return r.addEventListener("resize",t),"undefined"!=typeof ResizeObserver&&(e=new ResizeObserver(t)).observe(n),()=>{t.clear(),r.removeEventListener("resize",t),e&&e.disconnect()}}),(0,f.Z)(()=>{B()}),i.useEffect(()=>{k.current=0},[Z]);let N=e=>{k.current=0,x||B(),n&&n(e)};return(0,m.jsxs)(i.Fragment,{children:[(0,m.jsx)("textarea",(0,o.Z)({value:Z,onChange:N,ref:w,rows:a,style:(0,o.Z)({height:z.outerHeightStyle,overflow:z.overflow?"hidden":void 0},u)},g)),(0,m.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:C,tabIndex:-1,style:(0,o.Z)({},y.shadow,u,{padding:0})})]})});var g=n(8442),x=n(5704),S=n(7167),w=n(4423),C=n(948),k=n(1657),z=n(8216),R=n(1705),A=n(8974),E=n(2287),B=n(8712),M=n(5827);let N=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],I=(e,t)=>{let{ownerState:n}=e;return[t.root,n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,"small"===n.size&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t[`color${(0,z.Z)(n.color)}`],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel]},L=(e,t)=>{let{ownerState:n}=e;return[t.input,"small"===n.size&&t.inputSizeSmall,n.multiline&&t.inputMultiline,"search"===n.type&&t.inputTypeSearch,n.startAdornment&&t.inputAdornedStart,n.endAdornment&&t.inputAdornedEnd,n.hiddenLabel&&t.inputHiddenLabel]},F=e=>{let{classes:t,color:n,disabled:r,error:o,endAdornment:l,focused:i,formControl:a,fullWidth:d,hiddenLabel:s,multiline:c,readOnly:p,size:f,startAdornment:m,type:h}=e,b={root:["root",`color${(0,z.Z)(n)}`,r&&"disabled",o&&"error",d&&"fullWidth",i&&"focused",a&&"formControl","small"===f&&"sizeSmall",c&&"multiline",m&&"adornedStart",l&&"adornedEnd",s&&"hiddenLabel",p&&"readOnly"],input:["input",r&&"disabled","search"===h&&"inputTypeSearch",c&&"inputMultiline","small"===f&&"inputSizeSmall",s&&"inputHiddenLabel",m&&"inputAdornedStart",l&&"inputAdornedEnd",p&&"readOnly"]};return(0,u.Z)(b,M.u,t)},H=(0,C.ZP)("div",{name:"MuiInputBase",slot:"Root",overridesResolver:I})(({theme:e,ownerState:t})=>(0,o.Z)({},e.typography.body1,{color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${M.Z.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"}},t.multiline&&(0,o.Z)({padding:"4px 0 5px"},"small"===t.size&&{paddingTop:1}),t.fullWidth&&{width:"100%"})),W=(0,C.ZP)("input",{name:"MuiInputBase",slot:"Input",overridesResolver:L})(({theme:e,ownerState:t})=>{let n="light"===e.palette.mode,r=(0,o.Z)({color:"currentColor"},e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5},{transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})}),l={opacity:"0 !important"},i=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5};return(0,o.Z)({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":r,"&::-moz-placeholder":r,"&:-ms-input-placeholder":r,"&::-ms-input-placeholder":r,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${M.Z.formControl} &`]:{"&::-webkit-input-placeholder":l,"&::-moz-placeholder":l,"&:-ms-input-placeholder":l,"&::-ms-input-placeholder":l,"&:focus::-webkit-input-placeholder":i,"&:focus::-moz-placeholder":i,"&:focus:-ms-input-placeholder":i,"&:focus::-ms-input-placeholder":i},[`&.${M.Z.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},"small"===t.size&&{paddingTop:1},t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},"search"===t.type&&{MozAppearance:"textfield"})}),j=(0,m.jsx)(E.Z,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),O=i.forwardRef(function(e,t){var n;let u=(0,k.Z)({props:e,name:"MuiInputBase"}),{"aria-describedby":d,autoComplete:s,autoFocus:c,className:p,components:f={},componentsProps:h={},defaultValue:b,disabled:y,disableInjectingGlobalStyles:v,endAdornment:C,fullWidth:z=!1,id:E,inputComponent:M="input",inputProps:I={},inputRef:L,maxRows:O,minRows:P,multiline:T=!1,name:$,onBlur:_,onChange:D,onClick:K,onFocus:V,onKeyDown:q,onKeyUp:G,placeholder:U,readOnly:J,renderSuffix:Q,rows:X,slotProps:Y={},slots:ee={},startAdornment:et,type:en="text",value:er}=u,eo=(0,r.Z)(u,N),el=null!=I.value?I.value:er,{current:ei}=i.useRef(null!=el),ea=i.useRef(),eu=i.useCallback(e=>{},[]),ed=(0,R.Z)(ea,L,I.ref,eu),[es,ec]=i.useState(!1),ep=(0,w.Z)(),ef=(0,x.Z)({props:u,muiFormControl:ep,states:["color","disabled","error","hiddenLabel","size","required","filled"]});ef.focused=ep?ep.focused:es,i.useEffect(()=>{!ep&&y&&es&&(ec(!1),_&&_())},[ep,y,es,_]);let em=ep&&ep.onFilled,eh=ep&&ep.onEmpty,eb=i.useCallback(e=>{(0,B.vd)(e)?em&&em():eh&&eh()},[em,eh]);(0,A.Z)(()=>{ei&&eb({value:el})},[el,eb,ei]);let ey=e=>{if(ef.disabled){e.stopPropagation();return}V&&V(e),I.onFocus&&I.onFocus(e),ep&&ep.onFocus?ep.onFocus(e):ec(!0)},ev=e=>{_&&_(e),I.onBlur&&I.onBlur(e),ep&&ep.onBlur?ep.onBlur(e):ec(!1)},eZ=(e,...t)=>{if(!ei){let t=e.target||ea.current;if(null==t)throw Error((0,l.Z)(1));eb({value:t.value})}I.onChange&&I.onChange(e,...t),D&&D(e,...t)};i.useEffect(()=>{eb(ea.current)},[]);let eg=e=>{ea.current&&e.currentTarget===e.target&&ea.current.focus(),K&&K(e)},ex=M,eS=I;T&&"input"===ex&&(eS=X?(0,o.Z)({type:void 0,minRows:X,maxRows:X},eS):(0,o.Z)({type:void 0,maxRows:O,minRows:P},eS),ex=Z);let ew=e=>{eb("mui-auto-fill-cancel"===e.animationName?ea.current:{value:"x"})};i.useEffect(()=>{ep&&ep.setAdornedStart(Boolean(et))},[ep,et]);let eC=(0,o.Z)({},u,{color:ef.color||"primary",disabled:ef.disabled,endAdornment:C,error:ef.error,focused:ef.focused,formControl:ep,fullWidth:z,hiddenLabel:ef.hiddenLabel,multiline:T,size:ef.size,startAdornment:et,type:en}),ek=F(eC),ez=ee.root||f.Root||H,eR=Y.root||h.root||{},eA=ee.input||f.Input||W;return eS=(0,o.Z)({},eS,null!=(n=Y.input)?n:h.input),(0,m.jsxs)(i.Fragment,{children:[!v&&j,(0,m.jsxs)(ez,(0,o.Z)({},eR,!(0,g.Z)(ez)&&{ownerState:(0,o.Z)({},eC,eR.ownerState)},{ref:t,onClick:eg},eo,{className:(0,a.Z)(ek.root,eR.className,p,J&&"MuiInputBase-readOnly"),children:[et,(0,m.jsx)(S.Z.Provider,{value:null,children:(0,m.jsx)(eA,(0,o.Z)({ownerState:eC,"aria-invalid":ef.error,"aria-describedby":d,autoComplete:s,autoFocus:c,defaultValue:b,disabled:ef.disabled,id:E,onAnimationStart:ew,name:$,placeholder:U,readOnly:J,required:ef.required,rows:X,value:el,onKeyDown:q,onKeyUp:G,type:en},eS,!(0,g.Z)(eA)&&{as:ex,ownerState:(0,o.Z)({},eC,eS.ownerState)},{ref:ed,className:(0,a.Z)(ek.input,eS.className,J&&"MuiInputBase-readOnly"),onBlur:ev,onChange:eZ,onFocus:ey}))}),C,Q?Q((0,o.Z)({},ef,{startAdornment:et})):null]}))]})});var P=O},5827:function(e,t,n){n.d(t,{u:function(){return l}});var r=n(1588),o=n(4867);function l(e){return(0,o.Z)("MuiInputBase",e)}let i=(0,r.Z)("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]);t.Z=i},8712:function(e,t,n){function r(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}function o(e,t=!1){return e&&(r(e.value)&&""!==e.value||t&&r(e.defaultValue)&&""!==e.defaultValue)}function l(e){return e.startAdornment}n.d(t,{B7:function(){return l},vd:function(){return o}})}}]);