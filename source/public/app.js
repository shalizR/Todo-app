import Todo from './services/Todo.js';
import { loadData } from './services/Loader.js';

console.log('Hello there!')
window.app = {}
app.todo = Todo;

window.addEventListener("DOMContentLoaded", () => {
    loadData();
})
