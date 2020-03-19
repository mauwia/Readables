import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './view.css'

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

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [comment,setComment]=React.useState()

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input  id="first_name" type="text" class="validate"/>
          <label for="first_name">Comment</label>
        </div>
        <div class="input-field col s12">
          <input id="first_name1" type="text" class="validate"/>
          <label for="first_name1">Author</label>
        </div>
        </div>
        </form>
        </div>
            <button className='btn right blue darken-3' onClick={handleClose}> Close</button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
