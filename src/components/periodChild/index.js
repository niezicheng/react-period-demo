import React, { Component } from 'react'
import { Button } from 'antd';

export default class PeriodChild extends Component {
  constructor(props) {
    // 获取 this 对象
    super(props)
    // 初始化 state 状态数据
    this.state = {
      childCount: props.count,
      childSelfMsg: true,
    }

    // 给自定义方法绑定 this
    console.log('constructor')
  }

  /**
   * 该函数会在挂载时，接收到新的props，调用了setState和forceUpdate时被调用
   * 【componentWillMount, componentWillReceiveProps, componentWillUpdate】
   * @param {*} props 新 props 参数
   * @param {*} state 当前的 state 对象
   * @return 返回新的 state 对象或 null
   */
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps---',props, state);
    if(props.count !== state.childCount) {
      return {
        childCount: props.count,
      }
    }
    return null;
  }

  /**
   * 组件挂载完成周期函数【页面视图还未更新】
   * 说明：调用 setState()方法，它将触发额外渲染，但此渲染会发生在浏览器更新屏幕之前
   */
  componentDidMount() {
    console.log("componentDidMount---");
  }

  /**
   * 组件是否更新渲染周期函数 【调用forceUpdate并不会触发此方法】
   * @param {*} nextProps 新的 props 参数
   * @param {*} nextState 变化之后的 state 对象【当前需要更新的 state 值】
   * @return {*} boolean  true 更新渲染， false 不更新渲染，【默认返回 true，只要接收到新的属性和调用了setState都会触发重新的渲染】
   * 说明：
   *  1、通过比较 this.props 与 nextProps，this.state 与 nextState的值来动态控制更新操作，提升性能
   *  2、返回 false 并不会阻止子组件在 state 更改时重新渲染
   *  3、不建议在 shouldComponentUpdate() 中进行深层比较或使用 JSON.stringify()。这样非常影响效率，且会损害性能
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate---', nextProps, nextState, this.state);
    if(nextState.childCount === this.state.childCount || nextProps.count === this.props.count) {
      return true;
    }
    return true;
  }

  /**
   * 替代 componentWillUpdate 周期函数
   * @param {*} prevProps 之前一次的 props 参数
   * @param {*} prevState 之前一次的 state 对象
   * @return 返回值会作为第三个参数传给 componentDidUpdate，如果你不想要返回值，请返回null
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate---', prevProps, prevState);
    return null;
  }

  /**
   * 组件更新完成周期函数
   * @param {*} prevProps 之前一次的 props 参数
   * @param {*} prevState 之前一次的 state 对象
   * @param {*} snapshot getSnapshotBeforeUpdate周期函数的返回值
   * 说明：1、可以操作DOM，和发起服务器请求，还可以setState，
   *      2、注意一定要用if语句控制，否则会导致无限循环
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate---', prevProps, prevState, snapshot);
  }

  /**
   * 组件将要卸载函数【主要用于清楚一些定时器，取消网络请求，清理无效的DOM元素等垃圾清理工作】
   * 说明：注意不要在这个函数里去调用setState，因为组件不会重新渲染了
   */
  componentWillUnmount() {
    console.log('componentWillUnmount---');
  }

  render() {
    const { childCount, childSelfMsg } = this.state;
    const { count } = this.props;
    return (
      <>
        <div>
          this.props.count: {count}
        </div>
        <div>
          this.state.count: {childCount}
        </div>
        <Button type={`${childSelfMsg ? 'primary' : 'danger'}`} onClick={() => this.setState({ childSelfMsg: !this.state.childSelfMsg })}>{`change childSelfMsg to ${childSelfMsg ? 'danger' : 'primary'}`}</Button>
        <div>
          this.state.childSelfMsg: {`${childSelfMsg ? 'primary' : 'danger'}`}
        </div>
      </>
    )
  }
}
