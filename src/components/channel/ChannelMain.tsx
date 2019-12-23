import * as React from "react";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
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
import SettingsIcon from "@material-ui/icons/Settings";
import Typography from "@material-ui/core/Typography";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Grid from "@material-ui/core/Grid";

import * as CSS from "csstype";
//hilfreich: https://codesandbox.io/s/practical-faraday-zmkdm-updated-zmkdm

//MESSAGES - everything for the message scope (writing, sending, message stream...)
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
      message:
        "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Let",
      color: "#F8F8FF",
      direction: "flex-start"
    },
    {
      message:
        "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Let",
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
        style={{ background: obj.color, maxWidth: "60%" }}
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
    <div style={{ paddingTop: "15px" }}>
      <div style={container}>
        <TextField
          rows={3}
          multiline
          aria-label="maximum height"
          placeholder="Maximum 4 rows"
          defaultValue="Nachricht"
          variant="outlined"
          fullWidth={true}
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

const MessageScope = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={11}>
          <ChatLayout />
          <InputMessage />
        </Grid>
        <Grid item xs={1}>
          <div style={{ textAlign: "right" }}>
            <IconButton aria-label="delete" color="primary">
              <SettingsIcon />
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

//CHANNELS - everything to list the CHANNELS
const AllChannels = () => {
  const [chanelType, setChanelType] = React.useState("all");
  const handlChannelType = (
    event: React.MouseEvent<HTMLElement>,
    chanelType: string
  ) => {
    setChanelType(chanelType);
  };

  var channels = [
    { name: "Channel 1", type: "private" },
    { name: "Channel 2", type: "private" },
    { name: "Channel 3", type: "private" }
  ];

  const listChannels = channels.map((obj, i = 0) => (
    <ListItem button>
      <ListItemText primary={obj.name} />
    </ListItem>
  ));

  return (
    <div arial-label="text formatting">
      <div style={{ textAlign: "center", padding: "10px" }}>
        <ToggleButtonGroup
          value={chanelType}
          exclusive
          onChange={handlChannelType}
          color="prigmary"
          aria-label="outlined primary button group"
        >
          <ToggleButton value="all" aria-label="left aligned">
            All
          </ToggleButton>
          <ToggleButton value="private" aria-label="left aligned">
            Private
          </ToggleButton>
          <ToggleButton value="groups" aria-label="left aligned">
            Groups
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <List component="nav" aria-label="secondary mailbox folders">
        {listChannels}
      </List>
    </div>
  );
};

//MAIN - combine CHANNELS and MESSAGES
const mainDesing = makeStyles(theme => ({
  containerMain: {
    display: "flex",
    justifyContent: "center",
    minHeight: "80vh"
  },
  itemChannels: {
    flexGrow: 1
  },
  itemMessages: {
    flexGrow: 8,
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      background: "green"
    }
  }
}));

const ChannelMain = () => {
  const mainDesign = mainDesing();

  return (
    <div>
      <div className={mainDesign.containerMain}>
        <div className={mainDesign.itemChannels}>
          <AllChannels />
        </div>
        <div className={mainDesign.itemMessages}>
          <MessageScope />
          {/*<Divider variant="middle" orientation="vertical" />*/}
        </div>
      </div>
    </div>
  );
};

export default ChannelMain;
