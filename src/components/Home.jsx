import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Usuarios } from '../data/Usuarios';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '' ,id:''};
    this.login = this.login.bind(this);
    this.inputuser = React.createRef();
    this.inputpass = React.createRef();
    this.inputcheck = React.createRef();
  }
  login() {
    this.setState({
      
      user: this.inputuser.current.value,
      password: this.inputpass.current.value,
    });
    this.componentWillUnmount()
  }
  componentWillUnmount() {
    {
      Usuarios.map((item) =>{
        if(
          item.email=== this.state.user &&
          item.pass === this.state.password
        ){
          localStorage.setItem('id', item.id);
        }
        //alert('Te has logueado correctamente: ' + user);
      });}
  }
  componentDidMount() {
    this.setState({
      id: localStorage.getItem('id')
    });
  }

  render() {
    if (localStorage.getItem('id')!==null)
      {
     return (
        <div className="main-state">
          <h1>Bienvenido {Usuarios[localStorage.getItem('id')].nombre}!</h1>
        </div>
      );
    } else {
    return (
      <div className="main-state">
        <h1>Welcome!!!!</h1>
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre usuario:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Usuario"
                ref={this.inputuser}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="pass"
                ref={this.inputpass}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="button" onClick={this.login}>
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
    }
  }
  
}
export default Home;
