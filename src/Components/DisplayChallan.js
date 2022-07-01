import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Button } from "@material-ui/core";
import NotFound from "./NotFound";

const DisplayChallan = () => {

    const TableStyle= {}
  const [challanData, setChallanData] = useState();

  useEffect(() => {
    const generateChallan = async () => {
      console.log("useEffect running");
      const result = await axios.get("http://localhost:4001/display-challan");
      console.log("display data", result.data.length);
      setChallanData(result.data);
    };
    generateChallan();
  }, []);

  return (
    <>
      {challanData && challanData.length === 0 ? (
        <NotFound/>
      ) : (
        <div>
            <br></br>
          <h1 style={{ margin: "-0.2rem" }}>Challans Generated</h1><br></br>
          <table className="container">
            <tr>
              <th>| First_Name |</th>
              <th>Last_Name |</th>
              <th>Class_Name |</th>
              <th>Fees |</th>
              <th>Total_Months |</th>
              <th>Issue_Date |</th>
              <th>Due_Date |</th>
            </tr>
            {challanData &&
              challanData.map((item) => {
                return (
                  <tr>
                    <td>| {item.challan.firstName} |</td>
                    <td>| {item.challan.lastName} |</td>
                    <td>| {item.challan.className} |</td>
                    <td>| {item.classFees} |</td>
                    <td>| {item.challan.mode} |</td>
                    <td>| {item.issueDate} |</td>
                    <td>| {item.dueDate} |</td>
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

export default DisplayChallan;
