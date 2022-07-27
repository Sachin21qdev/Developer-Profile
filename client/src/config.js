import axios from "axios"
export const axiosInstance = axios.create({
    baseURL : "https://sachin-developer-profile.herokuapp.com/api/developers/"
})