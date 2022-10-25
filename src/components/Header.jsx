import React from 'react'

import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
//  import MessageIcon from '@mui/icons-material/Message';
// import PersonIcon from '@mui/icons-material/Person';
import {Avatar} from "@material-ui/core";
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import "./Header.css";
import Headeright from './Headeright';

function Header() {
  return (

   <div className="header">
   
        <div className="header_left">
                <div className="left_logo">
                    <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="linkdin-logo"/>
                </div>

                 <div className="left_search_bar">  
                 <SearchTwoToneIcon />
                 <input type="text" placeholder='Search'/>
                 </div>
       </div>


      
        <div className="header_right">
          
                
                <Headeright Icon={HomeWorkIcon} title="Home"/>
                <Headeright Icon={PeopleAltIcon} title="Network"/>
                <Headeright Icon={BusinessCenterIcon} title="Jobs"/>
                {/* <Headeright Icon={MessageIcon} title="Message" /> */}
                <Headeright Icon={NotificationAddIcon} title="Notification"/>
                {/* <Headeright Icon={PersonIcon} title="Piyush Yadav"/> */}
                <Headeright avatar={Avatar} title="Piyush" id="vatar" />
                
              
              
        </div>
   </div>
  )
}

export default Header