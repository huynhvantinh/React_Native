import { ADD_BLOG, REMOVE_BLOG } from "./1_type";

export function addBlog({tieuDe, noiDung}){
    return {
        type: ADD_BLOG, 
        payload: {tieuDe, noiDung}
    };
}

export function removeBlog({removed_id}){
    return {
        type: REMOVE_BLOG,
        payload: {removed_id} 
    };
}