import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: 'darkgray',
  color: 'white', // Cambia el color de la letra a rojo
};

const inputStyle = {
  fontSize: '24px',
  padding: '10px',
  width: '80%',
  margin: '10px',
  textAlign: 'center',
};

const ulStyle = {
  listStyle: 'none',
  padding: '0',
};

const listItemStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'darkgray',
  padding: '8px',
  margin: '4px',
  fontSize: '40px',
  color: 'black'
};

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
        <div style={containerStyle}>
            <h2>Notas</h2>
            <input
                type="text"
                id="valorNota"
                value={nota.descripcion}
                onChange={(e) => setNota({ ...nota, descripcion: e.target.value })}
                style={inputStyle}
            />
            <Button onClick={guardarNotas} variant="primary">Anotar</Button>
           
            <ul style={ulStyle}>
                {notas.map((nota, index) => (
                    <li key={index} style={listItemStyle}>
                        {nota.descripcion}
                        <Button onClick={() => eliminarNota(index)} variant="warning">Eliminar Nota</Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Anotador;