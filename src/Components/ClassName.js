import { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";

const ClassName = (props) => {
  const [className, setClassName] = useState("");
  const [allClasses, setAllClasses] = useState();

  props.name(className);

  useEffect(() => {
    const getClassName = async () => {
      const result = await axios.get("http://localhost:4001/get-class-name");
      setAllClasses(result.data);
    };
    getClassName();
  }, []);

  const handleChange = (event) => {
    setClassName(event.target.value);
  };

  return (
    className,
    (
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">
            Class Name
          </InputLabel>
          <Select
        
            value={className}
            label="Class Name"
            onChange={handleChange}
            required
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
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

export default ClassName;
