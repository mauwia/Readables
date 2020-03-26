import React from 'react'
import {GetPosts} from '../../Action'
import {connect} from 'react-redux'
import  Card  from '../Cards/Card'
import { Link } from 'react-router-dom'



class All extends React.Component{
    componentDidMount(){
        this.props.GetPosts(this.props.path)
    }
    render(){
        return<div>
            <h4>Posts Related {this.props.name}</h4>
            <div className='row'>
            <Link to={`/addPost/${this.props.path}`} className='btn btn-large blue darken-3 col s12'>Add Post</Link></div>
            {this.props.posts.length===0 && <h4>Not Today</h4>}
            <Card/>
        </div>
    }
}
let mapStateToProps=state=>{
    return{
        posts:Object.values(state.Posts)
    }
}
export default connect(mapStateToProps,{GetPosts})(All)