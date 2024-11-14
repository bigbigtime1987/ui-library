import{_ as n,V as i,c,f as l,w as s,a as e,E as t,o}from"./chunks/framework.IfFG3Aey.js";const te=JSON.parse('{"title":"Switch 开关","description":"","frontmatter":{},"headers":[],"relativePath":"components/switch.md","filePath":"components/switch.md"}'),h={name:"components/switch.md"},d=e("h1",{id:"switch-开关",tabindex:"-1"},[t("Switch 开关 "),e("a",{class:"header-anchor",href:"#switch-开关","aria-label":'Permalink to "Switch 开关"'},"​")],-1),r=e("h2",{id:"基础用法",tabindex:"-1"},[t("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),u=e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-switch v-model="value" />
</template>
<script setup>
import { ref } from "vue"
const value = ref(true)
<\/script>`)],-1),p=e("p",null,[t("单独使用可以表示 "),e("code",null,"true"),t(" 和 "),e("code",null,"false"),t(" 两种状态之间的切换。")],-1),m=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"switch/basis")])])])],-1),v=e("h2",{id:"禁用状态",tabindex:"-1"},[t("禁用状态 "),e("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1),_=e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-space :size="20">
        <a-switch v-model="value1" disabled />
        <a-switch v-model="value2" disabled />
    </a-space>
</template>
<script setup>
import { ref } from "vue"
const value1 = ref(false)
const value2 = ref(true)
<\/script>`)],-1),g=e("p",null,[t("设置 "),e("code",null,"disabled"),t(" 属性，接受一个 Boolean，设置true即可禁用。。")],-1),k=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"switch/disabled")])])])],-1),f=e("h2",{id:"主题",tabindex:"-1"},[t("主题 "),e("a",{class:"header-anchor",href:"#主题","aria-label":'Permalink to "主题"'},"​")],-1),b=e("pre",null,[e("code",{class:"language-html"},`<template>
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
<\/script>`)],-1),w=e("p",null,[t("设置 "),e("code",null,"disabled"),t(" 属性，接受一个 Boolean，设置true即可禁用。。")],-1),y=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"switch/theme")])])])],-1),E=e("h2",{id:"尺寸",tabindex:"-1"},[t("尺寸 "),e("a",{class:"header-anchor",href:"#尺寸","aria-label":'Permalink to "尺寸"'},"​")],-1),x=e("pre",null,[e("code",{class:"language-html"},`<template>
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
<\/script>`)],-1),C=e("p",null,[t("设置 "),e("code",null,"disabled"),t(" 属性，接受一个 Boolean，设置true即可禁用。。")],-1),z=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"switch/size")])])])],-1),P=e("h2",{id:"文字描述",tabindex:"-1"},[t("文字描述 "),e("a",{class:"header-anchor",href:"#文字描述","aria-label":'Permalink to "文字描述"'},"​")],-1),S=e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-space :size="24">
        <a-switch v-model="value" checked-text="开" unchecked-text="关" />
        <a-switch v-model="value" checked-text="Y" unchecked-text="N" type="success" />
    </a-space>
</template>

<script setup>
    import { ref } from "vue"
    const value = ref(true)
<\/script>`)],-1),B=e("p",null,[t("设置 "),e("code",null,"disabled"),t(" 属性，接受一个 Boolean，设置true即可禁用。。")],-1),N=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"switch/text")])])])],-1),O=e("h2",{id:"图标模式",tabindex:"-1"},[t("图标模式 "),e("a",{class:"header-anchor",href:"#图标模式","aria-label":'Permalink to "图标模式"'},"​")],-1),V=e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-space :size="24">
        <a-switch v-model="value" :checked-icon="Eye" :unchecked-icon="EyeOff" />
        <a-switch v-model="value" :checked-icon="Eye" :unchecked-icon="EyeOff" center-icon />
    </a-space>
</template>

<script setup>
    import { ref } from "vue"
    import { Eye, EyeOff } from "@azong/icons-vue"
    const value = ref(true)
<\/script>`)],-1),$=e("p",null,[t("设置 "),e("code",null,"disabled"),t(" 属性，接受一个 Boolean，设置true即可禁用。。")],-1),D=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"switch/icon")])])])],-1),T=e("h2",{id:"扩展的-value-类型​",tabindex:"-1"},[t("扩展的 value 类型​ "),e("a",{class:"header-anchor",href:"#扩展的-value-类型​","aria-label":'Permalink to "扩展的 value 类型​"'},"​")],-1),j=e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-space :size="24">
        <a-switch v-model="value1" checked-value="1" unchecked-value="0" />
        <a-switch v-model="value2" :checked-value="1" :unchecked-value="0" type="success" />
    </a-space>
