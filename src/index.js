import { TodoList } from './classes/todo-list.class';
import { Todo } from './classes/todo.class';
import { crearTodoHtml } from './js/componentes';
import './styles.css';
// import { Todo } from './classes/todo.class.js';
// import { Todo , TodoList} from './classes'

export const todoList = new TodoList();

// todoList.todos.forEach((todo) => crearTodoHtml(todo)); 
todoList.todos.forEach(crearTodoHtml);
