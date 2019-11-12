import React,{Component,createRef} from 'react'

class Todo extends Component{
    constructor(props){
        super();
        this.state={
            inEdit:false
        };
        this.editInput=createRef()
    }
    //双击事件
    onEdit=()=>{
        let input = this.editInput.current;
        this.setState({
            inEdit: true
        },()=>{
            input.focus();
            input.value = this.props.content;
        })
    };

    //保存编辑input的value
    commitAlter=()=>{
        let {current: input} = this.editInput;
        let content = input.value.trim();
        let {id} = this.props;
        if(content){
            this.props.alterTodoContent(id, content)
        }else{
            this.props.deleteTodo(id)
        }
    };
    //失去焦点
    onBlur=()=>{
        if(!this.state.inEdit) return ;
        this.setState({
            inEdit:false
        });
        this.commitAlter();
    };

    //按ESC键失去焦点
    onKeyDown=(ev)=>{
        if(ev.keyCode===27 || ev.keyCode===13){
            this.setState({
                inEdit: false
            })
        }
        if(ev.keyCode===13){
            this.commitAlter();
        }
    }
    render(){
        let {content,deleteTodo,id,hasCompleted,toggleTodo}=this.props;
        let{inEdit}=this.state;
        let className=inEdit? 'editing' : '';
        return(
            <React.Fragment>
                <li className={className}>
                    <div className="view">
                        {/* 勾选按钮 */}
                        <input type="checkbox" className="toggle" checked={hasCompleted} onChange={()=>toggleTodo(id)}/>
                        {/* todo 的内容 */}
                        <label ref="label" onDoubleClick={this.onEdit}>{content}</label>
                        {/* 删除按钮 */}
                        <button className="destroy" ref="btn" onClick={()=>deleteTodo(id)}></button>
                    </div>
                    {/* 编辑 todo 的输入框 */}
                    <input type="text" className="edit" ref={this.editInput} onBlur={this.onBlur} onKeyDown={this.onKeyDown}/>
                </li>

            </React.Fragment>
        )
    }
}
export default Todo