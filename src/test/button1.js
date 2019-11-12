import React,{Component} from 'react'
class Button1 extends Component{
    constructor(props) {
        super(props)
        this.state={
            val:'子组件内部改变-前',
            m:this.props.n //外部传入的值
        }
    }
    changeval=()=>{
        this.setState({
            val:'子组件内部改变-后'
        })
    }
    clickAdd=()=>{
        let k=this.state.m
        k++
        this.setState({
            m:k
        })
        console.log(this.state.m)
    }
    render(){
        return(
            <React.Fragment>
                <button>{this.props.value}</button>
                <button onClick={this.changeval}>{this.state.val}</button>
                <br/>
                <button onClick={this.clickAdd}>点击++</button>
                <p>父组件传入的数字：{this.props.n}</p>
                <p>本组件的数字：{this.state.m}</p>
            </React.Fragment>
        )
    }
}
export default Button1