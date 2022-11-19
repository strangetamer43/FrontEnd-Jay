import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" })

// contains all the API requests for the reponse 

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const submitResponse = async (data) => {


    return API.post("/submitResponse", data);
}


export const getResponseByQuizId = async (quizId) => {
    console.log(quizId)
    return API.get(`/getResponseByQuizId/${quizId}`);
}

export const getResponseByUser = async (userId) => {

    return API.get(`/getResponsesOfUser/${userId}`);
}

export const submittingQuiz = async (data) => {
    return API.post("/submittingQuiz", data);
}

export const getResponseById = async (responseId) => {
    return axios
        .get(API + "/getResponse" + responseId)
        .then(res => {
            console.log(res);
            return res;
        })
}

