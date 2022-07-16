const { response } = require('express');
const express = require('express');
const axios = require('axios');
const developerInfo = require('../../models/devInfoModel');
const app = express();
const router = express.Router();
const github_api = "https://api.github.com/users/";
app.use(express.json());
// Get all developers
//developerInfo
router.get("/", (req, res) => {
  const developers = [];
  try{
    developerInfo.find({}).then((allDevelopers) => {allDevelopers.map((developer) => {
      const dev_resp = {};
      const { id, avatar_url } = developer;
      dev_resp["id"] = id;
      dev_resp["avatar_url"] = avatar_url;
      developers.push(dev_resp);
    })
    res.status(200).send(developers);
  })
  }  
  catch{
    res.status(404).send("Invalid Request");
  }
})
//Add a developer

router.post("/",(req,res)=>{
  const github_id = req.body.github_id;
  const gitInfo =   axios.get(`https://api.github.com/users/${github_id}`).then(response=>response.data);
  const reposInfo = axios.get(`https://api.github.com/users/${github_id}/repos`).then(response=>response.data);

  const send_request = async function(){
    try{
      await Promise.all([gitInfo,reposInfo]).then(
        array=>{
          const rep = array[1].map( x => {
            const container ={};
            container.name = x.name;
            container.html_url = x.html_url;
            container.description = x.description;
            container.updated_at = x.updated_at;
            return container;
          });
          
          const responseData = {
            id: github_id,
            avatar_url: array[0].avatar_url,
            name: array[0].name,
            company: array[0].company,
            blog: array[0].blog,
            location: array[0].location,
            email: array[0].email,
            bio: array[0].bio,
            github_id: github_id,
            linkedin_id: req.body.linkedin_id,
            codechef_id: req.body.codechef_id,
            hackerrank_id: req.body.hackerrank_id,
            twitter_id: req.body.twitter_id,
            medium_id: req.body.medium_id,
            repos: rep
          };
          
          const profile = new developerInfo({
            id: github_id,
            avatar_url: array[0].avatar_url,
            name: array[0].name,
            company: array[0].company,
            blog: array[0].blog,
            location: array[0].location,
            email: array[0].email,
            bio: array[0].bio,
            github_id: github_id,
            linkedin_id: req.body.linkedin_id,
            codechef_id: req.body.codechef_id,
            hackerrank_id: req.body.hackerrank_id,
            twitter_id: req.body.twitter_id,
            medium_id: req.body.medium_id,
            repos: rep
          })
          //console.log("hello");
          //console.log(profile);
          profile.save();
          res.status(201).send(github_id);
      })
    }
    catch(err){
      res.status(401).send("Github Username is invalid");
    }

  }
  send_request();
  
  
});
//

//Get a developer with particular id
router.get("/:id",(req,res)=>{
  const id = req.params.id;
  console.log(id);
  try{
    const data = developerInfo.findOne({'id':`${id}`}).then((data) => { res.status(200).send(data)});
  }
  catch{
    res.status(404).send("User does not exist");
  }
 
})
//deleting a developer 
router.delete("/:id",(req,res)=>{
  const id = req.params.id;
  console.log(id);
  try{
    developerInfo.deleteOne({'id':`${id}`}).then(res.status(204).send("Deleted the requested user"));
  }
  catch{
    res.status(404).send("User does not exist");
  }  
});
module.exports = router;
