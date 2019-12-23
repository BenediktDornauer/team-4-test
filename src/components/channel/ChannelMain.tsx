import * as React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import AttachFileSharpIcon from "@material-ui/icons/AttachFileSharp";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";
import * as CSS from "csstype";
//hilfreich: https://codesandbox.io/s/practical-faraday-zmkdm-updated-zmkdm

//MESSAGES
const useStyles = makeStyles(theme => ({
  container: {
    bottom: 0
  },
  bubbleContainer: {
    display: "flex"
  },
  bubble: {
    border: "0.5px solid black",
    background: "#FFF0F5",
    borderRadius: "10px",
    margin: "5px",
    padding: "10px",
    display: "inline-block"
  }
}));

const ChatLayout = () => {
  const classes = useStyles();

  var valueMessages = [
    {
      message: "message 1 asdf asdf ",
      color: "#F8F8FF",
      direction: "flex-start"
    },
    {
      message: "message 1 asdf asdf ",
      color: "#B0C4DE",
      direction: "flex-end"
    },
    {
      message: "message 1 asdf asdf ",
      color: "#F8F8FF",
      direction: "flex-start"
    }
  ];

  const chatBubbles = valueMessages.map((obj, i = 0) => (
    <div
      className={`${classes.bubbleContainer}`}
      style={{ justifyContent: obj.direction }}
      key={i}
    >
      <div
        key={i++}
        className={classes.bubble}
        style={{ background: obj.color }}
      >
        {obj.message}
      </div>
    </div>
  ));
  return <div className={classes.container}>{chatBubbles}</div>;
};

//ADD new MESSAGE
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
      <IconButton aria-label="delete" color="primary" onClick={handleClickOpen}>
        #
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Tag</DialogTitle>
        <DialogContent>
          <DialogContentText>Create a tag:</DialogContentText>
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

  return (
    <div>
      <IconButton aria-label="delete" color="primary" onClick={handleClickOpen}>
        <AttachFileSharpIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Upload</DialogTitle>

        <DialogContent>
          <input accept="image/*" id="icon-button-file" type="file" />
        </DialogContent>

        <DialogActions>
          <Typography>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Upload&Send
            </Button>
          </Typography>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const container: CSS.Properties = {
  display: "flex",
  alignItems: "flex-start"
};

const InputMessage = () => {
  return (
    <div>
      <div style={container}>
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
        <UploadDialog />
        <TagDialog />
      </div>
    </div>
  );
};

//Channels
const AllChannels = () => {
  return (
    <List component="nav" aria-label="secondary mailbox folders">
      <ListItem button>
        <ListItemText primary="Channel 1" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Channel 2" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Channel 3" />
      </ListItem>
    </List>
  );
};

//COMBINED
const design = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "center"
  },
  itemChannel: {
    flexGrow: 1
  },
  itemMessages: {
    flexGrow: 8
  }
}));

const ChannelMain = () => {
  const mainLayout = design();

  return (
    <div>
      <div className={mainLayout.container}>
        <div className={mainLayout.itemChannel}>
          <AllChannels />
        </div>
        <div className={mainLayout.itemMessages}>
          <div style={{ textAlign: "right" }}>
            <IconButton aria-label="delete" color="primary">
              <SettingsIcon />
            </IconButton>
          </div>
          <ChatLayout />
          <InputMessage />
        </div>
      </div>
    </div>
  );
};

export default ChannelMain;
