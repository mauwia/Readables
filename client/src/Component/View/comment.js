import React from "react"
import {Link} from 'react-router-dom'
import { connect } from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {VoteComment,CommentDelete} from '../../Action'


class Comments extends React.Component{
  notify = () => toast.info("Voted Successfully");
  notify1 = () => toast.error("Deleted Successfully");

  render(){
    console.log(this.props.comments)
    return <div className='row'>
      <ToastContainer />

      {this.props.comments.map(comment=>{
        return <div className="col s12 m10 l12 " key={comment.id}>
        <div className='card blue darken-3'>
        <div className="card-content white-text row">
          <div className='col s6 m6 l6'>
      <h5>{comment.body}</h5>
      <p>By:{comment.author}</p>
      <br/><br/><br/>
      {/* <button className='btn card white blue-text' style={{marginRight:10}}>Edit</button> */}
      <button className='btn card white blue-text' onClick={()=>{this.props.CommentDelete(comment.id);this.notify1()}}>Delete</button>

      </div>
      <div className='right' style={{display:'block'}}>
      <Link  to={`/post/${this.props.post.category}/${this.props.post.id}`} onClick={()=>{this.props.VoteComment(comment.id,"upVote",this.props.post.id);this.notify()}} ><i className="material-icons white card" >expand_less</i></Link>
      <h4 >{comment.voteScore}</h4>
      <Link  to={`/post/${this.props.post.category}/${this.props.post.id}`} onClick={()=>{this.props.VoteComment(comment.id,"downVote",this.props.post.id);this.notify()}}><i className="material-icons white card">expand_more</i></Link>
      </div>
        </div>
        
        </div>
      </div>
      })}
      
    </div>
  }
}
export default connect(null,{VoteComment,CommentDelete})(Comments)