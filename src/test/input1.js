import React,{Component} from 'react';
class Input extends Component{
    constructor(props){
        super()
        this.state={
            inputVal:''
        }
    }
    clickInput=(ev)=>{
        let value=ev.target.value;
        this.setState({
            inputVal:value
        })
        console.log(this.state)
    }
    render(){
        let {inputVal}=this.state;
        return(
            <React.Fragment>
                <input
                    type="text"
                    value={inputVal}
                    ref={el=>this.input=el}
                    onChange={this.clickInput}/>
                <button>按钮</button>
                <p>{this.state.inputVal}</p>
            </React.Fragment>
        )
    }

}
export default Input