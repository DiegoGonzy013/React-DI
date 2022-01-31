import React from 'react';
import Home from './Home';
import { Card, Container, Row, Button } from 'react-bootstrap';
import { Usuarios } from '../data/Usuarios';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id:'', user: '', apellidos: '', email: '', edad: '', avatar: '' };
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
    localStorage.removeItem(this.id);
    //clear(this)
  }
  // Me he vuelto loco intentando para qeu al final no me salga nada , ya me enterare en clase de como es porque estoy muy perdido
  render() {
    if (localStorage.getItem('id') !== null) {
      return (
        <div>
          <Container>
            <Row>
              <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>
                    Nombre: {localStorage.getItem('user')}
                    <p />
                    Pass: {localStorage.getItem('password')}
                    <p />
                    Edad:
                    {Usuarios.map((user) => {
                      user.Edad;
                    })}
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
