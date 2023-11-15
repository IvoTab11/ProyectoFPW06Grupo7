import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row} from 'react-bootstrap';
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

    const procesarNota = (index) => {
        const otraNota =notas[index];
        setNotasEnProceso([...notasEnProceso, otraNota]);
    }

    const resolverNota = (index) => {
      const otherNota = notas[index];
      setNotasResueltas([...notasResueltas, otherNota]);
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
            {/* <select
                
                id="estadoNota" 
                value={nota.estado}
                onChange={(e) => setNota({ ...nota, estado: e.target.value })}
                style={inputStyle}>
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
            </select> */}
            <Button onClick={guardarNotas} variant="primary">Anotar</Button>
           
            
            <ul style={ulStyle}>
               <Row>
                {notas.map((nota, index) => (
                    <Card key={index} style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>{nota.titulo}</Card.Title>
                      <Card.Text>
                            {nota.descripcion}<br></br>
                            {/* {nota.estado} */}
                      </Card.Text>
                      <Button onClick={() => eliminarNota(index)} variant="warning">Eliminar Nota</Button>
                      <Button onClick={()=> procesarNota(index)}>En Proceso</Button>
                      <Button onClick={()=> resolverNota(index)}>Resuelto</Button>
                    </Card.Body>
                  </Card>
                ))}
                </Row> 
            </ul>
            <h2>Notas en proceso</h2>
            <ul style={ulStyle}>
               <Row>
                {notasEnProceso.map((nota, index) => (
                    <Card key={index} style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>{nota.titulo}</Card.Title>
                      <Card.Text>
                            {nota.descripcion}<br></br>
                            {/* {nota.estado} */}
                      </Card.Text>
                      <Button onClick={() => eliminarNota(index)} variant="warning">Eliminar Nota</Button>
                      {/* <Button onClick={()=> procesarNota(index)}>En Proceso</Button>
                      <Button>Resuelto</Button> */}
                    </Card.Body>
                  </Card>
                ))}
                </Row> 
            </ul>
            <h2>Notas resueltas</h2>
            <ul style={ulStyle}>
               <Row>
                {notasResueltas.map((nota, index) => (
                    <Card key={index} style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>{nota.titulo}</Card.Title>
                      <Card.Text>
                            {nota.descripcion}<br></br>
                            {/* {nota.estado} */}
                      </Card.Text>
                      <Button onClick={() => eliminarNota(index)} variant="warning">Eliminar Nota</Button>
                      {/* <Button onClick={()=> procesarNota(index)}>En Proceso</Button>
                      <Button>Resuelto</Button> */}
                    </Card.Body>
                  </Card>
                ))}
                </Row> 
            </ul>
        </div>
    );
}

export default Anotador;