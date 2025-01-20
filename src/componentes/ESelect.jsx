import { useState } from 'react';
import './Estilos.css';

const ESelect = ({ name, value, onChange, option }) => {
    //const options = ["Completado", "Pendiente"];

    return (
        <div className="custom-select">
            <select name={name} value={value} onChange={onChange} className="inputF">
                {option.map((opt, index) => (
                    <option key={index} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
};


export default ESelect;
