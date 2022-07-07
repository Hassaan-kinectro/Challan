import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import NotFound from "../../NotFound";
import { display } from "@mui/system";

const DisplayStudentsChallan = () => {
  const [challanData, setChallanData] = useState([]);

  useEffect(() => {
    const generateChallan = async () => {
      console.log("useEffect running");
      const result = await axios.get(
        "http://localhost:4001/api/challans/displaychallan"
      );
      console.log("display data", result.data);
      console.log(result.data);
      setChallanData(result.data.data);
    };
    generateChallan();
  }, []);

  return (
    <>
      {challanData && challanData.length === 0 ? (
        <NotFound />
      ) : (
        <div>
          <br></br>
          <h1 style={{ margin: "-0.2rem", marginTop: "20px" }}>
            Challans Generated
          </h1>
          <br></br>
          <table
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              justifyContent: "center",
              height: "50vh",
            }}
          >
            <tr>
              <th style={{ padding: "20px" }}>Challan_ID </th>
              <th style={{ padding: "20px" }}>First_Name </th>
              <th style={{ padding: "20px" }}>Last_Name </th>
              <th style={{ padding: "20px" }}>Class_Name </th>
              <th style={{ padding: "20px" }}>Fees </th>
              <th style={{ padding: "20px" }}>Total_Months </th>
              <th style={{ padding: "20px" }}>Issue_Date </th>
              <th style={{ padding: "20px" }}>Due_Date </th>
              <th style={{ padding: "20px" }}>Status </th>
            </tr>
            {challanData &&
              challanData.map((item) => {
                return (
                  <tr>
                    <td> {item._id} </td>
                    <td> {item.challan.firstName} </td>
                    <td> {item.challan.lastName} </td>
                    <td> {item.challan.className} </td>
                    <td> {item.classFees} </td>
                    <td> {item.challan.mode} </td>
                    <td> {item.issueDate} </td>
                    <td> {item.dueDate} </td>
                    <td> {item.status} </td>
                  </tr>
                );
              })}
          </table>

          <Button
            style={{ marginTop: "30px" }}
            variant="outlined"
            color="secondary"
            href="/home"
          >
            Go Back
          </Button>
        </div>
      )}
    </>
  );
};

export default DisplayStudentsChallan;
