import React, {Component} from 'react';
import Todoltem from './Todoltem';
import './TodeList.css'

//定义一个react组件
class TodoList extends Component {
    constructor(prpos){
        super(prpos);
        this.state={
          list:[],
            inputvalue:''
        };
        this.hhcInput=this.hhcInput.bind(this);
        this.hhcClick=this.hhcClick.bind(this);
        this.romeClick=this.romeClick.bind(this)
    }

  hhcClick(){
      this.setState({
          list:[...this.state.list,this.state.inputvalue],
          inputvalue:''
      });
    }
    hhcInput(e){
        this.setState({
            inputvalue:e.target.value
        });
    }
    romeClick(index){
     const list=[...this.state.list];
     list.splice(index,1);
        this.setState({
            list:list
        })
    }

    //父组件
  render() {
    return (
        <React.Fragment>
            <input className='tset' value={this.state.inputvalue} onChange={this.hhcInput}/>
            <button style={{background:"#999"}} onClick={this.hhcClick}>add</button>
            <ul>
                {this.state.list.map((item,index) =>{
                        //return <li key={index} onClick={this.romeClick.bind(this,index)}>{item}</li>
                        return <Todoltem dest={this.romeClick} key={index} content={item} index={index}/>
                    })
                }
            </ul>
        </React.Fragment>
    );
  }
}
export default TodoList;
