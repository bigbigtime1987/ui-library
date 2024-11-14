import{_ as l,V as n,c as d,f as s,w as e,a,E as t,b as h,o}from"./chunks/framework.IfFG3Aey.js";const U=JSON.parse('{"title":"Badge 徽标数","description":"","frontmatter":{},"headers":[],"relativePath":"components/badge.md","filePath":"components/badge.md"}'),c={name:"components/badge.md"},g=a("h1",{id:"badge-徽标数",tabindex:"-1"},[t("Badge 徽标数 "),a("a",{class:"header-anchor",href:"#badge-徽标数","aria-label":'Permalink to "Badge 徽标数"'},"​")],-1),p=a("h2",{id:"基本用法",tabindex:"-1"},[t("基本用法 "),a("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1),m=a("pre",null,[a("code",{class:"language-html"},`<template>
    <a-space :size="16">
        <a-badge :value="value">
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
        <a-badge :value="value1">
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
    </a-space>
</template>
<script setup>
import { ref } from "vue"
const value = ref(6)
const value1 = ref(20)
<\/script>`)],-1),u=a("p",null,"展示新消息数量。",-1),r=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"badge/basis")])])])],-1),f=a("h2",{id:"主题色",tabindex:"-1"},[t("主题色 "),a("a",{class:"header-anchor",href:"#主题色","aria-label":'Permalink to "主题色"'},"​")],-1),b=a("pre",null,[a("code",{class:"language-html"},`<template>
    <a-space :size="16">
        <a-badge :value="value" type="primary">
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
        <a-badge :value="value1" type="success">
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
        <a-badge :value="value" type="warning">
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
        <a-badge :value="value1" type="error">
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
    </a-space>
</template>
<script setup>
import { ref } from "vue"
const value = ref(6)
const value1 = ref(20)
<\/script>`)],-1),v=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"badge/theme")])])])],-1),_=a("h2",{id:"尺寸",tabindex:"-1"},[t("尺寸 "),a("a",{class:"header-anchor",href:"#尺寸","aria-label":'Permalink to "尺寸"'},"​")],-1),k=a("pre",null,[a("code",{class:"language-html"},`<template>
    <a-space :size="16">
        <a-badge :value="value" size="small">
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
        <a-badge :value="value">
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
        <a-badge :value="value" size="large">
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
    </a-space>
</template>
<script setup>
import { ref } from "vue"
const value = ref(6)
<\/script>`)],-1),y=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"badge/size")])])])],-1),E=a("h2",{id:"封顶数字",tabindex:"-1"},[t("封顶数字 "),a("a",{class:"header-anchor",href:"#封顶数字","aria-label":'Permalink to "封顶数字"'},"​")],-1),w=a("pre",null,[a("code",{class:"language-html"},`<template>
    <a-space :size="24">
        <a-badge :value="value" :max="50" size="small">
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
        <a-badge :value="value" :max="30">
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
        <a-badge :value="value" size="large">
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
    </a-space>
</template>
<script setup>
import { ref } from "vue"
const value = ref(120)
<\/script>`)],-1),x=a("p",null,[t("默认值： "),a("code",null,"99")],-1),P=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"badge/max")])])])],-1),J=a("h2",{id:"文字颜色",tabindex:"-1"},[t("文字颜色 "),a("a",{class:"header-anchor",href:"#文字颜色","aria-label":'Permalink to "文字颜色"'},"​")],-1),G=a("pre",null,[a("code",{class:"language-html"},`<template>
    <a-space :size="16">
        <a-badge :value="value" color="black">
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
        <a-badge :value="value1" color="yellow">
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
    </a-space>
</template>
<script setup>
import { ref } from "vue"
const value = ref(6)
const value1 = ref(20)
<\/script>`)],-1),C=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"badge/color")])])])],-1),z=a("h2",{id:"背景颜色",tabindex:"-1"},[t("背景颜色 "),a("a",{class:"header-anchor",href:"#背景颜色","aria-label":'Permalink to "背景颜色"'},"​")],-1),B=a("pre",null,[a("code",{class:"language-html"},`<template>
    <a-space :size="16">
        <a-badge :value="value" bg-color="black">
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
        <a-badge :value="value1" bg-color="yellow" color="black">
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
    </a-space>
</template>
<script setup>
import { ref } from "vue"
const value = ref(6)
const value1 = ref(20)
<\/script>`)],-1),N=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"badge/bgcolor")])])])],-1),S=a("h2",{id:"透明度",tabindex:"-1"},[t("透明度 "),a("a",{class:"header-anchor",href:"#透明度","aria-label":'Permalink to "透明度"'},"​")],-1),T=a("pre",null,[a("code",{class:"language-html"},`<template>
    <a-space :size="16">
        <a-badge :value="value" size="small" :opacity="0.5">
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
        <a-badge :value="value" :opacity="0.7">
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
        <a-badge :value="value" size="large" :opacity="0.9">
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
    </a-space>
</template>
<script setup>
import { ref } from "vue"
const value = ref(6)
<\/script>`)],-1),V=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"badge/opacity")])])])],-1),D=a("h2",{id:"小红点",tabindex:"-1"},[t("小红点 "),a("a",{class:"header-anchor",href:"#小红点","aria-label":'Permalink to "小红点"'},"​")],-1),$=a("pre",null,[a("code",{class:"language-html"},`<template>
    <a-space :size="16">
        <a-badge :value="value" type="primary" is-dot placement="bottom-right">
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
        <a-badge :value="value1" type="success" is-dot>
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
        <a-badge :value="value" type="warning" is-dot>
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
        <a-badge :value="value1" type="error" is-dot>
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
    </a-space>
</template>
<script setup>
import { ref } from "vue"
const value = ref(6)
const value1 = ref(20)
<\/script>`)],-1),j=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"badge/dot")])])])],-1),A=a("h2",{id:"无边框",tabindex:"-1"},[t("无边框 "),a("a",{class:"header-anchor",href:"#无边框","aria-label":'Permalink to "无边框"'},"​")],-1),q=a("pre",null,[a("code",{class:"language-html"},`<template>
    <a-space :size="16">
        <a-badge :value="value" type="primary" :outline="false">
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
        <a-badge :value="value1" type="success" :outline="false">
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
        <a-badge :value="value" type="warning" :outline="false">
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
        <a-badge :value="value1" type="error" :outline="false">
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
        <a-badge :value="value" type="error" bg-color="#b249f8" :outline="false">
            <a-image :width="56" :height="56" src="https://img2.baidu.com/it/u=4078464629,2315974067&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800">df</a-image>
        </a-badge>
    </a-space>
</template>
<script setup>
import { ref } from "vue"
const value = ref(6)
const value1 = ref(20)
<\/script>`)],-1),I=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"badge/outline")])])])],-1),O=h("",2);function R(W,F,H,K,L,M){const i=n("Demo");return o(),d("div",null,[g,p,s(i,{path:"badge/basis"},{source:e(()=>[m]),description:e(()=>[u]),default:e(()=>[r]),_:1}),f,s(i,{path:"badge/theme"},{source:e(()=>[b]),description:e(()=>[]),default:e(()=>[v]),_:1}),_,s(i,{path:"badge/size"},{source:e(()=>[k]),description:e(()=>[]),default:e(()=>[y]),_:1}),E,s(i,{path:"badge/max"},{source:e(()=>[w]),description:e(()=>[x]),default:e(()=>[P]),_:1}),J,s(i,{path:"badge/color"},{source:e(()=>[G]),description:e(()=>[]),default:e(()=>[C]),_:1}),z,s(i,{path:"badge/bgcolor"},{source:e(()=>[B]),description:e(()=>[]),default:e(()=>[N]),_:1}),S,s(i,{path:"badge/opacity"},{source:e(()=>[T]),description:e(()=>[]),default:e(()=>[V]),_:1}),D,s(i,{path:"badge/dot"},{source:e(()=>[$]),description:e(()=>[]),default:e(()=>[j]),_:1}),A,s(i,{path:"badge/outline"},{source:e(()=>[q]),description:e(()=>[]),default:e(()=>[I]),_:1}),O])}const X=l(c,[["render",R]]);export{U as __pageData,X as default};
