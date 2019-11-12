import React,{Component}from 'react'
class children extends Component{
    render(){
        let bl= typeof this.props.children==='function';
        console.log(this.props.children);
        return(
            <React.Fragment>
               {/* {this.props.children}*/}
                {
                    bl ? this.props.children('ddddd') : 'null'
                }
            </React.Fragment>
        )
    }
}
export default children