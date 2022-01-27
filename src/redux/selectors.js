//Dung binh thuong
// export const todoListSelector = (state) => {
//     const searchText = searchTextSelector(state)
import { createSelector } from "@reduxjs/toolkit";

//     const newTodo = state.todoList.filter(todo=>
//             todo.name.includes(searchText)
//     )
//     return newTodo
// }

// export const searchTextSelector = (state) => state.filters.search

// dùng reselect trong redux-toolkits
export const searchTextSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritySelector = (state) => state.filters.priority;

// tao selector dựa trên du lieu selector có ở trên
// export const todoUsingReselect = createSelector(
//   todoListSelector,
//   filterStatusSelector,
//   searchTextSelector,
//   (todoList, status, searchText) => {
//     //3 tham so trong callback chính la 3 biến ở trước
//     return todoList.filter((todo) => {
//       //Neu status === All trả về theo dkien 1
//       if (status === "All") {
//         return todo.name.includes(searchText);
//       }

//       return (
//         todo.name.includes(searchText) &&
//         (status === "Completed" ? todo.complete : !todo.complete) //Neu status === Completed thì lấy những todo.completed = true còn nếu status !== Completed thì lấy những todo.completed == false
//       );
//     });
//   }
// );

export const todoUsingReselect = createSelector(
  searchTextSelector,
  todoListSelector,
  filterStatusSelector,
  filterPrioritySelector,
  (searchText, todoList, status, priority) => {
    if (status === "All") // Nếu status == 'All' thì nếu priority là mảng rỗng thì lọc tên chứa kí tự search còn ko là mảng rỗng thì kiểm tra thêm là priority của todo đó có trong list priority ko
      return priority.length ? todoList.filter((todo) => todo.name.includes(searchText) && priority.includes(todo.priority)) : todoList.filter((todo) => todo.name.includes(searchText));
    else
      return status === "Completed" //return dung đằng trc toán tử 3 ngôi
        // Thêm điều kiện lọc cho priority
        ? todoList.filter((todo) => todo.name.includes(searchText) && todo.complete && (priority.length ? priority.includes(todo.priority) : true))
        : todoList.filter(
            (todo) => todo.name.includes(searchText) && !todo.complete && (priority.length ? priority.includes(todo.priority) : true)
          );
  }
);
