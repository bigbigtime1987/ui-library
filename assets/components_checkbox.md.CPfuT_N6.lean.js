import{_ as i,c as r,a as e,E as l,f as s,w as n,U as u,o as h,v as t}from"./chunks/framework.DegHhALb.js";const f=JSON.parse('{"title":"Checkbox 多选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/checkbox.md","filePath":"components/checkbox.md"}'),b={name:"components/checkbox.md"},p={class:"language-html"};function d(c,a,v,k,x,m){const o=u("Demo");return h(),r("div",null,[a[20]||(a[20]=e("h1",{id:"checkbox-多选框",tabindex:"-1"},[l("Checkbox 多选框 "),e("a",{class:"header-anchor",href:"#checkbox-多选框","aria-label":'Permalink to "Checkbox 多选框"'},"​")],-1)),a[21]||(a[21]=e("h2",{id:"基础用法",tabindex:"-1"},[l("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),s(o,{path:"checkbox/basis"},{source:n(()=>a[0]||(a[0]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-checkbox v-model="value1">选择一</a-checkbox>
    <a-checkbox v-model="value2">选择二</a-checkbox>
</template>
<script setup>
import { ref } from "vue"
const value1 = ref(true)
const value2 = ref(false)
<\/script>`)],-1)])),description:n(()=>a[1]||(a[1]=[e("p",null,[l("单独使用可以表示 "),e("code",null,"true"),l(" 和 "),e("code",null,"false"),l(" 两种状态之间的切换。")],-1)])),default:n(()=>[a[2]||(a[2]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"checkbox/basis")])])])],-1))]),_:1}),a[22]||(a[22]=e("h2",{id:"禁用状态",tabindex:"-1"},[l("禁用状态 "),e("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),s(o,{path:"checkbox/disabled"},{source:n(()=>a[3]||(a[3]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-checkbox v-model="value1">选择一</a-checkbox>
    <a-checkbox v-model="value2" disabled>选择二</a-checkbox>
    <a-checkbox v-model="value3" disabled>选择二</a-checkbox>
</template>
<script setup>
import { ref } from "vue"
const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(false)
<\/script>`)],-1)])),description:n(()=>a[4]||(a[4]=[e("p",null,[l("多选框不可用状态。设置 "),e("code",null,"disabled"),l(" 属性即可。")],-1)])),default:n(()=>[a[5]||(a[5]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"checkbox/disabled")])])])],-1))]),_:1}),a[23]||(a[23]=e("h2",{id:"选项组",tabindex:"-1"},[l("选项组 "),e("a",{class:"header-anchor",href:"#选项组","aria-label":'Permalink to "选项组"'},"​")],-1)),s(o,{path:"checkbox/group"},{source:n(()=>a[6]||(a[6]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-checkbox-group v-model="value">
        <a-checkbox value="shenzhen">深圳</a-checkbox>
        <a-checkbox value="guangzhou">广州</a-checkbox>
        <a-checkbox value="shanwei">汕尾</a-checkbox>
    </a-checkbox-group>
</template>
<script setup>
import { ref } from "vue"
const value = ref([])
<\/script>`)],-1)])),description:n(()=>a[7]||(a[7]=[e("p",null,"适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。",-1)])),default:n(()=>[a[8]||(a[8]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"checkbox/group")])])])],-1))]),_:1}),a[24]||(a[24]=e("h2",{id:"中间状态",tabindex:"-1"},[l("中间状态 "),e("a",{class:"header-anchor",href:"#中间状态","aria-label":'Permalink to "中间状态"'},"​")],-1)),s(o,{path:"checkbox/all"},{source:n(()=>[e("pre",null,[e("code",p,`<template>

        <a-divider content="默认" :offset="10" :padding="10" color="#000"></a-divider>
        <a-checkbox-all v-model="value1">
            <a-checkbox v-for="province in provinces" :key="province.value" :value="province.value">`+t(c.province.label)+`</a-checkbox>
        </a-checkbox-all>
        <br />
        <a-divider content="横向" :offset="10" :padding="10" color="#000"></a-divider>
        <a-checkbox-all v-model="value2" inline>
            <a-checkbox v-for="city in citys" :key="city.value" :value="city.value">`+t(c.city.label)+`</a-checkbox>
        </a-checkbox-all>
  
</template>
<script setup>
import { ref } from "vue"
const value1 = ref([])
const value2 = ref([])
const provinces = ref([
    { label: "北京市", value: "Beijing"},
    { label: "广东省", value: "Guangdong"},
    { label: "海南省", value: "Hainan"},
    { label: "湖南省", value: "Hunan"},
    { label: "陕西省", value: "Shaanxi"},
    { label: "云南省", value: "Yunnan"},
    { label: "广西壮族自治区", value: "Guangxi"},
    { label: "内蒙古自治区", value: "Inner"},
])
const citys = ref([
    { label: "广州市", value: "Guangzhou"},
    { label: "深圳市", value: "Shenzhen"},
    { label: "珠海市", value: "Zhuhai"},
    { label: "汕头市", value: "Shantou"},
    { label: "佛山市", value: "Foshan"},
    { label: "汕尾市", value: "Shanwei"},
    { label: "韶关市", value: "Shaoguan"},
    { label: "湛江市", value: "Zhanjiang"},
    { label: "肇庆市", value: "Zhaoqing"},
    { label: "江门市", value: "Jiangmen"},
    { label: "茂名市", value: "Maoming"},
    { label: "惠州市", value: "Huizhou"},
    { label: "梅州市", value: "Meizhou"},
    { label: "中山市", value: "Zhongshan"},
    { label: "河源市", value: "Heyuan"},
    { label: "阳江市", value: "Yangjiang"},
    { label: "清远市", value: "Qingyuan"},
    { label: "东莞市", value: "Dongguan"},
    { label: "潮州市", value: "Chaozhou"},
    { label: "揭阳市", value: "Jieyang"},
    { label: "云浮市", value: "Yunfu"},
])

<\/script>
<style lang="scss" scoped>
.margin-bottom-20 { margin-bottom: 20px; }
</style>`,1)])]),description:n(()=>a[9]||(a[9]=[e("p",null,"属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果。",-1)])),default:n(()=>[a[10]||(a[10]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"checkbox/all")])])])],-1))]),_:1}),a[25]||(a[25]=e("h2",{id:"尺寸",tabindex:"-1"},[l("尺寸 "),e("a",{class:"header-anchor",href:"#尺寸","aria-label":'Permalink to "尺寸"'},"​")],-1)),s(o,{path:"checkbox/size"},{source:n(()=>a[11]||(a[11]=[e("pre",null,[e("code",{class:"language-html"},`<template>
  <a-space direction="vertical" :size="20">
    <div>
      <span class="title">小的</span>
      <a-checkbox-all v-model="value" size="small">
        <a-checkbox value="shenzhen">深圳</a-checkbox>
        <a-checkbox value="guangzhou">广州</a-checkbox>
        <a-checkbox value="shanwei">汕尾</a-checkbox>
      </a-checkbox-all>
    </div>
    <div>
      <span class="title">默认的</span>
      <a-checkbox-all v-model="value1" size="default">
        <a-checkbox value="shenzhen">深圳</a-checkbox>
        <a-checkbox value="guangzhou">广州</a-checkbox>
        <a-checkbox value="shanwei">汕尾</a-checkbox>
      </a-checkbox-all>
    </div>
    <div>
      <span class="title">大的</span>
      <a-checkbox-all v-model="value2" size="large">
        <a-checkbox value="shenzhen">深圳</a-checkbox>
        <a-checkbox value="guangzhou">广州</a-checkbox>
        <a-checkbox value="shanwei">汕尾</a-checkbox>
      </a-checkbox-all>
    </div>
    <div>
      <span class="title">单独使用</span>
      <a-checkbox v-model="value5" size="small">选择一</a-checkbox>
      <a-checkbox v-model="value6" size="default">选择二</a-checkbox>
      <a-checkbox v-model="value7" size="large">选择二</a-checkbox>
    </div>
  </a-space>
</template>
<script setup>
import { ref } from "vue";
const value = ref(['shenzhen']);
const value1 = ref(['shenzhen']);
const value2 = ref(['shenzhen']);
const value5 = ref(true);
const value6 = ref(true);
const value7 = ref(true);
<\/script>
<style lang="scss" scoped>
.title {
    font-size: 14px;
    display: block;
    margin-bottom: 6px;
}
</style>
`)],-1)])),description:n(()=>a[12]||(a[12]=[e("p",null,[l("设置 "),e("code",null,"small"),l(),e("code",null,"default"),l(),e("code",null,"large"),l(" 改变 "),e("code",null,"checkbox"),l(" 的大小。")],-1)])),default:n(()=>[a[13]||(a[13]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"checkbox/size")])])])],-1))]),_:1}),a[26]||(a[26]=e("h2",{id:"主题",tabindex:"-1"},[l("主题 "),e("a",{class:"header-anchor",href:"#主题","aria-label":'Permalink to "主题"'},"​")],-1)),s(o,{path:"checkbox/theme"},{source:n(()=>a[14]||(a[14]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-space direction="vertical" :size="20">
        <a-checkbox-group v-model="value">
            <a-checkbox value="primary">默认</a-checkbox>
            <a-checkbox value="primary" type="primary">主色</a-checkbox>
            <a-checkbox value="success" type="success">成功</a-checkbox>
            <a-checkbox value="warning" type="warning">警告</a-checkbox>
            <a-checkbox value="error" type="error">错误</a-checkbox>
        </a-checkbox-group>

        <a-checkbox-group v-model="value">
            <a-checkbox value="primary" disabled>默认</a-checkbox>
            <a-checkbox value="primary" type="primary" disabled>主色</a-checkbox>
            <a-checkbox value="success" type="success" disabled>成功</a-checkbox>
            <a-checkbox value="warning" type="warning" disabled>警告</a-checkbox>
            <a-checkbox value="error" type="error" disabled>错误</a-checkbox>
        </a-checkbox-group>

        
    </a-space>
</template>
<script setup>
import { ref } from "vue"
const value = ref(['primary', 'success', 'warning', 'error'])
<\/script>`)],-1)])),description:n(()=>a[15]||(a[15]=[e("p",null,[l("按钮的 "),e("code",null,"type"),l(" 分别为 "),e("code",null,"default"),l("、"),e("code",null,"primary"),l("、"),e("code",null,"success"),l("、"),e("code",null,"warning"),l(" 和 "),e("code",null,"error"),l(" 。")],-1)])),default:n(()=>[a[16]||(a[16]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"checkbox/theme")])])])],-1))]),_:1}),a[27]||(a[27]=e("h2",{id:"加载状态",tabindex:"-1"},[l("加载状态 "),e("a",{class:"header-anchor",href:"#加载状态","aria-label":'Permalink to "加载状态"'},"​")],-1)),s(o,{path:"checkbox/async"},{source:n(()=>a[17]||(a[17]=[e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-checkbox v-model="value1" :before-change="checkboxChange">默认</a-checkbox>
    <a-checkbox v-model="value2" type="primary" :before-change="checkboxChange">主色</a-checkbox>
    <a-checkbox v-model="value3" type="success" :before-change="checkboxChange">成功</a-checkbox>
    <a-checkbox v-model="value4" type="warning" :before-change="checkboxChange">警告</a-checkbox>
    <a-checkbox v-model="value5" type="error" :before-change="checkboxChange">错误</a-checkbox>
</template>
<script setup>
import { ref } from "vue"
const value1 = ref(false)
const value2 = ref(false)
const value3 = ref(false)
const value4 = ref(false)
const value5 = ref(false)

const checkboxChange = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })
}
<\/script>`)],-1)])),description:n(()=>a[18]||(a[18]=[e("p",null,[l("按钮的 "),e("code",null,"type"),l(" 分别为 "),e("code",null,"default"),l("、"),e("code",null,"primary"),l("、"),e("code",null,"success"),l("、"),e("code",null,"warning"),l(" 和 "),e("code",null,"error"),l(" 。")],-1)])),default:n(()=>[a[19]||(a[19]=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"checkbox/async")])])])],-1))]),_:1})])}const y=i(b,[["render",d]]);export{f as __pageData,y as default};
