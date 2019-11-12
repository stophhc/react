import React,{Component} from 'react'
class Mount extends Component{

    //顺序第一位执行，只执行一次
    constructor(props){
        super()
        this.state={
            val:'111'
        }
        console.log('constructor')
    }

    //顺序第二位执行,在render之前, 给你一次改变 state 的机会, 不改变就返回 null
    static getDerivedStateFromProps(props,state){
        console.log(props,state);
        console.log('getDerivedStateFromProps');
        //console.log(this.refs.div1)  render没有挂载，所以获取不到
        return {//改变state的值
            val:'2222'
        }
    }

    //顺序第四位执行，执行一次,获取真正的 DOM 元素
    componentDidMount(){
        console.log('组件装载完成')
        console.log(this.refs.div1)
    }


    render(){
        //顺序第三位执行，挂载组件
        console.log('render');
        let{val}=this.state;
        return(
            <React.Fragment>
                mount
                <div ref="div1">获取dom元素</div>
                <p>{val}</p>
            </React.Fragment>
        )
    }
}
export default Mount