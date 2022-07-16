import Developers from '../components/Developers';
import React, { useState,useEffect} from 'react';
import Form from '../components/Form';
import Head from '../components/Header';
import SearchIcon from '../Images_Icons/Profile/search-24px.svg';
import axios from "axios";
import { Link } from 'react-router-dom';

function Home(props) {
  const [developers,setDevelopers] = useState([]);
  const [NewDeveloperAdded,setNewDeveloperAdded] = useState(false);
  const [searchWord,setSearchWord] = useState('');
  
  const DeveloperAdded = () => {
    setNewDeveloperAdded(true);
  }
  const HandleClick = (status) => {
    setIsAddDevClicked(status);
  }

  const WordMatch = (event) => {

    setSearchWord(event.target.value);
    if(searchWord === ''){
      fetchAvailableDevelopers();
      //const AvailableDevelopers = developers;
    }
    else{
      let newDevelopers = [];
      newDevelopers = developers.filter((developer) => {
      //console.log(developer['id'].toLocaleLowerCase().startsWith(searchWord.toLocaleLowerCase()));
      return (developer['id'].toLocaleLowerCase().includes(searchWord.toLocaleLowerCase()));
      })
      setDevelopers(newDevelopers);
    } 
  }
    const fetchAvailableDevelopers = () => {
      axios.get('http://localhost:3001/api/developers/').then(
          (response) => {return response.data}
        ).then(
            (data) => {setDevelopers(data) }
        )
    }
    useEffect(() => {
      fetchAvailableDevelopers();
    },[NewDeveloperAdded])
  
//<button onClick={() => {HandleClick(true)}} className='addDevBtn'>Add developer Info</button>
//{isAddDevClicked && <Form  DeveloperAdded={DeveloperAdded}/>}
//<Form  DeveloperAdded={DeveloperAdded}/>
  const[isAddDevClicked, setIsAddDevClicked] = useState(false);
  return (
      <React.Fragment>
        <Head />
        <div className='explore'>
          <h3>Explore Developer Profiles</h3>
          <hr></hr>
        </div>
        <div className='search'>
          <input type='text' className='searchBox' placeholder='Search For Developer' value={searchWord} onChange={(event) => {WordMatch(event)}}/>
          <button className='searchBtn' onClick={(event) => {WordMatch(event)}} ><img src={SearchIcon} alt="search" /></button> 
        </div>
      <Developers developers={developers}/>
      <hr></hr>
      <p>Could not find what you are looking for ?</p>      
      <button onClick={() => {HandleClick(true)}} className='addDevBtn'>Add developer Info</button>
      {isAddDevClicked && <Form  DeveloperAdded={DeveloperAdded}/>}      
    </React.Fragment>
  )
}

export default Home