import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './SideBar.css';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaHeart, FaGem, FaGithub, FaClipboardList } from 'react-icons/fa';
import sidebarBg from '../../../Images/bg3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { BsFillCartPlusFill } from "react-icons/bs";
import { MdReviews } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";

const SideBar = ({ show, adminLoading }) => {
  const { panel } = useParams();
  return (
    <nav id="sidebar" className={show ? "active" : ""}>
      <ProSidebar image={sidebarBg} className='sidebar-container'>
        
        <SidebarHeader>
          <div
            style={{ padding: '24px', textTransform: 'uppercase', fontWeight: 'bold', fontSize: 14, letterSpacing: '1px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', }}>
            Touch & Solve
          </div>
        </SidebarHeader>
        <SidebarContent>



          <Menu iconShape="square">
          <MenuItem icon={<FaGem />}>Profile <Link to="/dashboard/profile" className={panel === "profile"} ></Link></MenuItem>
            <MenuItem icon={<MdReviews />}>Reviews<Link to="/dashboard/reviews" className={panel === "reviews"} ></Link></MenuItem>
            <MenuItem icon={<RiAdminFill />}>Add Admin<Link to="/dashboard/add-admin" className={panel === "reviews"} ></Link></MenuItem>
            <SubMenu title="Our Services" icon={<FaHeart />}>
              <MenuItem> <MenuItem icon={<FaClipboardList />}>Add Services<Link to="/dashboard/add-services" className={panel === "add-services"} ></Link></MenuItem></MenuItem>
              <MenuItem> <MenuItem icon={<BsFillCartPlusFill />}>Manage Services <Link to="/dashboard/manage-services" className={panel === "manage-services"} ></Link></MenuItem></MenuItem>
            </SubMenu>
          </Menu>





        </SidebarContent>


        <ul className="list-unstyled back-button">
             <li>
                    <Link to="/" className="back-home brn btn-info main-button">
                        <FontAwesomeIcon icon={faSignOutAlt} /> Back to Home
                    </Link>
                </li>
             </ul>
        <SidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 24px',
            }}
          >
            <a
              href="https://github.com/azouaoui-med/react-pro-sidebar"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}></span>
            </a>
          </div>
        </SidebarFooter>

      </ProSidebar>;
    </nav>
  );
};

export default SideBar;