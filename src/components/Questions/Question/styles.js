import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '30px',
    background:'#1a1a1a',
    height: '100%',
    width: '100%',
    marginBottom: '4vh',
    boxShadow: '-5px -5px 15px 5px rgba(255, 255, 255, 0.25), 5px 5px 15px 5px rgba(5, 5, 10, 0.75)',
    "@media (max-width: 650px)" : {
      boxShadow: '-3px -3px 9px 3px rgba(255, 255, 255, 0.25), 3px 3px 9px 3px rgba(5, 5, 10, 0.75)',
      marginBottom: '2vh',
    },
    "@media (max-width: 450px)" : {
      boxShadow: '-2.5px -2.5px 7.5px 2.5px rgba(255, 255, 255, 0.25), 2.5px 2.5px 7.5px 2.5px rgba(5, 5, 10, 0.75)',
      marginBottom: '2vh',
    },
  
  },
  name: {
    fontSize: '2.5vh',
    "@media (max-width: 600px)" : {
      fontSize: '2vh'
    },
    "@media (max-width: 400px)" : {
      fontSize: '1.8vh'
    },
  },
  KPcount: {
    fontSize: '2.5vh',
    padding: '1vh',
    "@media (max-width: 600px)" : {
      fontSize: '2vh'
    },
    "@media (max-width: 450px)" : {
      fontSize: '1.8vh'
    },

  },
  purple: {
    boxShadow: '-1.5px -1.5px 3px 1.5px rgba(255, 255, 255, 0.25), 1.5px 1.5px 3px 1.5px rgba(5, 5, 10, 0.75)',
    "@media (max-width: 650px)" : {
      height: '2.5vh',
      width: '2.5vh',
    },
    "@media (max-width: 450px)" : {
      height: '2.5vh',
      width: '2.5vh',
    },
    
  },
  KPnumber: {
    border: '0.12vw solid rgba(255, 255, 255, 0.6)',
    borderRadius: '1.5vh',
    boxShadow: '1px 1px 2px rgba(5, 5, 10, 0.8), -1px -1px 2px rgba(255, 255, 255, 0.20), inset 1px 1px 2px rgba(5, 5, 10, 0.8), inset -1px -1px 2px rgba(255, 255, 255, 0.20)',
  },
  tags: {
    fontSize: '2vh',
    "@media (max-width: 650px)" : {
      
      fontSize: '1.5vh',
    },
    "@media (max-width: 450px)" : {
      
      fontSize: '1.3vh',
    },
  }, 
  message:{
    color: '#e2e2de'
  },
  title1: {
    padding: '0 16px',
    color: 'white',
    fontSize: '3.5vh',
    "@media (max-width: 650px)" : {
      fontSize: '2vh'
    },
    "@media (max-width: 450px)" : {
      fontSize: '2vh'
    },
  },
  titleDiv: {
    display: 'flex',
    
  },
  time: {
    marginTop: '1vh',
    fontSize: '1.5vh',
    marginLeft: '2.8vw',
    "@media (max-width: 600px)" : {
      fontSize: '1vh'
    },
    "@media (max-width: 450px)" : {
      fontSize: '0.75vh'
    },
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardButton: {
    display: "block",
    textAlign: "initial"
  },
  nameDet: {
    display: 'flex',
    direction: "row",
    justifyContent: "flex-start",
    margin: '0px',
    marginRight: '5px',
  },
  removeDialog: {
    margin: '40vh',
    marginLeft: '40vw',
    height: '20vh', 
    width: '21vw', 
    background:'#1a1a1a',
    borderRadius: '15px',
    padding: '2vh',
    "@media (max-width: 1325px)" : {
      margin: '375px',
      marginLeft: '450px'
    },
    "@media (max-width: 1100px)" : {
      margin: '325px',
      marginLeft: '250px'
    },
    "@media (max-width: 864px)" : {
      margin: '295px',
      marginLeft: '220px'
    },
    "@media (max-width: 725px)" : {
      margin: '270px',
      marginLeft: '120px'
    },
    "@media (max-width: 650px)" : {
      marginTop: '30vh',
      marginLeft: '25vw',
      width: '50vw'
    },
    "@media (max-width: 450px)" : {
      marginTop: '30vh',
      marginLeft: '25vw',
      width: '50vw',
    },
  },
  buttons: {
    width: '15vw',
    height: '4vh',
    fontSize: '2vh',
    "@media (max-width: 900px)" : {
      width: '15vw',
      height: '3vh',
      fontSize: '1.5vh',
    },
    "@media (max-width: 650px)" : {
      width: '20vw',
      height: '3vh',
      fontSize: '0.75vh',
    },
    "@media (max-width: 400px)" : {
      width: '20vw',
      height: '2vh',
      fontSize: '0.75vh',
    },
  },
  removeDialogHeading: {
    fontWeight: '600', 
    fontSize: '2.5vh', 
    color: '#eeddee',
    "@media (max-width: 650px)" : {
      fontSize: '2vh'
    },
    "@media (max-width: 450px)" : {
      size: '1.5vh'
    },
  },
  yesbutton: {
    background: '#25b8ef',
    borderRadius: '15px',
    color: '#000000',
    boxShadow: '-1.5px -1.5px 3px 1.5px rgba(255, 255, 255, 0.25), 1.5px 1.5px 3px 1.5px rgba(5, 5, 10, 0.75)',
    '&:hover':{
      background: '#25b8ef',
    borderRadius: '15px',
    color: '#000000',
    boxShadow: '1.5px 1.5px 3px 1.5px rgba(255, 255, 255, 0.25), -1.5px -1.5px 3px 1.5px rgba(5, 5, 10, 0.75)',
    },
    "@media (max-width: 650px)" : {
      fontSize: '1.5vh'
    },
    "@media (max-width: 450px)" : {
      fontSize: '1vh'
    },
  },
  nobutton: {
    background: '#ac23e5',
    borderRadius: '15px',
    boxShadow: '-1.5px -1.5px 3px 1.5px rgba(255, 255, 255, 0.25), 1.5px 1.5px 3px 1.5px rgba(5, 5, 10, 0.75)',
    '&:hover':{
      background: '#ac23e5',
    borderRadius: '15px',
    color: '#000000',
    boxShadow: '1.5px 1.5px 3px 1.5px rgba(255, 255, 255, 0.25), -1.5px -1.5px 3px 1.5px rgba(5, 5, 10, 0.75)',
    },
    "@media (max-width: 650px)" : {
      fontSize: '1.5vh'
    },
    "@media (max-width: 450px)" : {
      fontSize: '1vh'
    },
  },
});