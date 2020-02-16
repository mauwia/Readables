import {getCategories,getPostsFromCategory,addPost, deletePost, updatePost, getPost} from '../api/api'
import History from '../History'
export const GetCategories= ()=>async dispatch=>{
    let result=await getCategories()
    dispatch({type:"GET_CATEGORIES",payload:result})
}
export const GetPosts =(category)=>async dispatch=>{
    let result=await getPostsFromCategory(category)
    dispatch({type:"GET_POST_CAT" ,payload:result})   
}
export const AddPost =(post)=>async dispatch=>{
    let result =await addPost(post);
    dispatch({type:"ADD_POST_CAT",payload:result})
   History.push(`/${post.category}`)
}
export const DeletePost=(postID)=>async dispatch=>{
    let result=await deletePost(postID)
    dispatch({type:"DELETE_POST_CAT",payload:postID})
}
export const UpdatePost=(post)=>async dispatch=>{
    let result=await updatePost(post)
    dispatch({type:"UPDATE_POST_CAT",payload:post})
   History.push(`/${post.category}`)
}
export const GetPost=(postID)=>async dispatch=>{
    let result=await getPost(postID)
    dispatch({type:"GET_POST",payload:result})
}