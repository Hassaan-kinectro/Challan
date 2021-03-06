import * as React from "react";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const StudentStatus = (props) => {
  const [status, setStatus] = useState("");
  props.name(status);
  const handleChange = (event) => {
    setStatus(event.target.value);
    props.status(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 237 }}>
        <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
        <Select value={status} label="Status" onChange={handleChange} required>
          <MenuItem value={"Pending"}>
            <em>Pending</em>
          </MenuItem>
          <MenuItem value={"Unpaid"}>Unpaid</MenuItem>
          <MenuItem value={"Paid"}>Paid</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default StudentStatus;
