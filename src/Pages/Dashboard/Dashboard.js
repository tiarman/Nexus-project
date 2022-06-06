import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Profile from './../../Components/DashboardComponents/Profile/Profile';
import Book from './../../Components/DashboardComponents/Book/Book';
import './Dashboard.css';
import DashboardNav from './../../Components/DashboardComponents/DashboardNav/DashboardNav';
import SideBar from './../../Components/DashboardComponents/Sidebar/SideBar';
import AddServices from '../../Components/DashboardComponents/AddServices/AddServices';
import ManageServices from '../../Components/DashboardComponents/ManageServices/ManageServices';

const Dashboard = () => {
    const { panel } = useParams();
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <main className="dashboard-container">
     <SideBar show={showSidebar} />
            <div  id="content">
               <DashboardNav setShowSidebar={setShowSidebar} show={showSidebar}  />
                {
                    panel === "profile" ?  <Profile />
                    :panel === 'add-services' ? <AddServices />
                    :panel === 'manage-services' ? <ManageServices />
                    :panel === 'book' ? <Book />
                    
                    : null
                }
            </div>
        </main>
    );
};

export default Dashboard;