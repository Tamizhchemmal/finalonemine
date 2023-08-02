import React from "react";
import { useState } from "react";
import "../Css/Referralstyle.css";
import {
  Container,
  Dropdown,
  DropdownButton,
  Modal,
  Button,
  ModalTitle,
  CloseButton,
} from "react-bootstrap";
import { MdManageSearch } from "react-icons/md";
import axios from "axios";
import RefTable from "./RefTable";
import { FcSearch } from "react-icons/fc";
import NavBar from "./NavBar";

function Referralpage() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setErrors("");
  };
  const handleShow = () => {
    setShow(true);
  };

  //creation
  const [refInput, setRefinput] = useState({
    fullname: "",
    mobilenumber: "",
    email: "",
    companyname: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setRefinput({ ...refInput, [e.target.name]: e.target.value });
  };

  const validation = (refInput) => {
    let error = {};
    if (refInput.password !== refInput.confirmpassword) {
      error.confirmpassword = "Password should be same";

      return error;
    } else {
      return (error.confirmpwd = "");
    }
  };

  const submitReferral = async (e) => {
    e.preventDefault();
    setErrors(validation(refInput));
    await axios.post("https://64a587de00c3559aa9bfdbd4.mockapi.io/refData", {
      refInput,
    });
    e.target.reset();
    console.log(refInput);
  };
  return (
    <>
      <div>
        <NavBar />
        <div className="crd-bg">
          <div className="card-refdetails">
            <Container>
              <div className="head-ref">
                <div id="heading-ref">Referral List</div>

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
                      placeholder="Search Referral"
                      id="searchbar-ref"
                    ></input>
                    <FcSearch id="search-icon" title="Search" />
                  </div>
                  <button className="create ref" onClick={handleShow}>
                    Create Referral
                  </button>
                </div>
              </div>

              <hr></hr>

              {/* /modal */}
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
                    Create Referral
                  </Modal.Title>

                  <CloseButton variant="white" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                  <ModalTitle style={{ textAlign: "center" }}>
                    CREATE AN ACCOUNT FOR REFERRAL
                  </ModalTitle>
                  <form onSubmit={submitReferral}>
                    <div className="inputref-box">
                      <div className="inputref">
                        <input
                          type="text"
                          id="input-name"
                          name="fullname"
                          placeholder="Fullname"
                          autoComplete="new-password"
                          onChange={handleChange}
                          required
                        ></input>
                      </div>
                      <div className="inputref">
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
                      <div className="inputref">
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
                      <div className="inputref">
                        <input
                          type="text"
                          id="input-comp"
                          name="companyname"
                          placeholder="Company Name"
                          autoComplete="off"
                          onChange={handleChange}
                          required
                        ></input>
                      </div>
                      <div className="inputref">
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
                      <div className="inputref">
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
                    {errors.confirmpassword && (
                      <p style={{ color: "red", textAlign: "center" }}>
                        {errors.confirmpassword}
                      </p>
                    )}
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
              {/* Model profile */}

              <div id="reftable">
                <RefTable />
              </div>
            </Container>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Referralpage;
