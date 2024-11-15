import{_ as l,c as i,a as e,E as n,f as o,w as t,U as r,o as p}from"./chunks/framework.DegHhALb.js";const k=JSON.parse('{"title":"MessageBox 消息确认框","description":"","frontmatter":{},"headers":[],"relativePath":"components/messagebox.md","filePath":"components/messagebox.md"}'),c={name:"components/messagebox.md"};function d(m,s,g,u,b,h){const a=r("Demo");return p(),i("div",null,[s[9]||(s[9]=e("h1",{id:"messagebox-消息确认框",tabindex:"-1"},[n("MessageBox 消息确认框 "),e("a",{class:"header-anchor",href:"#messagebox-消息确认框","aria-label":'Permalink to "MessageBox 消息确认框"'},"​")],-1)),s[10]||(s[10]=e("h2",{id:"确认消息",tabindex:"-1"},[n("确认消息 "),e("a",{class:"header-anchor",href:"#确认消息","aria-label":'Permalink to "确认消息"'},"​")],-1)),o(a,{path:"messageBox/basis"},{source:t(()=>s[0]||(s[0]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-button @click="open">基础用法</a-button>
</template>
<script setup>
import { AMessageBox,  AMessage } from "../../../packages/index"

const open = () => {
    AMessageBox({
        title: "提示",
        content: '这是基础的消息提示',
    })
}
<\/script>`)],-1)])),description:t(()=>s[1]||(s[1]=[e("p",null,[n("单独使用可以表示 "),e("code",null,"true"),n(" 和 "),e("code",null,"false"),n(" 两种状态之间的切换。")],-1)])),default:t(()=>[s[2]||(s[2]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"messageBox/basis")])])])],-1))]),_:1}),s[11]||(s[11]=e("h2",{id:"取消、确认的回调",tabindex:"-1"},[n("取消、确认的回调 "),e("a",{class:"header-anchor",href:"#取消、确认的回调","aria-label":'Permalink to "取消、确认的回调"'},"​")],-1)),o(a,{path:"messageBox/callback"},{source:t(()=>s[3]||(s[3]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-button type="primary" @click="open">确认弹窗的回调</a-button>
</template>
<script setup>
import { AMessageBox,  AMessage } from "../../../packages/index"

const open = () => {
    AMessageBox({
        title: "提示",
        content: '这是一个有回调的确认弹窗',
        callback: ({ action }) => {
            if(action === 'confirm') {
                AMessage({
                    type: "success",
                    content: "点击了确定按钮"
                })
            }
            if(action === 'cancel') {
                AMessage({
                    content: "点击了取消按钮"
                })
            }
        }
    })
}
<\/script>`)],-1)])),description:t(()=>s[4]||(s[4]=[e("p",null,[n("单独使用可以表示 "),e("code",null,"true"),n(" 和 "),e("code",null,"false"),n(" 两种状态之间的切换。")],-1)])),default:t(()=>[s[5]||(s[5]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"messageBox/callback")])])])],-1))]),_:1}),s[12]||(s[12]=e("h2",{id:"异步回调",tabindex:"-1"},[n("异步回调 "),e("a",{class:"header-anchor",href:"#异步回调","aria-label":'Permalink to "异步回调"'},"​")],-1)),o(a,{path:"messageBox/async"},{source:t(()=>s[6]||(s[6]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-button @click="open">可以异步回调的消息确认</a-button>
</template>
<script setup>
import { AMessageBox, AMessage } from "../../../packages/index"

const open = () => {
    AMessageBox({
        title: "提示",
        content: '这是基础的消息提示',
        beforeChange: () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    AMessage({
                        type: "success",
                        content: "成功"
                    })
                    resolve()
                }, 1000)
            })
        },
        beforeClose: () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    AMessage({
                        type: "success",
                        content: "点击了取消"
                    })
                    resolve()
                }, 1000)
            })
        },
    })
}
<\/script>`)],-1)])),description:t(()=>s[7]||(s[7]=[e("p",null,[n("单独使用可以表示 "),e("code",null,"true"),n(" 和 "),e("code",null,"false"),n(" 两种状态之间的切换。")],-1)])),default:t(()=>[s[8]||(s[8]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"messageBox/async")])])])],-1))]),_:1})])}const f=l(c,[["render",d]]);export{k as __pageData,f as default};
