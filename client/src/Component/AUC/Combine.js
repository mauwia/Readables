import React from 'react'
import { connect } from 'react-redux'
import serializeForm from 'form-serialize'
import SimpleSelect from './Select'
class Combine extends React.Component{
    state={
        title:'',auth:'',body:'',cat:''
    }
    onsubmit=(e)=>{
        e.preventDefault()
        console.log(this.state)
        this.setState({title:'',auth:'',body:''})
    }
    onChangecat=e=>{
      this.setState({cat:e.target.value})
    }
    render(){
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
            
            <button className='btn btn-small'>Add</button>
           </div>
            </form>
            </div>
            
            
           
        
    }

}
export default connect()(Combine)