const API = {
    url: "./data/todos.json",
    fetchTodo: async() => {
        const result = await fetch(API.url);
        await result.json();
    }
}

export default API;