import React,{Component} from 'react'
class CommunicationB extends Component{
    constructor(props){
        super()
        this.state={
            valueVal:''
        }
    }
    click123=()=>{
        this.props.clickFlase()
    }
    render(){
        return(
            <React.Fragment>
                <button onClick={this.click123}>子组件B向兄弟组件通信</button>
            </React.Fragment>
        )
    }
}
export default CommunicationB