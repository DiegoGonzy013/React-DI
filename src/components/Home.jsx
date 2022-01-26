import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '' };
    this.login = this.login.bind(this);
    this.inputuser = React.createRef();
    this.inputpass = React.createRef();
  }

  login() {
    this.setstate({ 
      user: this.inputuser.current.value, 
      password: this.inputpass.current.value });
      localStorage.setItem('user',this.inputuser.current.value);
      localStorage.setItem('password',this.inputuser.current.value);
  }
  componentDidUnmount(){
    this.setState({
      user: localStorage.getItem('user'),
      password: localStorage.getItem('password')});
    localStorage.setItem('password',this.state.current.value); 
  }
  render() {
    if (this.state !== null && 
      this.state.user !== null &&
      this.state.user !== '') {
      return (
        <div className="main-state">
          <h1>Bienvenido a nuestra pagina web {this.state.user}!</h1>
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
                type="text" 
                placeholder="Usuario" 
                ref={this.inputuser}/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Pass" 
                ref={this.inputpass} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit" onclick={this.login}>
                Submit
              </Button>
            </Form>
          </Container>
        </div>
      );
    }
  }
  componentWillUnmount(){
    localStorage.setItem('user',this.state.user);
    localStorage.setItem('password',this.state.password); 
  }
  
}
export default Home;