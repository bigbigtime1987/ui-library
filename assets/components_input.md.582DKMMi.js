import{_ as s,V as i,c as o,f as n,w as a,a as e,E as t,o as p}from"./chunks/framework.IfFG3Aey.js";const te=JSON.parse('{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/input.md","filePath":"components/input.md"}'),c={name:"components/input.md"},d=e("h1",{id:"input-输入框",tabindex:"-1"},[t("Input 输入框 "),e("a",{class:"header-anchor",href:"#input-输入框","aria-label":'Permalink to "Input 输入框"'},"​")],-1),r=e("h2",{id:"基础用法",tabindex:"-1"},[t("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),h=e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-input v-model="value" width="200px" placeholder="输入内容" />
</template>
<script setup>
import { ref } from "vue"
const value = ref('')
<\/script>`)],-1),u=e("p",null,[t("单独使用可以表示 "),e("code",null,"true"),t(" 和 "),e("code",null,"false"),t(" 两种状态之间的切换。")],-1),m=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"input/basis")])])])],-1),v=e("h2",{id:"禁用状态",tabindex:"-1"},[t("禁用状态 "),e("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1),g=e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-input v-model="value" width="200px" placeholder="输入内容" disabled />
</template>
<script setup>
import { ref } from "vue"
const value = ref('')
<\/script>`)],-1),_=e("p",null,[t("单独使用可以表示 "),e("code",null,"true"),t(" 和 "),e("code",null,"false"),t(" 两种状态之间的切换。")],-1),f=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"input/disabled")])])])],-1),b=e("h2",{id:"存在内容-一键清除",tabindex:"-1"},[t("存在内容，一键清除 "),e("a",{class:"header-anchor",href:"#存在内容-一键清除","aria-label":'Permalink to "存在内容，一键清除"'},"​")],-1),k=e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-input v-model="value" width="200px" placeholder="输入内容" clearance />
</template>
<script setup>
import { ref } from "vue"
const value = ref('')
<\/script>`)],-1),x=e("p",null,[t("单独使用可以表示 "),e("code",null,"true"),t(" 和 "),e("code",null,"false"),t(" 两种状态之间的切换。")],-1),E=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"input/clear")])])])],-1),y=e("h2",{id:"密码框",tabindex:"-1"},[t("密码框 "),e("a",{class:"header-anchor",href:"#密码框","aria-label":'Permalink to "密码框"'},"​")],-1),w=e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-input type="password" show-password v-model="value" width="200px" placeholder="输入内容" />
</template>
<script setup>
import { ref } from "vue"
const value = ref('')
<\/script>`)],-1),C=e("p",null,[t("单独使用可以表示 "),e("code",null,"true"),t(" 和 "),e("code",null,"false"),t(" 两种状态之间的切换。")],-1),P=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"input/password")])])])],-1),z=e("h2",{id:"带图标的输入框",tabindex:"-1"},[t("带图标的输入框 "),e("a",{class:"header-anchor",href:"#带图标的输入框","aria-label":'Permalink to "带图标的输入框"'},"​")],-1),I=e("pre",null,[e("code",{class:"language-html"},`<template>
    <div class="margin-bottom-20">
        <a-space :size="20">
            <a-input v-model="value" width="200px" placeholder="输入内容">
                <template #append>
                    <a-icon><Search /></a-icon>
                </template>
            </a-input>
            <a-input v-model="value" width="200px" placeholder="输入内容">
                <template #prepend>
                    <a-icon><PlusCircle /></a-icon>
                </template>
            </a-input>
        </a-space>
    </div>

    <div class="margin-bottom-20">
        <a-space :size="20">
            <a-input v-model="value" width="200px" :prefixIcon="prepend" placeholder="输入内容" />
            <a-input v-model="value" width="200px" :suffixIcon="Search" placeholder="输入内容" />
        </a-space>
    </div>

    <div class="margin-bottom-20">
        <a-space :size="20">
            <a-input v-model="value" width="200px" prefix="￥" placeholder="输入内容" />
            <a-input v-model="value" width="200px" suffix="rmb" placeholder="输入内容" />
        </a-space>
    </div>
</template>
<script setup>
import { ref } from "vue"
import { Search, PlusCircle } from "@azong/icons-vue"
const value = ref('')
<\/script>
<style lang="scss" scoped>
.margin-bottom-20 { margin-bottom: 20px; }
</style>`)],-1),S=e("p",null,[t("单独使用可以表示 "),e("code",null,"true"),t(" 和 "),e("code",null,"false"),t(" 两种状态之间的切换。")],-1),N=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"input/icon")])])])],-1),V=e("h2",{id:"尺寸大小",tabindex:"-1"},[t("尺寸大小 "),e("a",{class:"header-anchor",href:"#尺寸大小","aria-label":'Permalink to "尺寸大小"'},"​")],-1),$=e("pre",null,[e("code",{class:"language-html"},`<template>
    <div class="margin-bottom-20">
        <a-space :size="20">
            <a-input v-model="value" width="200px" placeholder="输入内容" size="small">
                <template #append>
                    <a-icon><Search /></a-icon>
                </template>
            </a-input>
            <a-input v-model="value" width="200px" placeholder="输入内容" size="small">
                <template #prepend>
                    <a-icon><PlusCircle /></a-icon>
                </template>
            </a-input>
        </a-space>
    </div>

    <div class="margin-bottom-20">
        <a-space :size="20">
            <a-input v-model="value" width="200px" :prefixIcon="prepend" placeholder="输入内容" />
            <a-input v-model="value" width="200px" :suffixIcon="Search" placeholder="输入内容" />
        </a-space>
    </div>

    <div class="margin-bottom-20">
        <a-space :size="20">
            <a-input v-model="value" width="200px" prefix="￥" placeholder="输入内容"  size="large" />
            <a-input v-model="value" width="200px" suffix="rmb" placeholder="输入内容"  size="large" />
        </a-space>
    </div>
</template>
<script setup>
import { ref } from "vue"
import { Search, PlusCircle } from "@azong/icons-vue"
const value = ref('')
<\/script>
<style lang="scss" scoped>
.margin-bottom-20 { margin-bottom: 20px; }
</style>`)],-1),B=e("p",null,[t("单独使用可以表示 "),e("code",null,"true"),t(" 和 "),e("code",null,"false"),t(" 两种状态之间的切换。")],-1),D=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"input/size")])])])],-1),J=e("h2",{id:"限制长度",tabindex:"-1"},[t("限制长度 "),e("a",{class:"header-anchor",href:"#限制长度","aria-label":'Permalink to "限制长度"'},"​")],-1),O=e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-space :size="20">
        <a-input v-model="value" width="200px" :maxlength="10" count placeholder="输入内容" />
        <a-input v-model="value2" width="400px" :maxlength="20" count placeholder="输入内容" />
    </a-space>
