import React, { useEffect, useState } from 'react';
import { Button, Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import touchandsolve from '../../../Images/touchandsolve.png';
import './NavBar.css';

const NavBar = () => {
  const [isSticky, setSticky] = useState(false);
  const [isCollapsed, setCollapsed] = useState(null);
  
const [show, setShow] = useState(false);
const [showAbout, setShowAbout] = useState(false);
const [showVisa, setShowVisa] = useState(false);
const [showDownload, setShowDownload] = useState(false);
const [showGallery, setShowGallery] = useState(false);
const showDropdown = (e)=>{
    setShow(!show);
}

const showAboutDrop = (e)=>{
  setShowAbout(!show);
}
const hideAboutDrop = e => {
  setShowAbout(false);
}

// Management
const showVisaDropdown = (e)=>{
  setShowVisa(!show);
}
const hideVisaDropdown = e => {
  setShowVisa(false);
}

// Download
const showDownloadDropdown = (e)=>{
  setShowDownload(!show);
}
const hideDownloadDropdown = e => {
  setShowDownload(false);
}

// Gallery
const showGalleryDropdown = (e)=>{
  setShowGallery(!show);
}
const hideGalleryDropdown = e => {
  setShowGallery(false);
}


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    })
  }, []);

  return (
    <Navbar expand="lg" className={(isSticky || isCollapsed) ? "slide in py-2 show shadow-sm navbar navbar-expand-md bg-white navbar-light   fixed-top" : "slide out show navbar navbar-expand-nd navbar-light py-2 "}>
      <Container >
        <Navbar.Brand smooth as={HashLink} to="/"  > <Image style={{ height: '53px', width: '63px' }} src={touchandsolve} /> <strong>NEXUS</strong></Navbar.Brand>
        <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed ? 'show' : null)} aria-controls="basic-navbar-nav" style={{ background: '#10bad4' }} />
        <Navbar.Collapse id="navbar-nav" >
          <Nav className="ml-auto text-center">
            <Nav.Link smooth as={HashLink} to="/" className="mr-3"><strong>Home</strong></Nav.Link>
            <Nav.Link smooth as={HashLink} to="massege" className="mr-3"><strong>Message</strong></Nav.Link>
            {/* <Nav.Link smooth as={HashLink} to="#service" className="mr-3"><strong>About Us</strong></Nav.Link> */}
            <NavDropdown className='about-align' show={showAbout} onMouseEnter={showAboutDrop} onMouseLeave={hideAboutDrop} title="About Us" id="basic-nav-dropdown" alignRight>
                    <NavDropdown.Item href="/performence">Performence</NavDropdown.Item>
                    <NavDropdown.Item href="/document">Documents</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Why Choose Us</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Why Choose BD Workers</NavDropdown.Item>
                </NavDropdown>

            <Nav.Link smooth as={HashLink} to="/management" className="mr-3"><strong>Management</strong></Nav.Link>
            <Nav.Link smooth as={HashLink} to='#reviews' className="mr-3"><strong>Profile</strong></Nav.Link>


            <NavDropdown className='visa-align' show={showVisa} onMouseEnter={showVisaDropdown} onMouseLeave={hideVisaDropdown} title="Visa Process" id="basic-nav-dropdown" alignRight>
                    <NavDropdown.Item href="#action/3.1">Visa Process</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Documents Requires</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Category of Workers</NavDropdown.Item>
                </NavDropdown>

            <Nav.Link smooth as={HashLink} to="#contact" className="mr-3"><strong>Mission</strong></Nav.Link>
            <NavDropdown className='mission-align' show={showDownload} onMouseEnter={showDownloadDropdown} onMouseLeave={hideDownloadDropdown} title="Download" id="basic-nav-dropdown" alignRight>
                    <NavDropdown.Item href="#action/3.1">Brochure Download</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Visiting Card</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">KSA Visa Requirement</NavDropdown.Item>
                    
                    </NavDropdown>


                    <NavDropdown className='gallery-align' show={showGallery} onMouseEnter={showGalleryDropdown} onMouseLeave={hideGalleryDropdown} title="Gallery" id="basic-nav-dropdown" alignRight>
                    <NavDropdown.Item href="#action/3.1">Photo Gallery</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Video Gallery</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link smooth as={HashLink} to="#contact" className="mr-3"><strong>Contact</strong></Nav.Link>
                
            {/* <Nav.Link as={Link} to="/dashboard/profile" className="mr-3"><strong>Dashboard</strong></Nav.Link> */}
            

        
            {/* <Button as={Link} to="/dashboard/profile" variant="info" className='main-button'>Dashboard</Button> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;