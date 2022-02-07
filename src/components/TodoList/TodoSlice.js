import { SEARCH_TODO } from "../../redux/const";

const initState =  [
    {
      id: 1,
      name: "Learn React",
      complete: false,
      priority: "Medium",
    },
    {
      id: 2,
      name: "Learn Js",
      complete: true,
      priority: "High",
    },
    {
      id: 3,
      name: "Learn React Hooks",
      complete: false,
      priority: "Low",
    },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/changeStatus":
      return state.map(todo=>todo.id === action.payload ? {...todo, complete: !todo.complete} : todo)
    default:
      return state;
  }
};

export default todoListReducer;
