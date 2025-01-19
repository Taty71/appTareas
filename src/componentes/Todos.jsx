import React from 'react';
import './estilosTodos.css';
import Todo from './Todo';

const Todos = ({todos, deleteTodo, updateTodo}) => {
    return (
        <div className="todos">
            <h2>Tareas para Hacer</h2>
            <ul className='listaTodos'>
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/> //*                     
                    ))}

                {
                    !todos.length && <li className="elemTodo">No hay tareas</li>
                }
            </ul>
        </div>
    );
};
export default Todos;


{/* //* <li key={todo.id}>*/}
                           {/* {todo.id}: {todo.titulo}*/}
                         {/*</ul>  <h3>{todo.titulo}</h3>
                            <p>{todo.descripcion}</p>
                            <p>Priority: {todo.priority ? "Alta" : "Baja"}</p>
                            <p>Estado: {todo.estado ? "Completado" : "Pendiente"}</p>
                        </li>*/}