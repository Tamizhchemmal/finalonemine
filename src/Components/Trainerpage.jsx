import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import "../Css/Referralstyle.css";
import { Card } from "@mui/material";
import {
  Container,
  Dropdown,
  DropdownButton,
  Modal,
  Button,
  ModalTitle,
  CloseButton,
  Navbar,
} from "react-bootstrap";
import axios from "axios";
import { FcSearch } from "react-icons/fc";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

//Table
const columns = [
  { id: "name", label: "Name", minWidth: 100, align: "center" },
  {
    id: "mobile",
    label: "Mobile Number",
    minWidth: 170,
    align: "center",

    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "email",
    label: "Email",
    minWidth: 170,
    align: "center",

    format: (value) => value.toLocaleString("en-US"),
  },

  {
    id: "course",
    label: "Course",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "companyname",
    label: "Company Name",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "paymentmode",
    label: "Payment Mode",
    minWidth: 180,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "paymentmthoda",
    label: "Payment Method",
    minWidth: 180,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },

  {
    id: "edit/delete",
    label: "Edit/Delete",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
];
//table

function Trainerpage() {
  const [show, setShow] = useState(false);
  const [tableshow, setTableshow] = useState(false);
  const [search, setSearch] = useState("");
  const [trainerInput, setTrainerinput] = useState({
    name: "",
    mobilenumber: "",
    email: "",
    course: "",
    companyname: "",
    paymentmode: "",
    password: "",
    confirmpassword: "",
    paymentdetails: "",
    role: "trainer",
  });
  console.log(search);
  const [courseList, setCourseList] = useState([
    {
      id: 1,
      course: "Front End Dvelopement",
    },
    {
      id: 2,
      course: "Testing",
    },
    {
      id: 3,
      course: "Aws",
    },
    {
      id: 4,
      course: "UI&UX design",
    },
    {
      id: 5,
      course: "Python",
    },
  ]);

  const [paymentmode, setPayment] = useState([
    {
      id: 1,
      name: "GPAY NUMBER",
    },
    {
      id: 2,
      name: "UPI",
    },
    {
      id: 3,
      name: "BANK ACCOUNT",
    },
  ]);

  const handleChange = (e) => {
    setTrainerinput({ ...trainerInput, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  // Trainer Table Content

  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [alertt, setAlertt] = useState(null);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [apiData, setApiData] = useState([]);

  const callApiData = async (e) => {
    const refData = await axios.get(
      "https://64b638a2df0839c97e1528f4.mockapi.io/trainers"
    );
    setApiData(refData.data);
  };

  useEffect(() => {
    callApiData();
  }, []);
  const deleteTrainerData = async (id) => {
    await axios.delete(
      "https://64b638a2df0839c97e1528f4.mockapi.io/trainers/" + id
    );
    alert("Referral deleted");

    callApiData();
  };

  // Table content End

  // date Change

  const [errors, setErrors] = useState("");
  const submitStudent = async (e) => {
    e.preventDefault();

    if (trainerInput.password !== trainerInput.confirmpassword) {
      setErrors("Password Should Be Same");
    } else {
      await axios.post("https://64b638a2df0839c97e1528f4.mockapi.io/trainers", {
        trainerInput,
      });
      console.log(trainerInput);
      setErrors("");
      alert("trainer Created");
      setShow(false);
      e.target.reset();
    }

    e.target.reset();
  };
  //

  return (
    <>
      <div>
        <NavBar />
        <div className="crd-bg">
          <div className="card-refdetails">
            <Container>
              <div className="head-ref">
                <div id="heading-ref">Trainer List</div>

                <div
                  style={{
                    display: "flex",

                    justifyContent: "space-around",
                  }}
                >
                  <div className="search-full">
                    <input
                      type="search"
                      placeholder="Search Trainer..."
                      id="searchbar-ref"
                      onChange={(e) => setSearch(e.target.value)}
                    ></input>
                    <FcSearch id="search-icon" />
                  </div>{" "}
                  <button className="create ref" onClick={handleShow}>
                    Create Trainer
                  </button>
                </div>
              </div>
              <hr></hr>

              {/* /modal popup for student Creation */}
              <Modal
                show={show}
                className="mods"
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header
                  style={{ backgroundColor: " #002333 ", color: "white" }}
                >
                  <Modal.Title style={{ color: "white" }}>
                    Create Trainer Details
                  </Modal.Title>

                  <CloseButton variant="white" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                  <ModalTitle style={{ textAlign: "center" }}>
                    CREATE AN ACCOUNT FOR TRAINER
                  </ModalTitle>
                  <form onSubmit={submitStudent}>
                    <div className="inputref-box">
                      <div className="student-grid">
                        <div className="inputstudent">
                          <input
                            type="text"
                            id="input-name"
                            name="name"
                            placeholder="Fullname"
                            autoComplete="new-password"
                            onChange={handleChange}
                            required
                          ></input>
                        </div>
                        <div className="inputstudent">
                          <input
                            type="tel"
                            id="input-tele"
                            name="mobilenumber"
                            placeholder="Mobile Number"
                            pattern="[6789][0-9]{9}"
                            autoComplete="new-password"
                            onChange={handleChange}
                            required
                          ></input>
                        </div>
                        <div className="inputstudent">
                          <input
                            type="email"
                            id="input-email"
                            name="email"
                            placeholder="Email Address"
                            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                            required
                            onChange={handleChange}
                          ></input>
                        </div>

                        <div className="inputstudent">
                          <input
                            type="text"
                            id="input-name"
                            name="companyname"
                            placeholder="Company Name"
                            autoComplete="new-password"
                            onChange={handleChange}
                            required
                          ></input>
                        </div>

                        <div>
                          <select
                            id="paymentmode"
                            name="paymentmode"
                            className="referaldropdown"
                            required
                            onChange={handleChange}
                          >
                            <option value="none">Payment Mode</option>
                            {paymentmode.map((paymentmode, index1) => (
                              <option key={index1} value={paymentmode.name}>
                                {paymentmode.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="inputstudent">
                          <input
                            type="text"
                            name="paymentdetails"
                            placeholder="Payment Details (Ac.no/Upi id)"
                            autoComplete="off"
                            onChange={handleChange}
                            required
                          ></input>
                        </div>

                        <div>
                          <select
                            id="courseName"
                            name="course"
                            className="referaldropdown"
                            required
                            onChange={handleChange}
                          >
                            <option value="none">Course</option>
                            {courseList.map((courseData, index1) => (
                              <option key={index1} value={courseData.name}>
                                {courseData.course}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="inputtrainer">
                          <input
                            type="Password"
                            id="input-pwd"
                            name="password"
                            placeholder="Password"
                            autoComplete="off"
                            onChange={handleChange}
                            required
                          ></input>
                        </div>
                        <div className="inputtrainer">
                          <input
                            type="Password"
                            id="input-conpwd"
                            name="confirmpassword"
                            placeholder="Confirm Password"
                            autoComplete="off"
                            onChange={handleChange}
                            required
                          ></input>
                        </div>
                      </div>
                    </div>
                    {errors ? (
                      <p style={{ color: "red", textAlign: "center" }}>
                        {errors}
                      </p>
                    ) : (
                      ""
                    )}
                    <Modal.Footer>
                      <button type="submit" id="btn-createrefmodal">
                        Create
                      </button>
                    </Modal.Footer>
                  </form>
                </Modal.Body>
              </Modal>
              {/* Table for Trainer */}
              <div id="reftable">
                <div className="tableData">
                  <Paper sx={{ width: "100%", overflow: "hidden" }}>
                    <TableContainer sx={{ maxHeight: 540 }}>
                      <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow sx={{ backgroundColor: "lightblue" }}>
                            {columns.map((column) => (
                              <TableCell
                                key={column.id}
                                align={column.align}
                                style={{
                                  minWidth: column.minWidth,
                                  backgroundColor: " #002333",
                                  color: "#ffffff",
                                  fontSize: "18px",
                                }}
                              >
                                {column.label}
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {apiData
                            .slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage
                            )
                            .filter((apiData) => {
                              return search.toLowerCase() === ''
                                ? apiData
                                : apiData.trainerInput.name.toLowerCase().includes(search)
                            })
                            .map((apiData) => {
                              return (
                                <TableRow
                                  key={apiData.id}
                                  hover
                                  role="checkbox"
                                >
                                  <TableCell
                                    align="center"
                                    id="table-body"
                                    style={{ fontSize: 16 }}
                                    // onClick={opnetable}
                                  >
                                    {apiData.trainerInput.name}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    id="table-body"
                                    style={{ fontSize: 16 }}
                                    // onClick={opnetable}
                                  >
                                    {apiData.trainerInput.mobilenumber}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    id="table-body"
                                    style={{ fontSize: 16 }}
                                    // onClick={opnetable}
                                  >
                                    {apiData.trainerInput.email}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    id="table-body"
                                    style={{ fontSize: 16 }}
                                    // onClick={opnetable}
                                  >
                                    {apiData.trainerInput.course}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    id="table-body"
                                    style={{ fontSize: 16 }}
                                    // onClick={opnetable}
                                  >
                                    {apiData.trainerInput.companyname}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    id="table-body"
                                    style={{ fontSize: 16 }}
                                    // onClick={opnetable}
                                  >
                                    {apiData.trainerInput.paymentmode}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    id="table-body"
                                    style={{ fontSize: 16 }}
                                    // onClick={opnetable}
                                  >
                                    {apiData.trainerInput.paymentdetails}
                                  </TableCell>

                                  <TableCell
                                    align="center"
                                    id="table-body"
                                    style={{ fontSize: 16 }}
                                  >
                                    <BiSolidMessageSquareEdit
                                      id="edit-icon"
                                      // onClick={handleedit}
                                    />
                                    <MdDelete
                                      id="dlt-icon"
                                      onClick={() =>
                                        deleteTrainerData(apiData.id)
                                      }
                                    />
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <TablePagination
                      rowsPerPageOptions={[10, 25, 100]}
                      component="div"
                      count={apiData.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                  </Paper>
                  {/* model profile */}
                  <Modal
                    show={tableshow}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Header
                      style={{ backgroundColor: " #002333 ", color: "white" }}
                    >
                      <Modal.Title style={{ color: "white" }}>
                        Referral Profile
                      </Modal.Title>

                      <CloseButton variant="white" onClick={handleClose} />
                    </Modal.Header>
                    <Modal.Body>
                      <div>
                        <Card
                          sx={{
                            display: "flex",
                            width: "100%",
                            height: "400px",
                            boxShadow: "rgba(66, 84, 102, 0.1) 0px 8px 25px ",
                          }}
                        >
                          <Card
                            sx={{
                              width: "50%",
                              height: "70%",
                              margin: "15px 15px",
                              boxShadow: "rgba(66, 84, 102, 0.3) 0px 8px 25px ",
                            }}
                          >
                            <div
                              style={{ margin: "10px 30px", fontSize: "18px" }}
                            >
                              Name : XXXX
                            </div>
                          </Card>
                        </Card>
                      </div>
                      <hr></hr>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <button type="submit" id="btn-createrefmodal">
                          Create
                        </button>
                      </Modal.Footer>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trainerpage;
