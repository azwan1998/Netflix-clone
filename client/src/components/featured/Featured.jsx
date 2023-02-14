
import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import React from 'react';
import './featured.scss';


function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{ type === "movie" ? "Movies" : "Series" }</span>
          <select name='genre' id='genre'>
            <option>Genre</option>
            <option value="Tank"> Tank </option>
            <option value="Mage"> Mage </option>
            <option value="Figther"> Figther </option>
            <option value="MM"> Marksman </option>
            <option value="Jungler"> Jungler </option>
          </select>
        </div>
      )}
      <img className="backgrd" src={process.env.PUBLIC_URL + '/img/bg.png'} alt=""/>
      <div className="info">
        <img src={process.env.PUBLIC_URL + '/img/one.gif'} alt="" />
        <span className='desc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Impedit adipisci illum alias eligendi harum aspernatur culpa soluta dolor odit ad similique 
        cumque pariatur optio asperiores repellat amet, consequatur deserunt rem.
        </span>
        <div className="buttons">
          <button className='play'>
            <PlayArrow />
            <span>play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>more</span>
          </button>
        </div>
      </div>
    </div>
    
    
  );
}

export default Featured