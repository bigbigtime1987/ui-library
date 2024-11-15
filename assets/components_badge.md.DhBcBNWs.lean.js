import{_ as n,c as d,a,E as i,f as s,w as t,b as g,U as p,o as m}from"./chunks/framework.DegHhALb.js";const k=JSON.parse('{"title":"Badge 徽标数","description":"","frontmatter":{},"headers":[],"relativePath":"components/badge.md","filePath":"components/badge.md"}'),o={name:"components/badge.md"};function u(r,e,h,f,b,c){const l=p("Demo");return m(),d("div",null,[e[27]||(e[27]=a("h1",{id:"badge-徽标数",tabindex:"-1"},[i("Badge 徽标数 "),a("a",{class:"header-anchor",href:"#badge-徽标数","aria-label":'Permalink to "Badge 徽标数"'},"​")],-1)),e[28]||(e[28]=a("h2",{id:"基本用法",tabindex:"-1"},[i("基本用法 "),a("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),s(l,{path:"badge/basis"},{source:t(()=>e[0]||(e[0]=[a("pre",null,[a("code",{class:"language-html"},`<template>
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
<\/script>`)],-1)])),description:t(()=>e[1]||(e[1]=[a("p",null,"展示新消息数量。",-1)])),default:t(()=>[e[2]||(e[2]=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"badge/basis")])])])],-1))]),_:1}),e[29]||(e[29]=a("h2",{id:"主题色",tabindex:"-1"},[i("主题色 "),a("a",{class:"header-anchor",href:"#主题色","aria-label":'Permalink to "主题色"'},"​")],-1)),s(l,{path:"badge/theme"},{source:t(()=>e[3]||(e[3]=[a("pre",null,[a("code",{class:"language-html"},`<template>
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
<\/script>`)],-1)])),description:t(()=>e[4]||(e[4]=[])),default:t(()=>[e[5]||(e[5]=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"badge/theme")])])])],-1))]),_:1}),e[30]||(e[30]=a("h2",{id:"尺寸",tabindex:"-1"},[i("尺寸 "),a("a",{class:"header-anchor",href:"#尺寸","aria-label":'Permalink to "尺寸"'},"​")],-1)),s(l,{path:"badge/size"},{source:t(()=>e[6]||(e[6]=[a("pre",null,[a("code",{class:"language-html"},`<template>
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
<\/script>`)],-1)])),description:t(()=>e[7]||(e[7]=[])),default:t(()=>[e[8]||(e[8]=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"badge/size")])])])],-1))]),_:1}),e[31]||(e[31]=a("h2",{id:"封顶数字",tabindex:"-1"},[i("封顶数字 "),a("a",{class:"header-anchor",href:"#封顶数字","aria-label":'Permalink to "封顶数字"'},"​")],-1)),s(l,{path:"badge/max"},{source:t(()=>e[9]||(e[9]=[a("pre",null,[a("code",{class:"language-html"},`<template>
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
<\/script>`)],-1)])),description:t(()=>e[10]||(e[10]=[a("p",null,[i("默认值： "),a("code",null,"99")],-1)])),default:t(()=>[e[11]||(e[11]=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"badge/max")])])])],-1))]),_:1}),e[32]||(e[32]=a("h2",{id:"文字颜色",tabindex:"-1"},[i("文字颜色 "),a("a",{class:"header-anchor",href:"#文字颜色","aria-label":'Permalink to "文字颜色"'},"​")],-1)),s(l,{path:"badge/color"},{source:t(()=>e[12]||(e[12]=[a("pre",null,[a("code",{class:"language-html"},`<template>
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
<\/script>`)],-1)])),description:t(()=>e[13]||(e[13]=[])),default:t(()=>[e[14]||(e[14]=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"badge/color")])])])],-1))]),_:1}),e[33]||(e[33]=a("h2",{id:"背景颜色",tabindex:"-1"},[i("背景颜色 "),a("a",{class:"header-anchor",href:"#背景颜色","aria-label":'Permalink to "背景颜色"'},"​")],-1)),s(l,{path:"badge/bgcolor"},{source:t(()=>e[15]||(e[15]=[a("pre",null,[a("code",{class:"language-html"},`<template>
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
<\/script>`)],-1)])),description:t(()=>e[16]||(e[16]=[])),default:t(()=>[e[17]||(e[17]=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"badge/bgcolor")])])])],-1))]),_:1}),e[34]||(e[34]=a("h2",{id:"透明度",tabindex:"-1"},[i("透明度 "),a("a",{class:"header-anchor",href:"#透明度","aria-label":'Permalink to "透明度"'},"​")],-1)),s(l,{path:"badge/opacity"},{source:t(()=>e[18]||(e[18]=[a("pre",null,[a("code",{class:"language-html"},`<template>
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
<\/script>`)],-1)])),description:t(()=>e[19]||(e[19]=[])),default:t(()=>[e[20]||(e[20]=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"badge/opacity")])])])],-1))]),_:1}),e[35]||(e[35]=a("h2",{id:"小红点",tabindex:"-1"},[i("小红点 "),a("a",{class:"header-anchor",href:"#小红点","aria-label":'Permalink to "小红点"'},"​")],-1)),s(l,{path:"badge/dot"},{source:t(()=>e[21]||(e[21]=[a("pre",null,[a("code",{class:"language-html"},`<template>
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
<\/script>`)],-1)])),description:t(()=>e[22]||(e[22]=[])),default:t(()=>[e[23]||(e[23]=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"badge/dot")])])])],-1))]),_:1}),e[36]||(e[36]=a("h2",{id:"无边框",tabindex:"-1"},[i("无边框 "),a("a",{class:"header-anchor",href:"#无边框","aria-label":'Permalink to "无边框"'},"​")],-1)),s(l,{path:"badge/outline"},{source:t(()=>e[24]||(e[24]=[a("pre",null,[a("code",{class:"language-html"},`<template>
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
<\/script>`)],-1)])),description:t(()=>e[25]||(e[25]=[])),default:t(()=>[e[26]||(e[26]=a("div",{class:"language-html vp-adaptive-theme"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"badge/outline")])])])],-1))]),_:1}),e[37]||(e[37]=g('<h2 id="badge-属性" tabindex="-1">Badge 属性 <a class="header-anchor" href="#badge-属性" aria-label="Permalink to &quot;Badge 属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型（可选值）</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">gutter</td><td style="text-align:left;">栅格间距</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">gap</td><td style="text-align:left;">行与行间距</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">justify</td><td style="text-align:left;">对齐</td><td style="text-align:left;">与 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content" target="_blank" rel="noreferrer">justify-content🔗</a> 一致</td><td style="text-align:left;">-</td></tr></tbody></table>',2))])}const y=n(o,[["render",u]]);export{k as __pageData,y as default};