</template>

<script setup>
    import { ref } from "vue"
    const value1 = ref('1')
    const value2 = ref(1)
<\/script>`)],-1),J=e("p",null,[t("你可以设置 "),e("code",null,"checked-value"),t(" 和 "),e("code",null,"unchecked-value"),t(" 属性， 它们接受 Boolean、String 或 Number 类型的值。")],-1),Y=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"switch/value")])])])],-1),q=e("h2",{id:"滑块的过滤动画模式",tabindex:"-1"},[t("滑块的过滤动画模式 "),e("a",{class:"header-anchor",href:"#滑块的过滤动画模式","aria-label":'Permalink to "滑块的过滤动画模式"'},"​")],-1),A=e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-space :size="24">
        <a-switch v-model="value1" transition="scale" checked-text="开" unchecked-text="关" />
        <a-switch v-model="value2" transition="slide" checked-text="开" unchecked-text="关" type="success" />
    </a-space>
</template>

<script setup>
    import { ref } from "vue"
    const value1 = ref('1')
    const value2 = ref(1)
<\/script>`)],-1),F=e("p",null,[t("你可以设置 "),e("code",null,"transition"),t(" 属性为 "),e("code",null,"scale"),t(" 和 "),e("code",null,"slide"),t("，"),e("code",null,"scale"),t(" 为缩放模式、"),e("code",null,"slide"),t(" 为滑动模式"),e("br"),t("默认为 "),e("code",null,"scale"),t("。")],-1),G=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"switch/transition")])])])],-1),H=e("h2",{id:"异步加载",tabindex:"-1"},[t("异步加载 "),e("a",{class:"header-anchor",href:"#异步加载","aria-label":'Permalink to "异步加载"'},"​")],-1),I=e("pre",null,[e("code",{class:"language-html"},`<template>
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
<\/script>`)],-1),K=e("p",null,[t("你可以设置 "),e("code",null,"transition"),t(" 属性为 "),e("code",null,"scale"),t(" 和 "),e("code",null,"slide"),t("，"),e("code",null,"scale"),t(" 为缩放模式、"),e("code",null,"slide"),t(" 为滑动模式"),e("br"),t("默认为 "),e("code",null,"scale"),t("。")],-1),L=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"switch/async")])])])],-1);function M(Q,R,U,W,X,Z){const a=i("Demo");return o(),c("div",null,[d,r,l(a,{path:"switch/basis"},{source:s(()=>[u]),description:s(()=>[p]),default:s(()=>[m]),_:1}),v,l(a,{path:"switch/disabled"},{source:s(()=>[_]),description:s(()=>[g]),default:s(()=>[k]),_:1}),f,l(a,{path:"switch/theme"},{source:s(()=>[b]),description:s(()=>[w]),default:s(()=>[y]),_:1}),E,l(a,{path:"switch/size"},{source:s(()=>[x]),description:s(()=>[C]),default:s(()=>[z]),_:1}),P,l(a,{path:"switch/text"},{source:s(()=>[S]),description:s(()=>[B]),default:s(()=>[N]),_:1}),O,l(a,{path:"switch/icon"},{source:s(()=>[V]),description:s(()=>[$]),default:s(()=>[D]),_:1}),T,l(a,{path:"switch/value"},{source:s(()=>[j]),description:s(()=>[J]),default:s(()=>[Y]),_:1}),q,l(a,{path:"switch/transition"},{source:s(()=>[A]),description:s(()=>[F]),default:s(()=>[G]),_:1}),H,l(a,{path:"switch/async"},{source:s(()=>[I]),description:s(()=>[K]),default:s(()=>[L]),_:1})])}const se=n(h,[["render",M]]);export{te as __pageData,se as default};
