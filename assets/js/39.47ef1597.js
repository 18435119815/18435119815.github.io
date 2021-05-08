(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{480:function(n,s,e){"use strict";e.r(s);var a=e(51),t=Object(a.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"源码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源码"}},[n._v("#")]),n._v(" 源码")]),n._v(" "),e("p",[n._v("vue2数据响应式原理利用的是"),e("kbd",[n._v(" Object.defineproperty(obj,key,{}) ")]),n._v(" vue在得到我们传进来的data之后，需要对data对象进行遍历，然后给每一个属性都去进行defineproperty的监听")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("Object.defineProperty(obj, key, {\n    get() {\n        return value\n    },\n    set(newValue) {\n        if (value != newValue) {\n            value = newValue\n        }\n    }\n})\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br")])]),e("p",[n._v("在熟悉了defineProperty的基础用法之后，我们需要考虑以下几个问题：")]),n._v(" "),e("ol",[e("li",[n._v("如何对data对象的每一个属性进行监听")]),n._v(" "),e("li",[n._v("属性的值还是一个对象的话如何处理")]),n._v(" "),e("li",[n._v("给属性赋的新值是对象的话如何处理")])]),n._v(" "),e("p",[n._v("以下是一个对这些问题处理的基本代码")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function defineReactive(obj, key, value) {\n    //如果对象的属性值仍然是一个对象，则需要递归处理\n    observe(value)\n\n    Object.defineProperty(obj, key, {\n        get() {\n            console.log('get'+key)\n            return value\n        },\n        set(newValue) {\n            if (value != newValue) {\n                // 为了防止用户的赋值仍是一个对象，在此处也需要observe处理\n                observe(newValue)\n                value = newValue\n            }\n            console.log('set'+key+ ' ' +newValue)\n        },\n    })\n}\n\nfunction observe(obj) {\n    if (typeof obj != 'object' || obj == null) {\n        return false\n    } else {\n        Object.keys(obj).forEach(key=> {\n            defineReactive(obj,key,obj[key])\n        })\n    }\n}\n\nconst obj = {name:'AUV',info:{age:'25'}};\nobserve(obj)\n\n\nobj.info.age = 18\nobj.info = {high:180}\nobj.info.high = 182\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);