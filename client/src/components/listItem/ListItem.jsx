import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import React from 'react';
import './listItem.scss';

function ListItem() {
  return (
    <div className='listItem'>
        <img src={process.env.PUBLIC_URL + '/img/film.jpg'} alt="" />
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
        </div>
    </div>
  );
}

export default ListItem