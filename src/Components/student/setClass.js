import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useSelector } from "react-redux";
const SetClass = (props) => {
  const [className, setClassName] = useState("");
  const classesAll = useSelector((state)=> state.className);
//   console.log("classAll",classesAll)
  props.name(className);

  const handleChange = (event) => {
    console.log(event.target.value);
    setClassName(event.target.value);
    //sending data (className) from generateChallanClass to generateChallan component (child to parent)
    props.className(event.target.value);
  };

  console.log(className);
  return (
    className,
    (
      <div>
        <FormControl sx={{ m: 1, minWidth: 237 }} onSelect>
          <InputLabel id="demo-simple-select-helper-label">Classes</InputLabel>
          <Select
            value={className}
            label="ClassName"
            onChange={handleChange}
             required
          >
            {classesAll &&
              classesAll.map((element) => {
                return (
                  <MenuItem key={element._id} value={element.className}>
                    {element.className}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </div>
    )
  );
};

export default SetClass;
