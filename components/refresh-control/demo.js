webpackJsonp([26,157],{536:function(n,s){n.exports={content:[["p","\u4e0b\u62c9\u5237\u65b0"]],meta:{order:0,title:{"zh-CN":"ListView \u4e0b\u62c9\u5237\u65b0","en-US":"ListView RefreshControl"},filename:"components/refresh-control/demo/basic.md",id:"components-refresh-control-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> RefreshControl<span class="token punctuation">,</span> ListView <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    img<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png\'</span><span class="token punctuation">,</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'\u76f8\u7ea6\u9152\u5e97\'</span><span class="token punctuation">,</span>\n    des<span class="token punctuation">:</span> <span class="token string">\'\u4e0d\u662f\u6240\u6709\u7684\u517c\u804c\u6c6a\u90fd\u9700\u8981\u98ce\u5439\u65e5\u6652\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    img<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png\'</span><span class="token punctuation">,</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'\u9ea6\u5f53\u52b3\u9080\u60a8\u8fc7\u5468\u672b\'</span><span class="token punctuation">,</span>\n    des<span class="token punctuation">:</span> <span class="token string">\'\u4e0d\u662f\u6240\u6709\u7684\u517c\u804c\u6c6a\u90fd\u9700\u8981\u98ce\u5439\u65e5\u6652\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    img<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png\'</span><span class="token punctuation">,</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'\u98df\u60e0\u5468\'</span><span class="token punctuation">,</span>\n    des<span class="token punctuation">:</span> <span class="token string">\'\u4e0d\u662f\u6240\u6709\u7684\u517c\u804c\u6c6a\u90fd\u9700\u8981\u98ce\u5439\u65e5\u6652\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> index <span class="token operator">=</span> data<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> pageIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> dataSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListView<span class="token punctuation">.</span>DataSource</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      rowHasChanged<span class="token punctuation">:</span> <span class="token punctuation">(</span>row1<span class="token punctuation">,</span> row2<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> row1 <span class="token operator">!==</span> row2<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span>initData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>initData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`r</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      dataSource<span class="token punctuation">:</span> dataSource<span class="token punctuation">.</span><span class="token function">cloneWithRows</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>initData<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      refreshing<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onRefresh <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> refreshing<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>initData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token string">`ref</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>pageIndex<span class="token operator">++</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>initData<span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        dataSource<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>dataSource<span class="token punctuation">.</span><span class="token function">cloneWithRows</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>initData<span class="token punctuation">)</span><span class="token punctuation">,</span>\n        refreshing<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  onScroll <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'sss\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> separator <span class="token operator">=</span> <span class="token punctuation">(</span>sectionID<span class="token punctuation">,</span> rowID<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n        <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>sectionID<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>rowID<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n          backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#F5F5F9\'</span><span class="token punctuation">,</span>\n          height<span class="token punctuation">:</span> <span class="token number">8</span><span class="token punctuation">,</span>\n          borderTop<span class="token punctuation">:</span> <span class="token string">\'1px solid #ECECED\'</span><span class="token punctuation">,</span>\n          borderBottom<span class="token punctuation">:</span> <span class="token string">\'1px solid #ECECED\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> row <span class="token operator">=</span> <span class="token punctuation">(</span>rowData<span class="token punctuation">,</span> sectionID<span class="token punctuation">,</span> rowID<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        index <span class="token operator">=</span> data<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">const</span> obj <span class="token operator">=</span> data<span class="token punctuation">[</span>index<span class="token operator">--</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>rowID<span class="token punctuation">}</span></span>\n          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n            padding<span class="token punctuation">:</span> <span class="token string">\'0.08rem 0.16rem\'</span><span class="token punctuation">,</span>\n            backgroundColor<span class="token punctuation">:</span> <span class="token string">\'white\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> marginBottom<span class="token punctuation">:</span> <span class="token string">\'0.08rem\'</span><span class="token punctuation">,</span> borderBottom<span class="token punctuation">:</span> <span class="token string">\'1px solid #F6F6F6\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token punctuation">{</span>obj<span class="token punctuation">.</span>title<span class="token punctuation">}</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> display<span class="token punctuation">:</span> <span class="token string">\'-webkit-box\'</span><span class="token punctuation">,</span> display<span class="token punctuation">:</span> <span class="token string">\'flex\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token punctuation">:</span> <span class="token string">\'1.28rem\'</span><span class="token punctuation">,</span> marginRight<span class="token punctuation">:</span> <span class="token string">\'0.08rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>obj<span class="token punctuation">.</span>img<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> display<span class="token punctuation">:</span> <span class="token string">\'inline-block\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>obj<span class="token punctuation">.</span>des<span class="token punctuation">}</span><span class="token operator">-</span><span class="token punctuation">{</span>rowData<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fontSize<span class="token punctuation">:</span> <span class="token string">\'1.6em\'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'#FF6E27\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token number">35</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\u5143<span class="token operator">/</span>\u4efb\u52a1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ListView</span>\n        <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>dataSource<span class="token punctuation">}</span></span>\n        <span class="token attr-name">renderRow</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>row<span class="token punctuation">}</span></span>\n        <span class="token attr-name">renderSeparator</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>separator<span class="token punctuation">}</span></span>\n        <span class="token attr-name">initialListSize</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">pageSize</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">scrollRenderAheadDistance</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">scrollEventThrottle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">20</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onScroll</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onScroll<span class="token punctuation">}</span></span>\n        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n          height<span class="token punctuation">:</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight<span class="token punctuation">,</span>\n          border<span class="token punctuation">:</span> <span class="token string">\'1px solid #ddd\'</span><span class="token punctuation">,</span>\n          margin<span class="token punctuation">:</span> <span class="token string">\'0.1rem 0\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">scrollerOptions</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> scrollbars<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">refreshControl</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>RefreshControl\n          refreshing<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>refreshing<span class="token punctuation">}</span>\n          onRefresh<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onRefresh<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n      <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}]}},653:function(n,s,a){n.exports={basic:a(536)}}});