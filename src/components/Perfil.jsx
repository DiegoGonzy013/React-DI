import React from 'react';
import { Card, Container, Row, Button } from 'react-bootstrap';
import { Usuarios } from '../data/Usuarios';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: '', apellidos: '', email: '', edad: '', avatar: '' };
  }
  componentDidMount() {
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
  limpiar() {
    localStorage.clear(this);
    //removeItem(this.id)
  }
  render() {
    if (localStorage.getItem('id') !== null) {
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
