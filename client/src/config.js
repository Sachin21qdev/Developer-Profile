import axios from "axios"
const axiosInstance = axios.create({
    baseURL : "https://sachin-developer-profile.herokuapp.com/api/developers/"
})
export default axiosInstance