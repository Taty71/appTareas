import { useRef, useState} from 'react';
import './NoControlado.css';
const NoControlado = ()=> {
    const form = useRef(null);//Referencia al formulario para capturar los valores  de los inputs

    const [error, setError] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando formulario, me diste click");
        //console.log(form.current.titulo.value);
        //console.log(form.current);

        //capturar los datos
        const data = new FormData(form.current);
        console.log(...data.entries());

        const dataObject = Object.fromEntries([...data.entries()]);
        console.log(dataObject);
        // ejemplo desestructurando el objeto:
        const {titulo, descripcion, estado} = dataObject;
        console.log(titulo, descripcion, estado);

        //validar los datos
        /*if(titulo.trim() === ''){
            console.log("El titulo es requerido");
            return;
        }*/
        if(titulo.trim() === '' || descripcion.trim() === '' || estado.trim() === '') {
           
            return setError("Completa todos los campos");
        }
        // enviar los datos
        console.log(titulo, descripcion, estado);

    }
    return (
        
        <form onSubmit={handleSubmit} ref={form}>
            <input type="text" 
            placeholder="Ingrese Todo"
            className="inputF"
            name="titulo" defaultValue='todo #1'/>
            <textarea className="inputF textA"  name="descripcion" defaultValue='descripcion #1'/>
            <select  className="inputF"   name="estado" defaultValue="Completado">
                <option value="Pendiente">Pendiente</option>
                <option value="Completado">Completado</option>
            </select>
            <button type="submit" className='inputF btn'>Procesar</button>

            {error && <div className="error">{error}</div>}
        </form>
       
    );
};
export default NoControlado;