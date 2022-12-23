import axios from "axios";


const API = axios.create({ baseURL: 'https://usurp.live/' });
API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});


export const fetchPosts = () => API.get('/posts');
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`posts/search?searchQuery=${searchQuery.search || 'none' }&tags=${searchQuery.tags}`);

export const fetchUserPosts = (userPosts) => API.patch('/posts', userPosts);
export const fetchSpecificUserPosts = (specificUserPosts) => API.patch('/posts/userspecific', specificUserPosts);
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });
export const disLikePost = (id) => API.patch(`/posts/${id}/disLikePost`);
export const disLikeQuestion = (id) => API.patch(`/questions/${id}/disLikeQuestion`);
export const fetchQuestions = () => API.get('/questions');
export const fetchQuestion = (id) => API.get(`/questions/${id}`);
export const fetchUserQuestions = (userQuestions) => API.patch('/questions', userQuestions);
export const fetchQuestionsBySearch = (searchQuery) => API.get(`questions/search?searchQuery=${searchQuery.search || 'none' }&tags=${searchQuery.tags}`);
export const fetchSpecificUserQuestions = (specificUserQuestions) => API.patch('/questions/userspecific', specificUserQuestions);
export const createQuestion = (newQuestion) => API.post('/questions', newQuestion);
export const updateQuestion = (id, updatedQuestion) => API.patch(`/questions/${id}`, updatedQuestion);
export const deleteQuestion = (id) => API.delete(`/questions/${id}`);
export const likeQuestion = (id) => API.patch(`/questions/${id}/likeQuestion`);
export const commentQ = (value, id) => API.post(`/questions/${id}/commentQuestion`, { value });
export const fetchContests = () => API.get('/contests');
export const fetchContest = (id) => API.get(`/contests/${id}`);
export const fetchContestsBySearch = (searchQuery) => API.get(`contests/search?searchQuery=${searchQuery.search || 'none' }&tags=${searchQuery.tags}`);
export const createContest = (newContest) => API.post('/contests', newContest);
export const updateContest = (id, updatedContest) => API.patch(`/contests/${id}`, updatedContest);
export const deleteContest = (id) => API.delete(`/contests/${id}`);
export const likeContest = (id) => API.patch(`/contests/${id}/likeContest`);
export const registeredUser = (id) => API.patch(`/contests/${id}/registeredUser`);
export const commentC = (value, id) => API.post(`/contests/${id}/commentContest`, { value });
export const disLikeContest = (id) => API.patch(`/contests/${id}/disLikeContest`);
export const createProfile = (newProfile) => API.post('/profiles/', newProfile);
export const updateProfile = (id, updatedProfile) => API.patch(`/profiles/${id}`, updatedProfile);
export const fetchUserProfile = (reqdata) => API.get('/profiles', reqdata);
export const fetchSpecificUserProfile = (reqdata) => API.post('/profiles/userspecific', reqdata);
export const fetchProfile = (id) => API.get(`/profiles/${id}`);
export const fetchProfiles = () => API.get('/profiles/all');
export const fetchFollowers = () => API.get('/followers');
export const createFollowers = (newFollowers) => API.post('/followers', newFollowers);
export const deleteFollowers = (id) => API.delete(`/followers/${id}`);
export const signIn = (form) => API.post('/user/signin', form);
export const signUp = (form) => API.post('/user/signup', form);
export const createTask = (newTask) => API.post('/tasks', newTask);
export const fetchTasks = () => API.get('/tasks');
export const fetchTask = (id) => API.get(`/tasks/${id}`);
