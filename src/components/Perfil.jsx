import React from 'react';
import Home from './Home';
import { Card, Container,Row,Button } from 'react-bootstrap';
import { Usuarios } from '../data/Usuarios';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
      this.state = {user:this.user,
      pass:this.pass,
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
    localStorage.removeItem(this.state.uuser);
    localStorage.removeItem(this.state.pass);
  }
  // Me he vuelto loco intentando para qeu al final no me salga nada , ya me enterare en clase de como es porque estoy muy perdido 
  render(){
  return( 
    <div>
      <Container>
        <Row>
          <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src='' />
            <Card.Body>
              <Card.Title>
                Nombre: {localStorage.getItem('user')}<p />
                Pass: {localStorage.getItem('password')}<p />
                Edad:
                {Usuarios.map(user => {
                 user.Edad
                })}
              </Card.Title>
              <Card.Text>
                <p />
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Button variant="primary" type="button" onClick={this.limpiar}>
            Logout
          </Button>
      </Container>
    </div>);
  }
}
export default Perfil;
