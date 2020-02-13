import {getCategories,getPostsFromCategory,addPost} from '../api/api'
// import History from '../History'
export const GetCategories= ()=>async dispatch=>{
    let result=await getCategories()
    dispatch({type:"GET_CATEGORIES",payload:result})
}
export const GetPosts =(category)=>async dispatch=>{
    let result=await getPostsFromCategory(category)
    dispatch({type:"GET_POST_CAT" ,payload:result})   
}
export const AddPost =(post)=>async dispatch=>{
    post={...post,id:122,timestamp:2321,category:'udacity'}
    let result =await addPost(post);
    dispatch({type:"ADD_POST_CAT",payload:result})
}
