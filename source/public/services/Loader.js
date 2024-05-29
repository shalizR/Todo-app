import API from "./API.js";

export async function loadData() {
    app.todo.title = await API.fetchTodo();
}