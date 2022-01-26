import React from 'react';
import  Home  from './Home';
import { Card } from 'react-bootstrap';
import { Usuarios } from '../data/Usuarios';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Nombre: Usuarios[0].Nombre,
      Email: Usuarios[0].Email,
      Datospersonales: Usuarios[0].Datospersonales,
      Avatar: Usuarios[0].Avatar,
      Edad: Usuarios[0].Edad
    };
  }
  return() {
    <div>
      <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src={this.state.Avatar} />
        <Card.Body>
          <Card.Title>
            Nombre: {this.state.Nombre}
            Email: {this.state.Email} 
            Edad: {this.state.Edad}
          </Card.Title>
          <Card.Text>
            <p />
            {this.state.Datospersonales}
          </Card.Text>
        </Card.Body>
      </Card>
      <Button variant="primary" type="button" onClick={this.limpiar}>
        Limpiar
      </Button>
    </div>;
  }
}
export default Perfil;
