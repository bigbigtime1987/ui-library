import{_ as i,c as p,a as e,E as t,f as s,w as a,U as o,o as r}from"./chunks/framework.DegHhALb.js";const b=JSON.parse('{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/input.md","filePath":"components/input.md"}'),d={name:"components/input.md"};function u(m,l,h,c,v,g){const n=o("Demo");return r(),p("div",null,[l[27]||(l[27]=e("h1",{id:"input-输入框",tabindex:"-1"},[t("Input 输入框 "),e("a",{class:"header-anchor",href:"#input-输入框","aria-label":'Permalink to "Input 输入框"'},"​")],-1)),l[28]||(l[28]=e("h2",{id:"基础用法",tabindex:"-1"},[t("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),s(n,{path:"input/basis"},{source:a(()=>l[0]||(l[0]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-input v-model="value" width="200px" placeholder="输入内容" />
</template>
<script setup>
import { ref } from "vue"
const value = ref('')
<\/script>`)],-1)])),description:a(()=>l[1]||(l[1]=[e("p",null,[t("单独使用可以表示 "),e("code",null,"true"),t(" 和 "),e("code",null,"false"),t(" 两种状态之间的切换。")],-1)])),default:a(()=>[l[2]||(l[2]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"input/basis")])])])],-1))]),_:1}),l[29]||(l[29]=e("h2",{id:"禁用状态",tabindex:"-1"},[t("禁用状态 "),e("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),s(n,{path:"input/disabled"},{source:a(()=>l[3]||(l[3]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-input v-model="value" width="200px" placeholder="输入内容" disabled />
</template>
<script setup>
import { ref } from "vue"
const value = ref('')
<\/script>`)],-1)])),description:a(()=>l[4]||(l[4]=[e("p",null,[t("单独使用可以表示 "),e("code",null,"true"),t(" 和 "),e("code",null,"false"),t(" 两种状态之间的切换。")],-1)])),default:a(()=>[l[5]||(l[5]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"input/disabled")])])])],-1))]),_:1}),l[30]||(l[30]=e("h2",{id:"存在内容-一键清除",tabindex:"-1"},[t("存在内容，一键清除 "),e("a",{class:"header-anchor",href:"#存在内容-一键清除","aria-label":'Permalink to "存在内容，一键清除"'},"​")],-1)),s(n,{path:"input/clear"},{source:a(()=>l[6]||(l[6]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-input v-model="value" width="200px" placeholder="输入内容" clearance />
</template>
<script setup>
import { ref } from "vue"
const value = ref('')
<\/script>`)],-1)])),description:a(()=>l[7]||(l[7]=[e("p",null,[t("单独使用可以表示 "),e("code",null,"true"),t(" 和 "),e("code",null,"false"),t(" 两种状态之间的切换。")],-1)])),default:a(()=>[l[8]||(l[8]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"input/clear")])])])],-1))]),_:1}),l[31]||(l[31]=e("h2",{id:"密码框",tabindex:"-1"},[t("密码框 "),e("a",{class:"header-anchor",href:"#密码框","aria-label":'Permalink to "密码框"'},"​")],-1)),s(n,{path:"input/password"},{source:a(()=>l[9]||(l[9]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-input type="password" show-password v-model="value" width="200px" placeholder="输入内容" />
</template>
<script setup>
import { ref } from "vue"
const value = ref('')
<\/script>`)],-1)])),description:a(()=>l[10]||(l[10]=[e("p",null,[t("单独使用可以表示 "),e("code",null,"true"),t(" 和 "),e("code",null,"false"),t(" 两种状态之间的切换。")],-1)])),default:a(()=>[l[11]||(l[11]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"input/password")])])])],-1))]),_:1}),l[32]||(l[32]=e("h2",{id:"带图标的输入框",tabindex:"-1"},[t("带图标的输入框 "),e("a",{class:"header-anchor",href:"#带图标的输入框","aria-label":'Permalink to "带图标的输入框"'},"​")],-1)),s(n,{path:"input/icon"},{source:a(()=>l[12]||(l[12]=[e("pre",null,[e("code",{class:"language-html"},`<template>
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
</style>`)],-1)])),description:a(()=>l[13]||(l[13]=[e("p",null,[t("单独使用可以表示 "),e("code",null,"true"),t(" 和 "),e("code",null,"false"),t(" 两种状态之间的切换。")],-1)])),default:a(()=>[l[14]||(l[14]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"input/icon")])])])],-1))]),_:1}),l[33]||(l[33]=e("h2",{id:"尺寸大小",tabindex:"-1"},[t("尺寸大小 "),e("a",{class:"header-anchor",href:"#尺寸大小","aria-label":'Permalink to "尺寸大小"'},"​")],-1)),s(n,{path:"input/size"},{source:a(()=>l[15]||(l[15]=[e("pre",null,[e("code",{class:"language-html"},`<template>
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
</style>`)],-1)])),description:a(()=>l[16]||(l[16]=[e("p",null,[t("单独使用可以表示 "),e("code",null,"true"),t(" 和 "),e("code",null,"false"),t(" 两种状态之间的切换。")],-1)])),default:a(()=>[l[17]||(l[17]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"input/size")])])])],-1))]),_:1}),l[34]||(l[34]=e("h2",{id:"限制长度",tabindex:"-1"},[t("限制长度 "),e("a",{class:"header-anchor",href:"#限制长度","aria-label":'Permalink to "限制长度"'},"​")],-1)),s(n,{path:"input/length"},{source:a(()=>l[18]||(l[18]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-space :size="20">
        <a-input v-model="value" width="200px" :maxlength="10" count placeholder="输入内容" />
        <a-input v-model="value2" width="400px" :maxlength="20" count placeholder="输入内容" />
    </a-space>
</template>
<script setup>
import { ref } from "vue"
const value = ref('')
const value2 = ref('')
<\/script>`)],-1)])),description:a(()=>l[19]||(l[19]=[e("p",null,[t("单独使用可以表示 "),e("code",null,"true"),t(" 和 "),e("code",null,"false"),t(" 两种状态之间的切换。")],-1)])),default:a(()=>[l[20]||(l[20]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"input/length")])])])],-1))]),_:1}),l[35]||(l[35]=e("h2",{id:"圆角的输入框",tabindex:"-1"},[t("圆角的输入框 "),e("a",{class:"header-anchor",href:"#圆角的输入框","aria-label":'Permalink to "圆角的输入框"'},"​")],-1)),s(n,{path:"input/round"},{source:a(()=>l[21]||(l[21]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-input v-model="value" width="200px" round placeholder="输入内容" />
</template>
<script setup>
import { ref } from "vue"
const value = ref('')
const value2 = ref('')
<\/script>`)],-1)])),description:a(()=>l[22]||(l[22]=[e("p",null,[t("单独使用可以表示 "),e("code",null,"true"),t(" 和 "),e("code",null,"false"),t(" 两种状态之间的切换。")],-1)])),default:a(()=>[l[23]||(l[23]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"input/round")])])])],-1))]),_:1}),l[36]||(l[36]=e("h2",{id:"文本域",tabindex:"-1"},[t("文本域 "),e("a",{class:"header-anchor",href:"#文本域","aria-label":'Permalink to "文本域"'},"​")],-1)),s(n,{path:"input/textarea"},{source:a(()=>l[24]||(l[24]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-textarea v-model="value" :rows="5" :maxlength="500" count placeholder="输入内容" />
</template>
<script setup>
import { ref } from "vue"
const value = ref('')
const value2 = ref('')
<\/script>`)],-1)])),description:a(()=>l[25]||(l[25]=[e("p",null,[t("单独使用可以表示 "),e("code",null,"true"),t(" 和 "),e("code",null,"false"),t(" 两种状态之间的切换。")],-1)])),default:a(()=>[l[26]||(l[26]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"input/textarea")])])])],-1))]),_:1})])}const k=i(d,[["render",u]]);export{b as __pageData,k as default};
