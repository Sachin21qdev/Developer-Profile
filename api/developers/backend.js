const { response } = require('express');
const express = require('express');
const axios = require('axios');
const app = express();
const router = express.Router();
const github_api = "https://api.github.com/users/";
app.use(express.json());
let developer_info = [
  {
      "id": "gcnit",
      "avatar_url": "https://avatars.githubusercontent.com/u/4833751?v=4",
      "name": "Gaurav Chandak",
      "company": "workat.tech",
      "blog": "https://workat.tech",
      "location": "Bangalore, India",
      "email": null,
      "bio": "Building workat.tech;\r\nPreviously Software Engineer at @Flipkart, @microsoft and @tracxn",
      "github_id": "gcnit",
      "linkedin_id": "gcnit",
      "codechef_id": "gc_nit",
      "hackerrank_id": "gcnit",
      "twitter_id": "gc_nit",
      "medium_id": "gc_nit",
      "repos": [{
        "name": "awesome-learn-to-code",
        "html_url": "https://github.com/gcnit/awesome-learn-to-code",
        "description": "A list of awesome resources for learning to code",
        "updated_at": "2020-08-12T18:21:53Z"
   }]
   },

   {
      "id": "naveen675",
      "avatar_url": "https://avatars.githubusercontent.com/u/38736123?v=4",
      "name": "Naveen Sai",
      "company": null,
      "blog": "https://www.hackerrank.com/spnaveen675",
      "location": null,
      "email": null,
      "bio": "https://www.linkedin.com/in/naveensai-675/",
      "github_id": "naveen675",
      "linkedin_id": "gcnit",
      "codechef_id": "gc_nit",
      "hackerrank_id": "gcnit",
      "twitter_id": "gc_nit",
      "medium_id": "gc_nit",
        "repos": [
           {
               "name": "Backend",
               "html_url": "https://github.com/naveen675/Backend",
               "description": null,
               "updated_at": "2022-04-16T11:20:22Z"
           },
           {
             "name": "DeveloperProfile",
              "html_url": "https://github.com/naveen675/DeveloperProfile",
               "description": null,
               "updated_at": "2022-04-11T11:53:41Z"
           },
           {
               "name": "devprofile",
               "html_url": "https://github.com/naveen675/devprofile",
               "description": null,
               "updated_at": "2022-04-24T09:48:17Z"
           },
           {
               "name": "ds-algo",
               "html_url": "https://github.com/naveen675/ds-algo",
               "description": "This repo contains all the ds and algo problems that I have solved so far. which includes starting arrays,strings,linked list, pointers,hashing,heap,stack and queue,Back tracking,BT, Greedy , BST,graphs,",
              "updated_at": "2022-02-22T17:21:55Z"
         },
          {
               "name": "GCP",
               "html_url": "https://github.com/naveen675/GCP",
               "description": "Google Cloud Certifications",
               "updated_at": "2022-03-15T19:11:49Z"
           },
           {
               "name": "hello-world",
               "html_url": "https://github.com/naveen675/hello-world",
               "description": null,
               "updated_at": "2022-04-06T19:12:27Z"
           },
           {
               "name": "Javascript",
               "html_url": "https://github.com/naveen675/Javascript",
               "description": null,
               "updated_at": "2022-02-20T10:11:53Z"
           },
           {
               "name": "JsAssignment",
               "html_url": "https://github.com/naveen675/JsAssignment",
               "description": null,
               "updated_at": "2022-03-29T07:01:06Z"
           },
           {
               "name": "MernApp",
               "html_url": "https://github.com/naveen675/MernApp",
               "description": null,
               "updated_at": "2022-04-25T11:44:25Z"
          },
          {
               "name": "naveen675",
               "html_url": "https://github.com/naveen675/naveen675",
              "description": null,
               "updated_at": "2022-03-18T14:49:55Z"
          },
           {
               "name": "naveen675.github.io",
               "html_url": "https://github.com/naveen675/naveen675.github.io",
               "description": null,
               "updated_at": "2022-03-25T06:14:12Z"
           },
           {
               "name": "Portfo1",
               "html_url": "https://github.com/naveen675/Portfo1",
               "description": "Created a sample web page using python flask framework. In this website Contact page will take user information and stores it in csv file",
               "updated_at": "2022-03-19T18:18:41Z"
           },
           {
               "name": "Portfolio",
               "html_url": "https://github.com/naveen675/Portfolio",
               "description": "Created with CodeSandbox",
               "updated_at": "2022-04-18T12:24:08Z"
           },
           {
               "name": "profile",
               "html_url": "https://github.com/naveen675/profile",
               "description": null,
               "updated_at": "2022-05-01T09:40:56Z"
           },
           {
               "name": "Python",
               "html_url": "https://github.com/naveen675/Python",
               "description": "Python codes",
               "updated_at": "2022-04-01T18:02:35Z"
           },
           {
               "name": "React",
               "html_url": "https://github.com/naveen675/React",
               "description": "Created with CodeSandbox",
               "updated_at": "2022-04-10T17:41:34Z"
           },
           {
               "name": "React-apps",
               "html_url": "https://github.com/naveen675/React-apps",
               "description": null,
               "updated_at": "2022-04-29T06:29:57Z"
           },
           {
               "name": "react-exercise",
              "html_url": "https://github.com/naveen675/react-exercise",
                "description": "Created with CodeSandbox",
                "updated_at": "2022-04-22T16:33:04Z"
          },
           {
               "name": "System-Design",
               "html_url": "https://github.com/naveen675/System-Design",
               "description": null,
              "updated_at": "2022-02-05T14:29:59Z"
           },
           {
              "name": "system-design-primer",
               "html_url": "https://github.com/naveen675/system-design-primer",
               "description": "Learn how to design large-scale systems. Prep for the system design interview.  Includes Anki flashcards.",
               "updated_at": "2021-12-25T16:12:36Z"
           },
           {
               "name": "UtilityApp",
               "html_url": "https://github.com/naveen675/UtilityApp",
               "description": "This Repository contains an App designed using javascript which will be doing following Operations URL Encode/Decode, base64 Encode/decode, String Hashing, Epoch,Humandate,Binary,Octal,Hex,Decimal, Rgb and Hex,Unit Conversions",
              "updated_at": "2022-03-25T06:13:33Z"
           }
      ]
   }
];
/*
let temp = {
      "id": "gcnit",
      "avatar_url": "https://avatars.githubusercontent.com/u/4833751?v=4",
      "name": "Gaurav Chandak",
      "company": "workat.tech",
      "blog": "https://workat.tech",
      "location": "Bangalore, India",
      "email": null,
      "bio": "Building workat.tech;\r\nPreviously Software Engineer at @Flipkart, @microsoft and @tracxn",
      "github_id": "gcnit",
      "linkedin_id": "gcnit",
      "codechef_id": "gc_nit",
      "hackerrank_id": "gcnit",
      "twitter_id": "gc_nit",
      "medium_id": "gc_nit",
      "repos": [{
      "name": "awesome-learn-to-code",
      "html_url": "https://github.com/gcnit/awesome-learn-to-code",
      "description": "A list of awesome resources for learning to code",
        "updated_at": "2020-08-12T18:21:53Z"
  }]
  };

*/
// Get all developers
//developerInfo
router.get("/", (req, res) => {
  const developers = [];
  developer_info.map((developer) => {
    const dev_resp = {};
    const { id, avatar_url } = developer;
    dev_resp["id"] = id;
    dev_resp["avatar_url"] = avatar_url;
    developers.push(dev_resp);
  });
  res.status(200).json(developers);
});
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
          developer_info.push(responseData);
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
  let requested_developer = {};
  let i=0;
  for(;i<developer_info.length;i++){
    if(developer_info[i]["id"]==String(req.params.id)){
      requested_developer = developer_info[i];
      break;
    }
  }
  if(i!=developer_info.length){
    res.status(200).send(requested_developer);
  }
  else{
    res.status(404).send("User does not exist");
  }
})
//deleting a developer 
router.delete("/:id",(req,res)=>{
  const id = req.params.id;
  let j=0;
  for(;j<developer_info.length;j++){
    if(developer_info[j]["id"]==String(req.params.id)){
      developer_info.splice(j,j+1);
      console.log(developer_info);
      res.status(204).send("Deleted the requested user");
    }
    
  }
  
});
module.exports = router;
