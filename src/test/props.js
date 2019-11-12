import React,{Component} from 'react';
import PropTypes from 'prop-types';//验证类型
class PropsList extends Component{
    static defaultProps={
        title:'aaa123'
    }
    render(){
        let {title,list}=this.props
        return (
            <React.Fragment>
                <span>{/*{this.props.title}*/}{title}</span>
                <ul>
                    {list.map((item,index)=>{
                        console.log(item)
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </React.Fragment>
        )
    }
}
// 类的静态属性
/*PropsList.defaultProps={
    title:'aaa123'
};
console.dir(PropsList);*/
PropsList.propTypes={
    title:PropTypes.string,
    list:PropTypes.array
}
export default PropsList