import{_ as o,c as s,a,E as n,f as r,w as i,U as d,o as t}from"./chunks/framework.DegHhALb.js";const f=JSON.parse('{"title":"Radio 单选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/radio.md","filePath":"components/radio.md"}'),u={name:"components/radio.md"};function p(h,e,m,v,g,c){const l=d("Demo");return t(),s("div",null,[e[15]||(e[15]=a("h1",{id:"radio-单选框",tabindex:"-1"},[n("Radio 单选框 "),a("a",{class:"header-anchor",href:"#radio-单选框","aria-label":'Permalink to "Radio 单选框"'},"​")],-1)),e[16]||(e[16]=a("h2",{id:"基础用法",tabindex:"-1"},[n("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),r(l,{path:"radio/basis"},{source:i(()=>e[0]||(e[0]=[a("pre",null,[a("code",{class:"language-html"},`<template>
    <a-radio-group v-model="value">
        <a-radio value="shenzhen">深圳</a-radio>
        <a-radio value="guangzhou">广州</a-radio>
        <a-radio value="shanwei">汕尾</a-radio>
    </a-radio-group>
</template>
<script setup>
import { ref } from "vue"
const value = ref('shenzhen')
<\/script>`)],-1)])),description:i(()=>e[1]||(e[1]=[a("p",null,[n("单独使用可以表示 "),a("code",null,"true"),n(" 和 "),a("code",null,"false"),n(" 两种状态之间的切换。")],-1)])),default:i(()=>[e[2]||(e[2]=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"radio/basis")])])])],-1))]),_:1}),e[17]||(e[17]=a("h2",{id:"禁用状态",tabindex:"-1"},[n("禁用状态 "),a("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),r(l,{path:"radio/disabled"},{source:i(()=>e[3]||(e[3]=[a("pre",null,[a("code",{class:"language-html"},`<template>
    <a-radio-group v-model="value">
        <a-radio value="shenzhen">深圳</a-radio>
        <a-radio value="guangzhou" disabled>广州</a-radio>
        <a-radio value="shanwei">汕尾</a-radio>
    </a-radio-group>
</template>
<script setup>
import { ref } from "vue"
const value = ref('shenzhen')
<\/script>`)],-1)])),description:i(()=>e[4]||(e[4]=[a("p",null,[n("多选框不可用状态。设置 "),a("code",null,"disabled"),n(" 属性即可。")],-1)])),default:i(()=>[e[5]||(e[5]=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"radio/disabled")])])])],-1))]),_:1}),e[18]||(e[18]=a("h2",{id:"尺寸",tabindex:"-1"},[n("尺寸 "),a("a",{class:"header-anchor",href:"#尺寸","aria-label":'Permalink to "尺寸"'},"​")],-1)),r(l,{path:"radio/size"},{source:i(()=>e[6]||(e[6]=[a("pre",null,[a("code",{class:"language-html"},`<template>
  <a-space direction="vertical" :size="20">
    <div>
      <span class="title">小的</span>
      <a-radio-group v-model="value" size="small">
        <a-radio value="shenzhen">深圳</a-radio>
        <a-radio value="guangzhou">广州</a-radio>
        <a-radio value="shanwei">汕尾</a-radio>
      </a-radio-group>
    </div>
    <div>
      <span class="title">默认的</span>
      <a-radio-group v-model="value1" size="default">
        <a-radio value="shenzhen">深圳</a-radio>
        <a-radio value="guangzhou">广州</a-radio>
        <a-radio value="shanwei">汕尾</a-radio>
      </a-radio-group>
    </div>
    <div>
      <span class="title">大的</span>
      <a-radio-group v-model="value2" size="large">
        <a-radio value="shenzhen">深圳</a-radio>
        <a-radio value="guangzhou">广州</a-radio>
        <a-radio value="shanwei">汕尾</a-radio>
      </a-radio-group>
    </div>
  </a-space>
</template>
<script setup>
import { ref } from "vue";
const value = ref('shenzhen');
const value1 = ref('shenzhen');
const value2 = ref('shenzhen');
<\/script>
<style lang="scss" scoped>
.title {
    font-size: 14px;
    display: block;
    margin-bottom: 6px;
}
</style>
`)],-1)])),description:i(()=>e[7]||(e[7]=[a("p",null,[n("设置 "),a("code",null,"small"),n(),a("code",null,"default"),n(),a("code",null,"large"),n(" 改变 "),a("code",null,"checkbox"),n(" 的大小。")],-1)])),default:i(()=>[e[8]||(e[8]=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"radio/size")])])])],-1))]),_:1}),e[19]||(e[19]=a("h2",{id:"主题",tabindex:"-1"},[n("主题 "),a("a",{class:"header-anchor",href:"#主题","aria-label":'Permalink to "主题"'},"​")],-1)),r(l,{path:"radio/theme"},{source:i(()=>e[9]||(e[9]=[a("pre",null,[a("code",{class:"language-html"},`<template>
    <a-space direction="vertical" :size="20">
        <a-radio-group v-model="value">
            <a-radio value="default">默认</a-radio>
            <a-radio value="primary" type="primary">主色</a-radio>
            <a-radio value="success" type="success">成功</a-radio>
            <a-radio value="warning" type="warning">警告</a-radio>
            <a-radio value="error" type="error">错误</a-radio>
        </a-radio-group>

        <a-radio-group v-model="value">
            <a-radio value="default" disabled>默认</a-radio>
            <a-radio value="primary" type="primary" disabled>主色</a-radio>
            <a-radio value="success" type="success" disabled>成功</a-radio>
            <a-radio value="warning" type="warning" disabled>警告</a-radio>
            <a-radio value="error" type="error" disabled>错误</a-radio>
        </a-radio-group>

        
    </a-space>
</template>
<script setup>
import { ref } from "vue"
const value = ref('success')
<\/script>`)],-1)])),description:i(()=>e[10]||(e[10]=[a("p",null,[n("按钮的 "),a("code",null,"type"),n(" 分别为 "),a("code",null,"default"),n("、"),a("code",null,"primary"),n("、"),a("code",null,"success"),n("、"),a("code",null,"warning"),n(" 和 "),a("code",null,"error"),n(" 。")],-1)])),default:i(()=>[e[11]||(e[11]=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"radio/theme")])])])],-1))]),_:1}),e[20]||(e[20]=a("h2",{id:"加载状态",tabindex:"-1"},[n("加载状态 "),a("a",{class:"header-anchor",href:"#加载状态","aria-label":'Permalink to "加载状态"'},"​")],-1)),r(l,{path:"radio/async"},{source:i(()=>e[12]||(e[12]=[a("pre",null,[a("code",{class:"language-html"},`<template>
    <a-radio-group v-model="value" :before-change="checkboxChange">
        <a-radio value="shenzhen" type="primary">深圳</a-radio>
        <a-radio value="guangzhou">广州</a-radio>
        <a-radio value="shanwei">汕尾</a-radio>
    </a-radio-group>
</template>
<script setup>
import { ref } from "vue"
const value = ref('shenzhen')

const checkboxChange = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })
}
<\/script>`)],-1)])),description:i(()=>e[13]||(e[13]=[a("p",null,[n("按钮的 "),a("code",null,"type"),n(" 分别为 "),a("code",null,"default"),n("、"),a("code",null,"primary"),n("、"),a("code",null,"success"),n("、"),a("code",null,"warning"),n(" 和 "),a("code",null,"error"),n(" 。")],-1)])),default:i(()=>[e[14]||(e[14]=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"radio/async")])])])],-1))]),_:1})])}const k=o(u,[["render",p]]);export{f as __pageData,k as default};
