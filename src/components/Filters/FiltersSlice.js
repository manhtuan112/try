// const initState = {
//     search: "",
//     status: "All",
//     priority: [],
  
// };

// const filtersReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filters/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload
//       };
//     case "filters/statusFilterChange":
//         return{
//             ...state, status: action.payload
//         }
//     case "filters/priorityFilterChange":
//         return{
//             ...state, priority: action.payload
//         }
//     default:
//       return state;
//   }
// };
// export default filtersReducer;

import {createSlice} from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload
    }, //tạo ra 1 action creators có type: name/searchFilterChange không càn tạo actions nữa
    statusFilterChange: (state, action) => {
      state.status = action.payload
    },
    priorityFilterChange: (state, action) =>{
      state.priority = action.payload
    }
  }
})

export const {searchFilterChange, statusFilterChange, priorityFilterChange} = filtersSlice.actions
export default filtersSlice

