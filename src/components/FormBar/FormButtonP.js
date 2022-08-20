import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { Button, Modal } from '@material-ui/core';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import useStyles from './styles';

import FormP from "../Form/FormP";

function FormbarP() {
    const [formbar, setFormbar] = useState(false);
    const showFormbar = () => setFormbar(!formbar);
    const [currentId, setCurrentId] = useState(null);
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const handleOpen = () => {
        setOpen(true) && setCurrentId(profile._id);
    }

    const handleClose = () => setOpen(false);
    return (
        <>
            <div className="formbar">
                <Button  onClick={handleOpen}  className={classes.fabButton1} color='secondary'>
                    <AddIcon style={{ marginLeft: '-15px'}}/>  Update Profile 
                </Button>
                <Modal open={open} onClose={handleClose}>
                
                <FormP currentId={currentId} setCurrentId={setCurrentId}/>
                </Modal>


            </div>
            
            

            
        </>
    );
}

export default FormbarP;