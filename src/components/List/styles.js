import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1), minWidth: 100, marginBottom: '20px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '20px',
  },
  marginBottom: {
    marginBottom: '20px',
  },
  list: {
    height: '70vh',
    overflow: 'auto'
  }
}));