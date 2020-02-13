import React from 'react'
import Combine from './Combine'
import {AddPost} from '../../Action'
import {connect} from 'react-redux'

class Add extends React.Component{
    submitPar=formValues=>{
        this.props.AddPost(formValues)
        // console.log(formValues)
    }
    render(){
    return <div>{this.props.path}
        <Combine submitPar={this.submitPar}/>
    </div>
    }
}
export default connect(null,{AddPost})(Add)