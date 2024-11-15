import{_ as o,c,b as p,f as e,w as s,a as n,E as l,U as t,o as d}from"./chunks/framework.DegHhALb.js";const C=JSON.parse('{"title":"Icon 图标","description":"","frontmatter":{},"headers":[],"relativePath":"components/icon.md","filePath":"components/icon.md"}'),r={name:"components/icon.md"};function v(h,i,z,m,k,g){const a=t("Demo");return d(),c("div",null,[i[12]||(i[12]=p(`<h1 id="icon-图标" tabindex="-1">Icon 图标 <a class="header-anchor" href="#icon-图标" aria-label="Permalink to &quot;Icon 图标&quot;">​</a></h1><p>语义化的矢量图形。使用图标组件，你需要安装 @azong/icons-vue<br>图标组件包：来源于：<a href="https://feathericons.com/" target="_blank" rel="noreferrer">https://feathericons.com/</a></p><h2 id="安装方式" tabindex="-1">安装方式 <a class="header-anchor" href="#安装方式" aria-label="Permalink to &quot;安装方式&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm install @azong</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">icons</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">save</span></span></code></pre></div><h2 id="注册所有图标" tabindex="-1">注册所有图标 <a class="header-anchor" href="#注册所有图标" aria-label="Permalink to &quot;注册所有图标&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// main.ts 引入图标库</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AzongIcons </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@azong/icons-vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Vue实例</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(App)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 循环图标，使用component对象注入</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">entries</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(AzongIcons)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(key, component)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2>`,7)),e(a,{path:"icons/basis"},{source:s(()=>i[0]||(i[0]=[n("pre",null,[n("code",{class:"language-html"},`<template>
    <a-space :size="20">
        <a-icon :size="16">
            <XCircle />
        </a-icon>
        <a-icon :size="16">
            <Image />
        </a-icon>
        <a-button>
            <a-icon> <Upload /> </a-icon>
            上传
        </a-button>
        <a-button type="primary" :icon="Plus">
            添加
        </a-button>
    </a-space>
</template>
<script setup>
import { Plus } from "@azong/icons-vue"
<\/script>`)],-1)])),description:s(()=>i[1]||(i[1]=[])),default:s(()=>[i[2]||(i[2]=n("div",{class:"language-html vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"html"),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"icons/basis")])])])],-1))]),_:1}),i[13]||(i[13]=n("h2",{id:"尺寸",tabindex:"-1"},[l("尺寸 "),n("a",{class:"header-anchor",href:"#尺寸","aria-label":'Permalink to "尺寸"'},"​")],-1)),e(a,{path:"icons/size"},{source:s(()=>i[3]||(i[3]=[n("pre",null,[n("code",{class:"language-html"},`<template>
    <a-space :size="20">
        <a-icon :size="24">
            <CheckCircle />
        </a-icon>
        <a-icon :size="32">
            <Image />
        </a-icon>
       
        <a-button type="primary" size="large" :icon="Calendar">
            添加
        </a-button>
    </a-space>
</template>
<script setup>
import { Calendar } from "@azong/icons-vue"
<\/script>`)],-1)])),description:s(()=>i[4]||(i[4]=[])),default:s(()=>[i[5]||(i[5]=n("div",{class:"language-html vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"html"),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"icons/size")])])])],-1))]),_:1}),i[14]||(i[14]=n("h2",{id:"system",tabindex:"-1"},[l("System "),n("a",{class:"header-anchor",href:"#system","aria-label":'Permalink to "System"'},"​")],-1)),e(a,{path:"icons/system"},{source:s(()=>i[6]||(i[6]=[n("pre",null,[n("code",{class:"language-html"},`<template>
    <ul class="icons-list">
        <li>
            <div>
                <a-icon :size="size"><Plus /></a-icon>
                <span class="icons-name">Plus</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Minus /></a-icon>
                <span class="icons-name">Minus</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><PlusCircle /></a-icon>
                <span class="icons-name">PlusCircle</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><MinusCircle /></a-icon>
                <span class="icons-name">MinusCircle</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><PlusSquare /></a-icon>
                <span class="icons-name">PlusSquare</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><MinusSquare /></a-icon>
                <span class="icons-name">MinusSquare</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Bell /></a-icon>
                <span class="icons-name">Bell</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><BellOff /></a-icon>
                <span class="icons-name">BellOff</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Calendar /></a-icon>
                <span class="icons-name">Calendar</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Clock /></a-icon>
                <span class="icons-name">Clock</span>
            </div>
        </li>
        
        <li>
            <div>
                <a-icon :size="size"><Check /></a-icon>
                <span class="icons-name">Check</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><CheckCircle /></a-icon>
                <span class="icons-name">CheckCircle</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><CheckSquare /></a-icon>
                <span class="icons-name">CheckSquare</span>
            </div>
        </li>

        <li>
            <div>
                <a-icon :size="size"><XCircle /></a-icon>
                <span class="icons-name">XCircle</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><XOctagon /></a-icon>
                <span class="icons-name">XOctagon</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><XSquare /></a-icon>
                <span class="icons-name">XSquare</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><X /></a-icon>
                <span class="icons-name">X</span>
            </div>
        </li>




        <li>
            <div>
                <a-icon :size="size"><Compass /></a-icon>
                <span class="icons-name">Compass</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><MapPin /></a-icon>
                <span class="icons-name">MapPin</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Map /></a-icon>
                <span class="icons-name">Map</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Copy /></a-icon>
                <span class="icons-name">Copy</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><DownloadCloud /></a-icon>
                <span class="icons-name">DownloadCloud</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Download /></a-icon>
                <span class="icons-name">Download</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Edit /></a-icon>
                <span class="icons-name">Edit</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Edit2 /></a-icon>
                <span class="icons-name">Edit2</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Edit3 /></a-icon>
                <span class="icons-name">Edit3</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><ExternalLink /></a-icon>
                <span class="icons-name">ExternalLink</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Eye /></a-icon>
                <span class="icons-name">Eye</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><EyeOff /></a-icon>
                <span class="icons-name">EyeOff</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Image /></a-icon>
                <span class="icons-name">Image</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Link /></a-icon>
                <span class="icons-name">Link</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Link2 /></a-icon>
                <span class="icons-name">Link2</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Loader /></a-icon>
                <span class="icons-name">Loader</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Link /></a-icon>
                <span class="icons-name">Link</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Lock /></a-icon>
                <span class="icons-name">Lock</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Unlock /></a-icon>
                <span class="icons-name">Unlock</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><LogIn /></a-icon>
                <span class="icons-name">LogIn</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><LogOut /></a-icon>
                <span class="icons-name">LogOut</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Mail /></a-icon>
                <span class="icons-name">Mail</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Maximize /></a-icon>
                <span class="icons-name">Maximize</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Maximize2 /></a-icon>
                <span class="icons-name">Maximize2</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Minimize /></a-icon>
                <span class="icons-name">Minimize</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Minimize2 /></a-icon>
                <span class="icons-name">Minimize2</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><List /></a-icon>
                <span class="icons-name">List</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Menu /></a-icon>
                <span class="icons-name">Menu</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Trash /></a-icon>
                <span class="icons-name">Trash</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Trash2 /></a-icon>
                <span class="icons-name">Trash2</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><MoreHorizontal /></a-icon>
                <span class="icons-name">MoreHorizontal</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><MoreVertical /></a-icon>
                <span class="icons-name">MoreVertical</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Paperclip /></a-icon>
                <span class="icons-name">Paperclip</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Power /></a-icon>
                <span class="icons-name">Power</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Printer /></a-icon>
                <span class="icons-name">Printer</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><RefreshCcw /></a-icon>
                <span class="icons-name">RefreshCcw</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><RefreshCw /></a-icon>
                <span class="icons-name">RefreshCw</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><RotateCcw /></a-icon>
                <span class="icons-name">RotateCcw</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><RotateCw /></a-icon>
                <span class="icons-name">RotateCw</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Save /></a-icon>
                <span class="icons-name">Save</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Search /></a-icon>
                <span class="icons-name">Search</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Settings /></a-icon>
                <span class="icons-name">Settings</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Share /></a-icon>
                <span class="icons-name">Share</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Share2 /></a-icon>
                <span class="icons-name">Share2</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><Shield /></a-icon>
                <span class="icons-name">Shield</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><ShieldOff /></a-icon>
                <span class="icons-name">ShieldOff</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><ZoomIn /></a-icon>
                <span class="icons-name">ZoomIn</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><ZoomOut /></a-icon>
                <span class="icons-name">ZoomOut</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><AlertCircle /></a-icon>
                <span class="icons-name">AlertCircle</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><AlertTriangle /></a-icon>
                <span class="icons-name">AlertTriangle</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><AlertFill /></a-icon>
                <span class="icons-name">AlertFill</span>
            </div>
        </li>

        <li>
            <div>
                <a-icon :size="size"><BellFill /></a-icon>
                <span class="icons-name">BellFill</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><CheckFill /></a-icon>
                <span class="icons-name">CheckFill</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><HelpCircleFill /></a-icon>
                <span class="icons-name">HelpCircleFill</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><InfoFill /></a-icon>
                <span class="icons-name">InfoFill</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><MinusCircleFill /></a-icon>
                <span class="icons-name">MinusCircleFill</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><PlusCircleFill /></a-icon>
                <span class="icons-name">PlusCircleFill</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><XCircleFill /></a-icon>
                <span class="icons-name">XCircleFill</span>
            </div>
        </li>
    </ul>
</template>
<script setup>
import { ref } from "vue"
const size = ref(20)
<\/script>`)],-1)])),description:s(()=>i[7]||(i[7]=[])),default:s(()=>[i[8]||(i[8]=n("div",{class:"language-html vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"html"),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"icons/system")])])])],-1))]),_:1}),i[15]||(i[15]=n("h2",{id:"arrow",tabindex:"-1"},[l("Arrow "),n("a",{class:"header-anchor",href:"#arrow","aria-label":'Permalink to "Arrow"'},"​")],-1)),e(a,{path:"icons/arrow"},{source:s(()=>i[9]||(i[9]=[n("pre",null,[n("code",{class:"language-html"},`<template>
    <ul class="icons-list">
        <li>
            <div>
                <a-icon :size="size"><ArrowDownCircle /></a-icon>
                <span class="icons-name">ArrowDownCircle</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><ArrowLeftCircle /></a-icon>
                <span class="icons-name">ArrowLeftCircle</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><ArrowUpCircle /></a-icon>
                <span class="icons-name">ArrowUpCircle</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><ArrowRightCircle /></a-icon>
                <span class="icons-name">ArrowRightCircle</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><ArrowDown /></a-icon>
                <span class="icons-name">ArrowDown</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><ArrowDownLeft /></a-icon>
                <span class="icons-name">ArrowDownLeft</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><ArrowDownRight /></a-icon>
                <span class="icons-name">ArrowDownRight</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><ArrowLeft /></a-icon>
                <span class="icons-name">ArrowLeft</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><ArrowRight /></a-icon>
                <span class="icons-name">ArrowRight</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><ArrowUpLeft /></a-icon>
                <span class="icons-name">ArrowUpLeft</span>
            </div>
        </li>
        
        <li>
            <div>
                <a-icon :size="size"><ArrowUpRight /></a-icon>
                <span class="icons-name">ArrowUpRight</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><ArrowUp /></a-icon>
                <span class="icons-name">ArrowUp</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><ChevronDown /></a-icon>
                <span class="icons-name">ChevronDown</span>
            </div>
        </li>

        <li>
            <div>
                <a-icon :size="size"><ChevronLeft /></a-icon>
                <span class="icons-name">ChevronLeft</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><ChevronRight /></a-icon>
                <span class="icons-name">ChevronRight</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><ChevronUp /></a-icon>
                <span class="icons-name">ChevronUp</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><ChevronsDown /></a-icon>
                <span class="icons-name">ChevronsDown</span>
            </div>
        </li>




        <li>
            <div>
                <a-icon :size="size"><ChevronsLeft /></a-icon>
                <span class="icons-name">ChevronsLeft</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><ChevronsRight /></a-icon>
                <span class="icons-name">ChevronsRight</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><ChevronsUp /></a-icon>
                <span class="icons-name">ChevronsUp</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><CornerDownLeft /></a-icon>
                <span class="icons-name">CornerDownLeft</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><CornerDownRight /></a-icon>
                <span class="icons-name">CornerDownRight</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><CornerLeftDown /></a-icon>
                <span class="icons-name">CornerLeftDown</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><CornerLeftUp /></a-icon>
                <span class="icons-name">CornerLeftUp</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><CornerRightDown /></a-icon>
                <span class="icons-name">CornerRightDown</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><CornerRightUp /></a-icon>
                <span class="icons-name">CornerRightUp</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><CornerUpLeft /></a-icon>
                <span class="icons-name">CornerUpLeft</span>
            </div>
        </li>
        <li>
            <div>
                <a-icon :size="size"><CornerUpRight /></a-icon>
                <span class="icons-name">CornerUpRight</span>
            </div>
        </li>
    </ul>
</template>
<script setup>
import { ref } from "vue"
const size = ref(20)
<\/script>`)],-1)])),description:s(()=>i[10]||(i[10]=[])),default:s(()=>[i[11]||(i[11]=n("div",{class:"language-html vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"html"),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"icons/arrow")])])])],-1))]),_:1})])}const E=o(r,[["render",v]]);export{C as __pageData,E as default};
