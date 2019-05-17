import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FileCopy from '@material-ui/icons/FileCopy';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

//class App extends React.Component {
//  state = {
//    value: '',
//    copied: false,
//  };
//
//  render() {
//    return (
//      <div>
//        <input value={this.state.value}
//          onChange={({target: {value}}) => this.setState({value, copied: false})} />
//
//        <CopyToClipboard text={this.state.value}
//          onCopy={() => this.setState({copied: true})}>
//          <span>Copy to clipboard with span</span>
//        </CopyToClipboard>
//
//        <CopyToClipboard text={this.state.value}
//          onCopy={() => this.setState({copied: true})}>
//          <button>Copy to clipboard with button</button>
//        </CopyToClipboard>
//
//        {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
//      </div>
//    );
//  }
//}

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '80vw',
  },
});

function App(props) {
  return (
    <div className="App">
      <Code {...props}>
        puts "hello world"
      </Code>
    </div>
  );
}

const Code = (props) => {
  const { classes } = props;
  return (
    <Paper className={classes.root} elevation={1}>

      <Typography variant="h5" component="h3">
        This is a sheet of paper.
        <CopyToClipboard text={props.children}>
          <IconButton className={classes.button}>
            <FileCopy />
          </IconButton>
        </CopyToClipboard>
      </Typography>

      <Typography component="p">
        <code>
          {props.children}
        </code>
      </Typography>

    </Paper>
  );
}

export default withStyles(styles)(App);
