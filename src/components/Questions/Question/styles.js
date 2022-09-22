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
    borderRadius: '15px',
    background:'#1a1a1a',
    height: '100%',
    width: '100%',
    position: 'relative',
    boxShadow: '-2.5px -2.5px 6px 2.5px rgba(255, 255, 255, 0.25), 2.5px 2.5px 6px 2.5px rgba(5, 5, 10, 0.75)',
  },
  name: {
    fontSize: '2vh',
  },
  KPcount: {
    fontSize: '1.5vh',
    padding: '0.5vh'

  },
  purple:{
    width: '2vh',
    height: '2vh'
  },
  KPnumber: {
    border: '0.12vw solid rgba(255, 255, 255, 0.6)',
    borderRadius: '1.5vh',
    boxShadow: '1px 1px 2px rgba(5, 5, 10, 0.8), -1px -1px 2px rgba(255, 255, 255, 0.20), inset 1px 1px 2px rgba(5, 5, 10, 0.8), inset -1px -1px 2px rgba(255, 255, 255, 0.20)',
  },
  tags: {
    fontSize: '2vh',
    color: '#c935ff'
  },
  message:{
    color: '#e2e2de'
  },
  title1: {
    padding: '0 16px',
    color: '#e2e2de',
    fontSize: '2vh'
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
    margin: '425px',
    marginLeft: '750px',

  },
});