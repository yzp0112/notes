## 兼容 HTML
```
Markdown 语法的目标是：成为一种适用于网络的书写语言。
Markdown 并不是想取代 HTML 的地位，甚至接近它。它的语法种类很少，只对应 HTML
标记的一小部分。Markdown 的构想不是要使得 HTML 文档更容易书写。在我看来，
HTML 已经很容易写了。Markdown 的理念是，能让文档更容易读、写和随意改。HTML
是一种发布的格式，Markdown 是一种书写的格式。就这样，Markdown 的格式语法只涵
盖纯文本可以涵盖的范围。
不在 Markdown 涵盖范围之内的标签，都可以直接在文档里面用 HTML 撰写。不需要额外
标注这是 HTML 或是 Markdown；只要直接加标签就可以了。
要制约的只有一些 HTML 区块元素――比如 <div>、<table>、<pre>、<p> 等标签，必须
在前后加上空行与其它内容区隔开，还要求它们的开始标签与结尾标签不能用制表符或空
格来缩进。Markdown 的生成器有足够智能，不会在 HTML 区块标签外加上不必要的 <p>
标签。
```
> 例子如下，在 Markdown 文件里加上一段 HTML 表格：

```HTML
这是一个普通段落。
<table>
<tr>
<td>Foo</td>
</tr>
</table>
这是另一个普通段落。
```

## 特殊字符自动转换

```
在 HTML 文件中，有两个字符需要特殊处理： < 和 & 。 < 符号用于起始标签，& 符号则
用于标记 HTML 实体，如果你只是想要显示这些字符的原型，你必须要使用实体的形式，
像是 &lt; 和 &amp;。
& 字符尤其让网络文档编写者受折磨，如果你要打「AT&T」 ，你必须要写成
「AT&amp;T」。而网址中的 & 字符也要转换。比如你要链接到：
**http://images.google.com/images?num=30&q=larry+bird**
你必须要把网址转换写为：
**http://images.google.com/images?num=30&amp;q=larry+bird**
```
