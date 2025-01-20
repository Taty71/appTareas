import React from 'react';
import './estilosTodos.css';
const Todo = ({todo, deleteTodo, updateTodo}) => {
    const {titulo, descripcion, priority, estado, id} = todo;
    const handleUpdate = () => {
        updateTodo(id);
    };
    const estadoClass = estado === "Completado" ? 'textCo' : estado === "Pendiente" ? 'textPendiente' : 'textEnProgreso';
    return <li className="elemTodo">
       
            <div className='todo'>
                <div>
                <h4 className={estado === "Completado" ? 'textC' : ''}>{titulo}</h4>
                    <p className={estado === "Completado" ? 'textC' : ''}>{descripcion}</p>
                    <p className={estadoClass}>{estado}</p>
                    
                    {/*<p> {id} </p>*/}
                    <div className='botones'>
                            <button onClick={()=> deleteTodo(id)}className="eliminar">Eliminar tarea</button>
                            <button onClick={handleUpdate}className="actualizar">Actualizar tarea</button>
                    </div>
                    {priority && (<span className='prioridad'>Prioritario</span>)}             
                </div>
            </div>
        </li>
     
};
export default Todo;