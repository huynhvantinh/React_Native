import React, {useState, createContext} from 'react';

/**
 * Cách của Stephen thì export default đối với Context là BlogContext và chỉ export thường đối với component Provider là BlogProviderUseState
 * - cách của Stephen có vẻ hợp lý hơn vì Context sẽ được import và dùng nhiều lần còn component Provider chỉ dùng import một lần
 */

const BlogContext = createContext()

console.log("Mot: ",BlogContext);

export const BlogProviderUseState = ({children}) => {
    const [blogsState, setBlogsState] = useState([])

    function addOneBlog(tieuDe, noiDung){
        setBlogsState([...blogsState, {id: Math.floor(Math.random() * 99999),tieuDe, noiDung}])
    }
    function deleteOneBlog(id){
        console.log(id);
        setBlogsState(blogsState.filter((blog)=> blog.id != id))
    }

    return (
        <BlogContext.Provider value={{ blogsState, addOneBlog, deleteOneBlog }}>
            {console.log("Hai: ", BlogContext)}
            {children}
        </BlogContext.Provider>
    );
}

export default BlogContext;

