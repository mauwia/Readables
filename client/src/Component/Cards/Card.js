import React from 'react'
import {connect} from 'react-redux'

class Card extends React.Component{
    render(){
        let {posts}=this.props
        return<div className="row">
            {
                posts.map(post=>{
                    return <div className="col s12 m10 l12 " key={post.id}>
                    <div className="card purple darken-7">
                        <div className="card-content white-text">
                <span className="card-title">{post.title}</span>
                  <p>{post.body}</p>
                <p>Total Vote:{post.voteScore}</p>
                <br/>
                <p className='right'>By:{post.author}</p>
                </div>
                <div className="card-action">
                  <a href="#" >View</a>
                  <a href="#" className='right'>Edit</a>
                  <a href='#' className='right'>Delete</a>
                     </div>
                            </div>
                    </div>
             })
            }
        </div>
    }
}
let mapStateToProps=state=>{
    return{
        posts:Object.values(state.Posts)
    }
}
export default connect(mapStateToProps)(Card)