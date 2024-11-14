import{_ as s,V as o,c as i,f as r,w as a,a as e,E as t,o as l}from"./chunks/framework.IfFG3Aey.js";const J=JSON.parse('{"title":"Drawer 抽屉","description":"","frontmatter":{},"headers":[],"relativePath":"components/drawer.md","filePath":"components/drawer.md"}'),c={name:"components/drawer.md"},d=e("h1",{id:"drawer-抽屉",tabindex:"-1"},[t("Drawer 抽屉 "),e("a",{class:"header-anchor",href:"#drawer-抽屉","aria-label":'Permalink to "Drawer 抽屉"'},"​")],-1),p=e("h2",{id:"基本用法",tabindex:"-1"},[t("基本用法 "),e("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1),h=e("pre",null,[e("code",{class:"language-html"},`<template>
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
<\/script>`)],-1),m=e("p",null,"Dialog 弹出一个对话框，适合需要定制性更大的场景。",-1),u=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"drawer/basis")])])])],-1),b=e("h2",{id:"自定义内容",tabindex:"-1"},[t("自定义内容 "),e("a",{class:"header-anchor",href:"#自定义内容","aria-label":'Permalink to "自定义内容"'},"​")],-1),_=e("pre",null,[e("code",{class:"language-html"},`<template>
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
<\/script>`)],-1),g=e("p",null,"Dialog 弹出一个对话框，适合需要定制性更大的场景。",-1),f=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"drawer/content")])])])],-1),k=e("h2",{id:"自定义头部",tabindex:"-1"},[t("自定义头部 "),e("a",{class:"header-anchor",href:"#自定义头部","aria-label":'Permalink to "自定义头部"'},"​")],-1),v=e("pre",null,[e("code",{class:"language-html"},`<template>
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
</style>`)],-1),w=e("p",null,"Dialog 弹出一个对话框，适合需要定制性更大的场景。",-1),y=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"drawer/header")])])])],-1),E=e("h2",{id:"不需要头部或脚部",tabindex:"-1"},[t("不需要头部或脚部 "),e("a",{class:"header-anchor",href:"#不需要头部或脚部","aria-label":'Permalink to "不需要头部或脚部"'},"​")],-1),x=e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-drawer v-model="open" title="提示" :header="false" :footer="false">
       这里是内容区域
    </a-drawer>
    <a-button type="primary" @click="open = true">自定义内容</a-button>
</template>
<script setup>
import { ref } from "vue"
const open = ref(false)
<\/script>
`)],-1),C=e("p",null,"Dialog 弹出一个对话框，适合需要定制性更大的场景。",-1),D=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"drawer/hidden")])])])],-1);function P(z,N,V,$,B,j){const n=o("Demo");return l(),i("div",null,[d,p,r(n,{path:"drawer/basis"},{source:a(()=>[h]),description:a(()=>[m]),default:a(()=>[u]),_:1}),b,r(n,{path:"drawer/content"},{source:a(()=>[_]),description:a(()=>[g]),default:a(()=>[f]),_:1}),k,r(n,{path:"drawer/header"},{source:a(()=>[v]),description:a(()=>[w]),default:a(()=>[y]),_:1}),E,r(n,{path:"drawer/hidden"},{source:a(()=>[x]),description:a(()=>[C]),default:a(()=>[D]),_:1})])}const O=s(c,[["render",P]]);export{J as __pageData,O as default};
