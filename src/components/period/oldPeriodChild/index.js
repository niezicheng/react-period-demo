import React, { Component } from 'react'
import { Button } from 'antd';

export default class OldPeriodChild extends Component {
  constructor(props) {
    super(props)
    this.state = {
      childCount: props.count
    }
  }

  /**
   * 组件将要挂载时周期函数
   * 说明：1、该周期函数在 render 方法之前调用，所以 setState 不会触发重新渲染
   */
  componentWillMount() {
    console.log('componentWillMount---');
  }

  /**
   * 组件挂载完成周期函数【页面视图还未更新】
   * 说明：调用 setState()方法，它将触发额外渲染，但此渲染会发生在浏览器更新屏幕之前
   */
  componentDidMount() {
    console.log("componentDidMount---");
  }


  /**
   * 父组件重新渲染时触发的接收最新的 props 周期函数
   * @param {*} nextProps 最新的 props 参数
   * 说明：1、父组件重新渲染，即使 props 没有发生变化，也会触发该周期函数
   *      2、装载阶段【挂载阶段】不会触发，以及在组件内部调用了 setState 和 forceUpdate 也不会触发这两个函数
   */
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps---', nextProps, this.props)
    if(nextProps.count !== this.props.count) {
      this.setState({
        childCount: nextProps.count,
      })
    }
    return null;
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
    if(nextState.childCount !== this.state.childCount || nextProps.count !== this.props.count) {
      return true;
    }
    return false;
  }

  /**
   * 组件将要更新周期函数
   * @param {*} nextProps 最新的 props 参数
   * @param {*} nextState 将要更新的 state 对象
   * 说明：1、函数中不能执行 setState 方法 【此时下一个state状态已经被确定，马上就要执行render重新渲染了，否则会导致整个生命周期混乱】
   *      2、不能请求一些网络数据，因为在异步渲染中，可能会导致网络请求多次，引起一些性能问题
   *      3、如果你在这个方法里保存了滚动位置，也是不准确的，还是因为异步渲染的问题，如果你非要获取滚动位置的话，请在getSnapshotBeforeUpdate调用
   */
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate', nextProps, nextState);
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
    const { childCount } = this.state;
    const { count } = this.props;
    return (
      <>
        <div>
          this.props.count: {count}
        </div>
        <div>
          this.state.count: {childCount}
        </div>
        <Button onClick={() => this.setState({ childCount: 100 })}>change state to 100</Button>
      </>
    )
  }
}
