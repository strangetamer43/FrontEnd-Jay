import axios from "axios";
const API = axios.create({ baseURL: "https://usurp.live/user" })

// Contains the all the API requests for questions

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});




export const createUser = async (data) => {
    
    return await axios
        .post(API + "/createUser", data)
        .then(res => {
            console.log(res);
            return res;

        })
}



export const follow = async (data) => {

    return API.post("/follow", data);
}

export const unfollow = async (data) => {
    return API.post("/unfollow", data)
}