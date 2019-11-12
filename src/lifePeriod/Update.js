import React,{Component} from 'react'
class Update extends Component{

    //顺序第一位执行，只执行一次
    constructor(props){
        super()
        this.state={
            val:'111'
        }
    }

    static getDerivedStateFromProps(props,state){
        return null
    }



    render(){
        console.log('render');
        let{val}=this.state;
        return(
            <React.Fragment>
                mount
                <div ref="div1">获取dom元素</div>
                <p>{val}</p>
            </React.Fragment>
        )
    }
}
export default Update