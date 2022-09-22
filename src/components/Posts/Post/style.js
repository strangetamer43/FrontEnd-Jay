import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
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
    color: 'white',
    fontSize: '3.5vh'
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    "@media (max-width: 1100px)" : {
      padding: '0 12px 8px 12px',
      
      
    },
    "@media (max-width: 900px)" : {
      padding: '0 10px 8px 10px',
      
    },
    "@media (max-width: 600px)" : {
      padding: '0 6px 3px 6px',
      
    },
    "@media (max-width: 450px)" : {
      padding: '0 1px 1px 1px',
    }
  
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
    "@media (max-width: 525px)" : {
      margin: '270px',
      marginLeft: '100px'
    },
    "@media (max-width: 448px)" : {
      margin: '250px',
      marginLeft: '90px'
    },
    "@media (max-width: 400px)" : {
      margin: '250px',
      marginLeft: '90px'
    }

  },
  name: {
    fontSize: '2.5vh',
  },
  time: {
    marginTop: '1vh',
    fontSize: '1.5vh',
    marginLeft: '2.8vw'
  },
  KPcount: {
    fontSize: '2.5vh',
    padding: '1vh'

  },
  KPnumber: {
    border: '0.25vw solid rgba(255, 255, 255, 0.6)',
    borderRadius: '3vh',
    boxShadow: '1.5px 1.5px 2.5px rgba(5, 5, 10, 0.8), -1.5px -1.5px 2.5px rgba(255, 255, 255, 0.20), inset 1.5px 1.5px 2.5px rgba(5, 5, 10, 0.8), inset -1.5px -1.5px 2.5px rgba(255, 255, 255, 0.20)',
  },
  tags: {
    fontSize: '2vh'
  }, 
  buttons: {
    width: '15vw',
    height: '4vh',
    fontSize: '2vh'
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
    }
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
    }
  }
});