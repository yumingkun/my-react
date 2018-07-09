import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION} from './actionTypes';//引入常量

const  defaultState={
    inputValue:'',
    list:[]
};

//reducer可以接收state，但是绝不能修改state
// reducer必须是纯函数
//纯函数：给固定的输入，一定有固定的输出（不能有不固定的日期函数），不会有副作用（改变参数的值）
export default (state=defaultState,action)=>{
    //input
    if (action.type===CHANGE_INPUT_VALUE){
        const  newState=JSON.parse(JSON.stringify(state));//简单的深拷贝
        newState.inputValue=action.value;
        return newState;
    }

    //button
    if (action.type===ADD_TODO_ITEM){
        const  newState=JSON.parse(JSON.stringify(state));//把老数据拷贝一份
        newState.list.push(newState.inputValue);//在列表中新加输入框内容
        newState.inputValue='';//点击提交之后，输入框清空
        // console.log(newState);
        return newState;//返回给store
    }

    //点击删除
    if (action.type===DELETE_TODO_ITEM){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;

    }

    if (action.type===INIT_LIST_ACTION){
        const  newState=JSON.parse(JSON.stringify(state));//简单的深拷贝
        newState.list=action.data;
        return newState;

    }

    return state;
}
