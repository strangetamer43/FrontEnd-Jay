import axios from "axios";
const API = axios.create({ baseURL: "https://usurp.live/" })

// Contains the all the API requests for questions

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});



export const create = async (data) => {

    return API.post("/createQuiz", data);
}


export const editQuiz = async (data) => {
    return API.put("/editQuiz", data);
}

export const getQuizById = async (quizId) => {
    return API.get(`/getQuiz/${quizId}`);


}
export const getQuizByUser = async (userId) => {
    return API.get(`/getAllQuizOfUser/${userId}`);
}

export const getAllQuizs = async () => {
    return API.get("/getAllQuizs");
}


export const getQuizBySearchForUser = async (search, data) => {
    return API.post(`/getQuizBySearchForUser/${search}`, data);
}

export const getQuizBySearch = async (search) => {
    return API.get(`/getQuizBySearch/${search}`);
}

export const saveProgress = async (data) => {
    return API.post("/saveProgress", data);

}

export const getProgress = async (data) => {
    return API.post("/getProgress", data);
}