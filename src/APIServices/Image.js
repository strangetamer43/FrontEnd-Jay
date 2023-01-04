import axios from "axios"
const API = "https://usurp.live/image";

export const uploadImage = async (data) => {
    
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

export const uploadAudio = async (audio) => {
    return await axios
        .post(API + "/uploadAudio", audio)
        .then(res => {
            return res;
        })
}