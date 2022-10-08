import React, {useReducer, createContext} from 'react';
import { ADD_BLOG, REMOVE_BLOG } from "./1_type";
import * as actions from './2_actionCreators';

/**
 * Cách của Stephen thì export default đối với Context là BlogContext và chỉ export thường đối với component Provider là BlogProviderUseState
 * - cách của Stephen có vẻ hợp lý hơn vì Context sẽ được import và dùng nhiều lần còn component Provider chỉ dùng import một lần
 */

const BlogContext = createContext()

console.log("Mot: ", BlogContext);

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

export const BlogProviderUseState = ({children}) => {
    const [blogsState, dispatchBlog] = useReducer(reducer, initialState); //initialState = []

    /**
     * Với cách này thì không cần truyền dispatchBlog xuống, mọi xử lý có thể đều nằm trong có file Context/Provider thì dễ quản lý hơn
     * nhưng sẽ chậm hơn tí vì cứ mỗi lần re-render là lại tạo ra các function
     */
    function addOneBlog({tieuDe, noiDung}){
        dispatchBlog(actions.addBlog({tieuDe, noiDung}));
    }

    function removeOneBlog({removed_id}){
        dispatchBlog(actions.removeBlog({removed_id}));
    }

    return (
        <BlogContext.Provider value={{ blogsState, addOneBlog, removeOneBlog }}>
            {console.log("Hai: ", BlogContext)}
            {children}
        </BlogContext.Provider>
    );
}

export default BlogContext;

