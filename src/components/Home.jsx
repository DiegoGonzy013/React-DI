import React from 'react';
import { Container, Form ,Button,} from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '' };
    this.login = this.login.bind(this);
  }

  login() {
    this.setstate({ user: 'Diego', password: '1234' });
    console.log(`${this.state.user}ha hecho click`);
  }
  render() {
    if(this.state !== null && this.state.user !== null){
      return(
        <div className="main-state">
            <h1>Bienvenido {this.state.user}!</h1>
        </div>
      );
    }else{
    return (
      <div className="main-state">
        <h1>Pedazo formulario mirmano</h1>
        <Container>
          <Form>
            <fieldset disabled>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput">
                  Disabled input
                </Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  placeholder="Disabled input"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledSelect">
                  Disabled select menu
                </Form.Label>
                <Form.Select id="disabledSelect">
                  <option>Disabled select</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  id="disabledFieldsetCheck"
                  label="Can't check this"
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </fieldset>
          </Form>
        </Container>
      </div>
    );
  }
}
}

export default Home;
