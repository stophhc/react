import React,{Component} from 'react'
class Ref extends Component{
    Ref1=()=>{
        this.refs.input1.focus()
    }
    render(){
        return(
            <React.Fragment>
                <button onClick={this.Ref1}>点击获取焦点</button>
                <input ref="input1"/>
            </React.Fragment>
        )
    }
}
export default Ref