webpackJsonp([75,141],{567:function(t,d){t.exports={content:["section",["p","\u4e00\u822c\u53ef\u4f4d\u4e8e NavBar \u4e0b\u65b9\uff0c\u901a\u8fc7\u300e\u53d6\u6d88\u6309\u94ae\u300f\u9000\u51fa\u6fc0\u6d3b\u72b6\u6001\u3002"],["h3","\u89c4\u5219"],["ul",["li",["p","\u63d0\u4f9b\u63d0\u793a\u6587\u6848\uff0c\u5e2e\u52a9\u7528\u6237\u8f93\u5165\uff0ceg\uff1a\u5173\u952e\u8bcd\u3001\u53cc\u5341\u4e00\u7279\u5356\u3002"]],["li",["p","\u5728\u641c\u7d22\u680f\u4e0b\u65b9\uff0c\u53ef\u63d0\u4f9b\u6709\u7528\u7684\u6807\u7b7e\u6587\u6848\uff0c\u5e2e\u52a9\u7528\u6237\u901a\u8fc7\u70b9\u51fb\u76f4\u63a5\u5b8c\u6210\u8f93\u5165\uff0ceg\uff1a\u6700\u8fd1\u641c\u7d22\u7684\u5185\u5bb9\u3002"]]]],meta:{category:"Components",type:"Data Entry",title:"SearchBar",subtitle:"\u641c\u7d22\u680f",filename:"components/search-bar/index.zh-CN.md"},api:["section",["h2","API"],["p","\u9002\u7528\u5e73\u53f0\uff1aWEB\u3001React-Native"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","defaultValue"],["td","\u641c\u7d22\u6846\u7684\u9ed8\u8ba4\u503c"],["td","String"],["td"]],["tr",["td","value"],["td","\u641c\u7d22\u6846\u7684\u5f53\u524d\u503c"],["td","String"],["td"]],["tr",["td","placeholder"],["td","placeholder"],["td","String"],["td"]],["tr",["td","onSubmit"],["td","\u70b9\u51fb\u952e\u76d8\u7684 enter \u4f1a\u89e6\u53d1 submit \u4e8b\u4ef6"],["td","(val: string): void"],["td"]],["tr",["td","onChange"],["td","change \u4e8b\u4ef6\u7684\u56de\u8c03"],["td","(val: string): void"],["td"]],["tr",["td","onFocus"],["td","focus \u4e8b\u4ef6\u7684\u56de\u8c03"],["td","(): void"],["td"]],["tr",["td","onBlur"],["td","blur \u4e8b\u4ef6\u7684\u56de\u8c03"],["td","(): void"],["td"]],["tr",["td","onCancel"],["td","\u70b9\u51fb",["code","\u53d6\u6d88"],"\u94fe\u63a5,\u53ea\u4f1a\u89e6\u53d1 onCancel \u4e8b\u4ef6, \u7ec4\u4ef6\u4e0d\u518d\u4e3b\u52a8\u6e05\u9664\u5185\u90e8\u7684 value \u4ee5\u53ca\u89e6\u53d1 onChange \u4e8b\u4ef6"],["td","(val: string): void"],["td"]],["tr",["td","showCancelButton"],["td","\u662f\u5426\u4e00\u76f4\u663e\u793a",["code","\u53d6\u6d88"],"\u6309\u94ae"],["td","bool"],["td",["code","false"]]],["tr",["td","cancelText"],["td","\u5b9a\u5236",["code","\u53d6\u6d88"],"\u6309\u94ae\u7684\u6587\u5b57,"],["td","String"],["td",["code","\u53d6\u6d88"]]],["tr",["td","disabled"],["td","\u7981\u7528\u641c\u7d22\u680f,\u641c\u7d22\u680f\u53ea\u7528\u4e8e\u663e\u793a"],["td","bool"],["td",["code","false"]]],["tr",["td","onClear(",["code","web only"],")"],["td","\u70b9\u51fb clear \u56fe\u6807"],["td","Func"],["td"]],["tr",["td","autoFocus(",["code","web only"],")"],["td","\u9875\u9762\u521d\u59cb\u5316\u65f6SearchBar\u81ea\u52a8\u83b7\u53d6\u5149\u6807,\u6bcf\u4e2a\u9875\u9762\u53ea\u6709\u4e00\u4e2aSearchBar\u7684autpFocus\u4f1a\u751f\u6548\u3002\uff08\u4e0d\u4fdd\u8bc1\u6240\u6709\u6d4f\u89c8\u5668\u90fd\u751f\u6548\uff09"],["td","bool"],["td","false"]],["tr",["td","focused(",["code","web only"],")"],["td","\u9875\u9762\u8fd0\u884c\u8fc7\u7a0b\u4e2d,SearchBar\u83b7\u53d6\u5149\u6807,\u5f53SearchBar\u83b7\u53d6\u5149\u6807\uff08",["code","focused"],"\u66f4\u65b0\u4e3atrue\uff09\u540e\uff0c\u9700\u8981\u5728",["code","onFocus"],"\u6216\u8005",["code","onBlur"],"\u65f6\u518d\u6b21\u5c06\u8be5\u5c5e\u6027\u8bbe\u7f6e\u4e3afalse\u3002"],["td","bool"],["td","false"]]]],["p","\u6ce8\uff1aRN \u7248\u672c\u66f4\u591a API \u8bf7\u53c2\u8003 ",["a",{title:null,href:"http://facebook.github.io/react-native/docs/textinput.html"},"http://facebook.github.io/react-native/docs/textinput.html"]]]}}});