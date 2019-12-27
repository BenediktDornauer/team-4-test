import * as React from "react";

//design template
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

//src files
import { LoginProperties } from "./LoginProperties";
import { LoginState } from "./LoginState";
import { LoginDTO } from "../../Dtos/LoginDTO";
import { LoginResultDTO } from "../../Dtos/LoginResultDTO";

const centered: React.CSSProperties = {
  textAlign: "center" as "center"
};

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export class Login extends React.Component<LoginProperties, LoginState> {
  public state: LoginState = {
    password: "",
    username: "",
    result: ""
  };

  private loginDTO: LoginDTO | undefined;

  constructor(props: LoginProperties) {
    super(props);
    this.onUserChanged = this.onUserChanged.bind(this);
    this.onPasswordChanged = this.onPasswordChanged.bind(this);
    this.onLoginClick = this.onLoginClick.bind(this);
    this.onResultsAreIn = this.onResultsAreIn.bind(this);
  }

  public async onLoginClick(): Promise<void> {
    this.loginDTO = {
      password: this.state.password,
      username: this.state.username
    };
    var stringVal = JSON.stringify({
      password: this.state.password,
      username: this.state.username
    });
    console.log(stringVal);
    try {
      let response = await fetch("http://127.0.0.1:8080/login", {
        method: "POST",
        body: JSON.stringify(this.loginDTO),
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      });
      let jsonResult = await response.json();
      let jsonObject: LoginResultDTO = JSON.parse(JSON.stringify(jsonResult));
      this.onResultsAreIn(jsonObject);
    } catch {
      this.setState({
        ...this.state,
        result: "Fehler bei Webserver abruf."
      });
    }
  }

  public onResultsAreIn(dto: LoginResultDTO): void {
    this.setState({
      ...this.state,
      result: dto.message
    });
  }

  public onUserChanged(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      ...this.state,
      username: event.target.value
    });
  }

  public onPasswordChanged(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      ...this.state,
      password: event.target.value
    });
  }

  render() {
    console.log("ExampleLogin");

    return (
      <Container component="main" maxWidth="xs">
        {/*}<CssBaseline />
        <Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> </Avatar>
        <Typography component="h1" variant="h5">
          Login
    </Typography> */}
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div>
          <h5>Benutzer:</h5>
          <input value={this.state.username} onChange={this.onUserChanged} />
        </div>
        <div>
          <h5>Passwort:</h5>
          <input
            value={this.state.password}
            onChange={this.onPasswordChanged}
          />
        </div>
        <Button onClick={this.onLoginClick}>Einloggen</Button>

        <div>
          <h3>{this.state.result}</h3>
        </div>
      </Container>
    );
  }
}
