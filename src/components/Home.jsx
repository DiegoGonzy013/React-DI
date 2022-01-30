import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Usuarios } from '../data/Usuarios';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '' };
    this.login = this.login.bind(this);
    this.inputuser = React.createRef();
    this.inputpass = React.createRef();
  }
  checkLogin(user, password) {
    if (
      Usuarios.map((item) => {
        item.Nombre == user && item.Pass == password;
      })
    ) {
      console.log('Nombre correcto');
      alert('Te has logueado correctamente: ' + user);
    } else {
      alert('No te has podido loguear con este usuario: ' + user);
    }
  }
  login() {
    this.setState({
      user: this.inputuser.current.value,
      password: this.inputpass.current.value,
    });
    console.log('login');
    this.checkLogin(this.inputuser.current.value, this.inputpass.current.value);
  }
  componentDidMount() {
    this.setState({
      user: localStorage.getItem('user'),
      password: localStorage.getItem('password'),
    });
  }

  render() {
    /*if (
      this.state !== null &&
      this.state.user !== null &&
      this.state.user !== ''
    ) {
     return (
        <div className="main-state">
          <h1>Bienvenido {this.state.user}!</h1>
        </div>
      );
    } else {*/
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
    //}
  }
  componentWillUnmount() {
    localStorage.setItem('user', this.state.user);
    localStorage.setItem('password', this.state.password);
  }
}
export default Home;
