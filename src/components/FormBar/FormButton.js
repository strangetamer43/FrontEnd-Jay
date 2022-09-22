import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { Button, Modal } from '@material-ui/core';
import FormQ from '../Form/FormQ';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles';

import styles from "../PostDetails/styles";

function Formbar() {
    const [formbar, setFormbar] = useState(false);
    const showFormbar = () => setFormbar(!formbar);
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const handleOpen = () => setOpen(true);
    

    const handleClose = () => setOpen(false);
    return (
        <>
            <div className="formbar">
                <Fab  onClick={handleOpen} variant= 'extended' className={classes.fabButton4} >
                    <AddIcon />  Post a Question 
                </Fab>
                <Modal open={open} onClose={handleClose}>
                
                <FormQ/>
                </Modal>


            </div>
            
            

            
        </>
    );
}

export default Formbar;