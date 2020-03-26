import React from 'react'
import { connect } from 'react-redux'
import uuid1 from 'uuid/v1'
import SimpleSelect from './Select'
import {getPost} from '../../api/api'
class Combine extends React.Component{
    state={
        title:'',auth:'',body:'',cat:this.props.path
    }
    
    onsubmit=(e)=>{
        e.preventDefault()
        let date=new Date()
        let post={
          id:this.props.post.id?this.props.post.id:uuid1(),
          timestamp:this.props.post.timestamp?this.props.post.timestamp:date.getTime(),
          title:this.state.title,
          body:this.state.body,
          author:this.state.auth,
          category:this.state.cat
        }
        this.props.submitPar(post)
        this.setState({title:'',auth:'',body:''})
    }
    async componentDidMount(){
      if(this.props.purpose==='Update'){
        let post=await getPost(this.props.id)
        this.setState({
          title:post.title,
          auth:post.author,
          body:post.body
        })
      }
    }
    onChangecat=e=>{
      this.setState({cat:e.target.value})
    }
    render(){
        if(!this.props.post){
          return<div>Loading</div>
        }
        return <div className="row">
        <form className="col s12" onSubmit={this.onsubmit}>
          <div className="row">
            <SimpleSelect cat={this.state.cat} onChangecat={this.onChangecat}/>
            <div className="input-field col s6">
              <input  id="first_name" type="text" className="validate" value={this.state.title} onChange={e=>this.setState({title:e.target.value})}/>
              <label htmlFor="first_name">Title</label>
            </div>
            <div className="input-field col s6">
              <input  id="first_name1" type="text" className="validate" value={this.state.auth} onChange={e=>this.setState({auth:e.target.value})}/>
              <label htmlFor="first_name1">Author</label>
            </div>
            <div className="input-field col s6">
              <input  id="first_name2" type="text" className="validate" value={this.state.body} onChange={e=>this.setState({body:e.target.value})}/>
              <label htmlFor="first_name2">Body</label>
            </div>
            <button className='btn btn-large col s6 blue darken-3'>{this.props.purpose}</button>
            
           </div>
            </form>
            </div>
            
            
           
        
    }

}
let mapStateToProps=state=>{
  return{
    post:state.Posts
  }
}
export default connect(mapStateToProps)(Combine)