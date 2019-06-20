## 需求分析
### 样式
### 事件
change input focus blue 事件
```html
<input :value="value" type="text" :disabled="disabled" :readonly="readonly" @change="$emit('change')"> 这样不能传事件对象e过去，导致不能获取input里的值，所以要加$event
<input :value="value" type="text" :disabled="disabled" :readonly="readonly" @change="$emit('change',$event)">$event是浏览器原生的事件对象e
```
### 支持v-model
```html
原生input
<input type="text" v-model="message">
vue其实是不支持双向绑定的，v-model实质上做了两件事
监听了input事件 同时value绑定了message 上面两个input都等价
<input type="text" @input="message=$event.target.value" :value="message">
```