import React from 'react'
import {useNavigate} from 'react-router-dom';

function Error() {

  const navigate  = useNavigate();
  return (
    <div className='error'>
      <h1>Error ...</h1>
      <p>Please select below button to go Home</p>
      <button onClick={() => {navigate('/')}}>Home</button>
    </div>
  )
}

export default Error