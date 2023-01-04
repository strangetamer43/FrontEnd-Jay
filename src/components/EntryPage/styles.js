import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    leftSide: {
        marginTop: '15vh',
        marginLeft: '5vw',
        width: '85vw',
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
            width: '85vw'
        }
    },
    rightSide: {
        marginTop: '10vh',

        width: '85vw',
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
            width: '85vw'
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
        marginLeft: '58vw',
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
        fontWeight: '500',
        fontSize: '4vh',
        "@media (max-width: 650px)": {
            fontSize: '2.5vh',
        },
        "@media (max-width: 450px)": {
            fontSize: '2vh',
        }
    },
    text1: {
        
        fontfamily: 'Montserrat, sans-serif',
        fontWeight: '500',
        fontSize: '4vh',
        "@media (max-width: 650px)": {
            fontSize: '2.5vh',
        },
        "@media (max-width: 450px)": {
            fontSize: '2vh',
        }
    },
    textSub: {
        color: '#ffffff',
        fontfamily: 'Montserrat, sans-serif',
        fontWeight: '500',
        fontSize: '2vh',
        "@media (max-width: 650px)": {
            fontSize: '1.5vh',
        },
        "@media (max-width: 450px)": {
            fontSize: '1.3vh',
        }
    },
    textSub1: {
        
        fontfamily: 'Montserrat, sans-serif',
        fontWeight: '500',
        fontSize: '2vh',
        "@media (max-width: 650px)": {
            fontSize: '1.5vh',
        },
        "@media (max-width: 450px)": {
            fontSize: '1.3vh',
        }
    },
    buttonText: {
        color: 'white', 
        fontSize: '2vh',
        "@media (max-width: 650px)": {
            fontSize: '1.5vh',
        },
        "@media (max-width: 450px)": {
            fontSize: '1.2vh',
        }
    },
    Model: {
        
        width: '500px',
        height: '500px',
        "@media (max-width: 650px)": {
            width: '250px',
            height: '250px',
        },
        "@media (max-width: 450px)": {
            width: '200px',
            height: '200px',
        }
    },
    Model1: {
        width: '300px',
        height: '300px',
        marginLeft: '50px',
        "@media (max-width: 650px)": {
            width: '150px',
            height: '150px',
        },
        "@media (max-width: 450px)": {
            width: '100px',
            height: '100px',
        }
    },
    ModelCommunity: {
        
        width: '500px',
        height: '500px',
        "@media (max-width: 650px)": {
            width: '200px',
            height: '200px',
        },
        "@media (max-width: 450px)": {
            width: '150px',
            height: '150px',
        }
    },
});