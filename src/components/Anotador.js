import { useState } from 'react';

function Anotador(){
    const newNota = {
        descripcion: ""
    }

    const [nota, setNota] = useState(newNota);
    const [notas, setNotas] = useState([]);
    const guardar=()=>{
        newNota.descripcion = valorNota.value;
        setNota(anotacion);
        document.getElementById("valorNota").value = "";
        //<p>{anotacion}</p>
       console.log(nota);
    }
    return(
        <>
        <h2>Notas</h2>
        <input type="text" id='valorNota' value={nota} onChange={guardar}></input>
        <button onClick={guardar}>Anotar</button>
        <p>{nota}</p>
        
        </>
      ); 
}
export default Anotador;