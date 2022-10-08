import React, {useReducer, createContext} from 'react';
import { ADD_BLOG, REMOVE_BLOG } from "./1_type";
import * as actions from './2_actionCreators';
import createDataForContext from '../createDataForContext';

/**
 * Cách của Stephen thì export default đối với Context là BlogContext và chỉ export thường đối với component Provider là BlogProviderUseState
 * - cách của Stephen có vẻ hợp lý hơn vì Context sẽ được import và dùng nhiều lần còn component Provider chỉ dùng import một lần
 */



const initialState = [];

function reducer(blogsState, action){
    switch (action.type) {
        case ADD_BLOG:
            console.log("Vô ADD_BLOG");
            return [...blogsState, {id: Math.floor(Math.random() * 99999), tieuDe: action.payload.tieuDe, noiDung: action.payload.noiDung}];
    
        case REMOVE_BLOG:
            console.log("Vô REMOVE_BLOG: " + action.payload.removed_id);
            return blogsState.filter((blog)=> blog.id != action.payload.removed_id);
    
        default:
            console.log("Vô default");
            return blogsState;
    }
}

///////////// dưới đây là những logic cần xử lý
function addOneBlog(dispatch){
    return ({tieuDe, noiDung, callBackResetInput})=>{
        dispatch(actions.addBlog({tieuDe, noiDung}));
        console.log("Vao function addOneBlog - CACH 10");
        // callBackResetInput();
    }
    
}

//OK
/*const removeOneBlog = (dispatch)=>{
    return ({removed_id})=>{
        console.log("Vao function removeOneBlog - CACH 9");
        dispatch(actions.removeBlog({removed_id}));
    }
}*/
const removeOneBlog = (dispatch) => ({removed_id}) => {
        console.log("Vao function removeOneBlog - CACH 10");
        dispatch(actions.removeBlog({removed_id}));
    }
///////////// hết phần liệt viết những logic cần xử lý

console.log("Chay function createDataForContext");
const {Context, functionCreate} = createDataForContext({reducer,initialState, logicFunctions:{addOneBlog, removeOneBlog}})

export const BlogProviderUseReducer = ({children}) => {
    const Provider = functionCreate();
    /**
     * CÁCH 10 - có dùng thêm createDataForContext - Bị lỗi sau khi create xong thì tự về trang index
     * Với cách này thì không cần truyền dispatchBlog xuống, mọi xử lý có thể đều nằm trong có file Context/Provider thì dễ quản lý hơn
     * nhưng sẽ chậm hơn tí vì cứ mỗi lần re-render là lại tạo ra các function
     * - Cách 7 gọn hơn cách 8, 9 và 10
     */
    

    return (
        <Provider>
            {children}
        </Provider>
    );
}

export default Context;

