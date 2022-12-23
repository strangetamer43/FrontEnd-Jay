import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { Button, Modal } from '@material-ui/core';
import Form from '../Form/Form';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import useStyles from './styles';


function Formbar1() {
    const [formbar, setFormbar] = useState(false);
    const showFormbar = () => setFormbar(!formbar);
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const handleOpen = () => setOpen(true);
    

    const handleClose = () => setOpen(false);
    return (
        <>
            <div >
                <Fab  onClick={handleOpen} variant= 'extended' className={classes.fabButton2} >
                    <AddIcon style={{ marginLeft: '-15px'}} />&nbsp;  Post Something 
                </Fab>
                <Modal open={open} onClose={handleClose}>
                
                <Form/>
                </Modal>


            </div>
            
            

            
        </>
    );
}

export default Formbar1;