import axios from "axios"
const API = "http://localhost:5000/user";


export const createUser = async (data) => {
    console.log("fkjdfdkh");
    console.log(data);
    return await axios
        .post(API + "/createUser", data)
        .then(res => {
            console.log(res);
            return res;

        })
}