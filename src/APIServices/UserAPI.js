import axios from "axios"
const API = "http://localhost:5000/user";

// Contains the all the API requests for the user 


export const signUp = async (data) => {
    return axios
        .post(API + "/SignUp", data)
        .then(res => {
            console.log(res);
            localStorage.setItem("profile", JSON.stringify(res.data))
            window.location.reload(false);
            return res;

        })

}


export const signIn = async (data) => {
    return axios
        .post(API + "/SignIn", data)
        .then(res => {
            console.log(res);
            localStorage.setItem("profile", JSON.stringify(res.data))
            window.location.reload(false);
            return res;
        })
}





