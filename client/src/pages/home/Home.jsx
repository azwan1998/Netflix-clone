import React, { useEffect, useState } from 'react';
import './home.scss';
import Navbar from '../../components/navbar/Navbar.jsx';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import axios from "axios";

function Home({type}) {
  const [lists,setLists] =useState([]);
  const [genre,setGenre] =useState(null);

  useEffect(()=>{
    const getRandomLists = async ()=>{
      try {
        const res = await axios.get(
          `lists ${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,{
            headers:{
              token :
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2JkMDY4ZGU3MTQ3YjQxMGE0ODkwOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Njk5MjI2OCwiZXhwIjoxNjc3NDI0MjY4fQ.XGqLvTFuYpp8AyTtFpGmCZR9S8Ddg7eV0xJF4GUjEn8" 
            },
          }
          );
          setLists(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
        <Navbar />
        <Featured type={type}/>
        {lists.map((list) => (
          <List list={list} />
        ))}
    </div>
    
    
  );
}

export default Home