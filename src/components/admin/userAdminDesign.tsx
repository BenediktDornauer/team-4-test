import { makeStyles } from "@material-ui/core/styles";

const UserAdminDesign = makeStyles(theme => ({
  container: {
    bottom: 0
  },
  bubbleContainer: {
    display: "flex"
  },
  bubbleItem: {
    border: "0.5px solid black",
    background: "#FFF0F5",
    borderRadius: "10px",
    margin: "5px",
    padding: "10px",
    display: "inline-block",
    maxWidth: "60%"
  },
  itemAvatar: {},
  inputMessagerContainer: {
    display: "flex",
    alignItems: "flex-start"
  }
}));

export default UserAdminDesign;
