import React from 'react';
import Home from './Home';
import { Card, Container,Row,Button } from 'react-bootstrap';
import { Usuarios } from '../data/Usuarios';
import { MenuItems } from '../data/MenuItems';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NombreUser: Usuarios[0].Nombre,
      PassUser: Usuarios[0].Pass,
      EmailUser: Usuarios[0].Email,
      DatospersonalesUser: Usuarios[0].Datospersonales,
      AvatarUser: Usuarios[0].Avatar,
      EdadUser: Usuarios[0].Edad,
    };
  }
  setData(item) {
    this.setState({ 
      NombreUser: item.Nombre,
      PassUser: item.Pais,
      EmailUser: item.Email,
      DatospersonalesUser:item.Datospersonales,
      AvatarUser: item.Avatar,
      EdadUser: item.Edad
    });
  }
  limpiar(){
    localStorage.removeItem(this.state.NombreUser);
    localStorage.setItem('', this.state.EmailUser);
    localStorage.setItem('', this.state.DatospersonalesUser);
    localStorage.setItem('', this.state.AvatarUser);
    localStorage.setItem('', this.state.EdadUser);
  }
  render(){
  return( 
    <div>
      <Container>
        <Row>
          <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={this.state.AvatarUser} />
            <Card.Body>
              <Card.Title>
                Nombre: {this.state.NombreUser}<p />
                Email: {this.state.EmailUser}<p />
                Edad: {this.state.EdadUser}
              </Card.Title>
              <Card.Text>
                <p />
                {this.state.DatospersonalesUser}
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Button variant="primary" type="button" onClick={this.logout}>
            Logout
          </Button>
      </Container>
    </div>);
  }
}
export default Perfil;
