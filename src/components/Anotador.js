import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ProcesadorNotas from './ProcesadorNotas';
import NotasResueltas from './NotasResueltas';
import Notas from './Notas';
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
        titulo: "",
        descripcion: "",
        estado: true
    };
    const [nota, setNota] = useState(notaInicial);
    const [notas, setNotas] = useState([]);
    const [notasEnProceso, setNotasEnProceso] = useState([]);
    const [notasResueltas, setNotasResueltas] = useState([]);

    const guardarNotas = () => {
        if (nota.descripcion.trim() !== "") {
            console.log("ID:", nota.id);
            console.log("Titulo:", nota.titulo);
            console.log("Descripción:", nota.descripcion);
            console.log("Estado:", nota.estado);

            setNotas([...notas, nota]);
            setNota({
                id: nota.id + 1,
                titulo: "",
                descripcion: "",
                estado: true
            });

            document.getElementById("tituloNota").focus();
            document.getElementById("valorNota");
           
        }
    }

    const eliminarNota = (index) => {
        const nuevasNotas = [...notas];
        nuevasNotas.splice(index, 1);
        setNotas(nuevasNotas);
    }

    const eliminarNotaProceso = (index) =>{
      const eliminarProceso = [...notasEnProceso];
      eliminarProceso.splice(index, 1);
      setNotasEnProceso(eliminarProceso);
    }

    const eliminarNotaResuelta = (index)=>{
      const eliminarResuelta = [...notasResueltas];
      eliminarResuelta.splice(index, 1);
      setNotasResueltas(eliminarResuelta);
    }

    const procesarNota = (index) => {
        const otraNota =notas[index];
        setNotasEnProceso([...notasEnProceso, otraNota]);

        const sacarNota = [...notas];
        sacarNota.splice(index,1);
        setNotas(sacarNota);
    }

    const resolverNota = (index) => {
      const otherNota = notasEnProceso[index];
      setNotasResueltas([...notasResueltas, otherNota]);

      const resueltaNota = [...notasEnProceso];
      resueltaNota.splice(index,1);
      setNotasEnProceso(resueltaNota);

    }

    return (
        <div style={containerStyle}>
            <h2>Notas</h2>
            <input
                type="text"
                id="tituloNota"
                value={nota.titulo}
                onChange={(e) => setNota({ ...nota, titulo: e.target.value })}
                style={inputStyle}
            />
            <input
                type="text"
                id="valorNota"
                value={nota.descripcion}
                onChange={(e) => setNota({ ...nota, descripcion: e.target.value })}
                style={inputStyle}
            />
            <Button onClick={guardarNotas} variant="primary">Anotar</Button>
           
            <Notas
                  notas={notas}
                  eliminarNota={eliminarNota}
                  procesarNota={procesarNota}
            />
            <h2>Notas en proceso</h2>
            <ProcesadorNotas
                  notasEnProceso={notasEnProceso}
                  eliminarNotaProceso={eliminarNotaProceso}
                  resolverNota={resolverNota}
            />
            <h2>Notas resueltas</h2>
            <NotasResueltas
                  notasResueltas={notasResueltas}
                  eliminarNotaResuelta={eliminarNotaResuelta}
            />
        </div>
    );
}

export default Anotador;