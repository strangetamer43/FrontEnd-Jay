import axios from "axios"
const API = "https://usurp.live/user";

// Contains the all the API requests for the user 


export const createUser = async (data) => {
    
    return await axios
        .post(API + "/createUser", data)
        .then(res => {
            console.log(res);
            return res;

        })
}

export const getSpecificUser = async (data) =>{

    return await axios
        .patch(API + "/", data)
        .then(res => {
            console.log(res);
            return res;
        })
        .catch(function (err) {
            console.error(err);
        })
}




