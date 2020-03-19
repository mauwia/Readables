import { combineReducers } from "redux";
import CategoriesReducer from "./CategoriesReducer";
import PostsReducer from "./PostsReducer";
import {reducer as addPostReducers} from 'redux-form'
import CommentsReducer from "./CommentsReducer";

export default combineReducers(
    {
        Categories:CategoriesReducer,
        Posts:PostsReducer,
        Comments:CommentsReducer

    }
)