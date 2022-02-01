import React from 'react';
import { Card, Container, Row, Button } from 'react-bootstrap';
import { Usuarios } from '../data/Usuarios';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: '', apellidos: '', email: '', edad: '', avatar: '' };
  }
  componentDidMount() {  // le da los valores de Usuarios a los estados mediante la id y localStorage
    if (localStorage.getItem('id') !== null) {
      this.setState({
        user: Usuarios[localStorage.getItem('id')].nombre,
        apellidos: Usuarios[localStorage.getItem('id')].apellidos,
        email: Usuarios[localStorage.getItem('id')].email,
        edad: Usuarios[localStorage.getItem('id')].edad,
        avatar: Usuarios[localStorage.getItem('id')].avatar,
      });
    }
  }
  limpiar() {  // limpiarmos el local storage para desloguearse
    localStorage.clear(this);
    //removeItem(this.id)
  }
  render() {
    if (localStorage.getItem('id') !== null) { // si la id no esta asignada , no se muestra la interfaz de los datos
      return (
        <div>
          <Container>
            <Row>
              <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={this.state.avatar}/>
                <Card.Body>
                  <Card.Title>
                    Nombre: {this.state.user}
                    <p />
                    Email: {this.state.email}
                    <p />
                    Edad: {this.state.edad}
                  </Card.Title>
                  <Card.Text>
                    <p />
                  </Card.Text>
                  <Button
                    variant="primary"
                    type="button"
                    onClick={this.limpiar}
                  >
                    Logout
                  </Button>
                </Card.Body>
              </Card>
            </Row>
          </Container>
        </div>
      );
    }else{
      return (
        <div>
          Tienes que iniciar sesion si quieres ver los datos del usuario
          </div>
          );
    }
  }
}
export default Perfil;
