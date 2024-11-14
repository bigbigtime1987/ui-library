import{_ as t,V as o,c as i,f as r,w as a,b as s,o as l,a as e}from"./chunks/framework.IfFG3Aey.js";const A=JSON.parse('{"title":"Container 布局容器","description":"","frontmatter":{},"headers":[],"relativePath":"components/container.md","filePath":"components/container.md"}'),c={name:"components/container.md"},d=s("",5),h=e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-space direction="vertical" :size="40" style="width: 100%">
        <a-container>
            <a-header bg-color="#7dbcea" :style="styleHeight">Header</a-header>
            <a-main bg-color="#108ee9" :style="styleMain">Main</a-main>
            <a-footer bg-color="#7dbcea" :style="styleFooter">Footer</a-footer>
        </a-container>

        <a-container>
            <a-header bg-color="#7dbcea" :style="styleHeight">Header</a-header>
            <a-container>
                <a-aside bg-color="#3ba0e9" :style="styleAside">Aside</a-aside>
                <a-main bg-color="#108ee9" :style="styleMain">Main</a-main>
            </a-container>
            <a-footer bg-color="#7dbcea" :style="styleFooter">Footer</a-footer>
        </a-container>

        <a-container>
            <a-header bg-color="#7dbcea" :style="styleHeight">Header</a-header>
            <a-container>
                <a-main bg-color="#108ee9" :style="styleMain">Main</a-main>
                <a-aside bg-color="#3ba0e9" :style="styleAside">Aside</a-aside>
            </a-container>
            <a-footer bg-color="#7dbcea" :style="styleFooter">Footer</a-footer>
        </a-container>

        <a-container>
            <a-aside bg-color="#3ba0e9" :style="styleAside">Aside</a-aside>
            <a-container>
                <a-header bg-color="#7dbcea" :style="styleHeight">Header</a-header>
                <a-main bg-color="#108ee9" :style="styleMain">Main</a-main>
                <a-footer bg-color="#7dbcea" :style="styleFooter">Footer</a-footer>
            </a-container>
        </a-container>
    </a-space>
    
</template>
<script setup>
import { ref } from "vue"
const styleHeight = ref({
    color: '#fff',
    lineHeight: '60px',
    textAlign: 'center'
})
const styleAside = ref({
    color: '#fff',
    textAlign: 'center',
    lineHeight: '72px'
})
const styleMain = ref({
    color: '#fff',
    textAlign: 'center'
})
const styleFooter = ref({
    color: '#fff',
    lineHeight: '60px',
    textAlign: 'center'
})
<\/script>`)],-1),p=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"container/basis")])])])],-1);function y(b,f,g,m,_,u){const n=o("Demo");return l(),i("div",null,[d,r(n,{path:"container/basis"},{source:a(()=>[h]),description:a(()=>[]),default:a(()=>[p]),_:1})])}const H=t(c,[["render",y]]);export{A as __pageData,H as default};
