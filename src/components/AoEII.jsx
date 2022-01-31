import React from 'react';
import uuid from 'react-uuid';
import { Container, Table, Row, Col, Card } from 'react-bootstrap';
//import PGhibli from './PGhibli';

class AoEII extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: '', tableData: [] };
  }
  changeSelected = (item) => {
    this.setState({
      selectedItem: item,
    });
  };
  async llamadadatosF1(){
    
  }
  async componentDidMount() {
    const response = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations');
    const responseData = await response.json();
    this.setState({ tableData: responseData, selectedItem: responseData[0] });
  }

  render() {
    return (
      <div className="main-site">
        <h1>Studio Ghibli</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped hover>
                <thead>
                  <tr>
                    <th>Titulo </th>
                    <th>Director</th>
                    <th>Año</th>
                    <th>Puntuación</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr
                        key={uuid()}
                        onClick={() => this.changeSelected(item)}
                      >
                        <td>{item.title}</td>
                        <td>{item.director}</td>
                        <td>{item.release_date}</td>
                        <td>{item.rt_score}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              {/*<PGhibli data={this.state.selectedItem}/>*/}
              <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={this.state.selectedItem.image} />
                <Card.Body>
                  <Card.Title>
                    Titulo: {this.state.selectedItem.title}
                    <p />
                  </Card.Title>
                  <Card.Text>
                    Director: {this.state.selectedItem.director}
                    <p />
                    Año: {this.state.selectedItem.release_date}
                    <p />
                    Puntuacion: {this.state.selectedItem.rt_score}
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
export default AoEII;
