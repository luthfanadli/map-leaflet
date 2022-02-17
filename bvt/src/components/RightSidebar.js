import React, { useState, useEffect } from 'react';
import { Button, Offcanvas } from 'react-bootstrap'
import ListIcon from '@mui/icons-material/List';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPoint } from '../store/actionCreator/pointAction';

function RightSidebar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { point } = useSelector(state => state.pointReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPoint())
    }, [])

    return (
        <>
            <ListIcon style={{ marginRight: "5vh", width: '40px', height: '40px', cursor: 'pointer' }} variant="primary" onClick={handleShow}></ListIcon>

            <Offcanvas style={{ width: '430px' }} show={show} placement={'end'} onHide={handleClose}>

                <Offcanvas.Header>
                    <Offcanvas.Title>Region Point List</Offcanvas.Title>
                </Offcanvas.Header>

                {point.map(points => (
                    <Button
                        style={{ marginBottom: '2vh', cursor: 'default' }}
                        key={points.id}
                        className='d-flex'
                        variant="outline-success"
                    >
                        {points.name}
                    </Button>
                ))}

            </Offcanvas>
        </>
    );
}

export default RightSidebar;