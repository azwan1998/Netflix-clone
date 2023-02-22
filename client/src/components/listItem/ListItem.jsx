import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import './listItem.scss';
import axios from "axios";
import { Link } from 'react-router-dom';

function ListItem({index, item}) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect( ()=>{
    const getMovie = async () =>{
      try {
        const res = await axios.get("/movies/find/"+item , {
          headers:{
            token :
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2JkMDY4ZGU3MTQ3YjQxMGE0ODkwOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Njk5MjI2OCwiZXhwIjoxNjc3NDI0MjY4fQ.XGqLvTFuYpp8AyTtFpGmCZR9S8Ddg7eV0xJF4GUjEn8" 
          },
        });
        console.log(res);
        setMovie(res.data);
      } catch (err) {
        console.log(err)
      }
    }
    getMovie();
  },[item])

  return (
    <Link to={{ pathname: "/watch", movie: movie}}>
      <div className='listItem' 
        style={{left: isHovered && index * 225 - 50 + index * 2.5}}
        onMouseEnter={()=>setIsHovered(true)} 
        onMouseLeave={()=>setIsHovered(false)}
        >
        <img src={movie.img} alt="" />
          {isHovered && (
            <>
              <video src={movie.trailer} autoPlay={true} loop/>
              <div className="itemInfo">
                <div className="icons">
                  <PlayArrow className='icon'/>
                  <Add className='icon'/>
                  <ThumbUpAltOutlined className='icon'/>
                  <ThumbDownAltOutlined className='icon'/>
                </div>
                <div className="itemInfoTop">
                  <span>Title : {movie.title}</span>
                  <span>{movie.duration}</span>
                  <span className="limit">+{movie.limit}</span>
                  <span>{movie.year}</span>
                </div>
                <div className="desc">
                  {movie.desc}
                </div>
                <div className="genre">
                  {movie.genre}
                </div>
              </div>
            </>
          )}
      </div>
    </Link>
  );
}

export default ListItem