import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import { useNavigate } from 'react-router-dom';
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
    const handleClick = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <>
            <Navbar bg="success" expand="lg" style={{ height: '10%' }}>
                <LeftSidebar></LeftSidebar>

                <Nav className="me-auto" style={{ width: '100%', display: 'flex' }} >

                    <div style={{ width: '50%', display: 'flex', alignItems: 'center', marginLeft: '2vw' }}>
                        <Nav.Link
                            style={{ marginRight: '2vh', fontWeight: 'bold', fontSize: '110%' }}
                            onClick={(e) => {
                                e.preventDefault();
                                toLight();
                            }}>{t('Light.1')}</Nav.Link>

                        <Nav.Link
                            style={{ marginLeft: '2vh', fontWeight: 'bold', fontSize: '110%' }}
                            onClick={(e) => {
                                e.preventDefault();
                                toDark();
                            }}>{t('Dark.1')}</Nav.Link>
                    </div>

                    <div style={{ width: '50%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginRight: '2vw' }}>

                        <NavDropdown title={t('Language.1')} style={{ fontWeight: 'bold', fontSize: '110%' }} id="basic-nav-dropdown">
                            <NavDropdown.Item
                                onClick={() => handleClick('id')}
                                style={{ fontWeight: 'bold', fontSize: '110%' }}
                            >
                                Bahasa Indonesia</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                                onClick={() => handleClick('en')}
                                style={{ fontWeight: 'bold', fontSize: '110%' }}
                            >
                                English</NavDropdown.Item>
                        </NavDropdown>
                    </div>

                    <Avatar style={{ width: '7vh', height: '7vh', marginRight: '2vw' }} alt="Bhumi Varta Technology" src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/jobs/dos:lowongan_dicoding_pt_bhumi_varta_tech_181021153315.png" />

                </Nav>



                <RightSidebar></RightSidebar>
            </Navbar>
        </>
    )
}

export default MainNavbar;