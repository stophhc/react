import React,{Component} from 'react';
import Button1 from './test/button1'

//继承类
class App extends Component{
    constructor(props){
        super(props);
        //设置组件状态，数据
        this.state={
            val:'按钮'
        }
    }
    changeval =()=>{
       /* this.state.val=123 //只是改变数据，不能改变视图
        console.log(this.state.val)*/

       //改变数据，并刷新视图
        this.setState({
            val:'123'
        })
    }
    render(){
        let {val}=this.state;
        return(
            <div className="App">
                <button onClick={this.changeval}>点击改变子组件</button>
                <Button1 value={val} n={"10"}/>
            </div>
        )
    }
}
export default App