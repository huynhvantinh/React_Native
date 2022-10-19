import { ADD_BLOG, REMOVE_BLOG, EDIT_BLOG, LOAD_BLOGS } from "./1_type";

export function addBlog({tieuDe, noiDung}){
    return {
        type: ADD_BLOG, 
        payload: {tieuDe, noiDung}
    };
}
export function addBlogAPI({id, tieuDe, noiDung}){
    return {
        type: ADD_BLOG, 
        payload: {id, tieuDe, noiDung}
    };
}

export function removeBlog({removed_id}){
    return {
        type: REMOVE_BLOG,
        payload: {removed_id} 
    };
}

export function editBlog({edited_id, newTieuDe, newNoiDung}){
    return {
        type: EDIT_BLOG,
        payload: {edited_id, newTieuDe, newNoiDung}
    };
}

export function loadBlogs(blogs){
    return {
        type: LOAD_BLOGS,
        payload: blogs
    };
}