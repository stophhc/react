import React,{Component} from 'react'
import Mount from "./Mount";
import Update from "./Update";
class LifePeriod extends Component{
    // 只有类组件才有生命周期, 函数式组件没有生命周期

// 生命周期
// Mounting 装载
//   constructor 执行一次
//   static getDerivedStateFromProps(prop, state)
//     在你 render 之前, 给你一次改变 state 的机会, 不改变就返回 null
//   render()
//   componentDidMount() 执行一次
//     获取真正的 DOM 元素
//
// Update 更新
//   父组件更新, (已挂载)子组件也会随着更新
//   static getDerivedStateFromProps(prop, state)
//   shouldComponentUpdate(nextProps, nextState)
//     用于优化性能
//     返回 一个 bool 值
//     ture: 组件进行正常的更新流程
//     false: 后面的生命周期函数不会执行, 视图不会更新
//   render
//   getSnapshotBeforeUpdate(prevProp, prevState)
//     它执行的时候, 新的virtual DOM结构已经计算出来了
//     但是, 这个时候, 浏览器 DOM 元素还没有更新
//
//   componentDidUpdate(pProps, pState, snapshop)
//     更新已经完成的时候调用
//     获取真正的 DOM 元素
//
// Unmounting 卸载
//   componentWillUnmount()
//     只执行一次
//
// 错误处理
//  componentDidCatch( error, info )
//    捕获子组件的生命周期抛出的错误
    render(){
        return(
            <React.Fragment>
                {/*<Mount/>*/}
                <Update/>
            </React.Fragment>
        )
    }
}
export default LifePeriod