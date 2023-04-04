
import React from 'react'
import { AppContext } from '../App';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';


function Detail() {
    let list = useContext(AppContext)
    const {id} = useParams();
    let image="https://picsum.photos/200?random=${post.id}";


    if(!list){
        return<div><h1>Loading...!!!</h1></div>
    }
    console.log("new",list[0]);
     let newlist= list[0].find((data)=>data.id==id)
     console.log("n2>>",newlist);
   return (
    <div className='details'>
        <h1>Product Details for Item of User id: {id}</h1>
        <img className='image' src={`https://picsum.photos/200?random=${newlist.id}`} />
        <p>User id: {newlist.id}</p>
        <p>Title : {newlist.title}</p>
        <p>Body : {newlist.body}</p>
    </div>
  )
}

export default Detail;