import { ADD_TODO, CHANGE_TODO_STATUS, SEARCH_STATUS_FILTER, SEARCH_TODO, PRIORITY_FILTER } from './const';

export const addTodo = payload =>(
    {
        type: ADD_TODO,
        payload
    }
)

export const changeStatusTodo = payload =>{
    return{
        type: CHANGE_TODO_STATUS,
        payload
    }
}

export const searchTodo = payload =>{
    return {
        type: SEARCH_TODO,
        payload
    }
}

export const statusFilterChange = payload =>{
    return{
        type: SEARCH_STATUS_FILTER,
        payload
    }
}

export const priorityFilterChange = payload =>{
    return{
        type: PRIORITY_FILTER,
        payload
    }
}