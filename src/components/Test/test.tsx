import * as React from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


function Welcome() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Hello'}
    </Typography>
  );
}

class Test extends React.Component {
  
    render() {
      console.log('test');
        return (
              <Container maxWidth="lg">
                <Welcome />
              </Container>
        )
    }
}
export default Test;