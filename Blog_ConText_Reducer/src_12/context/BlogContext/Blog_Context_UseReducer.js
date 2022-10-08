import { ADD_BLOG, REMOVE_BLOG } from "./1_type";
import * as actions from './2_actionCreators';
import createDataForContext from '../createDataForContext';

/**
 * Cách của Stephen thì export default đối với Context là BlogContext và chỉ export thường đối với component Provider là BlogProviderUseState
 * - cách của Stephen có vẻ hợp lý hơn vì Context sẽ được import và dùng nhiều lần còn component Provider chỉ dùng import một lần
 */

/**
 * CÁCH 12 - có dùng thêm createDataForContext - OK
 * Với cách này thì không cần truyền dispatchBlog xuống, mọi xử lý có thể đều nằm trong có file Context/Provider thì dễ quản lý hơn
 * nhưng sẽ chậm hơn tí vì cứ mỗi lần re-render là lại tạo ra các function
 * - Cách 7 gọn hơn cách 8, 9 và 10 (casch 10 bị lỗi), 
 * - Cách 11 Ok nhưng không gọn bằng cách 12
 * - Chọn cách 12 giống Stephen là chuẩn và gọn nhất
 */


const initialState = [];

function reducer(blogsState, action){
    switch (action.type) {
        case ADD_BLOG:
            console.log("Vô ADD_BLOG");
            return [...blogsState, {id: Math.floor(Math.random() * 99999), tieuDe: action.payload.tieuDe, noiDung: action.payload.noiDung}];
    
        case REMOVE_BLOG:
            console.log("Vô REMOVE_BLOG: " + action.payload.removed_id);
            return blogsState.filter((blog)=> blog.id !== action.payload.removed_id);
    
        default:
            console.log("Vô default");
            return blogsState;
    }
}

///////////// dưới đây là những logic cần xử lý
function addOneBlog(dispatch){
    return ({tieuDe, noiDung, callBackResetInput, callbackGoToIndexScreen})=>{
        dispatch(actions.addBlog({tieuDe, noiDung}));
        console.log("Vao function addOneBlog - CACH 12");
        callBackResetInput();
        callbackGoToIndexScreen();
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
        console.log("Vao function removeOneBlog - CACH 12");
        dispatch(actions.removeBlog({removed_id}));
    }
///////////// hết phần liệt viết những logic cần xử lý


console.log("Chay function createDataForContext");
export const {Context, Provider} = createDataForContext(
    {
        reducer,
        initialState,
        logicFunctions:{addOneBlog, removeOneBlog}
    }
);

    

