import React,{Component} from 'react'
import Modulea from "./moduleA";

//组件名称首字母必须大写，否则会被react视为DOM标签

//定义组件两个方式：
// 1、函数组件
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
//2、类组件
class Module extends Component{
    // props(属性),不可改变，只能传递数据
    // state(状态)更新和修改数据

    /*----------------props--------------------
    1.每个组件对象都会有props（properties的简写）属性
    2.组件标签的所有属性都保存在props中
    3.内部读取某个属性值：this.props.propertyName
    4.作用：通过标签属性从组件外 向组件内传递数据（只读 read only）
    5.对props中的属性值进行类型限制和必要性限制
    6.扩展属性：将对象的所有属性通过props传递*/


    /*----------------state--------------------
    1、自身状态，只能由组件自身改变

    使用setState()修改
    this.setState({name: 'Hello'});
     */

//组件内部可以用 static defaultProps创建属性和值
static defaultProps={
    title:'222'
};

//constructor是类的构造函数，输出对象的属性
constructor(props){
    super(props);

    //设置组件状态(数据)
    this.state={
        title:'333'
    }
}
clickOk=(a,b)=>{
    console.log(a,b);
    this.setState({
        title:'123'
    })
};
changA=()=>{
    this.setState({
        title:'321'
    })
};
render(){
    return(
        <React.Fragment>
            {this.state.title}
            <hr/>
            <Modulea title='1111' clickOK123={this.changA}/>
            <hr/>
            <button onClick={this.clickOk.bind(this,{a:1,b:2})}>按钮</button>
        </React.Fragment>
    )
}
}
//组件外部可以用 组件名.defaultProps创建属性和值，会覆盖内部创建的
Module.defaultProps={
title:'1111'
};
export default Module