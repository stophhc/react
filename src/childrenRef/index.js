import React,{Component}from 'react'
import Children from "./children";
import Ref from "./ref";
class ChildrenRef extends Component{
    render(){
        return(
            <React.Fragment>
                <h2>标题</h2>
                {/*<Children>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </Children>*/}
                <Children>
                    {
                        {
                            a:1
                        }
                    }
                </Children>
                <hr/>
                <Children>
                    {
                        (child)=>{
                            return <div>{child}</div>
                        }
                    }
                </Children>
                <hr/>
                <Ref/>
            </React.Fragment>
        )
    }
}
export default ChildrenRef