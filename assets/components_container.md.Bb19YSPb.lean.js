import{_ as o,c as i,b as r,f as l,w as n,U as s,o as c,a as e}from"./chunks/framework.DegHhALb.js";const u=JSON.parse('{"title":"Container 布局容器","description":"","frontmatter":{},"headers":[],"relativePath":"components/container.md","filePath":"components/container.md"}'),d={name:"components/container.md"};function p(y,a,b,f,g,h){const t=s("Demo");return c(),i("div",null,[a[3]||(a[3]=r('<h1 id="container-布局容器" tabindex="-1">Container 布局容器 <a class="header-anchor" href="#container-布局容器" aria-label="Permalink to &quot;Container 布局容器&quot;">​</a></h1><p>用于布局的容器组件，方便快速搭建页面的基本结构： <br></p><ul><li>Container：布局容器，其下可嵌套 Header Sider Content Footer 或 Container 本身，可以放在任何父容器中。</li><li>Header：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。</li><li>Sider：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。</li><li>Content：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。</li><li>Footer：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>注意：采用 flex 布局实现，请注意浏览器兼容性问题。</p></div><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2>',5)),l(t,{path:"container/basis"},{source:n(()=>a[0]||(a[0]=[e("pre",null,[e("code",{class:"language-html"},`<template>
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
<\/script>`)],-1)])),description:n(()=>a[1]||(a[1]=[])),default:n(()=>[a[2]||(a[2]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"container/basis")])])])],-1))]),_:1})])}const x=o(d,[["render",p]]);export{u as __pageData,x as default};
