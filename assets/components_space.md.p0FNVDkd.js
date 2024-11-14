import{_ as l,V as i,c as o,f as s,w as a,a as t,E as e,b as c,o as d}from"./chunks/framework.IfFG3Aey.js";const K=JSON.parse('{"title":"Space 间距","description":"","frontmatter":{},"headers":[],"relativePath":"components/space.md","filePath":"components/space.md"}'),r={name:"components/space.md"},p=t("h1",{id:"space-间距",tabindex:"-1"},[e("Space 间距 "),t("a",{class:"header-anchor",href:"#space-间距","aria-label":'Permalink to "Space 间距"'},"​")],-1),h=t("p",null,"设置组件之间的间距。避免组件紧贴在一起，拉开统一的空间。",-1),u=t("h2",{id:"基本用法",tabindex:"-1"},[e("基本用法 "),t("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1),b=t("pre",null,[t("code",{class:"language-html"},`<template>
    <a-space>
        文本类型
        <a-button>按钮</a-button>
        <div>div标签元素</div>
    </a-space>
</template>`)],-1),g=t("p",null,[e("相邻组件水平间距，默认间距"),t("code",null,"8px"),e("。")],-1),m=t("div",{class:"language-html vp-adaptive-theme"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"html"),t("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"space/basis")])])])],-1),_=t("h2",{id:"垂直间距",tabindex:"-1"},[e("垂直间距 "),t("a",{class:"header-anchor",href:"#垂直间距","aria-label":'Permalink to "垂直间距"'},"​")],-1),v=t("pre",null,[t("code",{class:"language-html"},`<template>
    <a-space direction="vertical">
        <a-button>按钮</a-button>
        <a-button type="success">按钮</a-button>
        <div>div标签元素</div>
    </a-space>
</template>`)],-1),f=t("p",null,[e("相邻组件垂直间距，默认间距"),t("code",null,"8px"),e("。")],-1),y=t("div",{class:"language-html vp-adaptive-theme"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"html"),t("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"space/vertical")])])])],-1),x=t("h2",{id:"对齐",tabindex:"-1"},[e("对齐 "),t("a",{class:"header-anchor",href:"#对齐","aria-label":'Permalink to "对齐"'},"​")],-1),k=t("pre",null,[t("code",{class:"language-html"},`<template>
    <div class="demo">
        <a-space :size="size">
            默认 align-items: center
            <a-button type="success">按钮</a-button>
            <div class="card">div标签元素</div>
        </a-space>
    </div>
    <div class="demo">
        <a-space :size="size" align="flex-start">
            align-items: flex-start
            <a-button type="success">按钮</a-button>
            <div class="card">div标签元素</div>
        </a-space>
    </div>
    <div class="demo">
        <a-space :size="size" align="flex-end">
            align-items: flex-end
            <a-button type="success">按钮</a-button>
            <div class="card">div标签元素</div>
        </a-space>
    </div>

</template>
<script setup>
import { ref } from "vue"

const size = ref(20)
const size1 = ref([10])
const size2 = ref([10, 20])
<\/script>
<style lang="scss" scoped>
.demo {
    border: 1px solid #3069ff;
    padding: 16px;
    border-radius: 12px;
    + .demo {
        margin-top: 20px;
    }
}
.card {
    height: 120px;
    width: 100px;
    padding: 10px;
    border-radius: 12px;
    background-color: #f1f1f1;
}
</style>`)],-1),z=t("p",null,[e("设置该值可以调整所有子节点在容器内的对齐方式, 可设置的值与 "),t("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items",target:"_blank",rel:"noreferrer"},"align-item🔗"),e(" 一致。")],-1),E=t("div",{class:"language-html vp-adaptive-theme"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"html"),t("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"space/align")])])])],-1),C=t("h2",{id:"自动换行",tabindex:"-1"},[e("自动换行 "),t("a",{class:"header-anchor",href:"#自动换行","aria-label":'Permalink to "自动换行"'},"​")],-1),S=t("pre",null,[t("code",{class:"language-html"},`<template>
    <a-space wrap>
        <a-button>按钮</a-button>
        <a-button>按钮</a-button>
        <a-button>按钮</a-button>
        <a-button>按钮</a-button>
        <a-button>按钮</a-button>
        <a-button>按钮</a-button>
        <a-button>按钮</a-button>
        <a-button>按钮</a-button>
        <a-button>按钮</a-button>
        <a-button>按钮</a-button>
    </a-space>
</template>`)],-1),P=t("p",null,[e("使用属性"),t("code",null,"wrap"),e("，使元素自动换行。")],-1),w=t("div",{class:"language-html vp-adaptive-theme"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"html"),t("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"space/wrap")])])])],-1),N=t("h2",{id:"自定义间隔尺寸",tabindex:"-1"},[e("自定义间隔尺寸 "),t("a",{class:"header-anchor",href:"#自定义间隔尺寸","aria-label":'Permalink to "自定义间隔尺寸"'},"​")],-1),V=t("pre",null,[t("code",{class:"language-html"},`<template>
    <div>
        <a-space :size="size">
            number类型
            <a-button type="success">按钮</a-button>
            <div>div标签元素</div>
        </a-space>
    </div>

    <div class="margin-top-20">
        <a-space :size="size1" wrap>
            <a-button>array数据，[10]</a-button>
            <a-button>array数据，[10]</a-button>
            <a-button>array数据，[10]</a-button>
            <a-button>array数据，[10]</a-button>
            <a-button>array数据，[10]</a-button>
            <a-button>array数据，[10]</a-button>
            <a-button>array数据，[10]</a-button>
            <a-button>array数据，[10]</a-button>
        </a-space>
    </div>

    <div class="margin-top-20">
        <a-space :size="size2" wrap>
            <a-button>array数据，[10, 20]</a-button>
            <a-button>array数据，[10, 20]</a-button>
            <a-button>array数据，[10, 20]</a-button>
            <a-button>array数据，[10, 20]</a-button>
            <a-button>array数据，[10, 20]</a-button>
            <a-button>array数据，[10, 20]</a-button>
        </a-space>
    </div>
</template>
<script setup>
import { ref } from "vue"

const size = ref(20)
const size1 = ref([10])
const size2 = ref([10, 20])
<\/script>
<style lang="scss" scoped>
.margin-top-20 { margin-top: 20px; }
</style>`)],-1),T=t("p",null,[e("使用"),t("code",null,"size"),e("属性设置间距大小。可配置"),t("code",null,"array"),e("或"),t("code",null,"number"),e("。"),t("br"),t("code",null,"number"),e("横向间距、竖向间中同时生效。"),t("br"),t("code",null,"array"),e("[20] 与number一致。[10, 20] 两个值分别为横向间距、竖向间距。")],-1),D=t("div",{class:"language-html vp-adaptive-theme"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"html"),t("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"space/size")])])])],-1),$=t("h2",{id:"分隔符",tabindex:"-1"},[e("分隔符 "),t("a",{class:"header-anchor",href:"#分隔符","aria-label":'Permalink to "分隔符"'},"​")],-1),A=t("pre",null,[t("code",{class:"language-html"},`<template>
    <div>
        <a-space :size="size" spacer>
            默认分隔符
            <a-button type="success">按钮</a-button>
            <div>div标签元素</div>
        </a-space>
    </div>

    <div class="margin-top-20">
        <a-space :size="10" :spacer="spacer">
            <a-button type="error">自定义样式的分隔符</a-button>
            <a-button type="success">按钮</a-button>
            <div>div标签元素</div>
        </a-space>
    </div>
</template>
<script setup>
import { ref, h } from "vue"

const size = ref(20)
// spacer
const spacer = h('span', {
    style: {
        width: '6px',
        borderRadius: '10px',
        height: '6px',
        backgroundColor: '#ccc'
    }
})
<\/script>
<style lang="scss" scoped>
.margin-top-20 { margin-top: 20px; }
</style>`)],-1),B=t("p",null,[e("相邻组件分隔符。可使用属性spacer默认生成分隔符，或使用"),t("code",null,"h"),e("函数自定义分隔符样式。")],-1),q=t("div",{class:"language-html vp-adaptive-theme"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"html"),t("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"space/spacer")])])])],-1),I=c('<h2 id="space-属性" tabindex="-1">Space 属性 <a class="header-anchor" href="#space-属性" aria-label="Permalink to &quot;Space 属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型（可选值）</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">direction</td><td style="text-align:left;">排列方式</td><td style="text-align:left;">horizontal / vertical</td><td style="text-align:left;">horizontal</td></tr><tr><td style="text-align:left;">align</td><td style="text-align:left;">对齐</td><td style="text-align:left;">与 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items" target="_blank" rel="noreferrer">align-items🔗</a> 一致</td><td style="text-align:left;">center</td></tr><tr><td style="text-align:left;">wrap</td><td style="text-align:left;">自动换行</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">间距</td><td style="text-align:left;"><code>number</code> <code>[10]</code> <code>[10, 20]</code></td><td style="text-align:left;">8</td></tr><tr><td style="text-align:left;">spacer</td><td style="text-align:left;">分隔符</td><td style="text-align:left;"><code>boolean</code> <code>v-slot</code> <code>VueNode</code></td><td style="text-align:left;">false</td></tr></tbody></table>',2);function R(W,J,O,j,F,G){const n=i("Demo");return d(),o("div",null,[p,h,u,s(n,{path:"space/basis"},{source:a(()=>[b]),description:a(()=>[g]),default:a(()=>[m]),_:1}),_,s(n,{path:"space/vertical"},{source:a(()=>[v]),description:a(()=>[f]),default:a(()=>[y]),_:1}),x,s(n,{path:"space/align"},{source:a(()=>[k]),description:a(()=>[z]),default:a(()=>[E]),_:1}),C,s(n,{path:"space/wrap"},{source:a(()=>[S]),description:a(()=>[P]),default:a(()=>[w]),_:1}),N,s(n,{path:"space/size"},{source:a(()=>[V]),description:a(()=>[T]),default:a(()=>[D]),_:1}),$,s(n,{path:"space/spacer"},{source:a(()=>[A]),description:a(()=>[B]),default:a(()=>[q]),_:1}),I])}const L=l(r,[["render",R]]);export{K as __pageData,L as default};
