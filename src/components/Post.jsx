import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function Post({name,description,message,photoURL}) {
  return (
  <div className="posts">

    <div className="post_header">

        <div className="header_left">
            <Avatar alt='P'src={photoURL}/>
            <div className="header_left_profile_detail">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
       </div>
       <MoreVertIcon />

       
    </div>


<div className="post_body">
         <p>{message}</p>

</div>

<div className="post_footer">
         {/* <p>this is a post  footer</p> */}
           
                
                <div className="footer_icon">
                <ThumbUpIcon className='footicons'/>
                <span>Like</span>
                </div>

                <div className="footer_icon">
                <CommentIcon className='footicons'/>
                <span>Comment</span>
                </div>

                <div className="footer_icon">
                <ShareIcon className='footicons'/>
                <span>Share</span>
                </div>

                <div className="footer_icon">
                <SendIcon className='footicons'/>
                <span>Send</span>
                </div>
                  
                  

           

</div>
    
  </div>
  )
}

export default Post