import React from 'react'

class Todeltem extends  React.Component{
    romeClick(){
        this.props.dest(this.props.index)
    }
    render(){
        return(
            <div onClick={this.romeClick.bind(this)}>{this.props.content}</div>
        )
    }
}
export default Todeltem