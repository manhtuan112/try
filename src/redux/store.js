
import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from './../components/Filters/FiltersSlice';
import todoListReducer from './../components/TodoList/TodoSlice';

const store = configureStore({
	reducer: {
		filters: filtersReducer,
		todoList: todoListReducer
	}
})

export default store
