import * as React from "react";
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import * as CSS from 'csstype';

class profile extends React.Component {

    render() {

        const formStyle: CSS.Properties = {
            padding: '10px 5px 5px 10px',
            textAlign:'center'
        };
  
        const useStyles = makeStyles((theme: Theme) =>
            createStyles({
                formControl: {
                    margin: theme.spacing(3),
                },
            }),
        );

        return (
            <form style={formStyle}>
                <div>
                    <TextField id="firstname" label="Firstname" variant="outlined" margin="normal" />
                </div>
                <div>
                    <TextField id="lastname" label="Lastname" variant="outlined" margin="normal" />
                </div>
                <div>
                    <TextField id="email" label="Email" variant="outlined" margin="normal" />
                </div>
                <div>
                     <TextField id="password" label="password"  type="password" variant="outlined" margin="normal" />
                </div>

                <FormControl component="fieldset" >
                    <FormLabel component="legend">Email-Frequence</FormLabel>
                    <RadioGroup aria-label="email-frequence" name="email-frequence">
                        <FormControlLabel value="weekly" control={<Radio />} label="weekly" />
                        <FormControlLabel value="daily" control={<Radio />} label="daily" />
                        <FormControlLabel value="never" control={<Radio />} label="never" />
                    </RadioGroup>
                </FormControl>
            </form>
        )
    }
}
export default profile;