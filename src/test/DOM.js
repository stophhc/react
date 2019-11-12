import React,{Component} from 'react';

class Dom extends Component{
   //获取dom元素的三种方式：回调，createRef,字符串
    constructor(props){
        super()
        this.outDiv=React.createRef()
    }
    click=()=>{
        console.log(this.outDiv)
    }
    componentDidMount(){
        //console.log(this.outDiv.current)
        //console.log(this.refs.outDiv)
    }
    render(){
        return(
            <React.Fragment>
                {/*回调函数
                <div id="outDiv" ref={el=>this.outDiv=el}>获取dom</div>
                <button onClick={this.click}>点击</button>*/}

                {/*createRef，16版本新增
                <div id="outDiv" ref={this.outDiv}>获取dom</div>
                */}

                {/*字符串方式，不推荐使用，
                <div id="outDiv" ref="outDiv">获取dom</div>*/}
            </React.Fragment>
        )
    }

}
export default Dom