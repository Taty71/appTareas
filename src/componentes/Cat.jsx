import { useState } from "react";

const Cat = () => {
    const [cat, setCat] = useState({name:'Phortos', year: 5});
    
    const handleClick = () => {
        console.log('click');
        //setCat({...cat, year: cat.year +1});
       /* setCat((cat) => {
            return {...cat, year: cat.year +1};*/
        setCat((cat) => ({...cat, year: cat.year +1})); //This is the same as the previous two lines    
        };
    
    return (
        <>
            <h2>{cat.name} - {cat.year}</h2>
            <button onClick={handleClick}>Update year</button>
        </>
    );
};
export default Cat;