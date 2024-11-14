import{_ as o,V as l,c as i,f as a,w as n,a as e,E as t,o as c}from"./chunks/framework.IfFG3Aey.js";const O=JSON.parse('{"title":"Message 消息提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/message.md","filePath":"components/message.md"}'),r={name:"components/message.md"},p=e("h1",{id:"message-消息提示",tabindex:"-1"},[t("Message 消息提示 "),e("a",{class:"header-anchor",href:"#message-消息提示","aria-label":'Permalink to "Message 消息提示"'},"​")],-1),d=e("h2",{id:"基础用法",tabindex:"-1"},[t("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),u=e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-button @click="open">默认提示</a-button>
</template>
<script setup>
import { AMessage } from "../../../packages/index"

const open = () => {
    AMessage({
        content: '这是基础的消息提示'
    })
}
<\/script>`)],-1),h=e("p",null,[t("单独使用可以表示 "),e("code",null,"true"),t(" 和 "),e("code",null,"false"),t(" 两种状态之间的切换。")],-1),g=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"message/basis")])])])],-1),m=e("h2",{id:"主题类型",tabindex:"-1"},[t("主题类型 "),e("a",{class:"header-anchor",href:"#主题类型","aria-label":'Permalink to "主题类型"'},"​")],-1),b=e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-button type="primary" @click="open('primary')">默认提示</a-button>
    <a-button type="success" @click="open('success')">默认提示</a-button>
    <a-button type="warning" @click="open('warning')">默认提示</a-button>
    <a-button type="error" @click="open('error')">默认提示</a-button>
</template>
<script setup>
import { AMessage } from "../../../packages/index"

const open = (type) => {
    AMessage({
        type,
        content: '这是带有主题颜色的消息提示',
    })
}
<\/script>`)],-1),k=e("p",null,[t("单独使用可以表示 "),e("code",null,"true"),t(" 和 "),e("code",null,"false"),t(" 两种状态之间的切换。")],-1),_=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"message/theme")])])])],-1),y=e("h2",{id:"背景主题",tabindex:"-1"},[t("背景主题 "),e("a",{class:"header-anchor",href:"#背景主题","aria-label":'Permalink to "背景主题"'},"​")],-1),f=e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-button type="primary" @click="open('primary')">默认提示</a-button>
    <a-button type="success" @click="open('success')">默认提示</a-button>
    <a-button type="warning" @click="open('warning')">默认提示</a-button>
    <a-button type="error" @click="open('error')">默认提示</a-button>
</template>
<script setup>
import { AMessage } from "../../../packages/index"

const open = (type) => {
    AMessage({
        type,
        background: true,
        content: '背景色的消息'
    })
}
<\/script>`)],-1),v=e("p",null,[t("设置 "),e("code",null,"background"),t(" 为 "),e("code",null,"true"),t("，展示带背景颜色提示。")],-1),x=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"message/bg")])])])],-1),E=e("h2",{id:"可关闭的消息提示",tabindex:"-1"},[t("可关闭的消息提示 "),e("a",{class:"header-anchor",href:"#可关闭的消息提示","aria-label":'Permalink to "可关闭的消息提示"'},"​")],-1),C=e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-divider content="手动关闭"></a-divider>
    <a-button type="primary" @click="open('primary')">默认提示</a-button>
    <a-button type="success" @click="open('success')">默认提示</a-button>
    <a-button type="warning" @click="open('warning')">默认提示</a-button>
    <a-button type="error" @click="open('error')">默认提示</a-button>

    <a-divider content="关闭的回调"></a-divider>
    <a-button @click="closeCallback">关闭回调</a-button>
</template>
<script setup>
import { AMessage } from "../../../packages/index"

const open = (type) => {
    AMessage({
        type,
        duration: 0,
        showClose: true,
        content: '手动关闭',
    })
}

/**
 * 关闭回调
 */
const closeCallback = (type) => {
    AMessage({
        type: "info",
        duration: 0,
        showClose: true,
        content: '点击关闭按钮的回调',
        onClose: () => {
            alert('这里可以做你想做的事件')
        }
    })
}


<\/script>`)],-1),M=e("p",null,[t("默认的 Message 是自动关闭的的，默认的关闭时间为 3000 毫秒。如果你需要手动关闭功能，你可以把 "),e("code",null,"showClose"),t(" 设置为 "),e("code",null,"true"),t(" 显示关闭按钮外，还可设置 "),e("code",null,"duration"),t(" 为 0，取消 Message 自动关闭。")],-1),w=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"message/close")])])])],-1);function A(P,N,V,$,B,D){const s=l("Demo");return c(),i("div",null,[p,d,a(s,{path:"message/basis"},{source:n(()=>[u]),description:n(()=>[h]),default:n(()=>[g]),_:1}),m,a(s,{path:"message/theme"},{source:n(()=>[b]),description:n(()=>[k]),default:n(()=>[_]),_:1}),y,a(s,{path:"message/bg"},{source:n(()=>[f]),description:n(()=>[v]),default:n(()=>[x]),_:1}),E,a(s,{path:"message/close"},{source:n(()=>[C]),description:n(()=>[M]),default:n(()=>[w]),_:1})])}const S=o(r,[["render",A]]);export{O as __pageData,S as default};
