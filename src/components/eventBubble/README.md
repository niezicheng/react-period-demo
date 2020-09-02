## React 中事件冒泡过程解析

### 事件流
- 事件捕获
> 相同事件由内而外依次执行
- 事件冒泡
> 相同事件由外向内依次执行
- DOM 事件流
> 先事件捕获，再处理目标，再事件冒泡

### SyntheticEvent
> React有自身的一套事件机制，叫做[SyntheticEvent](https://reactjs.org/docs/events.html), 它是通过在 document 上注册事件代理来组件树中的事件，并且它监听的是 document 的冒泡阶段。
>
> **说明**
> - React 组件中获取的事件对象为封装后的 SyntheticEvent ，可以通过 SyntheticEvent.nativeEvent 获取到原生 DOM  事件对象，通过调用 nativeEvent 对象上的 stopImmediatePropagation() 方法阻止冒泡.
> - event.nativeEvent.stopImmediatePropagation() 可以阻止同类型后续事件处理器的执行，但是被阻止的事件是在 React render 之后绑定的， 如果在 render 之前绑定的是无法阻止的。

### 理解界面展示的原生 DOM 与 React 组件之间的区别
- 界面展示的 DOM
> 原生的 DOM
- React 组件中的 DOM
> 虚拟DOM组件树

### 理解 React 是通过监听 document 冒泡阶段进行组件事件的代理

**针对实例监听过程说明**
> - 点击界面上的 button 按钮，事件从原生 DOM 按钮一直冒泡到 body，然后 body 监听的事件处理器执行，输出 body。
> 此时还未进入到 React, React 监听的是 document 上面的事件处理。
>
> - 从 body 冒泡到 document
>   - document 上绑定了三个事件处理器，组件 DOM 挂载前后绑定的两个事件、在 Effect Hook中使用 document 监听的处理器。它们将按顺序来处理执行
>   - 先执行组件挂载前绑定的 document，输出 `before react mount: document`
>   - 再执行 React 挂载是绑定的，此时真正进入 React 事件处理机制，执行 button 点击冒泡到 container 依次输出
>   - 再处理组件挂载后的绑定的 document，输出 `after react mount: document`
>   - 最后处理 Effect 中【函数会在组件渲染到屏幕之后执行】监听绑定的事件，输出 `within react: documen`
>
> - 完成document上的冒泡后，再到 window 执行相应的处理器事件，输出 `window`

### 使用 e.stopPropagation() 点击按钮无法阻止冒泡行为
- React 是通过监听 document 冒泡阶段进行事件代理处理的
- React 接受 document 事件处理是执行 button 按钮事件的前提，即在 button 阻止事件冒泡之前，事件已经达到了 document 了，所以无法阻止 document 上的处理器的执行

### 问题解决
#### 使用 window 替换 document
> - React 中的 Button 中的 event对象 是从 document 中代理过来的，在 button 阻止冒泡，事件到达 document 就结束了，所以就不会继续冒泡到 window 上面了

#### 通过元素自身来绑定事件处理器
> - 调用元素自身身上到方法绑定事件走到是原生到 DOM 流程，没有在 React 流程里面


[参考链接](https://www.cnblogs.com/Wayou/p/react_event_issue.html)
