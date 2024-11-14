import{_ as i,V as l,c as r,f as t,w as a,a as e,E as o,o as s}from"./chunks/framework.IfFG3Aey.js";const q=JSON.parse('{"title":"Form 表单","description":"","frontmatter":{},"headers":[],"relativePath":"components/form.md","filePath":"components/form.md"}'),c={name:"components/form.md"},m=e("h1",{id:"form-表单",tabindex:"-1"},[o("Form 表单 "),e("a",{class:"header-anchor",href:"#form-表单","aria-label":'Permalink to "Form 表单"'},"​")],-1),d=e("p",null,"表单包含 输入框, 单选框, 下拉选择, 多选框 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。",-1),h=e("h2",{id:"典型表单",tabindex:"-1"},[o("典型表单 "),e("a",{class:"header-anchor",href:"#典型表单","aria-label":'Permalink to "典型表单"'},"​")],-1),p=e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-form align="left" label-width="50px" style="max-width: 400px">
        <a-form-item label="姓名">
            <a-input v-model="fields.name" />
        </a-form-item>
        <a-form-item label="性别">
            <a-radio-group v-model="fields.gender">
                <a-radio :value="1">男</a-radio>
                <a-radio :value="0">女</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item label="技术">
            <a-checkbox-group v-model="fields.technology">
                <a-checkbox value="web">Web</a-checkbox>
                <a-checkbox value="js">Javascript</a-checkbox>
                <a-checkbox value="java">Java</a-checkbox>
            </a-checkbox-group>
        </a-form-item>
        <a-form-item>
            <a-button>取消</a-button>
            <a-button type="primary" @click="onSubmit">确定</a-button>
        </a-form-item>
    </a-form>
</template>
<script setup>
import {  reactive } from "vue"
const fields = reactive({
    name: "",
    gender: 1,
    technology: ['web']
})
<\/script>`)],-1),u=e("p",null,[o("最基础的表单包括各种输入表单项，比如input、radio、checkbox等。"),e("br"),o("在每一个 form 组件中，你需要一个 form-item 字段作为输入项的容器，用于获取值与验证值。")],-1),f=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form/basis")])])])],-1),b=e("h2",{id:"行内表单",tabindex:"-1"},[o("行内表单 "),e("a",{class:"header-anchor",href:"#行内表单","aria-label":'Permalink to "行内表单"'},"​")],-1),g=e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-form inline label-width="50px">
        <a-form-item label="姓名">
            <a-input v-model="fields.name" />
        </a-form-item>
        <a-form-item label="性别">
            <a-radio-group v-model="fields.gender">
                <a-radio :value="1">男</a-radio>
                <a-radio :value="0">女</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item label="技术">
            <a-checkbox-group v-model="fields.technology">
                <a-checkbox value="web">Web</a-checkbox>
                <a-checkbox value="js">Javascript</a-checkbox>
                <a-checkbox value="java">Java</a-checkbox>
            </a-checkbox-group>
        </a-form-item>
        <a-form-item>
            <a-button>取消</a-button>
            <a-button type="primary" @click="onSubmit">确定</a-button>
        </a-form-item>
    </a-form>
</template>
<script setup>
import {  reactive } from "vue"
const fields = reactive({
    name: "",
    gender: 1,
    technology: ['web']
})
<\/script>`)],-1),v=e("p",null,"通过设置 inline，可以让表单域变为行内的表单域。",-1),k=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form/inline")])])])],-1),x=e("h2",{id:"对齐方式",tabindex:"-1"},[o("对齐方式 "),e("a",{class:"header-anchor",href:"#对齐方式","aria-label":'Permalink to "对齐方式"'},"​")],-1),_=e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-space direction="vertical" :size="20">
        <a-radio-group v-model="align">
            <a-radio value="left">靠左</a-radio>
            <a-radio value="center">居中</a-radio>
            <a-radio value="right">靠右</a-radio>
            <a-radio value="top">顶部</a-radio>
        </a-radio-group>

        <a-form :align="align" style="max-width: 600px">
            <a-form-item label="姓名">
                <a-input v-model="fields.name" />
            </a-form-item>
            <a-form-item label="性别">
                <a-radio-group v-model="fields.gender">
                    <a-radio :value="1">男</a-radio>
                    <a-radio :value="0">女</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item label="技术">
                <a-checkbox-group v-model="fields.technology">
                    <a-checkbox value="web">Web</a-checkbox>
                    <a-checkbox value="js">Javascript</a-checkbox>
                    <a-checkbox value="java">Java</a-checkbox>
                </a-checkbox-group>
            </a-form-item>
            <a-form-item>
                <a-button>取消</a-button>
                <a-button type="primary" @click="onSubmit">确定</a-button>
            </a-form-item>
        </a-form>
    </a-space>
