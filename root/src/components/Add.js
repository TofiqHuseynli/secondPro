import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../style/post.css";
import Postmet from "./Postmet";
function Add({ data }) {
  const [show, setShow] = React.useState(false);
  const [name, setName] = React.useState("");
  const [username, setUserName] = React.useState("");
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const add = () => {
    if (name == "" || username == "") {
      window.alert("Empty");
    } else {
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          username: username,
        }),
      });
      data();
      setName("");
      setUserName("");
    }
    
  };
  return (
    <div>
      <>
        <Postmet name={name} username={username} />
        <div className="d-flex justify-content-end pt-2 px-3">
          <Button variant="primary" onClick={handleShow}>
            Add
          </Button>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              {" "}
              <label>Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              {" "}
              <label>Username</label>
              <input
                onChange={(e) => setUserName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              {" "}
              <label>Email</label>
              <input className="form-control" />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                add();
                handleClose();
              }}
            >
              ADD
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default Add;
