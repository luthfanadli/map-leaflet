import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import LeftSidebar from './LeftSidebar';
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
// import RightSidebar from './RightSidebar';

function MainNavbar() {

    let navigate = useNavigate();
    const toLight = () => {
        navigate('/')
    }
    const toDark = () => {
        navigate('/dark')
    }

    return (
        <>
            <Navbar bg="success" expand="lg">
                <LeftSidebar></LeftSidebar>
                <Container>
                    <Nav className="me-auto">

                        <Nav.Link
                            style={{ marginRight: '2vh' }}
                            onClick={(e) => {
                                e.preventDefault();
                                toLight();
                            }}>Light Mode</Nav.Link>

                        <Nav.Link
                            style={{ marginLeft: '2vh' }}
                            onClick={(e) => {
                                e.preventDefault();
                                toDark();
                            }}>Dark Mode</Nav.Link>

                        <div style={{ marginLeft: '110vh' }}>
                            <NavDropdown title="Language" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Bahasa Indonesia</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </Nav>
                    <Avatar style={{width: '7vh', height: '7vh'}} alt="Bhumi Varta Technology" src="https://media.licdn.cn/dms/image/C560BAQFWFLYyDMCkWA/company-logo_200_200/0/1611557316018?e=2159024400&v=beta&t=ID8DnGjkgG13V7hTRXb1IooLL3pkWLP-bNRhjc8f9Mk" />
                </Container>
                {/* <RightSidebar></RightSidebar> */}
            </Navbar>
        </>
    )
}

export default MainNavbar;