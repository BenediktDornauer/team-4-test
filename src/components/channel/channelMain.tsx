//REACT
import * as React from "react";
import { useState } from "react";

//Material UI
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
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Avatar from "@material-ui/core/Avatar";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import InputLabel from "@material-ui/core/InputLabel";
/* eslint-disable no-use-before-define */
import Autocomplete from "@material-ui/lab/Autocomplete";

//CSS imports
import MainDesign from "./mainDesign";
import MessagesDesign from "./messagesDesign";

//hilfreich: https://codesandbox.io/s/practical-faraday-zmkdm-updated-zmkdm

const ChannelMain = () => {
  const messagesDesign = MessagesDesign();

  //MESSAGES
  //Chat conversation using bubbles
  const ChatLayout = () => {
    //TODO: messages from backend
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
      },
      {
        message: "message 1 asdf asdf ",
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
        message:
          "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Let",
        color: "#B0C4DE",
        direction: "flex-end"
      },
      {
        message:
          "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Let",
        color: "#B0C4DE",
        direction: "flex-end"
      },
      {
        message:
          "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Let",
        color: "#B0C4DE",
        direction: "flex-end"
      }
    ];

    //illustrate all messages in ubbles
    //TODO: differ between own and my  --> no flex-end or flex-start
    const chatBubbles = valueMessages.map((obj, i = 0) => (
      <div
        className={`${messagesDesign.bubbleContainer}`}
        style={{ justifyContent: obj.direction }}
        key={i}
      >
        <div className={messagesDesign.itemAvatar}>
          <Avatar alt="Profile" src="/profile.jpg" />
        </div>
        <div
          key={i++}
          className={messagesDesign.bubbleItem}
          style={{ background: obj.color }}
        >
          {obj.message}
        </div>
      </div>
    ));
    return <div className={messagesDesign.container}>{chatBubbles}</div>;
  };

  //Dialog for TAGS
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
        <IconButton
          aria-label="delete"
          color="primary"
          onClick={handleClickOpen}
        >
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
              label="Tag"
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

  //Dialog to UPDLOAD things
  //TODO: backend
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
        <IconButton
          aria-label="delete"
          color="primary"
          onClick={handleClickOpen}
        >
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

  const users = [
    { name: "nik" },
    { name: "nik2" },
    { name: "nik3" },
    { name: "nik4" }
  ];
  interface UserOptionType {
    name: string;
  }

  //Dialog for SETTINGS
  function SettingsDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <div>
        <IconButton
          aria-label="delete"
          color="primary"
          onClick={handleClickOpen}
        >
          <SettingsIcon />
        </IconButton>

        <Dialog open={open} onClose={handleClose} aria-labelledby="Setting">
          <DialogTitle id="form-dialog-title">Channel-Settings</DialogTitle>
          <DialogContent>
            <FormGroup>
              <DialogContentText>Channel name:</DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Tag"
                fullWidth
              />
              <FormControlLabel
                control={<Switch value="checkedA" />}
                label="Public?"
                style={{ marginTop: "15px" }}
              />
              <Autocomplete
                multiple
                id="chanelAdmins"
                style={{ width: "400px", marginTop: "15px" }}
                options={users}
                getOptionLabel={(option: UserOptionType) => option.name}
                filterSelectedOptions
                renderInput={params => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Admins"
                    placeholder="Favorites"
                    fullWidth
                  />
                )}
              />
              <Autocomplete
                multiple
                id="chanelUsers"
                style={{ width: "400px", marginTop: "15px" }}
                options={users}
                getOptionLabel={(option: UserOptionType) => option.name}
                filterSelectedOptions
                renderInput={params => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Users"
                    placeholder="Favorites"
                    fullWidth
                  />
                )}
              />
            </FormGroup>
          </DialogContent>
          <DialogActions>
            <Typography>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary">
                Save&Close
              </Button>
            </Typography>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  const InputMessage = () => {
    return (
      <div style={{ paddingTop: "20px" }}>
        <div className={messagesDesign.inputMessagerContainer}>
          <SettingsDialog />
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
        <div style={{ padding: "20px" }}>
          <ChatLayout />
        </div>
        <InputMessage />
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

    function openChannel() {
      toggleBettween();
      scrollToBottomMessages();
    }

    const listChannels = channels.map((obj, i = 0) => (
      <ListItem button>
        <ListItemText primary={obj.name} onClick={openChannel} />
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

  const mainDesign = MainDesign();

  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  const [changeView, setChangeView] = useState(true);
  const [viewChannels, setViewChannels] = useState(true);
  const [viewMessages, setViewMessages] = useState(true);

  function toggleBettween() {
    if (!(viewChannels && viewMessages)) {
      if (changeView) {
        setViewChannels(true);
        setViewMessages(false);
        setChangeView(!changeView);
      } else {
        setViewChannels(false);
        setViewMessages(true);
        setChangeView(!changeView);
      }
    }
  }

  const updateWidth = () => {
    setScreenWidth(window.innerWidth);
    if (screenWidth < 600) {
      if (viewChannels === true && viewMessages === true) {
        setViewChannels(true);
        setViewMessages(false);
      }
    } else {
      setViewChannels(true);
      setViewMessages(true);
      setChangeView(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  });

  var messagesEnd;

  const scrollToBottomMessages = () => {
    //ref: https://stackoverflow.com/questions/37620694/how-to-scroll-to-bottom-in-react
    const scrollHeight = messagesEnd.scrollHeight;
    const height = messagesEnd.clientHeight;
    const maxScrollTop = scrollHeight - height;
    messagesEnd.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  };

  return (
    <div>
      <div className={mainDesign.containerMain}>
        {viewChannels && (
          <div className={mainDesign.itemChannels}>
            <AllChannels />
          </div>
        )}
        {viewMessages && (
          <div
            className={mainDesign.itemMessages}
            ref={el => {
              messagesEnd = el;
            }}
          >
            {changeView && (
              <IconButton color="primary" onClick={toggleBettween}>
                <KeyboardBackspaceIcon />
              </IconButton>
            )}
            <MessageScope />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChannelMain;
