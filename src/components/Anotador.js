import React, { useState } from 'react';

function Anotador() {
    const [nota, setNota] = useState("");
    const [notas, setNotas] = useState([]);

    const guardarNotas = () => {
        if (nota !== "") {
            
            setNotas([...notas, nota]);

           
            setNota("");

            document.getElementById("valorNota").focus();
        }
    }
 
    const eliminarNota = (index) => {
        const nuevasNotas = [...notas];// decimos que la nueva const va a ser igual al arreglo de notas
        nuevasNotas.splice(index, 1);
        setNotas(nuevasNotas);
    }

    return (
        <>
            <h2>Notas</h2>
            <input
                type="text"
               id="valorNota"
                value={nota}
                onChange={(e) => setNota(e.target.value)}
            />
            <button onClick={guardarNotas}>Anotar</button>
            <ul>
                {notas.map((nota, index) => (
                    <li key={index}>
                        {nota}
                        <button onClick={() => eliminarNota(index)}>Eliminar Nota</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Anotador;