import React,{useEffect, useState} from 'react';
import LinkedInIcon from '../Images_Icons/Icon/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png';
import GithubIcon from '../Images_Icons/Icon/iconfinder_github_317712.png';
import CodechefIcon from '../Images_Icons/Icon/codechef-1324440139527402917_32.png';
import HackerRankIcon from '../Images_Icons/Icon/iconfinder_160_Hackerrank_logo_logos_4373234.png';
import MediumIcon from '../Images_Icons/Icon/iconfinder_Circled_Medium_svg5_5279113.png';
import TwitterIcon from '../Images_Icons/Icon/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
function Form(props){
    //const HandleClick = props.HandleClick;
    const [GithubId, setGitId] = useState("");
    const [LinkedinId, setLinkedinId] =useState("");
    const [CodechefId, setCodechefId] = useState("");
    const [HackerrankId, setHackerrankId] = useState("");
    const [TwitterId, setTwitterId] = useState("");
    const [MediumId, setMediumId] = useState("");
    const [isPostReqComplete, setPostReqComplete] = useState(false);
    const navigate  = useNavigate();
    const ClearFormData = () => {
        setGitId('');
        setHackerrankId('');
        setLinkedinId('');
        setCodechefId('');
        setMediumId('');
        setTwitterId('');
    }
    useEffect(() => {
        ClearFormData();
    },[])
    if(!props.show){
        return null;
    }
    const HandleSubmit = async(e) => {
        console.log("submit");
        e.preventDefault();
        let data = {
            "github_id": GithubId,
            "linkedin_id": LinkedinId,
            "codechef_id": CodechefId,
            "hackerrank_id": HackerrankId,
            "twitter_id": TwitterId,
            "medium_id": MediumId
        }
        //console.log(data);
        // {navigate('/')}
        try {
            const response = await axios.post("http://localhost:3001/api/developers/", 
               data
            );
            console.log(response);
            setPostReqComplete(true)
           
            
        } catch (error) {
            console.log(error);
            return (
                <h1>Invalid Username</h1>
            )
        }
        
        
    }   
    /*
    if(GithubId === ''){
        alert('Please provide Github ID');
        return;
    }*/
    if(isPostReqComplete){
        return (
            <h1>Form Submitted</h1>
            
        )
    }
    return (
        <form className="devAddform" >
            <div className='formHeader'>
                <p>Add developer profile</p>
                <br></br>
                <hr></hr>
            </div>
            <div className='item'>
            <label htmlFor='item_input'>
            <img src={GithubIcon} alt='github' id='giticon' />
                Github <span className='star'>*</span>
            </label>
            <br/>
             <input type='text' className='item_input' value={GithubId} onChange = {(event) => setGitId(event.target.value)} />
          </div>
    
          <div className='item'>
            <label htmlFor='item_input'>
                <img src={LinkedInIcon} alt='linkedin' id='linkedicon'  />
                Linkedin 
            </label >
            <br />
          
            <input type='text' className='item_input' value={LinkedinId} onChange = {(event) => setLinkedinId(event.target.value)} />
          </div>
          <div className='item'> 
            <label htmlFor='item_input'  >
                <img src={CodechefIcon} alt='codechef' id='codecheficon' />
                Codechef
            </label >
            <br />
            <input type='text' className='item_input' value={CodechefId} onChange = {(event) => setCodechefId(event.target.value)} />
          </div>
          <div className='item'>
            <label htmlFor='item_input'>
                <img src={HackerRankIcon} alt='hackerrank' id='hackericon' />
                HackerRank
            </label>
            <br />
            <input type='text' className='item_input' value={HackerrankId} onChange = {(event) => setHackerrankId(event.target.value)} />
          </div>
          <div className='item'>
            <label htmlFor='item_input'>
                <img src={TwitterIcon} alt='twitter' id='twitericon' />
                Twitter
            </label>
            <br/>
            <input type='text' className='item_input' value={TwitterId} onChange = {(event) => setTwitterId(event.target.value)} />
          </div>
          <div className='item'>
            <label htmlFor='item_input'>
                <img src={MediumIcon} alt='medium' id='mediumicon' />
                Medium
            </label>
            <br />
          <input type='text' className='item_input' value={MediumId} onChange = {(event) => setMediumId(event.target.value) }/>
        </div>
          <button id={'devformsubmit'} type='submit' onClick={HandleSubmit} >Submit</button>
          <button id={'devformcancel'} onClick={ClearFormData}> Cancel </button>
        </form>
      );
}
export default Form;



    



