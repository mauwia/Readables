import React from 'react';
import MiniDrawer from './nav-side/nav-side';
// import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';
import { Route,Switch } from 'react-router-dom';
import {connect} from 'react-redux'
import All from './Categories/All'
import Add from './AUC/Add'
import Update from './AUC/Update';
import View from './View/view';



let useStyles=makeStyles(theme=>({
    root: {
        display: 'flex',
      },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
}))
let App=({cat1})=>{
        const classes = useStyles();
        if(!cat1){
          return<div><MiniDrawer/></div>
        }
        return <div className={classes.root}>
            <MiniDrawer/>
            <main className={classes.content}>  
        <div className={classes.toolbar} />
          {cat1.map(val=>{
            return<div key={val.name}><Switch><Route path={`/${val.path}`} exact render={()=>(<All path={val.path} name={val.name=val.name.charAt(0).toUpperCase() + val.name.substring(1)} />)}/>
              <Route path={`/addPost/${val.path}`} exact render={()=>(<Add path={val.path}/>)}/>
              <Route path={`/editPost/${val.path}/:id`} exact render={(props)=>(<Update path={val.path} {...props}/>)}/>
              <Route path={`/post/${val.path}/:id`} exact render={props=>(<View path={val.path} {...props} />)} />
              </Switch>
            </div>
          })}
          
      </main>
        </div>
    
}
let mapStateToProps=(state)=>{
  return{cat1:state.Categories}
}

export default connect(mapStateToProps)(App)