</template>
<script setup>
import { ref } from "vue"
const value = ref('')
const value2 = ref('')
<\/script>`)],-1),T=e("p",null,[t("单独使用可以表示 "),e("code",null,"true"),t(" 和 "),e("code",null,"false"),t(" 两种状态之间的切换。")],-1),j=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"input/length")])])])],-1),q=e("h2",{id:"圆角的输入框",tabindex:"-1"},[t("圆角的输入框 "),e("a",{class:"header-anchor",href:"#圆角的输入框","aria-label":'Permalink to "圆角的输入框"'},"​")],-1),A=e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-input v-model="value" width="200px" round placeholder="输入内容" />
</template>
<script setup>
import { ref } from "vue"
const value = ref('')
const value2 = ref('')
<\/script>`)],-1),F=e("p",null,[t("单独使用可以表示 "),e("code",null,"true"),t(" 和 "),e("code",null,"false"),t(" 两种状态之间的切换。")],-1),G=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"input/round")])])])],-1),H=e("h2",{id:"文本域",tabindex:"-1"},[t("文本域 "),e("a",{class:"header-anchor",href:"#文本域","aria-label":'Permalink to "文本域"'},"​")],-1),K=e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-textarea v-model="value" :rows="5" :maxlength="500" count placeholder="输入内容" />
</template>
<script setup>
import { ref } from "vue"
const value = ref('')
const value2 = ref('')
<\/script>`)],-1),L=e("p",null,[t("单独使用可以表示 "),e("code",null,"true"),t(" 和 "),e("code",null,"false"),t(" 两种状态之间的切换。")],-1),M=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"input/textarea")])])])],-1);function Q(R,U,W,X,Y,Z){const l=i("Demo");return p(),o("div",null,[d,r,n(l,{path:"input/basis"},{source:a(()=>[h]),description:a(()=>[u]),default:a(()=>[m]),_:1}),v,n(l,{path:"input/disabled"},{source:a(()=>[g]),description:a(()=>[_]),default:a(()=>[f]),_:1}),b,n(l,{path:"input/clear"},{source:a(()=>[k]),description:a(()=>[x]),default:a(()=>[E]),_:1}),y,n(l,{path:"input/password"},{source:a(()=>[w]),description:a(()=>[C]),default:a(()=>[P]),_:1}),z,n(l,{path:"input/icon"},{source:a(()=>[I]),description:a(()=>[S]),default:a(()=>[N]),_:1}),V,n(l,{path:"input/size"},{source:a(()=>[$]),description:a(()=>[B]),default:a(()=>[D]),_:1}),J,n(l,{path:"input/length"},{source:a(()=>[O]),description:a(()=>[T]),default:a(()=>[j]),_:1}),q,n(l,{path:"input/round"},{source:a(()=>[A]),description:a(()=>[F]),default:a(()=>[G]),_:1}),H,n(l,{path:"input/textarea"},{source:a(()=>[K]),description:a(()=>[L]),default:a(()=>[M]),_:1})])}const ae=s(c,[["render",Q]]);export{te as __pageData,ae as default};
