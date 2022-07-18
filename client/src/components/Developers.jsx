import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import ProfileIcon from '../Images_Icons/Profile/account_circle-24px.svg'
import Arrow from '../Images_Icons/Profile/north_east-24px.svg';


function Developers(props) {
    
    const navigate = useNavigate();
    const developers = props.developers


  return (
    <div className='developers' >
        {
            
            developers.map((developer,index) => {
                const {id, avatar_url} = developer;

                return(

                    <div className ="item" key={index}>

                       <div className='subItem'> <img src={avatar_url} className='developerImage' alt={ProfileIcon} /></div>
                        <div className='subItem'><p>{id}</p></div>
                        <div className='subItem'><button onClick={() => {navigate(`devinfo/${id}`)}}><img src={Arrow} className='route' alt={ProfileIcon} /></button></div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Developers