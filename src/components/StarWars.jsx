import React from 'react';
import uuid from 'react-uuid';
import { Container, Table, Row, Col, Card } from 'react-bootstrap';

class StarWars extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: '', tableData:[] };
  }
  changeSelected = (item) => {
    this.setState({
      selectedItem: item,
    });
  };
  async componentDidMount() {
    const response = await fetch(
      'https://swapi.dev/api/starships/?format=json'
    );
    const responseData = await response.json();
    this.setState({
      tableData: responseData.results
      ,selectedItem: responseData.results[0],
    });
  }
  /*  tableData: responseData.civilizations,
      selectedItem: responseData.civilizations[0],*/

  render() {
    console.log(this.state.tableData);
    return (
      <div className="main-site">
        <h1>StarWars StarShips</h1>
        <Container>
          <Row>
            <Col lg={8} md={4}>
              <Table responsive striped hover>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Modelo</th>
                    <th>Creador</th>
                    <th>Tripulacion</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr
                        key={uuid()}
                        onClick={() => this.changeSelected(item)}
                      >
                        <td>{item.name}</td>
                        <td>{item.model}</td>
                        <td>{item.manufacturer}</td>
                        <td>{item.crew}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={8}>
              <Card style={{ width: '16rem' }}>
                <Card.Img
                  variant="top"
                  src=''
                />
                <Card.Body>
                  <Card.Title>
                    Nombre: {this.state.selectedItem.name} <br />
                  </Card.Title>
                  <Card.Text>
                    Coste(Creditos Star Wars): {this.state.selectedItem.cost_in_credits}<br />

                    Longitud: {this.state.selectedItem.length}
                    <br />
                    Clase: {this.state.selectedItem.starship_class}
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
export default StarWars;