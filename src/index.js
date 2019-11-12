import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Communication from './communication/index'
import ChildrenRef from './childrenRef/index'
import Module from './Module/index'
import TodoList from './todoListTest/index'
import LifePeriod from './lifePeriod/index'
import Dom from './test/DOM'
import Input1 from './test/input1'
import Testlx from './Testlx';
//import TodoList from './TodoList';
import PropsList from "./test/props";
//import Button from "./test/button";
/*import a,{hhc,hhc1} from './test/a'
import b from './test/b'
b();
a();
hhc();
hhc1()*/

ReactDOM.render(<TodoList/>,document.getElementById('root'));
//ReactDOM.render(<Communication/>,document.getElementById('root'));
//ReactDOM.render(<App/>,document.getElementById('root'))

//组件形式
//ReactDOM.render(<Testlx/>,document.getElementById('root'));


//变量形式，外面必须有一个总容器包裹，解析出来不想有多余的标签可以使用<></>,或者<React.Fragment></React.Fragment>
//let a=<><h2>dddd</h2><ul></ul></>

//使用数组形式,必须加上key值
/*let a=[
    <h2 key="1">dddd</h2>,
    <ul key="2">aaa</ul>
]*/

//函数组件,轻，只是输出展示UI信息，没有状态和生命周期
//class组件，重，展示，有状态和生命周期
/*function CreateH(props){
    return <h2>{props.title}</h2>
}
CreateH.defaultProps ={
    title:'123'
}
ReactDOM.render(
    <React.Fragment>
        {a}
        {CreateH}
    </React.Fragment>,
    document.getElementById('root'));*/

//ReactDOM.render(<h2>dddd</h2>,document.getElementById('root'));

//ReactDOM.render(<TodoList/>,document.getElementById('root1'));


//props传值
/*let news=['aaaa','bbb','cccc']
ReactDOM.render(<PropsList title="1111a" list={news}/>,document.getElementById('props_list'))*/

//ReactDOM.render(<Button/>,document.getElementById('button'))