import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Dashboard from '@material-ui/icons/Dashboard';
import Contactless from '@material-ui/icons/Contactless';
import Description from '@material-ui/icons/Description';
import AllInbox from '@material-ui/icons/AllInbox';
import List from '@material-ui/core/List';
import {GetCategories} from '../../Action';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
// import Icon from '@material-ui/core/Icon';


class List1 extends React.Component{
  componentDidMount=()=>{
      this.props.GetCategories()
  }
  render(){
        if(!this.props.cat){
          return <div>Loading</div>
        }
          let {cat}=this.props
          return <List>
            {
              cat.map(val=>(
                <Link to={`/${val.path}`} key={val.name}>
                <ListItem button key={val.name=val.name.charAt(0).toUpperCase() + val.name.substring(1)}>
                {/* <ListItemIcon>{val.name==='React'||val.name==='Udacity'?<AllInbox className='purple-text'/>:<Dashboard className='red-text'/>}</ListItemIcon> */}
              {val.name==='React' && <ListItemIcon className='orange-text'>{<AllInbox/>}</ListItemIcon>}
              {val.name==='Redux' && <ListItemIcon className='red-text'>{<Dashboard/>}</ListItemIcon>}
              {val.name==='Udacity' && <ListItemIcon className='blue-text'>{<Contactless/>}</ListItemIcon>}
              {val.name==='All' && <ListItemIcon className='green-text'>{<Description/>}</ListItemIcon>}
                  <ListItemText primary={val.name} />
                </ListItem></Link>
              ))
            }
        </List>
  }
}
let mapStateToProps=state=>{
  return{
    cat:state.Categories
  }
}
export default connect(mapStateToProps,{GetCategories})(List1)