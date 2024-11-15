import{_ as d,c as s,a as l,E as t,f as e,w as a,b as i,U as c,o as r}from"./chunks/framework.DegHhALb.js";const k=JSON.parse('{"title":"Grid 栅格","description":"","frontmatter":{},"headers":[],"relativePath":"components/gird.md","filePath":"components/gird.md"}'),g={name:"components/gird.md"};function p(u,n,b,v,m,f){const o=c("Demo");return r(),s("div",null,[n[18]||(n[18]=l("h1",{id:"grid-栅格",tabindex:"-1"},[t("Grid 栅格 "),l("a",{class:"header-anchor",href:"#grid-栅格","aria-label":'Permalink to "Grid 栅格"'},"​")],-1)),n[19]||(n[19]=l("p",null,[t("通过基础的 24 分栏，迅速简便地创建布局。 "),l("br")],-1)),n[20]||(n[20]=l("ul",null,[l("li",null,"组件默认使用了 Flex 布局。"),l("li",null,"支持使用 order 来定义元素的排列顺序。")],-1)),n[21]||(n[21]=l("h2",{id:"基本用法",tabindex:"-1"},[t("基本用法 "),l("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),e(o,{path:"gird/basis"},{source:a(()=>n[0]||(n[0]=[l("pre",null,[l("code",{class:"language-html"},`<template>
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
</style>`)],-1)])),description:a(()=>n[1]||(n[1]=[l("p",null,[l("strong",null,"从堆叠到水平排列。"),l("br"),t("使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。"),l("br"),t("并通过 Col 组件的 "),l("code",null,"span"),t(" 属性实现24等份自由地组合布局。")],-1)])),default:a(()=>[n[2]||(n[2]=l("div",{class:"language-html vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"html"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"gird/basis")])])])],-1))]),_:1}),n[22]||(n[22]=l("h2",{id:"分栏间隔",tabindex:"-1"},[t("分栏间隔 "),l("a",{class:"header-anchor",href:"#分栏间隔","aria-label":'Permalink to "分栏间隔"'},"​")],-1)),e(o,{path:"gird/gutter"},{source:a(()=>n[3]||(n[3]=[l("pre",null,[l("code",{class:"language-html"},`<template>
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
</style>`)],-1)])),description:a(()=>n[4]||(n[4]=[l("p",null,[t("分栏之间的间隔，需要在 Col 中使用 "),l("code",null,"gutter"),t(" 属性，")],-1)])),default:a(()=>[n[5]||(n[5]=l("div",{class:"language-html vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"html"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"gird/gutter")])])])],-1))]),_:1}),n[23]||(n[23]=l("h2",{id:"行间隔",tabindex:"-1"},[t("行间隔 "),l("a",{class:"header-anchor",href:"#行间隔","aria-label":'Permalink to "行间隔"'},"​")],-1)),e(o,{path:"gird/gap"},{source:a(()=>n[6]||(n[6]=[l("pre",null,[l("code",{class:"language-html"},`<template>
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
</style>`)],-1)])),description:a(()=>n[7]||(n[7]=[l("p",null,[t("每当（Col）自动换行后，Col 顶部与底部是紧密贴合的。如果想使 Col 换行后使行之间产生空隙，需要在 Rol 中使用 "),l("code",null,"gap"),t(" 属性。")],-1)])),default:a(()=>[n[8]||(n[8]=l("div",{class:"language-html vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"html"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"gird/gap")])])])],-1))]),_:1}),n[24]||(n[24]=l("h2",{id:"偏移",tabindex:"-1"},[t("偏移 "),l("a",{class:"header-anchor",href:"#偏移","aria-label":'Permalink to "偏移"'},"​")],-1)),e(o,{path:"gird/offset"},{source:a(()=>n[9]||(n[9]=[l("pre",null,[l("code",{class:"language-html"},`<template>
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
</style>`)],-1)])),description:a(()=>n[10]||(n[10]=[l("p",null,[t("指定列偏移量。通过制定（Col）组件的 "),l("code",null,"offset"),t(" 属性可以指定分栏偏移的栏数。")],-1)])),default:a(()=>[n[11]||(n[11]=l("div",{class:"language-html vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"html"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"gird/offset")])])])],-1))]),_:1}),n[25]||(n[25]=l("h2",{id:"对齐",tabindex:"-1"},[t("对齐 "),l("a",{class:"header-anchor",href:"#对齐","aria-label":'Permalink to "对齐"'},"​")],-1)),e(o,{path:"gird/align"},{source:a(()=>n[12]||(n[12]=[l("pre",null,[l("code",{class:"language-html"},`<template>
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
</style>`)],-1)])),description:a(()=>n[13]||(n[13]=[l("p",null,[t("默认使用 flex 布局来对分栏进行灵活的对齐。"),l("br"),t("可以通过 "),l("code",null,"justify"),t(" 属性来定义子元素的排版方式，与 "),l("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content",target:"_blank",rel:"noreferrer"},"justify-content🔗"),t(" 一致。")],-1)])),default:a(()=>[n[14]||(n[14]=l("div",{class:"language-html vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"html"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"gird/align")])])])],-1))]),_:1}),n[26]||(n[26]=l("h2",{id:"排序",tabindex:"-1"},[t("排序 "),l("a",{class:"header-anchor",href:"#排序","aria-label":'Permalink to "排序"'},"​")],-1)),e(o,{path:"gird/order"},{source:a(()=>n[15]||(n[15]=[l("pre",null,[l("code",{class:"language-html"},`<template>
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
</style>`)],-1)])),description:a(()=>n[16]||(n[16]=[l("p",null,[t("通过 "),l("code",null,"order"),t(" 来改变元素的排序。")],-1)])),default:a(()=>[n[17]||(n[17]=l("div",{class:"language-html vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"html"),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"gird/order")])])])],-1))]),_:1}),n[27]||(n[27]=i('<h2 id="row-属性" tabindex="-1">Row 属性 <a class="header-anchor" href="#row-属性" aria-label="Permalink to &quot;Row 属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型（可选值）</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">gutter</td><td style="text-align:left;">栅格间距</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">gap</td><td style="text-align:left;">行与行间距</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">justify</td><td style="text-align:left;">对齐</td><td style="text-align:left;">与 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content" target="_blank" rel="noreferrer">justify-content🔗</a> 一致</td><td style="text-align:left;">-</td></tr></tbody></table><h2 id="col-属性" tabindex="-1">Col 属性 <a class="header-anchor" href="#col-属性" aria-label="Permalink to &quot;Col 属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型（可选值）</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">span</td><td style="text-align:left;">栅格占据的列数</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">24</td></tr><tr><td style="text-align:left;">order</td><td style="text-align:left;">栅格顺序，<code>flex</code> 布局模式下有效</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">offset</td><td style="text-align:left;">栅格左侧的间隔栏数</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">-</td></tr></tbody></table>',4))])}const x=d(g,[["render",p]]);export{k as __pageData,x as default};
