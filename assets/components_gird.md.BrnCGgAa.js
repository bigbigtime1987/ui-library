import{_ as e,V as d,c,f as o,w as t,a as n,E as l,b as s,o as i}from"./chunks/framework.IfFG3Aey.js";const L=JSON.parse('{"title":"Grid 栅格","description":"","frontmatter":{},"headers":[],"relativePath":"components/gird.md","filePath":"components/gird.md"}'),r={name:"components/gird.md"},g=n("h1",{id:"grid-栅格",tabindex:"-1"},[l("Grid 栅格 "),n("a",{class:"header-anchor",href:"#grid-栅格","aria-label":'Permalink to "Grid 栅格"'},"​")],-1),h=n("p",null,[l("通过基础的 24 分栏，迅速简便地创建布局。 "),n("br")],-1),p=n("ul",null,[n("li",null,"组件默认使用了 Flex 布局。"),n("li",null,"支持使用 order 来定义元素的排列顺序。")],-1),u=n("h2",{id:"基本用法",tabindex:"-1"},[l("基本用法 "),n("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1),b=n("pre",null,[n("code",{class:"language-html"},`<template>
    <a-row>
        <a-col>
            <div class="col-item background-odd">col</div>
        </a-col>
    </a-row>
    <a-row>
        <a-col :span="12">
            <div class="col-item background-odd">col-12</div>
        </a-col>
        <a-col :span="12">
            <div class="col-item background-even">col-12</div>
        </a-col>
    </a-row>
    <a-row>
        <a-col :span="8">
            <div class="col-item background-odd">col-8</div>
        </a-col>
        <a-col :span="8">
            <div class="col-item background-even">col-8</div>
        </a-col>
        <a-col :span="8">
            <div class="col-item background-odd">col-8</div>
        </a-col>
    </a-row>
    <a-row>
        <a-col :span="6">
            <div class="col-item background-odd">col-6</div>
        </a-col>
        <a-col :span="6">
            <div class="col-item background-even">col-6</div>
        </a-col>
        <a-col :span="6">
            <div class="col-item background-odd">col-6</div>
        </a-col>
        <a-col :span="6">
            <div class="col-item background-even">col-6</div>
        </a-col>
    </a-row>
    <a-row>
        <a-col :span="4">
            <div class="col-item background-odd">col-4</div>
        </a-col>
        <a-col :span="4">
            <div class="col-item background-even">col-4</div>
        </a-col>
        <a-col :span="4">
            <div class="col-item background-odd">col-4</div>
        </a-col>
        <a-col :span="4">
            <div class="col-item background-even">col-4</div>
        </a-col>
        <a-col :span="4">
            <div class="col-item background-odd">col-4</div>
        </a-col>
        <a-col :span="4">
            <div class="col-item background-even">col-4</div>
        </a-col>
    </a-row>
</template>

<style lang="scss" scoped>
.a-row {
    + .a-row {
        margin-top: 16px;
    }
}
.col-item {
    height: 32px;
    border-radius: 0;
    line-height: 32px;
    text-align: center;
    color: #fff;
}
.background-odd {
    background-color: #3069ff;
}
.background-even {
    background-color: #1677ffbf;
}
</style>`)],-1),v=n("p",null,[n("strong",null,"从堆叠到水平排列。"),n("br"),l("使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。"),n("br"),l("并通过 Col 组件的 "),n("code",null,"span"),l(" 属性实现24等份自由地组合布局。")],-1),m=n("div",{class:"language-html vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"html"),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"gird/basis")])])])],-1),f=n("h2",{id:"分栏间隔",tabindex:"-1"},[l("分栏间隔 "),n("a",{class:"header-anchor",href:"#分栏间隔","aria-label":'Permalink to "分栏间隔"'},"​")],-1),k=n("pre",null,[n("code",{class:"language-html"},`<template>
    <a-row :gutter="20">
        <a-col :span="6">
            <div class="col-item background-odd">col-6</div>
        </a-col>
        <a-col :span="6">
            <div class="col-item background-odd">col-6</div>
        </a-col>
        <a-col :span="6">
            <div class="col-item background-odd">col-6</div>
        </a-col>
        <a-col :span="6">
            <div class="col-item background-odd">col-6</div>
        </a-col>
    </a-row>
  
</template>

<style lang="scss" scoped>
.a-row {
    + .a-row {
        margin-top: 16px;
    }
}
.col-item {
    height: 32px;
    border-radius: 0;
    line-height: 32px;
    text-align: center;
    color: #fff;
}
.background-odd {
    background-color: #3069ff;
}
.background-even {
    background-color: #1677ffbf;
}
</style>`)],-1),_=n("p",null,[l("分栏之间的间隔，需要在 Col 中使用 "),n("code",null,"gutter"),l(" 属性，")],-1),x=n("div",{class:"language-html vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"html"),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"gird/gutter")])])])],-1),y=n("h2",{id:"行间隔",tabindex:"-1"},[l("行间隔 "),n("a",{class:"header-anchor",href:"#行间隔","aria-label":'Permalink to "行间隔"'},"​")],-1),w=n("pre",null,[n("code",{class:"language-html"},`<template>
    <a-row :gutter="20" :gap="8">
        <a-col :span="6">
            <div class="col-item background-odd">col-6</div>
        </a-col>
        <a-col :span="6">
            <div class="col-item background-odd">col-6</div>
        </a-col>
        <a-col :span="6">
            <div class="col-item background-odd">col-6</div>
        </a-col>
        <a-col :span="6">
            <div class="col-item background-odd">col-6</div>
        </a-col>
        <a-col :span="4">
            <div class="col-item background-odd">col-4</div>
        </a-col>
        <a-col :span="20">
            <div class="col-item background-odd">col-20</div>
        </a-col>
        <a-col :span="8">
            <div class="col-item background-odd">col-8</div>
        </a-col>
        <a-col :span="16">
            <div class="col-item background-odd">col-16</div>
        </a-col>
    </a-row>
  
</template>

<style lang="scss" scoped>
.col-item {
    height: 32px;
    border-radius: 0;
    line-height: 32px;
    text-align: center;
    color: #fff;
}
.background-odd {
    background-color: #3069ff;
}
</style>`)],-1),C=n("p",null,[l("每当（Col）自动换行后，Col 顶部与底部是紧密贴合的。如果想使 Col 换行后使行之间产生空隙，需要在 Rol 中使用 "),n("code",null,"gap"),l(" 属性。")],-1),E=n("div",{class:"language-html vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"html"),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"gird/gap")])])])],-1),P=n("h2",{id:"偏移",tabindex:"-1"},[l("偏移 "),n("a",{class:"header-anchor",href:"#偏移","aria-label":'Permalink to "偏移"'},"​")],-1),j=n("pre",null,[n("code",{class:"language-html"},`<template>
    <a-row :gutter="20" :gap="8">
        <a-col :span="6" :offset="6">
            <div class="col-item background-odd">col-6</div>
        </a-col>
        <a-col :span="6">
            <div class="col-item background-odd">col-6</div>
        </a-col>
        <a-col :span="6">
            <div class="col-item background-odd">col-6</div>
        </a-col>
        <a-col :span="12" :offset="3">
            <div class="col-item background-odd">col-12</div>
        </a-col>
        <a-col :span="9">
            <div class="col-item background-odd">col-9</div>
        </a-col>
        <a-col :span="4" :offset="20">
            <div class="col-item background-odd">col-4</div>
        </a-col>
        <a-col :span="8" :offset="12">
            <div class="col-item background-odd">col-8</div>
        </a-col>
    </a-row>
  
</template>

<style lang="scss" scoped>
.col-item {
    height: 32px;
    border-radius: 0;
    line-height: 32px;
    text-align: center;
    color: #fff;
}
.background-odd {
    background-color: #3069ff;
}
</style>`)],-1),S=n("p",null,[l("指定列偏移量。通过制定（Col）组件的 "),n("code",null,"offset"),l(" 属性可以指定分栏偏移的栏数。")],-1),N=n("div",{class:"language-html vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"html"),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"gird/offset")])])])],-1),T=n("h2",{id:"对齐",tabindex:"-1"},[l("对齐 "),n("a",{class:"header-anchor",href:"#对齐","aria-label":'Permalink to "对齐"'},"​")],-1),V=n("pre",null,[n("code",{class:"language-html"},`<template>
    <div class="demo">
        <a-row :gutter="20" :gap="8" justify="center">
            <a-col :span="6">
                <div class="col-item background-odd">col-6</div>
            </a-col>
            <a-col :span="6">
                <div class="col-item background-odd">col-6</div>
            </a-col>
        </a-row>
    </div>

    <div class="demo">
        <a-row :gutter="20" :gap="8" justify="space-between">
            <a-col :span="6">
                <div class="col-item background-odd">col-6</div>
            </a-col>
            <a-col :span="6">
                <div class="col-item background-odd">col-6</div>
            </a-col>
            <a-col :span="6">
                <div class="col-item background-odd">col-6</div>
            </a-col>
        </a-row>
    </div>

    <div class="demo">
        <a-row :gutter="20" :gap="8" justify="space-evenly">
            <a-col :span="6">
                <div class="col-item background-odd">col-6</div>
            </a-col>
            <a-col :span="6">
                <div class="col-item background-odd">col-6</div>
            </a-col>
            <a-col :span="6">
                <div class="col-item background-odd">col-6</div>
            </a-col>
        </a-row>
    </div>
  
</template>

<style lang="scss" scoped>
.demo {
    padding: 10px 0;
    background-color: #f2f2f2;
    + .demo {
        margin-top: 8px;
    }
}
.col-item {
    height: 32px;
    border-radius: 0;
    line-height: 32px;
    text-align: center;
    color: #fff;
}
.background-odd {
    background-color: #3069ff;
}
</style>`)],-1),R=n("p",null,[l("默认使用 flex 布局来对分栏进行灵活的对齐。"),n("br"),l("可以通过 "),n("code",null,"justify"),l(" 属性来定义子元素的排版方式，与 "),n("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content",target:"_blank",rel:"noreferrer"},"justify-content🔗"),l(" 一致。")],-1),q=n("div",{class:"language-html vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"html"),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"gird/align")])])])],-1),z=n("h2",{id:"排序",tabindex:"-1"},[l("排序 "),n("a",{class:"header-anchor",href:"#排序","aria-label":'Permalink to "排序"'},"​")],-1),D=n("pre",null,[n("code",{class:"language-html"},`<template>
    <a-row :gutter="20">
        <a-col :span="6" :order="2">
            <div class="col-item background-odd">第1个栅格<br />order:2</div>
        </a-col>
        <a-col :span="6" :order="4">
            <div class="col-item background-even">第2个栅格<br />order:4</div>
        </a-col>
        <a-col :span="6" :order="1">
            <div class="col-item background-odd">第3个栅格<br />order:1</div>
        </a-col>
        <a-col :span="6" :order="3">
            <div class="col-item background-even">第4个栅格<br />order:3</div>
        </a-col>
    </a-row>
  
</template>

<style lang="scss" scoped>
.col-item {
    padding: 6px 0;
    line-height: 20px;
    text-align: center;
    color: #fff;
}
.background-odd {
    background-color: #3069ff;
}
.background-even {
    background-color: #1677ffbf;
}
</style>`)],-1),$=n("p",null,[l("通过 "),n("code",null,"order"),l(" 来改变元素的排序。")],-1),A=n("div",{class:"language-html vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"},"html"),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[n("code",null,[n("span",{class:"line"},[n("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"gird/order")])])])],-1),B=s('<h2 id="row-属性" tabindex="-1">Row 属性 <a class="header-anchor" href="#row-属性" aria-label="Permalink to &quot;Row 属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型（可选值）</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">gutter</td><td style="text-align:left;">栅格间距</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">gap</td><td style="text-align:left;">行与行间距</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">justify</td><td style="text-align:left;">对齐</td><td style="text-align:left;">与 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content" target="_blank" rel="noreferrer">justify-content🔗</a> 一致</td><td style="text-align:left;">-</td></tr></tbody></table><h2 id="col-属性" tabindex="-1">Col 属性 <a class="header-anchor" href="#col-属性" aria-label="Permalink to &quot;Col 属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型（可选值）</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">span</td><td style="text-align:left;">栅格占据的列数</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">24</td></tr><tr><td style="text-align:left;">order</td><td style="text-align:left;">栅格顺序，<code>flex</code> 布局模式下有效</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">offset</td><td style="text-align:left;">栅格左侧的间隔栏数</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">-</td></tr></tbody></table>',4);function G(I,W,F,J,O,H){const a=d("Demo");return i(),c("div",null,[g,h,p,u,o(a,{path:"gird/basis"},{source:t(()=>[b]),description:t(()=>[v]),default:t(()=>[m]),_:1}),f,o(a,{path:"gird/gutter"},{source:t(()=>[k]),description:t(()=>[_]),default:t(()=>[x]),_:1}),y,o(a,{path:"gird/gap"},{source:t(()=>[w]),description:t(()=>[C]),default:t(()=>[E]),_:1}),P,o(a,{path:"gird/offset"},{source:t(()=>[j]),description:t(()=>[S]),default:t(()=>[N]),_:1}),T,o(a,{path:"gird/align"},{source:t(()=>[V]),description:t(()=>[R]),default:t(()=>[q]),_:1}),z,o(a,{path:"gird/order"},{source:t(()=>[D]),description:t(()=>[$]),default:t(()=>[A]),_:1}),B])}const M=e(r,[["render",G]]);export{L as __pageData,M as default};
