import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import SelectModeCSS from "./SelectMode.module.scss";

const SelectMode = () => {
  const [selectMode, setSelectMode] = useState("");

  const handleChange = (event) => {
    setSelectMode(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Mode</InputLabel>
        <Select
          value={selectMode}
          label="Class Name"
          onChange={handleChange}
        //   className={SelectModeCSS["select-class-name"]}
          required
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1} >
            1
          </MenuItem>
          <MenuItem value={2} >
            2
          </MenuItem>
          <MenuItem value={4} >
            4
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectMode;
