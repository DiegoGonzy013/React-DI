import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { TitulosCoches, DatosCoches } from '../data/DatosCoches';

class Coches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  changeClicked() {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <div className="main-site">
        <h1>Coches</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>{TitulosCoches.id}</th>
                    <th>{TitulosCoches.field1}</th>
                    <th>{TitulosCoches.field2}</th>
                    <th>{TitulosCoches.field3}</th>
                  </tr>
                </thead>
                <tbody>
                    {DatosCoches.map((item) => {
                      return (
                        <tr>
                          <td>{item.matricula}</td>
                          <td>{item.marca}</td>
                          <td>{item.modelo}</td>
                          <td>{item.color}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card style={{ width: '18rem' }}>
              {DatosCoches.map((item) => {
                      return (
                        <div onClick={this.changeClicked.bind(this)}/>
                        );})}
                <Card.Img variant="top" src={DatosCoches[2].imagen} />
                <Card.Body>
                  <Card.Title>
                    {DatosCoches[2].marca} {DatosCoches[2].modelo}
                  </Card.Title>
                  <Card.Text>
                    Matrícula: {DatosCoches[2].matricula}
                    <p />
                    {DatosCoches[2].descripción}
                  </Card.Text>
                </Card.Body>
                      
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Coches;
