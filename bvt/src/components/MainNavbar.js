import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import { useTranslation } from 'react-i18next';

function MainNavbar() {
    let navigate = useNavigate();
    const toLight = () => {
        navigate('/')
    }
    const toDark = () => {
        navigate('/dark')
    }

    const { t, i18n } = useTranslation();
    function handleClick(lang){
        i18n.changeLanguage(lang);
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
                            }}>{t('Light.1')}</Nav.Link>

                        <Nav.Link
                            style={{ marginLeft: '2vh' }}
                            onClick={(e) => {
                                e.preventDefault();
                                toDark();
                            }}>{t('Dark.1')}</Nav.Link>

                        <div style={{ marginLeft: '100vh' }}>
                            <NavDropdown title={t('Language.1')} id="basic-nav-dropdown">
                                <NavDropdown.Item
                                    onClick={() => handleClick('id')}
                                >
                                    Bahasa Indonesia</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    onClick={() => handleClick('en')}
                                >
                                    English</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </Nav>
                    <Avatar style={{ width: '7vh', height: '7vh' }} alt="Bhumi Varta Technology" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/jobs/dos:lowongan_dicoding_pt_bhumi_varta_tech_181021153315.png" />
                </Container>
                <RightSidebar></RightSidebar>
            </Navbar>
        </>
    )
}

export default MainNavbar;