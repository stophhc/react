import React,{Component} from 'react'
import CommunicationA from "./communicationA";
import CommunicationB from "./communicationB";
//父子，兄弟组件通信
class Communication extends Component{
    constructor(props){
        super(props)
        this.state={
            title:'默认值',
            value:'默认值123',
            valueVal:''
        }
    }
    changF=()=>{
        this.setState({
            title:"子组件通信改变的值"
        })
    }
    changA=()=>{
        this.setState({
            value:"兄弟组件通信改变的值"
        })
    }

    clickVal=(ev)=>{
        let val=ev.target.value;
        this.setState({
            valueVal:val
        });
        console.log(val)
    };
    render(){
        let {valueVal}=this.state;
        return(
            <React.Fragment>
                <p>{this.state.title}</p>
                <button >父组件</button>
                <hr/>
                {/*向父组件通信*/}
                <CommunicationA value={this.state.value} clickOK123={this.changF}/>

                <br/>
                <input
                    type="text"
                    value={valueVal}
                    ref={el=>(this.input)=el}
                    onChange={this.clickVal}
                />
                {/*兄弟组件通信*/}
                <CommunicationB clickFlase={this.changA}/>
            </React.Fragment>
        )
    }
}
export default Communication
