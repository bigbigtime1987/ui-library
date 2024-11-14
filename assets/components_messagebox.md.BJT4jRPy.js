import{_ as o,V as l,c,f as a,w as n,a as e,E as s,o as i}from"./chunks/framework.IfFG3Aey.js";const V=JSON.parse('{"title":"MessageBox 消息确认框","description":"","frontmatter":{},"headers":[],"relativePath":"components/messagebox.md","filePath":"components/messagebox.md"}'),r={name:"components/messagebox.md"},p=e("h1",{id:"messagebox-消息确认框",tabindex:"-1"},[s("MessageBox 消息确认框 "),e("a",{class:"header-anchor",href:"#messagebox-消息确认框","aria-label":'Permalink to "MessageBox 消息确认框"'},"​")],-1),d=e("h2",{id:"确认消息",tabindex:"-1"},[s("确认消息 "),e("a",{class:"header-anchor",href:"#确认消息","aria-label":'Permalink to "确认消息"'},"​")],-1),h=e("pre",null,[e("code",{class:"language-html"},`<template>
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
<\/script>`)],-1),m=e("p",null,[s("单独使用可以表示 "),e("code",null,"true"),s(" 和 "),e("code",null,"false"),s(" 两种状态之间的切换。")],-1),g=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"messageBox/basis")])])])],-1),u=e("h2",{id:"取消、确认的回调",tabindex:"-1"},[s("取消、确认的回调 "),e("a",{class:"header-anchor",href:"#取消、确认的回调","aria-label":'Permalink to "取消、确认的回调"'},"​")],-1),_=e("pre",null,[e("code",{class:"language-html"},`<template>
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
<\/script>`)],-1),b=e("p",null,[s("单独使用可以表示 "),e("code",null,"true"),s(" 和 "),e("code",null,"false"),s(" 两种状态之间的切换。")],-1),x=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"messageBox/callback")])])])],-1),k=e("h2",{id:"异步回调",tabindex:"-1"},[s("异步回调 "),e("a",{class:"header-anchor",href:"#异步回调","aria-label":'Permalink to "异步回调"'},"​")],-1),f=e("pre",null,[e("code",{class:"language-html"},`<template>
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
<\/script>`)],-1),v=e("p",null,[s("单独使用可以表示 "),e("code",null,"true"),s(" 和 "),e("code",null,"false"),s(" 两种状态之间的切换。")],-1),B=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"messageBox/async")])])])],-1);function y(M,E,A,C,P,w){const t=l("Demo");return i(),c("div",null,[p,d,a(t,{path:"messageBox/basis"},{source:n(()=>[h]),description:n(()=>[m]),default:n(()=>[g]),_:1}),u,a(t,{path:"messageBox/callback"},{source:n(()=>[_]),description:n(()=>[b]),default:n(()=>[x]),_:1}),k,a(t,{path:"messageBox/async"},{source:n(()=>[f]),description:n(()=>[v]),default:n(()=>[B]),_:1})])}const $=o(r,[["render",y]]);export{V as __pageData,$ as default};
