import { ADD_BLOG, REMOVE_BLOG, EDIT_BLOG, LOAD_BLOGS } from "./1_type";
import * as actions from './2_actionCreators';
import createDataForContext from '../createDataForContext';
import axios from "axios";
import axios_configued from "../../axios_configuration/axios_configued";

/**
 * Cách của Stephen thì export default đối với Context là BlogContext và chỉ export thường đối với component Provider là BlogProviderUseState
 * - cách của Stephen có vẻ hợp lý hơn vì Context sẽ được import và dùng nhiều lần còn component Provider chỉ dùng import một lần
 */

/**
 * CÁCH 15 - có dùng thêm createDataForContext - OK
 * Với cách này thì không cần truyền dispatchBlog xuống, mọi xử lý có thể đều nằm trong có file Context/Provider thì dễ quản lý hơn
 * nhưng sẽ chậm hơn tí vì cứ mỗi lần re-render là lại tạo ra các function
 * - Cách 7 gọn hơn cách 8, 9 và 10 (casch 10 bị lỗi), 
 * - Cách 11 Ok nhưng không gọn bằng cách 12
 * - Chọn cách 12 giống Stephen là chuẩn và gọn nhất
 * - Cách 13 cải tiến hơn cách 12 đó là tách form thành component riêng
 * - Cách 15 có bổ sung thêm từ cách 13 đó là dùng API bên ngoài để lấy và lưu dữ liệu - Dùng JSON server của npm
 * 
 * 
 * - Cách tạo Json-server: Xem video 2 và 3 Bài 13
 * Tạo một thư mục mới (ví dụ Blog_Json_Server) rồi chạy các lệnh sau
 *      + $ npm init (Sau đó cứ gõ Enter chứ không cần điền gì cho đến khi quay trở lại command line là được)
 *      + $ npm install json-server
 *      + $ npm install ngrok (cài đặt luôn ngrok để chạy ở server này luôn mà không cần phải mở ngrok riêng)
 *      + Sửa lại cấu hình trong package.json để khi sử dụng server chỉ cần dùng hai lệnh npm run db và npm run tunnel (ở hai terminal khác nhau):
 *              "db": "json-server -w db.json",
 *              "tunnel": "ngrok http 3000"
 *      + Bên client nhớ phải dùng Axios: 
 *        $ npm i axios
 */


const initialState = [{id: 111, tieuDe:"blog111", noiDung:"noi dung 111"}];
// const initialState = [];

function reducer(blogsState, action){
    switch (action.type) {
        case LOAD_BLOGS:
            console.log("Vô LOAD_BLOGS");
            return action.payload;
    
        case ADD_BLOG:
            console.log("Vô ADD_BLOG");
            return [...blogsState, action.payload];
            // return [...blogsState, {id: Math.floor(Math.random() * 99999), tieuDe: action.payload.tieuDe, noiDung: action.payload.noiDung}];
    
        case REMOVE_BLOG:
            console.log("Vô REMOVE_BLOG: " + action.payload.removed_id);
            return blogsState.filter((blog)=> blog.id !== action.payload.removed_id);
    
        case EDIT_BLOG:
            console.log("Vô EDIT_BLOG: " + action.payload.edited_id);
            /*OK const id_edited_blog = blogsState.findIndex((blog => blog.id === action.payload.edited_id));
            blogsState[id_edited_blog].tieuDe = action.payload.newTieuDe;
            blogsState[id_edited_blog].noiDung = action.payload.newNoiDung;
            return [...blogsState];*/
            return blogsState.map((blog)=>{
                /*Ok if(blog.id === action.payload.edited_id){
                    return {...blog, tieuDe:action.payload.newTieuDe, noiDung: action.payload.newNoiDung}; //OK
                    // return action.payload; //KHÔGN OK (nếu đổi lại các key của payload thì được - vì suy cho cùng action.payload cũng giống một đối tượng blog - nhưng nếu đối tượng blog phức tạp hơn thì cách này ko đúng nữa)
                }
                return blog;*/
                return (blog.id === action.payload.edited_id) ? {...blog, tieuDe:action.payload.newTieuDe, noiDung: action.payload.newNoiDung} : blog;
            });
            

        default:
            console.log("Vô default");
            return blogsState;
    }
}

///////////// dưới đây là những logic cần xử lý
//OK - cách này thì có phần load bên trong useEffect - không hay bằng cách dưới
function loadBlogs(dispatch){
    return (blogs)=>{
        console.log("Vao function loadBlogs - CACH 15 (1)");
        dispatch(actions.loadBlogs(blogs));
        console.log("Vao function loadBlogs - CACH 15");
    }
}

function loadBlogsAPI(dispatch){
    return async ()=>{
        // const response = await axios.get("https://6de3-2405-4802-9114-83c0-fc24-9090-52e0-c857.ap.ngrok.io/blogposts"); //OK
        const response = await axios_configued.get("/blogposts"); //OK- để blogposts cũng OK
        // const response = axios.get("https://6de3-2405-4802-9114-83c0-fc24-9090-52e0-c857.ap.ngrok.io/blogposts");
        //console.log(response.data);
        //console.log(typeof response.data);
        dispatch(actions.loadBlogs(response.data));
        console.log("Vao function loadBlogs - CACH 15");
    }
}

