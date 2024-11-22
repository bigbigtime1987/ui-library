import{_ as E,V as J,r,G as P,U as a,o as C,c as j,a as o,E as l,f as t,w as s,F as R}from"./chunks/framework.DegHhALb.js";import{A as b}from"./chunks/theme.C2HRUGlm.js";const F="/assets/css.CoOmj-qU.jpg",G="/assets/git.C67Lcxao.jpg",T="/assets/rollup.w-6jTAJ_.jpg",H="/assets/gulp.COtjJEpZ.jpg",K={class:"main-container"},L={class:"main-info"},Q={class:"main-components"},Z={class:"components-box input-com"},W={class:"components-box image-com"},X={class:"components-box image-com1"},Y={class:"components-box drawer-com"},h={class:"components-box switch-com"},ee={class:"components-box button-com"},oe={class:"components-box form-com"},te={class:"crad-wrap"},se={__name:"home",setup(z){J();const p=r("azong UI"),_=r(!0),c=r("right"),I=()=>{b({type:"success",content:"这是提示消息"})},f=r(!1),g=r(!1),v=r(null),d=P({name:"",password:""}),S={name:[{required:!0,message:"请输入帐号"}],password:[{required:!0,message:"请输入密码"}]},O=()=>{v.value.validate().then(()=>{b({type:"success",content:"表单校验通过",background:!0})}).catch(()=>{b({type:"error",content:"表单校验失败",background:!0})})},M=()=>{v.value.reset()},x=U=>{location.href=U};return(U,e)=>{const u=a("a-button"),y=a("a-space"),V=a("a-input"),k=a("a-image"),i=a("a-radio"),$=a("a-radio-group"),q=a("a-switch"),w=a("a-form-item"),N=a("a-form"),m=a("a-col"),A=a("a-row"),B=a("a-modal"),D=a("a-drawer");return C(),j(R,null,[o("div",null,[o("div",K,[o("div",L,[e[13]||(e[13]=o("h1",null,[o("span",null,"Vue.js 3"),l(" 高级编程："),o("br"),l("UI组件库开发")],-1)),e[14]||(e[14]=o("p",null,[l(" 由无到有、由浅到深介绍UI组件库的开发过程"),o("br"),l(" 可以"),o("span",null,"全面掌握"),l("、"),o("span",null,"深入理解"),l("UI组件库底层逻辑及运作原理。 ")],-1)),o("div",null,[t(y,{size:16},{default:s(()=>[t(u,{type:"primary",round:"",size:"large",onClick:e[0]||(e[0]=n=>x("./components/"))},{default:s(()=>e[11]||(e[11]=[l("开始使用")])),_:1}),t(u,{type:"error",round:"",size:"large",onClick:e[1]||(e[1]=n=>x("./course/catalog1/prototype.html"))},{default:s(()=>e[12]||(e[12]=[l("高阶思维课程")])),_:1})]),_:1})])]),o("div",Q,[o("section",Z,[e[15]||(e[15]=o("h4",{class:"com-name"},"Input",-1)),t(V,{size:"large",modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=n=>p.value=n),clearance:"",width:"100%"},null,8,["modelValue"])]),o("section",W,[t(k,{width:200,height:200,radius:32,src:"https://mobileproducts.cdn.sohu.com/prod/img/aigc/simple_ai/2024/03/26/bwmH7VKzqQm.png"},{content:s(()=>e[16]||(e[16]=[o("div",{class:"image-inner"},"UI组件库开发",-1)])),_:1})]),o("section",X,[t(k,{width:100,height:100,radius:20,src:"/images/cat.jpg"})]),o("section",Y,[t($,{modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=n=>c.value=n)},{default:s(()=>[t(y,{size:10},{default:s(()=>[t(i,{value:"top"},{default:s(()=>e[17]||(e[17]=[l("上")])),_:1}),t(i,{value:"right"},{default:s(()=>e[18]||(e[18]=[l("右")])),_:1}),t(i,{value:"bottom"},{default:s(()=>e[19]||(e[19]=[l("下")])),_:1}),t(i,{value:"left"},{default:s(()=>e[20]||(e[20]=[l("左")])),_:1})]),_:1})]),_:1},8,["modelValue"]),t(u,{class:"button-drawer",onClick:e[4]||(e[4]=n=>g.value=!0)},{default:s(()=>e[21]||(e[21]=[l("这是一个抽屉")])),_:1})]),o("section",h,[e[22]||(e[22]=o("h4",{class:"com-name"},"Switch",-1)),t(q,{size:"large",transition:"slide","checked-text":"开","unchecked-text":"关",modelValue:_.value,"onUpdate:modelValue":e[5]||(e[5]=n=>_.value=n)},null,8,["modelValue"])]),o("section",ee,[t(u,{type:"success",onClick:I},{default:s(()=>e[23]||(e[23]=[l("Message")])),_:1}),t(u,{type:"primary",onClick:e[6]||(e[6]=n=>f.value=!0)},{default:s(()=>e[24]||(e[24]=[l("对话框")])),_:1})]),o("section",oe,[t(N,{ref_key:"formRef",ref:v,"label-width":"60px",model:d,rules:S,size:"large"},{default:s(()=>[t(w,{label:"帐号",prop:"name"},{default:s(()=>[t(V,{modelValue:d.name,"onUpdate:modelValue":e[7]||(e[7]=n=>d.name=n)},null,8,["modelValue"])]),_:1}),t(w,{label:"密码",prop:"password"},{default:s(()=>[t(V,{modelValue:d.password,"onUpdate:modelValue":e[8]||(e[8]=n=>d.password=n),type:"password","show-password":""},null,8,["modelValue"])]),_:1}),t(w,null,{default:s(()=>[t(u,{type:"primary",onClick:O},{default:s(()=>e[25]||(e[25]=[l("提交")])),_:1}),t(u,{onClick:M},{default:s(()=>e[26]||(e[26]=[l("重置")])),_:1})]),_:1})]),_:1},8,["model"])])])]),o("div",te,[t(A,{gutter:16},{default:s(()=>[t(m,{span:6},{default:s(()=>e[27]||(e[27]=[o("div",{class:"crad-item"},[o("h4",null,[o("i",null,[o("img",{src:F})]),l(" OOCSS 模块化 ")]),o("p",null,"面向对象的CSS，借鉴（面向对象编程）的抽象思维，将元素的样式抽象成多个独立的小型样式类，来提高样式的灵活性和可重用性。")],-1)])),_:1}),t(m,{span:6},{default:s(()=>e[28]||(e[28]=[o("div",{class:"crad-item"},[o("h4",null,[o("i",null,[o("img",{src:G})]),l(" Monorepo 单仓库管理 ")]),o("p",null,"单仓库多应用，多个项目集成到一个仓库。优势在于更易于代码共享、跨项目的原子性更改、更好的协作和一致性管理。")],-1)])),_:1}),t(m,{span:6},{default:s(()=>e[29]||(e[29]=[o("div",{class:"crad-item"},[o("h4",null,[o("i",null,[o("img",{src:T})]),l(" Rollup 模块打包工具 ")]),o("p",null,"静态分析的方式，只打包必要的代码和依赖项，这使得打包过程更加高效，生成的代码也更小。可以消除不必要的代码和依赖项。")],-1)])),_:1}),t(m,{span:6},{default:s(()=>e[30]||(e[30]=[o("div",{class:"crad-item"},[o("h4",null,[o("i",null,[o("img",{src:H})]),l(" Gulp 自动任务运行器 ")]),o("p",null,"前端自动化工具，可以使用它构建自动化工作流程。允许开发者使用流的方式处理文件，并自动化重复性的任务。高效地处理大量文件。")],-1)])),_:1})]),_:1})])]),t(B,{modelValue:f.value,"onUpdate:modelValue":e[9]||(e[9]=n=>f.value=n),title:"Vue.js 3高级编程：UI组件库开发"},null,8,["modelValue"]),t(D,{modelValue:g.value,"onUpdate:modelValue":e[10]||(e[10]=n=>g.value=n),placement:c.value,title:"Vue.js 3高级编程：UI组件库开发"},null,8,["modelValue","placement"])],64)}}},le=E(se,[["__scopeId","data-v-0a603d58"]]),re=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home"},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),ne={name:"index.md"},de=Object.assign(ne,{setup(z){return(p,_)=>(C(),j("div",null,[t(le)]))}});export{re as __pageData,de as default};
