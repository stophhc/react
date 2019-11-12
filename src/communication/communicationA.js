import React,{Component} from 'react'
class CommunicationA extends Component{
    static defaultProps={
        value:"dddd"
    }
    constructor(props){
        super(props);
        this.state={
            valueVal:''
        }
    }
    clickOK=()=>{
       if(typeof this.props.clickOK123=="function"){
           this.props.clickOK123()
       }
    }
    render(){
        return(
            <React.Fragment>
                <button onClick={this.clickOK}>子组件A向父组件通信</button>
                <p>{this.props.value}</p>
            </React.Fragment>
        )
    }
}
export default CommunicationA
