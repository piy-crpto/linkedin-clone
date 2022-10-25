import React from 'react';
import "./Sidebar.css";
import {Avatar} from "@material-ui/core";
function Sidebar() {
  return (
   <div className="sidebar">

          <div className="sidebar_profile">

                 <img src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" alt="bgi" srcset="" />
            
                 <div className="sidebar_profile_detail">
                    <Avatar  src='data:image/jpeg;base64,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'className='sidebar_avatar' alt='P'/ >
                     <h4>Piyush Yadav</h4>
                     <p>Web Developer</p>
                     <p>Programmar</p>
                 </div>

                 <div className="profile_stats">
                      <span>Who viewed your profile</span>
                      <span className='stat_number'>20</span>
                </div>

                <div className="profile_stats">
                      <span>Connection 
                      <br /> <b>Grow your network</b>  </span>
                      <span className='stat_number'>200</span>
                     
                 </div>    
                
          </div>

         <div className="sidebar_recent">
            <p>Recent</p>
            <p className="hash"><span>#</span>Programming</p>
            <p className="hash"><span>#</span>Web Development</p>
            <p className="hash"><span>#</span>HTML and CSS</p>
            <p className="hash"><span>#</span>Javascript</p>
            <p className="hash"><span>#</span>React JS</p>
            <p className="hash"><span>#</span>Node JS</p>

         </div>

   </div>
  )
}

export default Sidebar