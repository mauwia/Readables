import React from 'react'
import Combine from './Combine'
import {UpdatePost,GetPost} from '../../Action'
import {connect} from 'react-redux'

class Add extends React.Component{
    componentWillMount(){
        this.props.GetPost(this.props.match.params.id)
    }
    submitPar=formValues=>{
        this.props.UpdatePost(formValues)
    }
    render(){
    return <div>{this.props.path}
        <Combine submitPar={this.submitPar} path={this.props.path} purpose='update' />
    </div>
    }
}
let mapStateToProps=state=>{
    return{
    //    post:state.Posts
    }
  }
export default connect(mapStateToProps,{UpdatePost,GetPost})(Add)