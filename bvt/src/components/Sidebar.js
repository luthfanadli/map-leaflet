import React,{useState} from 'react';
import {Button, Offcanvas} from 'react-bootstrap'

function Sidebar() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button style={{marginLeft: "5vh"}} variant="primary" onClick={handleShow}>
          Point
        </Button>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
 export default Sidebar;