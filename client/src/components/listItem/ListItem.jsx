import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import './listItem.scss';

function ListItem({index}) {
  const [isHovered, setIsHovered] = useState(false);

  const trailer = "https://player.vimeo.com/video/798641197?h=8946cd74b2";
  return (
    <div className='listItem' 
    style={{left: isHovered && index * 225 - 50 + index * 2.5}}
    onMouseEnter={()=>setIsHovered(true)} 
    onMouseLeave={()=>setIsHovered(false)}
    >
        <img src={process.env.PUBLIC_URL + '/img/film.jpg'} alt="" />
        <video src={trailer} autoPlay={true} loop/>
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow />
            <Add />
            <ThumbUpAltOutlined />
            <ThumbDownAltOutlined />
          </div>
          <div className="itemInfoTop">
            <span>1 Hour 15 mins</span>
            <span className="limit">+16</span>
            <span>1999</span>
          </div>
          <div className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quis harum id natus. Provident, 
            nobis repellendus saepe perspiciatis ea. 
          </div>
          <div className="genre">
            Jungler
          </div>
        </div>
    </div>
  );
}

export default ListItem