</template>
<script setup>
import {  reactive, ref } from "vue"
const align = ref('left')
const fields = reactive({
    name: "",
    gender: 1,
    technology: ['web']
})
<\/script>`)],-1),y=e("p",null,"通过设置 label-position 属性可以改变表单域标签的位置，可选值为 top、left, 当设为 top 时标签会置于表单域的顶部",-1),E=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form/align")])])])],-1),w=e("h2",{id:"表单校验",tabindex:"-1"},[o("表单校验 "),e("a",{class:"header-anchor",href:"#表单校验","aria-label":'Permalink to "表单校验"'},"​")],-1),C=e("pre",null,[e("code",{class:"language-html"},`<template>
    <a-form ref="formRef" :model="fields" :rules="rules" label-width="60px" style="width: 500px">
        <a-form-item label="姓名" prop="name">
            <a-input v-model="fields.name" />
        </a-form-item>
        <a-form-item label="性别" prop="gender">
            <a-radio-group v-model="fields.gender">
                <a-radio :value="1">男</a-radio>
                <a-radio :value="0">女</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item label="技术" prop="technology">
            <a-checkbox-group v-model="fields.technology">
                <a-checkbox value="web">Web</a-checkbox>
                <a-checkbox value="js">Javascript</a-checkbox>
                <a-checkbox value="java">Java</a-checkbox>
            </a-checkbox-group>
        </a-form-item>
        <a-form-item>
            <a-button>取消</a-button>
            <a-button type="primary" @click="onSubmit">确定</a-button>
        </a-form-item>
    </a-form>
</template>
<script setup>
import {  reactive, ref } from "vue"
// formRef
const formRef = ref(null)

// fields
const fields = reactive({
    name: "",
    gender: '',
    technology: []
})

const rules = ref({
    name: [{ required: true, message: "请输入姓名",  trigger: ['blur', 'change']}],
    gender: [{ required: true, message: "请选择性别",  trigger: ['blur', 'change']}],
    technology: [{ required: true, message: "请选择技术",  trigger: ['blur', 'change']}],
})

const onSubmit = () => {
    formRef.value.validate().then(() => {
        console.log('通过')
    }).catch(() => {
        console.log('失败')
    })
}
<\/script>`)],-1),J=e("p",null,"Form 组件提供了表单验证的功能，只需为 rules 属性传入约定的验证规则，并将 form-Item 的 prop 属性设置为需要验证的特殊键值即可。",-1),j=e("div",{class:"language-html vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"html"),e("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form/validator")])])])],-1);function P(S,F,N,R,V,W){const n=l("Demo");return s(),r("div",null,[m,d,h,t(n,{path:"form/basis"},{source:a(()=>[p]),description:a(()=>[u]),default:a(()=>[f]),_:1}),b,t(n,{path:"form/inline"},{source:a(()=>[g]),description:a(()=>[v]),default:a(()=>[k]),_:1}),x,t(n,{path:"form/align"},{source:a(()=>[_]),description:a(()=>[y]),default:a(()=>[E]),_:1}),w,t(n,{path:"form/validator"},{source:a(()=>[C]),description:a(()=>[J]),default:a(()=>[j]),_:1})])}const B=i(c,[["render",P]]);export{q as __pageData,B as default};
