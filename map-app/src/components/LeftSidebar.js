import React, { useState, useEffect } from 'react';
import { Button, Offcanvas } from 'react-bootstrap'
import ListIcon from '@mui/icons-material/List';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPoint } from '../store/actionCreator/pointAction';
import { useTranslation } from 'react-i18next';

function LeftSidebar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { point } = useSelector(state => state.pointReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPoint())
    }, [])

    const { t } = useTranslation();

    return (
        <>
            <ListIcon style={{ marginLeft: "5vh", width: '40px', height: '40px', cursor: 'pointer' }} variant="primary" onClick={handleShow}></ListIcon>

            <Offcanvas style={{ width: '430px' }} show={show} onHide={handleClose}>

                <Offcanvas.Header>
                    <Offcanvas.Title>{t('Point.1')}</Offcanvas.Title>
                </Offcanvas.Header>

                {point.map(points => {
                    return <Button
                        points={points}
                        key={points.id}
                        style={{ marginBottom: '2vh', cursor: 'default' }}
                        className='d-flex'
                        variant="outline-success"
                    >
                        {points.name}
                    </Button>
                })}

            </Offcanvas>
        </>
    );
}

export default LeftSidebar;