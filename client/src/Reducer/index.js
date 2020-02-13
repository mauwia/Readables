import { combineReducers } from "redux";
import CategoriesReducer from "./CategoriesReducer";
import PostsReducer from "./PostsReducer";
import {reducer as addPostReducers} from 'redux-form'

export default combineReducers(
    {
        Categories:CategoriesReducer,
        Posts:PostsReducer,
        addPost:addPostReducers
    }
)