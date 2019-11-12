import React, {Fragment, Component, createRef} from 'react';
import Todo from './components/todo'
import './main.css';

class TodoList extends Component{
  constructor(props){
      super(props);
      this.state={
        todoList:[]
      };
      this.todoInput=createRef()
  }

  //添加
    addTodo=(ev)=>{
        let {value}=this.todoInput.current;
    if(ev.keyCode!==13 || !value.trim()) return;
      let {todoList}=this.state;
      this.setState({
          todoList:[{
              id: Math.random(),
              content:value,
              hasCompleted:false
          },
              ...todoList
          ]
      });
        this.todoInput.current.value='';

  };

  //删除
    deleteTodo=(id)=>{
        let {todoList}=this.state;
        todoList=todoList.filter(elt=>{
          return elt.id !=id
        });
        this.setState({
            todoList
        });
    };

    toggleTodo=(id)=>{
        let {todoList}=this.state;
        todoList=todoList.map(elt=>{
          if(elt.id ==id){
              elt.hasCompleted=!elt.hasCompleted
          }
            return elt

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
        console.log(todoList)
    };
  render(){
      let activeTodo=this.state.todoList.find(elt=>elt.hasCompleted===false);
      let{todoList}=this.state;
      let todes=todoList.map(elt=>{
        return(
            <Todo key={elt.id}
                {...{
                    id: elt.id,
                    content:elt.content,
                    deleteTodo:this.deleteTodo,
                    toggleTodo:this.toggleTodo
                 }} />
        )
      });
    return (
      <div>
        <header className="header">
          <h1>todos</h1>
          {/* 输入框 */}
          <input
            type="text"
            className="new-todo"
            placeholder="type something here"
            ref={this.todoInput}
            onKeyDown={this.addTodo}
          />
        </header>

        <section className="main">
          {/* 全选按钮 */}
          <input type="checkbox" className="toggle-all" onChange={this.toggleAll} checked={!activeTodo && todoList.length>0}/>
          <ul className="todo-list">
              {todes}
          </ul>
        </section>
      </div>
    )
  }
}
export default TodoList
