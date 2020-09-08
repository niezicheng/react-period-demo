## Context 基本用法

### 使用 Context 解决的问题
> 对于组件树中多组件需要使用相同数据信息时，使用 Context 提供 "全局" 数据信息

### 使用 Context 可能存在的问题
- 可能使得组件复用性变差 【有时候组件组合可能更好】

### Context 的使用方式
#### React.createContext
```js
  const Context = React.createContext(defaultValue);
```
> - 创建 Context 对象并赋予初始默认值 defaultValue
> - 当前组件书中无法匹配【就近原则】到 Provider 时，defaultValue 生效，否则使用 Provider 中设置到 value 属性的值
> - Provider 中 value 设置为 undefined 时，defaultValue 不生效

#### Context.Provider
```js
  <Context.Provider value={}>
    // 子组件
  </Context.Provider>
```
> - 提供组件树组件全局数据 value 值，Provider 组件可多层嵌套
> - value 值发生变化时，所有 consumer 组件将重新渲染，不受制于 shouldComponentUpdate 函数

#### Class.contextType
```js
  // class 组件
  // 方式1:
  ComponentDemo.contextType = MyContext;
  // 方式2:
  static contextType = MyContext;
  console.log(this.context);

  // 函数组件
  ComponentDemo.contextType = MyContext;
  export default (props, context) => ()
```
> - 挂载在组件上，赋值为 React.createContext() 创建的 Context 对象
> - 为 consumer 组件提供最近的 context 值，并使用 this.context 访问
> - 函数组件赋值后，使用组件函数第二个参数 context 进行获取

#### Context.Consumer
```js
  <MyContext.Consumer>
    {value => {}}
  </MyContext.Consumer>
```
> - 订阅 context 的变化，获取的 value 值为 Context 对象中的值
> - 直接使用 context 中的值或方法进行组件渲染

#### Context.displayName
```js
  const MyContext = React.createContext(defaultValue);
  MyContext.displayName = 'OtherNameContext'

  <MyContext.Provider> // 在 DevTools 中 'OtherNameContext.Provider'
```
> - 为 Context 对象在 DevTools 中显示设置的别名

#### 示例
**动态调用 Context 【DynamicContext】**
**嵌套组件中使用 Context 【NestContext】**

[官网地址](https://reactjs.org/docs/context.html)
