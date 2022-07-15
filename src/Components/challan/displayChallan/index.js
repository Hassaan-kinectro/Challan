import React, { useEffect, useState } from "react";
import instance from "../../../config/axios";
import { Button } from "@material-ui/core";
import NotFound from "../../dashboard/notfound";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import Header from "../../dashboard/header";
const DisplayStudentsChallan = () => {
  const [challanData, setChallanData] = useState([]);

  useEffect(() => {
    const generateChallan = async () => {
      console.log("useEffect running");
      const result = await instance.get("/api/challans/displaychallan");
      console.log("display data", result.data);
      console.log(result.data);
      setChallanData(result.data.data);
    };
    generateChallan();
  }, []);

  return (
    <>
      <Header />
      {challanData && challanData.length === 0 ? (
        <NotFound />
      ) : (
        <div
          style={{
            width: "70%",
            margin: "auto",
            padding: "auto",
            marginTop: "40px",
          }}
        >
          <br></br>
          <h1
            style={{
              margin: "-0.2rem",
              marginTop: "20px",
              marginBottom: "30px",
            }}
          >
            Generated Challans Of Students
          </h1>
          <br></br>
          <div>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow style={{ backgroundColor: "lightgray" }}>
                    <TableCell align="right">Challan_ID Of Student</TableCell>
                    <TableCell align="right">First_Name</TableCell>
                    <TableCell align="right">Last_Name&nbsp;</TableCell>
                    <TableCell align="right">Class_Name&nbsp;</TableCell>
                    <TableCell align="right">Fees&nbsp;</TableCell>
                    <TableCell align="right">Total_Months&nbsp;</TableCell>
                    <TableCell align="right">Issue_Date&nbsp;</TableCell>
                    <TableCell align="right">Due_Date&nbsp;</TableCell>
                    <TableCell align="right">Status&nbsp;</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {challanData &&
                    challanData.map((item) => (
                      <TableRow
                        key={item._id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {item._id}
                        </TableCell>
                        {/* <TableCell align="right">{item._id}</TableCell> */}
                        <TableCell align="right">
                          {item.challan.firstName}
                        </TableCell>
                        <TableCell align="right">
                          {item.challan.lastName}
                        </TableCell>
                        <TableCell align="right">
                          {item.challan.className}
                        </TableCell>
                        <TableCell align="right">{item.classFees}</TableCell>
                        <TableCell align="right">{item.challan.mode}</TableCell>
                        <TableCell align="right">{item.issueDate}</TableCell>
                        <TableCell align="right">{item.dueDate}</TableCell>
                        <TableCell
                          align="right"
                          style={
                            item.status === "Pending" ||
                            item.status === "Unpaid"
                              ? {
                                  color: "red",
                                  backgroundColor: "lightgoldenrodyellow",
                                }
                              : { color: "green", backgroundColor: "#FCF6F5FF" }
                          }
                        >
                          {item.status}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              color="primary"
              style={{ marginTop: "30px" }}
            >
              Go Back
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default DisplayStudentsChallan;
