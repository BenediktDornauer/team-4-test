import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

//Hilfreich: https://medium.com/@glweems/simple-navbar-component-using-react-typescript-and-styled-components-54e357e2cbcb
const NavBar = (props: {
    brand: { name: string; to: string },
    links: Array<{ name: string, to: string }>
  }) => {
    const { brand, links } = props;
    const NavLinks: any = () => links.map((link: { name: string, to: string }) => <MenuItem onClick={handleClose} key={link.name}><a href={link.to}>{link.name}</a></MenuItem>);
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  

    return (
      <AppBar position="static">
        <Toolbar>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
          </Button>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <NavLinks/>
          </Menu>

          <Typography variant="h6" className={classes.title}>
               Team-4
          </Typography>

          <Button color="inherit">
            <Avatar alt="Profile" src="/profile.jpg"/>
          </Button>
        </Toolbar>
      </AppBar>      
    )
  };

export default NavBar; 