//用actionCreator创建统一的action
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION } from './actionTypes';//引入常量

//为了封装  const  action={
//             // type:'add_todo_item'
//             type:ADD_TODO_ITEM
//         };
export  const getInputChangeAction=(value)=>({
    type:CHANGE_INPUT_VALUE,
    value:value,
});

export  const getAddItemActiom=()=>({
    type:ADD_TODO_ITEM,
});
export const getDeleteItemAction=(index)=>({
    type:DELETE_TODO_ITEM,
    index:index,
});
export const initListAction=(data)=>({
    type:INIT_LIST_ACTION,
    data,
});
