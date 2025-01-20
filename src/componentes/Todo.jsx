import React from 'react';
import './estilosTodos.css';
const Todo = ({todo, deleteTodo, updateTodo}) => {
    const {titulo, descripcion, priority, estado, id} = todo;
    return <li className="elemTodo">
       
            <div className='todo'>
                <div>
                    <h4 className={estado ? 'textC' : ''}>{titulo}</h4>
                    <p className={estado ? 'textC' : ''}> {descripcion} </p>
                    <p> {id} </p>
                    <div className='botones'>
                            <button onClick={()=> deleteTodo(id)}className="eliminar">Eliminar</button>
                            <button onClick={()=> updateTodo(id)}className="actualizar">Actualizar</button>
                    </div>
                    {priority && (<span className='prioridad'>Prioritario</span>)}             
                </div>
            </div>
        </li>
     
};
export default Todo;