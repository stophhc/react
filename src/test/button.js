import React,{Component} from 'react'
class Button extends Component{
    constructor(props){
        super(props)
        //改变this指向问题,如果用箭头函数，不需要改变
        this.handle=this.handle.bind(this)
    }
    static defaultProps={
        value:'确定'
    };
    handle(){
       console.log('111')
        console.log(this)
    }
    handle1=(e)=>{
        //e.persist();
        //console.log(this)
        console.log({...e})
        console.log(e.type)
}

//函数传参
    handle2=(obj,e)=>{
        console.log(obj,e)
    }
    render(){
        let {value}=this.props;
        return(
           <React.Fragment>
               <button onClick={this.handle2.bind(this,{a:1,b:2})}>函数传参</button>
               <button onClick={this.handle1}>{value}</button>
               {/*<button onClick={this.handle.bind(this)}>{value}</button>*/}
               {/*<button onClick={()=>{
                   alert('222')
               }}>{value}</button>*/}
           </React.Fragment>
        )
    }
}
export default Button