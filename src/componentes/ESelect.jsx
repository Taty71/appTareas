import { useState } from 'react';
import './Estilos.css';

const ESelect = ({ name, value, onChange }) => {
    const options = ["Completado", "Pendiente"];

    return (
        <div className="custom-select">
            <select name={name} value={value} onChange={onChange} className="inputF">
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};


export default ESelect;
