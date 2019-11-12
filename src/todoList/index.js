import React, {Fragment, Component, createRef} from 'react';
import Todo from './components/todo'
import Footer from './components/footer'

import './main.css';

class TodoList extends Component{
  constructor(props){
      super(props);
      this.state={
        todoList:[]
      };
      this.todoInput=createRef()
  }

  //input值存入todoList数组
  addTodo=(ev)=>{
      let {value} = this.todoInput.current;//获取input的value值
      if(ev.keyCode !== 13 || !value.trim()) return;//判断是否按下回车，或者value值是否为空
      let {todoList}=this.state;
      this.setState({
          todoList:[
              {
                id:Math.random(),//设置key值
                content:value,//value值
                  hasCompleted:false//input是否选中
              },
              ...todoList
              ]
      },()=>{//回调函数
          this.todoInput.current.value=''//清除input的value值
      });
     // console.log(todoList.content)
  };

  //删除列表
  deleteTodo=(id)=>{
      let {todoList}=this.state;
      todoList=todoList.filter(elt=>{
        return elt.id!==id
      });
      this.setState({
          todoList
      })
  };

  //input是否选中
    toggleTodo=(id)=>{
        let {todoList}=this.state;
        todoList=todoList.map(elt=>{
            if(elt.id==id){
                elt.hasCompleted = !elt.hasCompleted
            }
            return elt;
        });
        this.setState({
            todoList
        })
    };

    //全选
    toggleAll=(ev)=>{
        let {todoList} = this.state;
        todoList = todoList.map(elt=>{
            elt.hasCompleted = ev.target.checked;
            return elt;
        });

        this.setState({
            todoList
        })
    };

    //修改input
    alterTodoContent=(id,content)=>{
        let {todoList}=this.state;
        todoList=todoList.map(elt=>{
            if(elt.id==id){
                elt.content = content
            }
            return elt;
        });
        this.setState({
            todoList
        })
    };
  render(){
    let activeTodo=this.state.todoList.find(elt=>elt.hasCompleted===false);
    //向Todo组件添加列表
    let{todoList}=this.state;
    let todos=todoList.map(elt=>{
      return(
          /*简写*/
          <Todo key={elt.id}
                {...{
                    id: elt.id,
                    content: elt.content,
                    deleteTodo: this.deleteTodo,
                    hasCompleted:elt.hasCompleted,
                    toggleTodo:this.toggleTodo,
                    alterTodoContent:this.alterTodoContent
          }}/>
          /*<Todo key={elt.id} id={elt.id} content={elt.content} deleteTodo={this.deleteTodo}/>*/

      )
    });
    return (
      <React.Fragment>
        <header className="header">
          <h1>todos</h1>
          {/* 输入框 */}
          <input type="text" className="new-todo" placeholder="type something here"
                 ref={this.todoInput}
                 onKeyDown={this.addTodo}/>
        </header>

        <section className="main">
          {/* 全选按钮 */}
          <input type="checkbox" className="toggle-all" onChange={this.toggleAll} checked={!activeTodo && todoList.length>0}/>
          <ul className="todo-list">
              {todos}
          </ul>
        </section>
      </React.Fragment>
    )
  }
}
export default TodoList
