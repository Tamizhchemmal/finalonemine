import React, { useState } from "react";
import "../Css/Referralstyle.css";
import NavBar from "./NavBar";
import {
  Container,
  Dropdown,
  DropdownButton,
  Modal,
  Button,
  ModalTitle,
  CloseButton,
} from "react-bootstrap";
import axios from "axios";
import { FcSearch } from "react-icons/fc";

function Studentpage() {
  const [show, setShow] = useState(false);
  const [refList, setRefList] = useState([
    {
      id: 1,
      name: "Tamizh",
    },
    {
      id: 2,
      name: "Karthik",
    },
    {
      id: 3,
      name: "Patrick",
    },
  ]);
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
  const [startDate, setStartDate] = useState([]);
  const [endDate, setEndDate] = useState([]);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  // date Change
  const handleStartDateChange = (e) => {
    const selectedStartDate = new Date(e.target.value);
    const selectedEndDate = new Date(selectedStartDate);
    selectedEndDate.setMonth(selectedStartDate.getMonth() + 3);
    const sDate = e.target.value;
    setStartDate(sDate);
    const eDate = selectedEndDate.toISOString().substr(0, 10);
    setEndDate(eDate);
    // setInput({ ...input, startdate: sDate, enddate: eDate });

    //Search function
  };

  return (
    <>
      <div>
        <NavBar />
        <div className="crd-bg">
          <div className="card-refdetails">
            <Container>
              <div className="head-ref">
                <div id="heading-ref">Student List</div>

                <div
                  style={{
                    display: "flex",
                    width: "50%",
                    justifyContent: "space-around",
                  }}
                >
                  <div className="search-full">
                    <input
                      type="search"
                      placeholder="Search Student"
                      id="searchbar-ref"
                    ></input>
                    <FcSearch id="search-icon" />
                  </div>{" "}
                  <button className="create ref" onClick={handleShow}>
                    Create Student
                  </button>
                </div>
              </div>
              <hr></hr>

              {/* /modal popup for student Creation */}
              <Modal
                show={show}
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
                    Create Student Details
                  </Modal.Title>

                  <CloseButton variant="white" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                  <ModalTitle style={{ textAlign: "center" }}>
                    CREATE AN ACCOUNT FOR STUDENT
                  </ModalTitle>
                  <form>
                    <div className="inputref-box">
                      <div className="student-grid">
                        <div className="inputstudent">
                          <input
                            type="text"
                            id="input-name"
                            name="fullname"
                            placeholder="Fullname"
                            autoComplete="new-password"
                            //onChange={handleChange}
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
                            //onChange={handleChange}
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
                            //onChange={handleChange}
                          ></input>
                        </div>
                        <div className="inputstudent">
                          <input
                            type="text"
                            id="input-comp"
                            name="companyname"
                            placeholder="Company Name"
                            autoComplete="off"
                            //onChange={handleChange}
                            required
                          ></input>
                        </div>
                        <div className="inputstudent">
                          <input
                            type="text"
                            id="input-pwd"
                            name="collegename"
                            placeholder="College Name"
                            autoComplete="off"
                            //onChange={handleChange}
                            required
                          ></input>
                        </div>
                        <div className="inputstudent">
                          <input
                            type="number"
                            name="yearofpassedout"
                            placeholder="Year Of PassedOut"
                            autoComplete="off"
                            //onChange={handleChange}
                            required
                          ></input>
                        </div>
                        <div style={{ marginLeft: "30px" }}>
                          <label
                            id="strt"
                            htmlFor="startdate"
                            className="text-muted"
                            name="startdate"
                          >
                            Start date
                          </label>
                          <input
                            type="date"
                            id="startdate"
                            placeholder="Start date"
                            // value={input.startDate}
                            onChange={handleStartDateChange}
                            required
                          />
                        </div>
                        <div style={{ marginLeft: "30px" }}>
                          <label id="end" className="text-muted">
                            End date
                          </label>
                          <input
                            type="date"
                            id="enddate"
                            name="enddate"
                            placeholder="End date"
                            value={endDate}
                            readOnly
                            disabled
                            //onChange={handleChange}
                          />
                        </div>
                        <div>
                          <select
                            id="referralName"
                            name="referralname"
                            className="referaldropdown"
                            required
                            //onChange={handleChange}
                          >
                            <option value="Referral name">Referral name</option>
                            {refList.map((data, index) => (
                              <option key={index.id} value={index.name}>
                                {data.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <select
                            id="courseName"
                            name="course"
                            className="referaldropdown"
                            required
                            // onChange={handleChange}
                          >
                            <option value="Course">Course</option>
                            {courseList.map((courseData, index1) => (
                              <option key={index1} value={courseData.name}>
                                {courseData.course}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* {errors.confirmpassword && (
                    <p style={{ color: "red", textAlign: "center" }}>
                      {errors.confirmpassword}
                    </p>
                  )} */}
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <button type="submit" id="btn-createrefmodal">
                        Create
                      </button>
                    </Modal.Footer>
                  </form>
                </Modal.Body>
              </Modal>
              <div id="reftable"></div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default Studentpage;
