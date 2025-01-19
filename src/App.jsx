import React from 'react';
import Formulario from './componentes/Formulario';
import Todos from './componentes/Todos';
import './App.css';
import { useEffect, useState } from 'react';
import Footer from './componentes/Footer';

const initialStateTodos=JSON.parse(localStorage.getItem('todos')) || [];
/*[];/*{
  id:1,
  titulo: 'Aprender React',
  descripcion: 'Aprender React, la librería de JavaScript',
  priority: true,
  estado: true,
},
{
  id:2,
  titulo: 'Aprender React',
  descripcion: 'Aprender React, la librería de JavaScript',
  priority: true,
  estado: false,
},
{
  id:3,
  titulo: 'Aprender React',
  descripcion: 'Aprender React, la librería de JavaScript',
  priority: false,
  estado:false,
},
{
  id:4,
  titulo: 'Aprender React',
  descripcion: 'Aprender React, la librería de JavaScript',
  priority: false,
  estado: true,
},
{
  id:5,
  titulo: 'Aprender React',
  descripcion: 'Aprender React, la librería de JavaScript',
  priority: false,
  estado: true,
},
]*/
const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);
  useEffect(() => {
    console.log('useEffect');
      localStorage.setItem('todos', JSON.stringify(todos));
   // if(todos){
   //   setTodos(JSON.parse(todos));
   // }
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }
 
  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }
  const updateTodo = (id) => {
    const newTodos = todos.map(todo => { if(todo.id === id){
      todo.estado = !todo.estado;
    };
    return todo;
    })
    setTodos(newTodos);
  }
  const orderTodo = newTodos=>{
    return newTodos.sort((a, b) => {
      if (a.priority === b.priority) return 0;
      if (a.priority) return -1;
      if (!a.priority) return 1; 
    })
  }
  return(
    <>
    <div className='container'>
      
      <Formulario addTodo={addTodo}/>
      <Todos 
        todos={orderTodo(todos)} 
        deleteTodo={deleteTodo} 
        updateTodo={updateTodo} 
      />
     
    </div>
    <Footer />
    </>
    
  );
};
export default App;