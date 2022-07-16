const mangoose = require('mongoose');
const {Schema} = mangoose;

const developerInfoSchema = new Schema({
    id : String,
    avatar_url : String,
    name : String,
    company : String,
    blog : String,
    location : String,
    email : String,
    bio : String,
    github_id : String,
    linkedin_id : String,
    codechef_id : String,
    hackerrank_id : String,
    twitter_id : String,
    medium_id : String,
    repos : Array
})

module.exports = mangoose.model('developerInfo',developerInfoSchema);