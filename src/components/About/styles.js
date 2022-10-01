import { makeStyles } from '@material-ui/core/styles';
import { autocompleteClasses } from '@mui/material';

export default makeStyles({



    card: {
        margin: '50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: '15px',
        height: '100%',
        width: '92.5%',
        position: 'center',
        backgroundColor: '#22262b',
        // Large screen media query
        "@media (min-width:1400)": {

        },
        // Laptop media Query
        "@media (max-width: 1400px)": {

        },

        // tablet media query
        "@media (max-width: 1000px)": {

        },
        // Mobile Media Query
        "@media (max-width: 768px)": {
            marginLeft: '0',
            margin: '30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: '15px',
            height: '100%',
            position: 'relative',
            fontSize: 'small',
            Typography: {
                h5: {
                    fontSize: '100px'
                }

            }


        }
    },

    content: {
        marginLeft: '30px',
        marginRight: '30px',
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        "@media (min-width:1400)": {

        },
        // Laptop media Query
        "@media (max-width: 1400px)": {

        },

        // tablet media query
        "@media (max-width: 1000px)": {

        },
        // Mobile Media Query
        "@media (max-width: 768px)": {
            margin: '3px',
            fontSize: '50%',
            fontWeight: '100',
            h2: {
                fontSize: '50%',
                fontWeight: '100',

            }
        }

    },
    about: {
        fontWeight: '550',
        marginLeft: "38vh",
        color: 'white',
        "@media (max-width: 1024px)": {
            fontWeight: '550',
            marginLeft: "10vh",
            color: 'white',
        }
    }



});