import MUIDataTable from "mui-datatables";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Avatar from "@material-ui/core/Avatar";

//import { observable, computed } from "mobx";
var users = [
  {
    image: "Temp",
    name: "user1",
    email: "test1@gmai.com",
    admin: false
  },
  {
    image: "Temp",
    name: "user2",
    email: "test2@gmai.com",
    admin: true
  },
  {
    image: "Temp",
    name: "user3",
    email: "test3@gmai.com",
    admin: false
  },
  {
    image: "Temp",
    name: "user4",
    email: "test4@gmai.com",
    admin: false
  },
  {
    image: "Temp",
    name: "user5",
    email: "test5@gmai.com",
    admin: true
  }
];

var columns = [
  {
    name: "image",
    label: "Avatar",
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return <Avatar alt="Profile" src={value} />;
      }
    }
  },
  {
    name: "name",
    label: "Name",
    options: {
      filter: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <TextField
            defaultValue={value}
            id="standard-basic"
            onChange={updateValue}
          />
        );
      }
    }
  },
  {
    name: "email",
    label: "Mail",
    options: {
      filter: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <TextValidator
            defaultValue={value}
            id="standard-basic"
            onChange={updateValue}
            validators={["required", "isEmail"]}
          />
        );
      }
    }
  },
  {
    name: "admin",
    label: "Admin",
    options: {
      filter: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          updateValue(event.target.checked);
        };

        return <Checkbox checked={value} onChange={handleChange} />;
      }
    }
  }
];

var options = {
  responsive: "scroll",
  filter: true,
  filterType: "dropdown",
  selectableRows: false
};

class userAdminSettings extends React.Component {
  render() {
    return (
      <div style={{ padding: "50px" }}>
        <MUIDataTable
          aria-label="simple table"
          columns={columns}
          options={options}
          data={users}
        />
      </div>
    );
  }
}
export default userAdminSettings;
