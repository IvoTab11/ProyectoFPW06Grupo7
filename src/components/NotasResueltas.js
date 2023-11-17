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
function NotasResueltas({notasResueltas,eliminarNotaResuelta}){
    return (
        <ul style={ulStyle}>
               <Row>
                {notasResueltas.map((nota, index) => (
                    <Card key={index} style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>{nota.titulo}</Card.Title>
                      <Card.Text>
                            {nota.descripcion}<br></br>
                      </Card.Text>
                      <Button onClick={() => eliminarNotaResuelta(index)} variant="warning">Eliminar Nota</Button>
                    </Card.Body>
                  </Card>
                ))}
                </Row> 
            </ul>
    );
}
export default NotasResueltas;