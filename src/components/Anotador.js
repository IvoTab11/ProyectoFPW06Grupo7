import React, { useState } from 'react';

function Anotador() {
    const notaInicial = {
        id: 1,
        descripcion: "",
        estado: true
    };
    const [nota, setNota] = useState(notaInicial);
    const [notas, setNotas] = useState([]);

    const guardarNotas = () => {
        if (nota.descripcion.trim() !== "") {
            console.log("ID:", nota.id);
            console.log("Descripción:", nota.descripcion);
            console.log("Estado:", nota.estado);

            setNotas([...notas, nota]);
            setNota({
                id: nota.id + 1,
                descripcion: "",
                estado: true
            });

            document.getElementById("valorNota").focus();
        }
    }

    const eliminarNota = (index) => {
        const nuevasNotas = [...notas];
        nuevasNotas.splice(index, 1);
        setNotas(nuevasNotas);
    }

    return (
        <>
            <h2>Notas</h2>
            <input
                type="text"
                id="valorNota"
                value={nota.descripcion}
                onChange={(e) => setNota({ ...nota, descripcion: e.target.value })}
            />
            <button onClick={guardarNotas}>Anotar</button>
            <ul>
                {notas.map((nota, index) => (
                    <li key={index}>
                        {nota.descripcion}
                        <button onClick={() => eliminarNota(index)}>Eliminar Nota</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Anotador;