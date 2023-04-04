import React, { useContext } from 'react';
import {AppContext} from "../App.js"
import { useEffect, useState } from 'react';
import {useParams, Link } from "react-router-dom";


function  Home() {
let list =  useContext(AppContext);

 
  return (
    <div className='flex'>
       {
        list[0].map((ar)=>(
            <div className='card'>
                <Link className='link' to={`/${ar.id}`}>
                    <img className='image' src={`https://picsum.photos/200?random=${ar.id}`} />
                    <p>User id: {ar.id}</p>
                    <p>Title : {ar.title.substring(0,30)}</p>
                    <p className='last'>Body : {ar.body.substring(0,50)}<br /> Read more....</p>
                </Link>
            </div>
        ))
       }
    </div>
  )
}

export default Home;

