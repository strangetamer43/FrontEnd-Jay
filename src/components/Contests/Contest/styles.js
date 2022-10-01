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
    margin: '0 auto',
    float: 'none',
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    background: '#fdf4dc',
    borderRadius: '15px',
    height: '100%',
    width: '100%',
    position: 'relative',
    flex: 'center',
    "@media (min-width:1024)": {
      background: 'red',
    },
    // Laptop media Query
    "@media (max-width: 1023px)": {
      background: 'green',
    },

    // tablet media query
    "@media (min-width:768px)": {
      background: 'yellow',
    },
    // Mobile Media Query
    "@media (max-width: 767px)": {
      width: '80%',
      background: 'blue',

    }
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
});