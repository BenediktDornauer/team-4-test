import { makeStyles } from "@material-ui/core/styles";

const mainDesgin = makeStyles(theme => ({
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
    display: "block",
    maxHeight: "80vh",
    overflowX: "hidden",
    scrollBehavior: "smooth"
  }
}));

export default mainDesgin;
