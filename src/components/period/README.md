## React 新旧生命周期

## 目录
- [新生命周期](#新生命周期)
  - [新生命周期图](#新生命周期图)
  - [后面17中即将废弃的三个生命周期](#后面17中即将废弃的三个生命周期)
  - [挂载阶段](#挂载阶段)
    - [construct](#construct)
    - [getDerivedStateFromProps](#getDerivedStateFromProps)
    - [render](#render)
    - [componentDidMount](#componentDidMount)
  - [更新阶段](#更新阶段)
    - [getDerivedStateFromProps](#getDerivedStateFromProps)
    - [shouldComponentUpdate](#shouldComponentUpdate)
    - [render](#render)
    - [getSnapshotBeforeUpdate](getSnapshotBeforeUpdate)
    - [componentDidUpdate](#componentDidUpdate)
  - [卸载阶段](#卸载阶段)
    - [componentWillUnmount](#componentWillUnmount)

- [旧生命周期](#旧生命周期)
  - [旧生命周期图](#旧生命周期图)

### 新生命周期

#### 新生命周期图

![React16新生命周期图](https://user-gold-cdn.xitu.io/2018/8/12/1652a030ed1506e0?imageslim)

#### 后面17中即将废弃的三个生命周期
#####  ~~`componentWillMount`~~
#####  ~~`componentWillReceiveProps`~~
#####  ~~`componentWillUpdate`~~

**说明**
> 目前在16版本中 componentWillMount，componentWillReceiveProps，componentWillUpdate 并未完全删除这三个生命周期函数，而且新增了UNSAFE_componentWillMount，UNSAFE_componentWillReceiveProps，UNSAFE_componentWillUpdate三个函数，官方计划在17版本完全删除这三个函数，只保留UNSAVE_前缀的三个函数，目的是为了向下兼容，但是对于开发者而言应该尽量避免使用他们，而是使用新增的生命周期函数替代它们。


#### 挂载阶段

#####  `construct`

> ***construct(props)***
>
> **作用**
> 1. 获取 this 对象 【 super(props) 】
>	2. 初始化 state 状态数据
> 3. 自定义方法 this 绑定
> **说明**
> - 该构造函数方法中不要使用 setState() 方法，使用 this.state 赋予 state 初始值
>	- 避免在构造函数中引入任何副作用或订阅【该些操作应放入 componentDidMount 函数中】

#####  `getDerivedStateFromProps`

> ***static getDerivedStateFromProps(props, state)***
>
> **1、参数：**
> 	props: 最新的 props 参数
> 	state: 当前的 state 对象
> **2、返回值：**
> 	返回新的 state 对象或 null
> **说明**
> - 函数内部不能访问 this 对象，即无法获取 this.state 和 this.props
> - 在挂载时接受到新的 props，组件内调用 setState 和 forceUpdate 也会调用
> - 取代旧生命周期的 componentWillMount、componentWillReceiveProps、componentWillUpdate

#####  `render`

#####  `componentDidMount`


#### 更新阶段

#####  `getDerivedStateFromProps`

#####  `shouldComponentUpdate`
> ***shouldComponentUpdate(nextProps, nextState)***
>
> **1、参数**
> 	nextProps: 最新的 props 参数
> 	nextState: 即将需要更新的 state 对象
> **2、返回值【boolean类型】**
>		ture: 默认值，更新渲染
>		false: 不更新渲染
> **说明**
> - 在挂载时接受到新的 props，组件内调用 setState 和 forceUpdate 也会调用
> - 返回 false 并不会阻止子组件在 state 更改时重新渲染
> - 不建议在 shouldComponentUpdate() 中进行深层比较或使用 JSON.stringify()。这样非常影响效率，且会损害性能

#####  `render`

#####  `getSnapshotBeforeUpdate`
> ***getSnapshotBeforeUpdate(prevProps, prevState)***
>
> **1、参数**
>		prevProps: 之前一次的 props
>		prevState: 之前一次的 state
> **2、返回值**
>		返回值作为 componentDidUpdate 周期函数的第三个参数值，无传递值时返回null
> **说明**
> - 替代 componentWillUpdate 周期函数

#####  `componentDidUpdate`
> ***componentDidUpdate(prevProps, prevState)***
>
> **1、参数**
>		prevProps: 之前一次的 props
>		prevState: 之前一次的 state
>		snapshot：getSnapshotBeforeUpdate周期函数的返回值, 默认值为 undefined
> **说明**
> - 可以操作DOM，和发起服务器请求，还可以setState
> - 注意一定要用if语句控制，否则会导致无限循环
> - 当 shouldComponentUpdate 返回值为 false时，不会调用该周期函数


#### 卸载阶段

####  `componentWillUnmount`
> ***componentWillUnmount()***
>
> **说明**
> - 主要用于清楚一些定时器，取消网络请求，清理无效的DOM元素等垃圾清理工作
> - 在该函数内调用 setState 方法，组件不会再进行重新渲染


### 旧生命周期

#### 旧生命周期图

![React16旧生命周期图](https://user-gold-cdn.xitu.io/2018/8/12/1652a030ed1506e0?imageslim)

#### 挂载阶段

#####  `construct`

#####  `componentWillMount/UNSAFE_componentWillMount`
> ***componentWillMount()***
>
> **说明**
> - 该周期函数在 render 方法之前调用，所以 setState 不会触发重新渲染

#####  `render`

#####  `componentDidMount`


#### 更新阶段

#####  `componentWillReceiverProps/UNSAFE_componentWillReceiveProps`
> ***componentWillReceicerProps(nextProps)***
>
> **1、参数**
> 	nextProps: 最新的 props 参数
> **说明**
> - 一般通过比较 nextProps 和 this.props 值然后使用 setState 方法对 state 进行更新控制处理
> - 父组件重新渲染，props 值不变时仍然会触发调用该周期函数
> - 装载阶段【挂载阶段】不会触发，以及在组件内部调用了 setState 和 forceUpdate 也不会触发这两个函数


#####  `shouldComponentUpdate`

#####  `componentWillUpdate/UNSAFE_componentWillUpdate`
> ***componentWillUpdate(nextProps, nextState)***
>
> **1、参数**
> nextProps: 最新的 props 参数
> nextState: 即将要更新的 state 对象
> **说明**
> - 函数中不能执行 setState 方法 【此时下一个state状态已经被确定，马上就要执行render重新渲染了，否则会导致整个生命周期混乱】
> - 不能请求一些网络数据，因为在异步渲染中，可能会导致网络请求多次，引起一些性能问题
> - 如果你在这个方法里保存了滚动位置，也是不准确的，还是因为异步渲染的问题，如果你非要获取滚动位置的话，请在getSnapshotBeforeUpdate调用

#####  `render`

#####  `componentDidUpdate`

#### 卸载阶段

####  `componentWillUnmount`

[官网地址](https://reactjs.bootcss.com/docs/react-component.html#static-getderivedstatefromprops)


## React 底层进行等一下相关操作简单说明
1. reconciliation(调和阶段)
2. rendering(渲染阶段)

> - 调和阶段
> 组件 --> render() 方法 --> 生成新的 VirtualDOM --> 比较新旧 VirtualDOM --> 得到新的 VirtualDOM --> 进行 rendering(渲染阶段)
> **真实的DOM生成：**JSX --> createElement() --> js 对象(VirtualDOM) --> 真实的 DOM
> - 渲染阶段
> 将 VirtualDOM 转化为相对应的 DOM 操作 --> 更新页面
