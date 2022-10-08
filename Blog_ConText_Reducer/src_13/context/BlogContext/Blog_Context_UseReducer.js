import { ADD_BLOG, REMOVE_BLOG, EDIT_BLOG } from "./1_type";
import * as actions from './2_actionCreators';
import createDataForContext from '../createDataForContext';

/**
 * Cách của Stephen thì export default đối với Context là BlogContext và chỉ export thường đối với component Provider là BlogProviderUseState
 * - cách của Stephen có vẻ hợp lý hơn vì Context sẽ được import và dùng nhiều lần còn component Provider chỉ dùng import một lần
 */

/**
 * CÁCH 13 - có dùng thêm createDataForContext - OK
 * Với cách này thì không cần truyền dispatchBlog xuống, mọi xử lý có thể đều nằm trong có file Context/Provider thì dễ quản lý hơn
 * nhưng sẽ chậm hơn tí vì cứ mỗi lần re-render là lại tạo ra các function
 * - Cách 7 gọn hơn cách 8, 9 và 10 (casch 10 bị lỗi), 
 * - Cách 11 Ok nhưng không gọn bằng cách 12
 * - Chọn cách 12 giống Stephen là chuẩn và gọn nhất
 * - Cách 13 cải tiến hơn cách 12 đó là tách form thành component riêng
 */


const initialState = [{id: 111, tieuDe:"blog111", noiDung:"noi dung 111"}];
// const initialState = [];

function reducer(blogsState, action){
    switch (action.type) {
        case ADD_BLOG:
            console.log("Vô ADD_BLOG");
            return [...blogsState, {id: Math.floor(Math.random() * 99999), tieuDe: action.payload.tieuDe, noiDung: action.payload.noiDung}];
    
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
function addOneBlog(dispatch){
    return ({tieuDe, noiDung, callbackResetInput, callbackGoToIndexScreen})=>{
        dispatch(actions.addBlog({tieuDe, noiDung}));
        console.log("Vao function addOneBlog - CACH 13");
        callbackResetInput();
        callbackGoToIndexScreen();
    }
    
}

//OK
/*const removeOneBlog = (dispatch)=>{
    return ({removed_id})=>{
        console.log("Vao function removeOneBlog - CACH 13");
        dispatch(actions.removeBlog({removed_id}));
    }
}*/
const removeOneBlog = (dispatch) => ({removed_id}) => {
        console.log("Vao function removeOneBlog - CACH 13");
        dispatch(actions.removeBlog({removed_id}));
    }

const editOneBlog = (dispatch) => ({edited_id, newTieuDe, newNoiDung, callbackResetInput, callbackGoToShowScreen}) => {
        console.log("Vao function editOneBlog - CACH 13");
        dispatch(actions.editBlog({edited_id, newTieuDe, newNoiDung}));
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
        logicFunctions:{addOneBlog, removeOneBlog, editOneBlog}
    }
);

    

