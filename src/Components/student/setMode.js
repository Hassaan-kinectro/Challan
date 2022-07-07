import * as React from "react";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectMode1 = (props) => {
  const [mode, setMode] = useState("");
  props.name(mode);
  const handleChange = (event) => {
    setMode(event.target.value);
    props.mode(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 237 }}>
        <InputLabel id="demo-simple-select-helper-label">Mode</InputLabel>
        <Select value={mode} label="Mode" onChange={handleChange} required>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectMode1;
