import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const DashboardNav = ({ setShowSidebar, show }) => {
    const { panel } = useParams();
    return (
        <Navbar expand="lg" variant="light" bg="white">
        <Container fluid>
            <button  onClick={() => setShowSidebar(!show)} type="button" id="sidebarCollapse" className={show ? "navbar-btn active" : "navbar-btn"} >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <Navbar.Brand>
                <h2
                    className="d-inline-block ml-md-3 mb-0"
                    style={{ fontSize: "1.4rem", fontWeight: "600" }}>
                    {
                     panel === "profile" ? "Profile"
                     :panel === "add-services" ? "Add Services"
                     :panel === "manage-services" ? "Manage Services"
                     :panel === "services" ? "Services"
                     :panel === "view-student" ? "View Student"
                     :panel === "add-product" ? "Add Product"
                     :panel === "view-product" ? "View Product"
                     :panel === "reviews" ? "Reviews"
                     :panel === "add-services"? "Add Services"
                     :panel === "add-admin" ? "Add Admin"
                     :panel === "all-orders" ?"All Orders" 
                     :panel === "all-reviews" ? "Manage Reviews"
                     :panel === "all-admins" ? "Manage Admins"
                     : ""
                    }
                </h2>
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <div className="ml-auto" >
                    <p>profilepopper</p>
                </div>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default DashboardNav;