/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../css/card.css'
import star from '../icons/star.png'
import  EmptyStar from '../icons/emptystar.png'


function card({data}) {
  const [fav,setFav]=useState(false);

  const dispatch=useDispatch();
  
 

  const HandleAddFavList=()=>{
    console.log("setData")
     localStorage.setItem(data.id,JSON.stringify(data));
     
     setFav(!fav);
     dispatch({type:'SetFavDataLength',payload:localStorage.length});
  }

  const HandleremoveFavList=()=>{
    localStorage.removeItem(data.id);
    setFav(!fav);
    dispatch({type:'SetFavDataLength',payload:localStorage.length});
 }


  return (
    <div className='CardContainer'>
     <div className='CardLeftCotainer'>
        <img  id='CardImg' src={data.image_url}/>
     </div>

     <div className='CardRigthContainer'>

      <h5 id='CardTitleName'>
        {data.name}
      </h5>

      <p style={{fontFamily:'serif'}}>{data.description}</p>
       <h6>Attution-level : {data.attenuation_level}</h6>
      <h6>Fisrt Brewed : {data?.first_brewed}</h6>
      {localStorage.getItem(data.id)?<img  id='starImg' src={star} onClick={HandleremoveFavList}/>:<img  id='starImg' src={EmptyStar} onClick={HandleAddFavList}/>
      }  
     </div>
      
      
    </div>
  );
}

export default card;