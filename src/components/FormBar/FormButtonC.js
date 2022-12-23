import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { Button, Modal } from '@material-ui/core';
import FormC from '../Form/FormC';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles';


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
                <Fab  onClick={handleOpen} variant= 'extended' className={classes.fabButton3} >
                    <AddIcon />  Post a Contest 
                </Fab>
                <Modal open={open} onClose={handleClose}>
                
                <FormC/>
                </Modal>


            </div>
            
            

            
        </>
    );
}

export default Formbar;