import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom'

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
                <Sidebar></Sidebar>
                <Container>

                    <Nav className="me-auto">

                        <Nav.Link
                            onClick={(e) => {
                                e.preventDefault();
                                toLight();
                            }}>Light Mode</Nav.Link>

                        <Nav.Link
                            onClick={(e) => {
                                e.preventDefault();
                                toDark();
                            }}>Dark Mode</Nav.Link>

                        <div style={{ marginLeft: '120vh' }}>
                            <NavDropdown title="Language" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Bahasa Indonesia</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </Nav>

                </Container>
            </Navbar>
        </>
    )
}

export default MainNavbar;