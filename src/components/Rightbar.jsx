import React from 'react'
import './Rightbar.css'
import InfoIcon from '@mui/icons-material/Info';
function Rightbar() {
  return (
   <div className="rightbar">


      <div className="rightbar_top">

        <div className="rightbar_header">
        <h4>Linkedin News</h4>
        <InfoIcon className='infoicon'/>
        </div>
       
       <div className="rightbar_body">
        <ul className="rightbar_options">
            <li>
              <h4>Slaying Job Search Fees</h4>
              <p>6d ago 5,00 readers
              </p>
           </li>

            <li>
              <h4> A two rule for Pizza eating</h4>
              <p>2d ago 4,00 readers
              </p>
          </li>

          <li>
              <h4>Slaying Job Search Fees</h4>
              <p>6d ago 5,00 readers
              </p>
           </li>

            <li>
              <h4> A two rule for Pizza eating</h4>
              <p>2d ago 4,00 readers
              </p>
          </li>
        </ul>
      </div>
      </div>







      <div className="rightbar_bottom">

        <div className="rightbar_header">
        <h4>Increase Linkedin Connections</h4>
        <InfoIcon />
        </div>
       
       <div className="rightbar_body">
        <ul className="rightbar_options">
            <li>
              <h4>Slaying Job Search Fees</h4>
              <p>6d ago 5,00 readers
              </p>
           </li>

            <li>
              <h4> A two rule for Pizza eating</h4>
              <p>2d ago 4,00 readers
              </p>
          </li>

          <li>
              <h4>Slaying Job Search Fees</h4>
              <p>6d ago 5,00 readers
              </p>
           </li>

            <li>
              <h4> A two rule for Pizza eating</h4>
              <p>2d ago 4,00 readers
              </p>
          </li>
        </ul>
      </div>
      </div>
   </div>
  )
}

export default Rightbar