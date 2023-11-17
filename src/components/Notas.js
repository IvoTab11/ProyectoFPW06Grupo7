import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
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

function Notas({notas, eliminarNota, procesarNota}){
    // const eliminarNota = (index) => {
    //     const nuevasNotas = [...notas];
    //     nuevasNotas.splice(index, 1);
    //     setNotas(nuevasNotas);
    // }
    return (
        <ul style={ulStyle}>
               <Row>
                {notas.map((nota, index) => (
                    <Card key={index} style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>{nota.titulo}</Card.Title>
                      <Card.Text>
                            {nota.descripcion}<br></br>
                      </Card.Text>
                      <Button onClick={() => eliminarNota(index)} variant="warning">Eliminar Nota</Button>
                      <Button onClick={()=> procesarNota(index)}>En Proceso</Button>
                    </Card.Body>
                  </Card>
                ))}
                </Row> 
            </ul>
    );
}
export default Notas;