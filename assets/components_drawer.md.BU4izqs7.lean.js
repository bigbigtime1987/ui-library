import{_ as s,c as i,a as e,E as n,f as l,w as t,U as o,o as p}from"./chunks/framework.DegHhALb.js";const k=JSON.parse('{"title":"Drawer 抽屉","description":"","frontmatter":{},"headers":[],"relativePath":"components/drawer.md","filePath":"components/drawer.md"}'),d={name:"components/drawer.md"};function m(u,a,b,h,c,g){const r=o("Demo");return p(),i("div",null,[a[12]||(a[12]=e("h1",{id:"drawer-抽屉",tabindex:"-1"},[n("Drawer 抽屉 "),e("a",{class:"header-anchor",href:"#drawer-抽屉","aria-label":'Permalink to "Drawer 抽屉"'},"​")],-1)),a[13]||(a[13]=e("h2",{id:"基本用法",tabindex:"-1"},[n("基本用法 "),e("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),l(r,{path:"drawer/basis"},{source:t(()=>a[0]||(a[0]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-drawer v-model="open" :placement="placement" title="提示">
        
    </a-drawer>
    <a-space :size="24">
        <a-radio-group v-model="placement">
            <a-radio value="top">上</a-radio>
            <a-radio value="right">右</a-radio>
            <a-radio value="bottom">下</a-radio>
            <a-radio value="left">左</a-radio>
        </a-radio-group>
        <a-button type="primary" @click="open = true">打开不同方向的抽屉</a-button>
    </a-space>
</template>
<script setup>
import { ref } from "vue"
const open = ref(false)
const placement = ref('right')
<\/script>`)],-1)])),description:t(()=>a[1]||(a[1]=[e("p",null,"Dialog 弹出一个对话框，适合需要定制性更大的场景。",-1)])),default:t(()=>[a[2]||(a[2]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"drawer/basis")])])])],-1))]),_:1}),a[14]||(a[14]=e("h2",{id:"自定义内容",tabindex:"-1"},[n("自定义内容 "),e("a",{class:"header-anchor",href:"#自定义内容","aria-label":'Permalink to "自定义内容"'},"​")],-1)),l(r,{path:"drawer/content"},{source:t(()=>a[3]||(a[3]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-drawer v-model="open" title="提示">
        自定义内容<br />
        自定义内容<br />
        自定义内容<br />
        自定义内容<br />
        自定义内容<br />
        自定义内容<br />
        自定义内容<br />
        自定义内容<br />
        自定义内容<br />
        自定义内容<br />
        自定义内容<br />
        自定义内容<br />
        自定义内容<br />
        自定义内容<br />
        自定义内容<br />
        自定义内容<br />
        自定义内容<br />
        自定义内容<br />
        自定义内容<br />
        自定义内容<br />
        自定义内容<br />
        自定义内容<br />
        自定义内容<br />
        自定义内容<br />
        自定义内容<br />
        自定义内容<br />
        自定义内容<br />
    </a-drawer>
    <a-button type="primary" @click="open = true">自定义内容</a-button>
</template>
<script setup>
import { ref } from "vue"
const open = ref(false)
const placement = ref('right')
<\/script>`)],-1)])),description:t(()=>a[4]||(a[4]=[e("p",null,"Dialog 弹出一个对话框，适合需要定制性更大的场景。",-1)])),default:t(()=>[a[5]||(a[5]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"drawer/content")])])])],-1))]),_:1}),a[15]||(a[15]=e("h2",{id:"自定义头部",tabindex:"-1"},[n("自定义头部 "),e("a",{class:"header-anchor",href:"#自定义头部","aria-label":'Permalink to "自定义头部"'},"​")],-1)),l(r,{path:"drawer/header"},{source:t(()=>a[6]||(a[6]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-drawer v-model="open" title="提示">
        <template #header>
            <div class="customize-header">
                <h4>标题</h4>
                <a-button type="error" size="small" @click="open = false">关闭</a-button>
            </div>
        </template>
    </a-drawer>
    <a-button type="primary" @click="open = true">自定义内容</a-button>
</template>
<script setup>
import { ref } from "vue"
import { XCircleFill } from "@azong/icons-vue"
const open = ref(false)
<\/script>
<style lang="scss" scoped>
.customize-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
</style>`)],-1)])),description:t(()=>a[7]||(a[7]=[e("p",null,"Dialog 弹出一个对话框，适合需要定制性更大的场景。",-1)])),default:t(()=>[a[8]||(a[8]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"drawer/header")])])])],-1))]),_:1}),a[16]||(a[16]=e("h2",{id:"不需要头部或脚部",tabindex:"-1"},[n("不需要头部或脚部 "),e("a",{class:"header-anchor",href:"#不需要头部或脚部","aria-label":'Permalink to "不需要头部或脚部"'},"​")],-1)),l(r,{path:"drawer/hidden"},{source:t(()=>a[9]||(a[9]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-drawer v-model="open" title="提示" :header="false" :footer="false">
       这里是内容区域
    </a-drawer>
    <a-button type="primary" @click="open = true">自定义内容</a-button>
</template>
<script setup>
import { ref } from "vue"
const open = ref(false)
<\/script>
`)],-1)])),description:t(()=>a[10]||(a[10]=[e("p",null,"Dialog 弹出一个对话框，适合需要定制性更大的场景。",-1)])),default:t(()=>[a[11]||(a[11]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"drawer/hidden")])])])],-1))]),_:1})])}const v=s(d,[["render",m]]);export{k as __pageData,v as default};
