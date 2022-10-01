import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    leftSide: {
        marginTop: '15vh',
        marginLeft: '5vw',
        width: '50vw',
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
            width: '35vw'
        }
    },
    rightSide: {
        marginTop: '10vh',

        width: '50vw',
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
            width: '35vw'
        }
    },
    challenges: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '20px',
        paper: {
            "@media (max-width: 768px)": {
                width: '50px'
            }

        }
    },
    topButtons: {
        marginTop: '40px',
        marginLeft: '75vw',
        "@media (min-width:1400)": {

        },
        // Laptop media Query
        "@media (max-width: 1400px)": {
            width: '20%',
            login: {
                position: 'absolute',

            },
            about: {
                position: 'relative'
            }

        },

        // tablet media query
        "@media (max-width: 1000px)": {

            width: '30%',
            login: {
                position: 'absolute',

            },
            about: {
                position: 'relative'
            }
        },
        // Mobile Media Query    
        "@media (max-width: 768px)": {
            width: '45%',
            marginLeft: '55vw',
            login: {
                position: 'absolute',

            },
            about: {
                position: 'relative'
            }
        }
    },
    backgroundBox: {
        border: '60px solid rgba(255, 255, 255, 0.05)',

        borderRadius: '30px',

        height: '400px',
        width: '400px',
        marginTop: '42vh',
        marginLeft: '15vw',
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
            height: '150px',
            wdith: '150px',
            marginLeft: '0'
        }

    },
    Squares: {
        background: 'rgba(234, 255, 255, 0.15)',
        borderRadius: '50px',
        marginTop: '50vh',
        marginLeft: '35vw',
        width: '100px',
        height: '100px',
        "@media (min-width:1400)": {

        },
        // Laptop media Query
        "@media (max-width: 1400px)": {


        },

        // tablet media query
        "@media (max-width: 1000px)": {
            height: '70px',
            width: '70px'
        },
        // Mobile Media Query    
        "@media (max-width: 768px)": {
            height: '50px',
            width: '50px'
        }

    },
    Squares1: {
        background: 'rgba(255, 255, 255, 0.15)',
        marginTop: '50vh',

        borderRadius: '50px',
        marginLeft: '2.5vw',
        width: '100px',
        height: '100px',
        "@media (min-width:1400)": {

        },
        // Laptop media Query
        "@media (max-width: 1400px)": {


        },

        // tablet media query
        "@media (max-width: 1000px)": {
            height: '70px',
            width: '70px'


        },
        // Mobile Media Query    
        "@media (max-width: 768px)": {
            height: '50px',
            width: '50px'
        }

    },
    Squares2: {
        background: 'rgba(255, 255, 255, 0.05)',


        borderRadius: '48px',

        width: '96px',
        height: '96px',
        "@media (min-width:1400)": {

        },
        // Laptop media Query
        "@media (max-width: 1400px)": {


        },

        // tablet media query
        "@media (max-width: 1000px)": {
            height: '70px',
            width: '70px'

        },
        // Mobile Media Query    
        "@media (max-width: 768px)": {
            height: '50px',
            width: '50px'
        }

    },
    text: {
        color: '#ffffff',
        fontfamily: 'Montserrat, sans-serif',
        fontWeight: '600'
    }

});