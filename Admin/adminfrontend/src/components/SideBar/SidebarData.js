import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import PaymentIcon from '@material-ui/icons/Payment';
import NotificationsIcon from '@material-ui/icons/Notifications';

export const  SidebarData =  [
    {
        title: "Dashboard",
        icon:  <DashboardIcon/>,
        link: "/home" 
    },

    {
        title: "Room Management",
        icon:  <RoomServiceIcon/>,
        link: "/roomManagement" 
    },

    {
        title: "Taxi Management",
        icon:  <LocalTaxiIcon/>,
        link: "/taxiManagement" 
    },

    {
        title: "Payments",
        icon:  < PaymentIcon/>,
        link: "/payment" 
    },

    {
        title: "Notifications",
        icon:  <NotificationsIcon/>,
        link: "/notification" 
    }
    

    

]
    