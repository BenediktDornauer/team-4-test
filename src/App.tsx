import * as React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import * as CSS from "csstype";
import NavBar from "./components/NavBar/navBar";
import Footer from "./components/footer/footer";
import { Login } from "./components/LoginExample/Login";
import Test from "./components/Test/test";
import profile from "./profile/profile";
import ChannelMain from "./components/channel/ChannelMain";

//https://medium.com/@glweems/simple-navbar-component-using-react-typescript-and-styled-components-54e357e2cbcb

const pageStyle: CSS.Properties = {
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column"
};

const contentStyle: CSS.Properties = {
  flex: "1 0 auto"
};

const footerStyle: CSS.Properties = {
  flexShrink: 0,
  padding: "10px"
};

//please add the elements you want to link to
const navigation = {
  brand: { name: "Navbar", to: "/" },
  links: [
    { name: "Login", to: "/LoginExample/login" },
    { name: "Channels", to: "/channel/channelMain" },
    { name: "Profile", to: "/profile/profile" },
    { name: "LogOut", to: "/Test/test" }
  ]
};

{
  /*npm install react-burger-menu --save*/
}
class App extends React.Component {
  render() {
    // Descructured object
    const { brand, links } = navigation;
    return (
      <div className="App" style={pageStyle}>
        <div className="content" style={contentStyle}>
          <div className="navigation">
            <NavBar brand={brand} links={links} />
          </div>

          <div className="main">
            <BrowserRouter>
              {/* write down menu bar here and don't forget them in const navigation in this file (write them correctly*/}
              <Switch>
                <Route path="/LoginExample/login" component={Login} />
                <Route path="/Test/test" component={Test} />
                <Route path="/footer/footer" component={Footer} />
                <Route path="/profile/profile" component={profile} />
                <Route path="/channel/channelMain" component={ChannelMain} />
              </Switch>
            </BrowserRouter>
          </div>
        </div>

        <div className="footer" style={footerStyle}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
