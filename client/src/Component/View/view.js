import React from 'react'
import { connect } from 'react-redux'
import Comments from './comment'
import {GetPost,VotePost,GetComments} from '../../Action'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link,Route} from 'react-router-dom'
import './view.css'
import TransitionsModal from './Modal'

class View extends React.Component{
    componentDidMount(){
        this.props.GetPost(this.props.match.params.id)
        this.props.GetComments(this.props.match.params.id)
    }
  notify = () => toast.info("Voted Successfully");

    render(){
        
        let {post,comments}=this.props
        return <div className='row '>
            <div className="col s12 m10 l12  " >
        <div className="card teal darken-3">
            <div className="card-content white-text">
    <h2>{post.title}</h2>
      <h5>{post.body}</h5>
    
    <br/>
    <p>By:{post.author}</p>
    <div style={{display:'block'}}>
    <h4>Comments</h4>
        <Comments comments={comments} post={post}/>
        
    </div>
    </div>
    <div className="card-action">
      <TransitionsModal purpose='Add' postId={post.id}/>
      <Link  to={`/post/${post.category}/${post.id}`} onClick={()=>{this.props.VotePost(post.id,"downVote");this.notify()}}><i className="material-icons white card" >navigate_before</i></Link>
    <h4 style={{display:'inline'}}>{post.voteScore}</h4>
      <Link  to={`/post/${post.category}/${post.id}`} onClick={()=>{this.props.VotePost(post.id,"upVote");this.notify()}}><i className="material-icons white card">navigate_next</i></Link>
      {/* <Link className='right' to={`/post/${post.category}/${post.id}/comments`}>Delete</Link> */}
 
     <div className='right'></div>

         </div>
                </div>
        </div>
      
        </div>
    }
}
let mapStateToProps=state=>{
    return{
        post:state.Posts,
        comments:Object.values(state.Comments)
    }
}
export default connect(mapStateToProps,{GetPost,VotePost,GetComments})(View)