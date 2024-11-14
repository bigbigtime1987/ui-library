import{_ as s,V as l,c as t,f as o,w as n,a,E as e,o as r}from"./chunks/framework.IfFG3Aey.js";const q=JSON.parse('{"title":"Radio 单选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/radio.md","filePath":"components/radio.md"}'),d={name:"components/radio.md"},c=a("h1",{id:"radio-单选框",tabindex:"-1"},[e("Radio 单选框 "),a("a",{class:"header-anchor",href:"#radio-单选框","aria-label":'Permalink to "Radio 单选框"'},"​")],-1),u=a("h2",{id:"基础用法",tabindex:"-1"},[e("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),h=a("pre",null,[a("code",{class:"language-html"},`<template>
    <a-radio-group v-model="value">
        <a-radio value="shenzhen">深圳</a-radio>
        <a-radio value="guangzhou">广州</a-radio>
        <a-radio value="shanwei">汕尾</a-radio>
    </a-radio-group>
</template>
<script setup>
import { ref } from "vue"
const value = ref('shenzhen')
<\/script>`)],-1),p=a("p",null,[e("单独使用可以表示 "),a("code",null,"true"),e(" 和 "),a("code",null,"false"),e(" 两种状态之间的切换。")],-1),m=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"radio/basis")])])])],-1),v=a("h2",{id:"禁用状态",tabindex:"-1"},[e("禁用状态 "),a("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1),g=a("pre",null,[a("code",{class:"language-html"},`<template>
    <a-radio-group v-model="value">
        <a-radio value="shenzhen">深圳</a-radio>
        <a-radio value="guangzhou" disabled>广州</a-radio>
        <a-radio value="shanwei">汕尾</a-radio>
    </a-radio-group>
</template>
<script setup>
import { ref } from "vue"
const value = ref('shenzhen')
<\/script>`)],-1),_=a("p",null,[e("多选框不可用状态。设置 "),a("code",null,"disabled"),e(" 属性即可。")],-1),b=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"radio/disabled")])])])],-1),f=a("h2",{id:"尺寸",tabindex:"-1"},[e("尺寸 "),a("a",{class:"header-anchor",href:"#尺寸","aria-label":'Permalink to "尺寸"'},"​")],-1),k=a("pre",null,[a("code",{class:"language-html"},`<template>
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
`)],-1),y=a("p",null,[e("设置 "),a("code",null,"small"),e(),a("code",null,"default"),e(),a("code",null,"large"),e(" 改变 "),a("code",null,"checkbox"),e(" 的大小。")],-1),z=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"radio/size")])])])],-1),E=a("h2",{id:"主题",tabindex:"-1"},[e("主题 "),a("a",{class:"header-anchor",href:"#主题","aria-label":'Permalink to "主题"'},"​")],-1),x=a("pre",null,[a("code",{class:"language-html"},`<template>
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
<\/script>`)],-1),w=a("p",null,[e("按钮的 "),a("code",null,"type"),e(" 分别为 "),a("code",null,"default"),e("、"),a("code",null,"primary"),e("、"),a("code",null,"success"),e("、"),a("code",null,"warning"),e(" 和 "),a("code",null,"error"),e(" 。")],-1),C=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"radio/theme")])])])],-1),P=a("h2",{id:"加载状态",tabindex:"-1"},[e("加载状态 "),a("a",{class:"header-anchor",href:"#加载状态","aria-label":'Permalink to "加载状态"'},"​")],-1),N=a("pre",null,[a("code",{class:"language-html"},`<template>
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
<\/script>`)],-1),V=a("p",null,[e("按钮的 "),a("code",null,"type"),e(" 分别为 "),a("code",null,"default"),e("、"),a("code",null,"primary"),e("、"),a("code",null,"success"),e("、"),a("code",null,"warning"),e(" 和 "),a("code",null,"error"),e(" 。")],-1),$=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"radio/async")])])])],-1);function B(D,R,T,j,J,O){const i=l("Demo");return r(),t("div",null,[c,u,o(i,{path:"radio/basis"},{source:n(()=>[h]),description:n(()=>[p]),default:n(()=>[m]),_:1}),v,o(i,{path:"radio/disabled"},{source:n(()=>[g]),description:n(()=>[_]),default:n(()=>[b]),_:1}),f,o(i,{path:"radio/size"},{source:n(()=>[k]),description:n(()=>[y]),default:n(()=>[z]),_:1}),E,o(i,{path:"radio/theme"},{source:n(()=>[x]),description:n(()=>[w]),default:n(()=>[C]),_:1}),P,o(i,{path:"radio/async"},{source:n(()=>[N]),description:n(()=>[V]),default:n(()=>[$]),_:1})])}const A=s(d,[["render",B]]);export{q as __pageData,A as default};
