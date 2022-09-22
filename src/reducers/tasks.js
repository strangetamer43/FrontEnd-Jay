import { FETCH_ALL, CREATE, FETCH_TASK, UPDATE, DELETE, FETCH_BY_SEARCH, START_LOADING, END_LOADING, COMMENT, FETCH_USER_TASKS, FETCH_SPECIFIC_USER_TASKS } from '../constants/actionTypes';
export default (state = { isLoading: true, tasks: []}, action) => {
    switch(action.type) {
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false};
        case DELETE:
            return {...state, tasks: state.tasks.filter((task) => task._id !== action.payload)};
        case UPDATE:
            return {...state, tasks: state.tasks.map((task) => task._id === action.payload._id ? action.payload : task)};
        case COMMENT:
            return {...state, 
                tasks: state.tasks.map((task) => {
                    if(task._id === action.payload._id) return action.payload;

                    return task;
                }),
            };
        case FETCH_ALL:
            return {
                ...state,
                tasks: action.payload.data
            };
        case FETCH_USER_TASKS:
            return{...state, tasks: action.payload};
        case FETCH_SPECIFIC_USER_TASKS:
            return{...state, tasks: action.payload};    
        case FETCH_BY_SEARCH:
            return {...state, tasks: action.payload };
        case FETCH_TASK:
            return {...state, task: action.payload};
        case CREATE:
            return {...state, tasks: [...state.tasks, action.payload]};
        default:
            return state; 
    }

}