function addOneBlog(dispatch){
    return ({tieuDe, noiDung, callbackResetInput, callbackGoToIndexScreen})=>{
        dispatch(actions.addBlog({tieuDe, noiDung}));
        console.log("Vao function addOneBlog - CACH 15");
        callbackResetInput();
        if(callbackGoToIndexScreen){
            callbackGoToIndexScreen();
        }
    }
}

function addOneBlogAPI(dispatch){
    return async ({tieuDe, noiDung, callbackResetInput, callbackGoToIndexScreen})=>{
        const response = await axios_configued.post("/blogposts", {tieuDe, noiDung});
        // console.log("response");
        // console.log(response);
        const id = response.data.id
        dispatch(actions.addBlogAPI({id,tieuDe, noiDung}));
        console.log("Vao function addOneBlogAPI - CACH 15");
        callbackResetInput();
        if(callbackGoToIndexScreen){
            callbackGoToIndexScreen();
        }
    }
}

//Cách này phải bổ sung event didFocus trong useEffect bên trang Index
function addOneBlogAPI_2(dispatch){
    return async ({tieuDe, noiDung, callbackResetInput, callbackGoToIndexScreen})=>{
        const response = await axios_configued.post("/blogposts", {tieuDe, noiDung});
        console.log("Vao function addOneBlogAPI_2 - CACH 15");
        callbackResetInput();
        if(callbackGoToIndexScreen){
            callbackGoToIndexScreen();
        }
    }
}

function addOneBlogAPI_3(dispatch){
    return async ({tieuDe, noiDung, callbackResetInput, callbackGoToIndexScreen})=>{
        const response = await axios_configued.post("/blogposts", {tieuDe, noiDung});
        console.log("Vao function addOneBlogAPI_3 - CACH 15");

        //load lại danh sách những blog từ server
        const response2 = await axios_configued.get("/blogposts");
        dispatch(actions.loadBlogs(response2.data));
        callbackResetInput();
        if(callbackGoToIndexScreen){
            callbackGoToIndexScreen();
        }
    }
}

//OK
/*const removeOneBlog = (dispatch)=>{
    return ({removed_id})=>{
        console.log("Vao function removeOneBlog - CACH 15");
        dispatch(actions.removeBlog({removed_id}));
    }
}*/
const removeOneBlog = (dispatch) => ({removed_id}) => {
        console.log("Vao function removeOneBlog - CACH 15");
        dispatch(actions.removeBlog({removed_id}));
    }

const removeOneBlogAPI = (dispatch) => async ({removed_id}) => {
        console.log(`/blogposts/${removed_id}`);
        const response = await axios_configued.delete(`/blogposts/${removed_id}`);
        dispatch(actions.removeBlog({removed_id}));
        console.log("Vao function removeOneBlogAPI - CACH 15");
    }

const removeOneBlogAPI_2 = (dispatch) => async ({removed_id}) => {
        console.log(`/blogposts/${removed_id}`);
        const response = await axios_configued.delete(`/blogposts/${removed_id}`);
        //load lại danh sách những blog từ server
        const response2 = await axios_configued.get("/blogposts");
        dispatch(actions.loadBlogs(response2.data));
        console.log("Vao function removeOneBlogAPI_2 - CACH 15");
    }

const editOneBlog = (dispatch) => ({edited_id, newTieuDe, newNoiDung, callbackResetInput, callbackGoToShowScreen}) => {
        console.log("Vao function editOneBlog - CACH 15");
        dispatch(actions.editBlog({edited_id, newTieuDe, newNoiDung}));
        callbackResetInput();
        if(callbackGoToShowScreen){
            callbackGoToShowScreen();
        }
    }

const editOneBlogAPI = (dispatch) => async({edited_id, newTieuDe, newNoiDung, callbackResetInput, callbackGoToShowScreen}) => {
        const response = await axios_configued.put(`/blogposts/${edited_id}`, {tieuDe:newTieuDe, noiDung:newNoiDung});
        dispatch(actions.editBlog({edited_id, newTieuDe, newNoiDung}));
        console.log("Vao function editOneBlogAPI - CACH 15");
        callbackResetInput();
        if(callbackGoToShowScreen){
            callbackGoToShowScreen();
        }
    }

const editOneBlogAPI_2 = (dispatch) => async({edited_id, newTieuDe, newNoiDung, callbackResetInput, callbackGoToShowScreen}) => {
        const response = await axios_configued.put(`/blogposts/${edited_id}`, {tieuDe:newTieuDe, noiDung:newNoiDung});
        
        // dispatch(actions.editBlog({edited_id, newTieuDe, newNoiDung}));
        //load lại danh sách những blog từ server
        const response2 = await axios_configued.get("/blogposts");
        dispatch(actions.loadBlogs(response2.data));
        console.log("Vao function editOneBlogAPI_2 - CACH 15");
        callbackResetInput();
        if(callbackGoToShowScreen){
            callbackGoToShowScreen();
        }
    }
///////////// hết phần liệt viết những logic cần xử lý


console.log("Chay function createDataForContext");
export const {Context, Provider} = createDataForContext(
    {
        reducer,
        initialState,
        logicFunctions:{
            loadBlogs, loadBlogsAPI,
            addOneBlog, addOneBlogAPI, addOneBlogAPI_2, addOneBlogAPI_3,
            removeOneBlog, removeOneBlogAPI, removeOneBlogAPI_2,
            editOneBlog, editOneBlogAPI, editOneBlogAPI_2
            }
    }
);

    

