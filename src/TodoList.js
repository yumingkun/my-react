import React ,{Component}from 'react';

import store from './store/index';

import {getInputChangeAction,getAddItemActiom,getDeleteItemAction,initListAction}from './store/actionCreator';
import TodoListUi from './TodoListUi';
import  axios from 'axios';



class TodoList extends  Component{
    constructor(props){
        super(props);
        this.state=store.getState();
        store.subscribe(this.handleStoreChange)
    }
    render(){
        return(
            <TodoListUi
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }

    //使用网络数据，进行初始化
    componentDidMount(){
       axios.get('https://api.github.com/users')//上面已经引入地址
           .then((res)=>{
              // console.log(res);//得要所有结果
               const data=res.data;//具体看数据
             //  console.log(data)
               const action=initListAction(data);
               store.dispatch(action);
           })

    }

    handleInputChange=(e)=>{
        const action=getInputChangeAction(e.target.value);
        store.dispatch(action);

    };


    handleStoreChange=()=>{
        this.setState(store.getState());
    };

    handleBtnClick=()=>{

        const action=getAddItemActiom();
        store.dispatch(action);
    };


    handleItemDelete=(index)=>{

        const action=getDeleteItemAction(index);
        store.dispatch(action);
    }
}

export default TodoList;