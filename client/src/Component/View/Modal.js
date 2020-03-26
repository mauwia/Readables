import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './view.css'
import { connect } from 'react-redux';
import {CommentPost} from '../../Action'
import uuid1 from 'uuid/v1'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [comment,setComment]=React.useState("")
  const [author,setAuthor]=React.useState("")

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
    let date=new Date()
    let comment1={
      id:uuid1(),
      timestamp:date.getTime(),
      body:comment,
      author:author,
      parentId:props.postId
    }
    props.CommentPost(comment1)
    handleClose()
  }
  
  return (
    <div>
      <button type="button" className="btn right blue darken-3 card" onClick={handleOpen}>
        {props.purpose} Comment
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Enter Comment</h2>
            <div className="row">
    <form className ="col s12">
      <div className="row">
        <div className="input-field col s12">
          <input  id="first_name" type="text" onChange={e=>{setComment(e.target.value)}} value={comment} className="validate"/>
          <label htmlFor="first_name">Comment</label>
        </div>
        <div className="input-field col s12">
          <input id="first_name1" type="text" onChange={e=>{setAuthor(e.target.value)}} value={author} className="validate"/>
          <label htmlFor="first_name1">Author</label>
        </div>
        </div>
        </form>
        </div>
            <button className='btn right blue darken-3' type='submit' onClick={handleSubmit} style={{marginLeft:10}}>Add Comment</button>
            <button className='btn right blue darken-3' onClick={handleClose}>Close</button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default connect(null,{CommentPost})(TransitionsModal)
