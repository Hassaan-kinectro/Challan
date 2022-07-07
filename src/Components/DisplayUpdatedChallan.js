import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import NotFound from "./NotFound";

const DisplayUpdatedChallan = () => {
  const [updatechallanData, setUpdateChallanData] = useState([]);

  useEffect(() => {
    const generateUpdateChallan = async () => {
      console.log("useEffect running");
      const result = await axios.get(
        "http://localhost:4001/api/challans/displayupdatedchallan"
      );
      console.log("display data", result.data.length);
      console.log(result.data);
      setUpdateChallanData(result.data.data);
    };
    generateUpdateChallan();
  }, []);

  return (
    <>
      {updatechallanData && updatechallanData.length === 0 ? (
        <NotFound />
      ) : (
        <div>
          <br></br>
          <h1 style={{ margin: "-0.2rem" }}>Challans Generated</h1>
          <br></br>
          <table>
            <tr>
              <th>| Challan ID |</th>
              <th>| First_Name |</th>
              <th>Last_Name |</th>
              <th>Class_Name |</th>
              <th>Fees |</th>
              <th>Total_Months |</th>
              <th>Issue_Date |</th>
              <th>Due_Date |</th>
              <th>Status |</th>
              <th>Updated Status |</th>
            </tr>
            {updatechallanData &&
              updatechallanData.map((item) => {
                return (
                  <tr>
                    <td>| {item._id} |</td>
                    <td>| {item.challan.firstName} |</td>
                    <td>| {item.challan.lastName} |</td>
                    <td>| {item.challan.className} |</td>
                    <td>| {item.classFees} |</td>
                    <td>| {item.challan.mode} |</td>
                    <td>| {item.issueDate} |</td>
                    <td>| {item.dueDate} |</td>
                    <td>| {item.challan.status} |</td>
                  </tr>
                );
              })}
          </table>

          <Button variant="outlined" color="secondary" href="/home">
            Go Back
          </Button>
        </div>
      )}
    </>
  );
};

export default DisplayUpdatedChallan;
