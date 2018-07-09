import React  from 'react';
import 'antd/dist/antd.css';
import {Input,Button,List} from 'antd';


const TodoListUi=(props)=>{
    return(
        <div style={{margin:'10px',marginLeft:'10px'}}>
            <div>
                <Input
                    value={props.inputValue}
                    placehoder="todo list "
                    style={{width:'300px'}}
                    onChange={props.handleInputChange}
                />
                <Button
                    type= "primary"
                    onClick={props.handleBtnClick}
                >提交</Button>
            </div>
            <List
                style={{marginTop:'10px',width:'300px'}}
                bordered
                dataSource={props.list}
                renderItem={(item) => (<List.Item onClick={(index)=>{props.handleItemDelete(index)}} >{item.login}</List.Item>)}
                //调用父组件带参数的函数用箭头函数
            />
        </div>
    )
};


export default TodoListUi;
