import React, { useEffect, useState } from 'react'
import {useParams,useNavigate} from 'react-router-dom';
import DefaultProfile from '../Images_Icons/Profile/account_circle-24px.svg';
import LinkedInIcon from '../Images_Icons/Icon/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png';
import GithubIcon from '../Images_Icons/Icon/iconfinder_github_317712.png';
import CodechefIcon from '../Images_Icons/Icon/codechef-1324440139527402917_32.png';
import HackerRankIcon from '../Images_Icons/Icon/iconfinder_160_Hackerrank_logo_logos_4373234.png';
import MediumIcon from '../Images_Icons/Icon/iconfinder_Circled_Medium_svg5_5279113.png';
import TwitterIcon from '../Images_Icons/Icon/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png';
import GmailIcon from '../Images_Icons/Profile/email-24px.svg';
import Location from '../Images_Icons/Profile/location_on-24px.svg';
import Company from '../Images_Icons/Profile/business-24px.svg';
import Link from '../Images_Icons/Profile/insert_link-24px (1).svg';
import axios from "axios";

function DevInfo() {

    const {devId} = useParams();
    const [developerData,setDeveloperData] = useState([]);
    const [dataAvailable,setDataAvailable] = useState(false);
    const navigate = useNavigate();

    const GetData = () => {

        axios.get(`http://localhost:3001/api/developers/${devId}`).then(
            (response) => {return response.data}
        ).then(
            (data) => {setDeveloperData(data)}
        ).then(
            () => {
                setDataAvailable(true);
            }
        )
    };

    useEffect(() => {
        GetData();
    },[])


    if(dataAvailable){

    const {repos,id,hackerrank_id,avatar_url,bio,blog,codechef_id,company,email,github_id,linkedin_id,location,medium_id,name,twitter_id,} = developerData;

    return (
        <div className='developerInfo'>
            <div className='devInfoHeader'>
               <div className='item'><h2>The Developer Profile</h2> </div>
                <div className='item' onClick={() => {navigate('/')}}><button><h2>All Developers</h2></button></div>
            </div>
            <div className='about'>
                <img src={avatar_url} alt={DefaultProfile} />
                <h1>{name}</h1>
                <br/>
                <p>{bio}</p> <br />
                <div className='platforms'>
                    <a href={`https://github.com/${github_id}`}><img src={GithubIcon} alt='Github' /></a>
                    <a href={`https://www.hackerrank.com/${hackerrank_id}`}><img src={HackerRankIcon} alt='hackerrank' /></a>
                    <a href={`https://www.codechef.com//${codechef_id}`}><img src={CodechefIcon} alt='codechef' /></a>
                    <a href={`https://www.linkedin.com/in/${linkedin_id}`}><img src={LinkedInIcon} alt='linkedin' /></a>
                    <a href={`https://medium.com/${medium_id}`}><img src={MediumIcon} alt='medium' /></a>
                    <a href={`https://github.com/${twitter_id}`}><img src={TwitterIcon} alt='twitter' /></a>
                    <a href={`https://github.com/${twitter_id}`}><img src={GmailIcon} alt='mail' /></a>
                </div>
                <div className='subContent'>

                    <div className='items'><p><img src={Location} />{location}</p></div>
                    <div className='items'><p><img src={Company} />{company}</p></div>
                    <div className='items'><p><img src={Link} />{blog}</p></div>

                </div>
            </div>
            
            <div className='repos'>
                <h1>Github Repositories</h1><hr />
                {
                    repos.map((repo) => {
                        const {name,html_url,description,updated_at} = repo;

                        return (
                            <div className='repo'>
                                <a href={html_url} title={name}><h3>{name}</h3></a><p>updated at {updated_at}</p>
                                <p>{description}</p>
                                <hr></hr>
                                </div>
                        )
                    })
                }
            </div>
        </div>
        )
}
else if(! dataAvailable){
    return (
        <h1>Data Not Available</h1>
    )
}
}

export default DevInfo