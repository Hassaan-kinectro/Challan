import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";

const SetClass = (props) => {
  const [className, setClassName] = useState("");
  const [allClasses, setAllClasses] = useState();
  props.name(className);
  useEffect(() => {
    const getClassNames = async () => {
      const result = await axios.get(
        "http://localhost:4001/api/classes/getallclasses"
      );
      setAllClasses(result.data.data);
      console.log("flag 0", result.data.data);
    };
    getClassNames();
  }, []);

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
            // required
          >
            {allClasses &&
              allClasses.map((element) => {
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
