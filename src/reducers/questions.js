import { FETCH_ALL, CREATE, FETCH_QUESTION, UPDATE, DELETE, FETCH_BY_SEARCH, START_LOADING, END_LOADING, COMMENT, FETCH_USER_QUESTIONS, FETCH_SPECIFIC_USER_QUESTIONS } from '../constants/actionTypes';
export default (state = { isLoading: true, questions: []}, action) => {
    switch(action.type) {
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false};
        case DELETE:
            return {...state, questions: state.questions.filter((question) => question._id !== action.payload)};
        case UPDATE:
            return {...state, questions: state.questions.map((question) => question._id === action.payload._id ? action.payload : question)};
        case COMMENT:
            return {...state, 
                questions: state.questions.map((question) => {
                    if(question._id === action.payload._id) return action.payload;

                    return question;
                }),
            };
        case FETCH_ALL:
            return {
                ...state,
                questions: action.payload.data
            };
        case FETCH_USER_QUESTIONS:
            return{...state, questions: action.payload};
        case FETCH_SPECIFIC_USER_QUESTIONS:
            return{...state, questions: action.payload};        
        case FETCH_BY_SEARCH:
            return {...state, questions: action.payload };
        case FETCH_QUESTION:
            return {...state, question: action.payload};
        case CREATE:
            return {...state, questions: [...state.questions, action.payload]};
        default:
            return state; 
    }

}