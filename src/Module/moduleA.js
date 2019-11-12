import React,{Component} from 'react'
class Modulea extends Component{
    constructor(props){
        super()
        this.state={
            title:'22'
        }
    }
    clickOk=()=>{
        this.props.clickOK123()
    }
    render(){
        return(
            <React.Fragment>
                {this.state.title}
                <button onClick={this.clickOk}>子点击</button>
            </React.Fragment>
        )
    }
}

export default Modulea