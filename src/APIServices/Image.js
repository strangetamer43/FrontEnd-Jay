import axios from "axios"
const API = "http://localhost:5000/image";

export const uploadImage = async (data) => {
    console.log("dkfd")
    return await axios
        .post(API + "/uploadImage", data)
        .then(res => {
            console.log(res);
            return res;

        })

}

export const uploadVideo = async (video) => {
    return await axios
        .post(API + "/uploadVideo", video)
        .then(res => {
            return res;
        })
}