import React, {useState, createContext} from 'react';


/**
 * Cách của lúc học bên reactJS thì ngược với cách của Stephen là thì export thường đối với Context là BlogContext và export default đối với component Provider là BlogProviderUseState
 * - cách của Stephen có vẻ hợp lý hơn vì Context sẽ được import và dùng nhiều lần còn component Provider chỉ dùng import một lần
 */

export const BlogContext = createContext()
// export const BlogContext = createContext("hehe nha")
console.log("Mot: ",BlogContext);

const BlogProviderUseState = ({children}) => {
    const [blogsState, setBlogs] = useState([])

    function addOneBlog(tieuDe, noiDung){
        setBlogs([...blogsState, {id: Math.floor(Math.random() * 99999),tieuDe, noiDung}])
    }
    function deleteOneBlog(id){
        console.log(id);
        setBlogs(blogsState.filter((blog)=> blog.id != id))
    }

    return (
        <BlogContext.Provider value={{ blogsState, addOneBlog, deleteOneBlog }}>
            {console.log("Hai: ", BlogContext)}
            {children}
        </BlogContext.Provider>
    );
}

export default BlogProviderUseState;
