import { useState} from 'react';
import './Estilos.css';
import Swal from 'sweetalert2';
import ESelect from './ESelect';

const Formulario = ({addTodo})=> {
 
    const [todo, setTodo] = useState({
        titulo: "",
        descripcion: "",
        priority:"True",
        estado: "Pendiente",
    });
   
   //desestructuración de objetos d
   const {titulo, descripcion, priority, estado} = todo;
// Opciones para el selector de estado
    const opcionesEstado = [
    { label: 'Pendiente', value: 'Pendiente' },
    { label: 'Completado', value: 'Completado' },
    { label: 'En Progreso', value: 'En Progreso' }
  ];

   //const [error, setError] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        
         // pequeña validación
        if (!titulo.trim() || !descripcion.trim()) {
            console.log("campos vacíos");
            //setError(true);
            return Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Los campos titulo y descripción no pueden estar vacíos",
              customClass: {
                    popup: 'my-popup-size',
                    title: 'my-title-size',
                    content: 'my-content-size'}
             
            });
            
        } 
        addTodo({
           // id: Date.now(),
            id: Math.floor(Math.random() * 1000),
            ...todo,
            estado: estado === "Completado",
        });
        //console.log(titulo, descripcion, priority, estado);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Se agregaron los datos correctamente",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                popup: 'my-popup-size',
                title: 'my-title-size',
                content: 'my-content-size'}
          });
  
      // Enviar todo a un array!
    };
  
   {/* const MostrarError = () => (
      <div className="error">Todos los campos obligatorios</div>
    );*/}
          
    const handleChange = (e) => {
        

        //desestructuración de eventos  
        const {name,type, checked, value} = e.target;
            setTodo({...todo, [name]: type === 'checkbox' ? checked : value});
        }

    return (
        <div className='form'> 
        <h1>Actividades</h1>    
        <form onSubmit={handleSubmit}>  
                             
            <input type="text" 
            placeholder="Tarea"
            className="inputF"
            name="titulo" value={titulo} onChange={handleChange} />

            <textarea placeholder='Deja la descripción de la tarea' className="inputF textA"  name="descripcion" value={descripcion} onChange={handleChange} />
           
            <div className="inputCheck">
               <input className="inputF check" type="checkbox" name='priority' id='inputCheck' checked={priority} onChange={handleChange}/>
                <label htmlFor="inputCheck">Dar Prioridad</label>
            </div>
            <ESelect
                    name="estado"
                    value={estado}
                    onChange={handleChange}
                    option={opcionesEstado} // Pasa las opciones aquí
                />
            <button type="submit" className='inputF btn'>Agregar</button>
        </form>
       
        </div>
       
    );
};
export default Formulario;
