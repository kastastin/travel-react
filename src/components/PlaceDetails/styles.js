import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  chip: {
    margin: '5px 5px 5px 0'
  },
  subtitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '10px 0'
  },
  spacing: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: '20px'
  },
  btnSpacing: {
    margin: '0',
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));