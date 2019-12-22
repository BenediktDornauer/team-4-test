import * as React from "react";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send';
import AttachFileSharpIcon from '@material-ui/icons/AttachFileSharp';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid } from "@material-ui/core";
//import Upload from 'material-ui-upload/Upload';


function TagDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item md={4}>
            TEST
          </Grid>
          <Grid item md={8}>
            <IconButton aria-label="delete"
                color="primary" 
                onClick={handleClickOpen}>
                     #
            </IconButton> 
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Tag</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Create a tag: 
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
        </Grid>
        </Grid>
      </div>
    );
  }

function UploadDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
   {/* onFileLoad = (e, file) => console.log(e.target.result, file.name); */}

    return (
      <div>
            <IconButton aria-label="delete"
                color="primary" 
                onClick={handleClickOpen}>
                    <AttachFileSharpIcon />
            </IconButton> 
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Tag</DialogTitle>
          <DialogContent>
             {/*  <Upload label="Add" onFileLoad={this.onFileLoad}/> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Upload&Send
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }


class ChannelMain extends React.Component {
    render() {
        return (
            <div> {/*list all possible channels */} 
                <TextField
                rows={3}
                multiline
                aria-label="maximum height"
                placeholder="Maximum 4 rows"
                defaultValue="Nachricht"
                variant="outlined"
                />
                <IconButton aria-label="delete" color="primary">
                    <SendIcon />
                </IconButton> 
                <UploadDialog></UploadDialog>
                <TagDialog></TagDialog>
            </div> 
        )
    }
}
export default ChannelMain;