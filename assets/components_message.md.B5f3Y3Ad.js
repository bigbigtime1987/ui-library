import{_ as o,c as i,a as e,E as t,f as l,w as s,U as r,o as p}from"./chunks/framework.DegHhALb.js";const y=JSON.parse('{"title":"Message 消息提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/message.md","filePath":"components/message.md"}'),u={name:"components/message.md"};function d(c,n,g,m,b,k){const a=r("Demo");return p(),i("div",null,[n[12]||(n[12]=e("h1",{id:"message-消息提示",tabindex:"-1"},[t("Message 消息提示 "),e("a",{class:"header-anchor",href:"#message-消息提示","aria-label":'Permalink to "Message 消息提示"'},"​")],-1)),n[13]||(n[13]=e("h2",{id:"基础用法",tabindex:"-1"},[t("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),l(a,{path:"message/basis"},{source:s(()=>n[0]||(n[0]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-button @click="open">默认提示</a-button>
</template>
<script setup>
import { AMessage } from "../../../packages/index"

const open = () => {
    AMessage({
        content: '这是基础的消息提示'
    })
}
<\/script>`)],-1)])),description:s(()=>n[1]||(n[1]=[e("p",null,[t("单独使用可以表示 "),e("code",null,"true"),t(" 和 "),e("code",null,"false"),t(" 两种状态之间的切换。")],-1)])),default:s(()=>[n[2]||(n[2]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"message/basis")])])])],-1))]),_:1}),n[14]||(n[14]=e("h2",{id:"主题类型",tabindex:"-1"},[t("主题类型 "),e("a",{class:"header-anchor",href:"#主题类型","aria-label":'Permalink to "主题类型"'},"​")],-1)),l(a,{path:"message/theme"},{source:s(()=>n[3]||(n[3]=[e("pre",null,[e("code",{class:"language-html"},`<template>
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
<\/script>`)],-1)])),description:s(()=>n[4]||(n[4]=[e("p",null,[t("单独使用可以表示 "),e("code",null,"true"),t(" 和 "),e("code",null,"false"),t(" 两种状态之间的切换。")],-1)])),default:s(()=>[n[5]||(n[5]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"message/theme")])])])],-1))]),_:1}),n[15]||(n[15]=e("h2",{id:"背景主题",tabindex:"-1"},[t("背景主题 "),e("a",{class:"header-anchor",href:"#背景主题","aria-label":'Permalink to "背景主题"'},"​")],-1)),l(a,{path:"message/bg"},{source:s(()=>n[6]||(n[6]=[e("pre",null,[e("code",{class:"language-html"},`<template>
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
<\/script>`)],-1)])),description:s(()=>n[7]||(n[7]=[e("p",null,[t("设置 "),e("code",null,"background"),t(" 为 "),e("code",null,"true"),t("，展示带背景颜色提示。")],-1)])),default:s(()=>[n[8]||(n[8]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"message/bg")])])])],-1))]),_:1}),n[16]||(n[16]=e("h2",{id:"可关闭的消息提示",tabindex:"-1"},[t("可关闭的消息提示 "),e("a",{class:"header-anchor",href:"#可关闭的消息提示","aria-label":'Permalink to "可关闭的消息提示"'},"​")],-1)),l(a,{path:"message/close"},{source:s(()=>n[9]||(n[9]=[e("pre",null,[e("code",{class:"language-html"},`<template>
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


<\/script>`)],-1)])),description:s(()=>n[10]||(n[10]=[e("p",null,[t("默认的 Message 是自动关闭的的，默认的关闭时间为 3000 毫秒。如果你需要手动关闭功能，你可以把 "),e("code",null,"showClose"),t(" 设置为 "),e("code",null,"true"),t(" 显示关闭按钮外，还可设置 "),e("code",null,"duration"),t(" 为 0，取消 Message 自动关闭。")],-1)])),default:s(()=>[n[11]||(n[11]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"message/close")])])])],-1))]),_:1})])}const f=o(u,[["render",d]]);export{y as __pageData,f as default};
