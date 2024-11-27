import{_ as i,c as o,a as e,E as l,f as n,w as s,U as r,o as d}from"./chunks/framework.DegHhALb.js";const f=JSON.parse('{"title":"Switch 开关","description":"","frontmatter":{},"headers":[],"relativePath":"components/switch.md","filePath":"components/switch.md"}'),u={name:"components/switch.md"};function p(c,t,h,m,v,g){const a=r("Demo");return d(),o("div",null,[t[27]||(t[27]=e("h1",{id:"switch-开关",tabindex:"-1"},[l("Switch 开关 "),e("a",{class:"header-anchor",href:"#switch-开关","aria-label":'Permalink to "Switch 开关"'},"​")],-1)),t[28]||(t[28]=e("h2",{id:"基础用法",tabindex:"-1"},[l("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),n(a,{path:"switch/basis"},{source:s(()=>t[0]||(t[0]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-switch v-model="value" />
</template>
<script setup>
import { ref } from "vue"
const value = ref(true)
<\/script>`)],-1)])),description:s(()=>t[1]||(t[1]=[e("p",null,[l("单独使用可以表示 "),e("code",null,"true"),l(" 和 "),e("code",null,"false"),l(" 两种状态之间的切换。")],-1)])),default:s(()=>[t[2]||(t[2]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"switch/basis")])])])],-1))]),_:1}),t[29]||(t[29]=e("h2",{id:"禁用状态",tabindex:"-1"},[l("禁用状态 "),e("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),n(a,{path:"switch/disabled"},{source:s(()=>t[3]||(t[3]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-space :size="20">
        <a-switch v-model="value1" disabled />
        <a-switch v-model="value2" disabled />
    </a-space>
</template>
<script setup>
import { ref } from "vue"
const value1 = ref(false)
const value2 = ref(true)
<\/script>`)],-1)])),description:s(()=>t[4]||(t[4]=[e("p",null,[l("设置 "),e("code",null,"disabled"),l(" 属性，接受一个 Boolean，设置true即可禁用。。")],-1)])),default:s(()=>[t[5]||(t[5]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"switch/disabled")])])])],-1))]),_:1}),t[30]||(t[30]=e("h2",{id:"主题",tabindex:"-1"},[l("主题 "),e("a",{class:"header-anchor",href:"#主题","aria-label":'Permalink to "主题"'},"​")],-1)),n(a,{path:"switch/theme"},{source:s(()=>t[6]||(t[6]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-space :size="24">
        <a-switch v-model="value1" type="primary" />
        <a-switch v-model="value2" type="success" />
        <a-switch v-model="value3" type="warning" />
        <a-switch v-model="value4" type="error" />
    </a-space>
</template>
<script setup>
import { ref } from "vue"
const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
const value4 = ref(true)
<\/script>`)],-1)])),description:s(()=>t[7]||(t[7]=[e("p",null,[l("设置 "),e("code",null,"disabled"),l(" 属性，接受一个 Boolean，设置true即可禁用。。")],-1)])),default:s(()=>[t[8]||(t[8]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"switch/theme")])])])],-1))]),_:1}),t[31]||(t[31]=e("h2",{id:"尺寸",tabindex:"-1"},[l("尺寸 "),e("a",{class:"header-anchor",href:"#尺寸","aria-label":'Permalink to "尺寸"'},"​")],-1)),n(a,{path:"switch/size"},{source:s(()=>t[9]||(t[9]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-divider content="小的" :padding="10"/>
    <a-switch v-model="value" size="small" />

    <a-divider content="默认的" :padding="10"/>
    <a-switch v-model="value" size="default" />

    <a-divider content="大的" :padding="10"/>
    <a-switch v-model="value" size="large" />
</template>

<script setup>
    import { ref } from "vue"
    const value = ref(true)
<\/script>`)],-1)])),description:s(()=>t[10]||(t[10]=[e("p",null,[l("设置 "),e("code",null,"disabled"),l(" 属性，接受一个 Boolean，设置true即可禁用。。")],-1)])),default:s(()=>[t[11]||(t[11]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"switch/size")])])])],-1))]),_:1}),t[32]||(t[32]=e("h2",{id:"文字描述",tabindex:"-1"},[l("文字描述 "),e("a",{class:"header-anchor",href:"#文字描述","aria-label":'Permalink to "文字描述"'},"​")],-1)),n(a,{path:"switch/text"},{source:s(()=>t[12]||(t[12]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-space :size="24">
        <a-switch v-model="value" checked-text="开" unchecked-text="关" />
        <a-switch v-model="value" checked-text="Y" unchecked-text="N" type="success" />
    </a-space>
</template>

<script setup>
    import { ref } from "vue"
    const value = ref(true)
<\/script>`)],-1)])),description:s(()=>t[13]||(t[13]=[e("p",null,[l("设置 "),e("code",null,"disabled"),l(" 属性，接受一个 Boolean，设置true即可禁用。。")],-1)])),default:s(()=>[t[14]||(t[14]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"switch/text")])])])],-1))]),_:1}),t[33]||(t[33]=e("h2",{id:"图标模式",tabindex:"-1"},[l("图标模式 "),e("a",{class:"header-anchor",href:"#图标模式","aria-label":'Permalink to "图标模式"'},"​")],-1)),n(a,{path:"switch/icon"},{source:s(()=>t[15]||(t[15]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-space :size="24">
        <a-switch v-model="value" :checked-icon="Eye" :unchecked-icon="EyeOff" />
        <a-switch v-model="value" :checked-icon="Eye" :unchecked-icon="EyeOff" center-icon />
    </a-space>
</template>

<script setup>
    import { ref } from "vue"
    import { Eye, EyeOff } from "@azong/icons-vue"
    const value = ref(true)
<\/script>`)],-1)])),description:s(()=>t[16]||(t[16]=[e("p",null,[l("设置 "),e("code",null,"disabled"),l(" 属性，接受一个 Boolean，设置true即可禁用。。")],-1)])),default:s(()=>[t[17]||(t[17]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"switch/icon")])])])],-1))]),_:1}),t[34]||(t[34]=e("h2",{id:"扩展的-value-类型​",tabindex:"-1"},[l("扩展的 value 类型​ "),e("a",{class:"header-anchor",href:"#扩展的-value-类型​","aria-label":'Permalink to "扩展的 value 类型​"'},"​")],-1)),n(a,{path:"switch/value"},{source:s(()=>t[18]||(t[18]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-space :size="24">
        <a-switch v-model="value1" checked-value="1" unchecked-value="0" />
        <a-switch v-model="value2" :checked-value="1" :unchecked-value="0" type="success" />
    </a-space>
</template>

<script setup>
    import { ref } from "vue"
    const value1 = ref('1')
    const value2 = ref(1)
<\/script>`)],-1)])),description:s(()=>t[19]||(t[19]=[e("p",null,[l("你可以设置 "),e("code",null,"checked-value"),l(" 和 "),e("code",null,"unchecked-value"),l(" 属性， 它们接受 Boolean、String 或 Number 类型的值。")],-1)])),default:s(()=>[t[20]||(t[20]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"switch/value")])])])],-1))]),_:1}),t[35]||(t[35]=e("h2",{id:"滑块的过滤动画模式",tabindex:"-1"},[l("滑块的过滤动画模式 "),e("a",{class:"header-anchor",href:"#滑块的过滤动画模式","aria-label":'Permalink to "滑块的过滤动画模式"'},"​")],-1)),n(a,{path:"switch/transition"},{source:s(()=>t[21]||(t[21]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-space :size="24">
        <a-switch v-model="value1" transition="scale" checked-text="开" unchecked-text="关" />
        <a-switch v-model="value2" transition="slide" checked-text="开" unchecked-text="关" type="success" />
    </a-space>
</template>

<script setup>
    import { ref } from "vue"
    const value1 = ref('1')
    const value2 = ref(1)
<\/script>`)],-1)])),description:s(()=>t[22]||(t[22]=[e("p",null,[l("你可以设置 "),e("code",null,"transition"),l(" 属性为 "),e("code",null,"scale"),l(" 和 "),e("code",null,"slide"),l("，"),e("code",null,"scale"),l(" 为缩放模式、"),e("code",null,"slide"),l(" 为滑动模式"),e("br"),l("默认为 "),e("code",null,"scale"),l("。")],-1)])),default:s(()=>[t[23]||(t[23]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"switch/transition")])])])],-1))]),_:1}),t[36]||(t[36]=e("h2",{id:"异步加载",tabindex:"-1"},[l("异步加载 "),e("a",{class:"header-anchor",href:"#异步加载","aria-label":'Permalink to "异步加载"'},"​")],-1)),n(a,{path:"switch/async"},{source:s(()=>t[24]||(t[24]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-space :size="24">
        <a-switch v-model="value1" :before-change="handelSwitch" type="primary" />
        <a-switch v-model="value2" :before-change="handelSwitch" type="success" />
        <a-switch v-model="value3" :before-change="handelSwitch" type="warning" />
        <a-switch v-model="value4" :before-change="handelSwitch" type="error" />
    </a-space>
</template>
<script setup>
import { ref } from "vue"
const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
const value4 = ref(true)

const handelSwitch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}
<\/script>`)],-1)])),description:s(()=>t[25]||(t[25]=[e("p",null,[l("你可以设置 "),e("code",null,"transition"),l(" 属性为 "),e("code",null,"scale"),l(" 和 "),e("code",null,"slide"),l("，"),e("code",null,"scale"),l(" 为缩放模式、"),e("code",null,"slide"),l(" 为滑动模式"),e("br"),l("默认为 "),e("code",null,"scale"),l("。")],-1)])),default:s(()=>[t[26]||(t[26]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"switch/async")])])])],-1))]),_:1})])}const b=i(u,[["render",p]]);export{f as __pageData,b as default};
