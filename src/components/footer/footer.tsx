import * as React from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

//Hilfreich https://material-ui.com/getting-started/templates/sticky-footer/ 
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Powered by Christian, Monika, Jan, Marina und Benedikt '}
      <Link color="inherit" href="https://www.uibk.ac.at/ulb/index.html.de">
        UIBK-Homepage
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

class Footer extends React.Component {
    render() {
        return (
              <Container maxWidth="lg">
                <Typography variant="body1">Viel Spaß auf unserer Seite</Typography>
                <Copyright />
              </Container>
        )
    }
}
export default Footer;