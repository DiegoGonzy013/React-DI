import React from 'react';
import uuid from 'react-uuid';
import { Container, Table, Row, Col, Card } from 'react-bootstrap';
//import PGhibli from './PGhibli';

class Universidad extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: '', tableData: [] };
  }
  changeSelected = (item) => {
    this.setState({
      selectedItem: item,
    });
  };
  async componentDidMount() {
    const response = await fetch(
      'https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json'
    );
    const responseData = await response.json();
    this.setState({
      tableData: responseData,
      selectedItem: responseData[0],
    });
  }
  /*  tableData: responseData.civilizations,
      selectedItem: responseData.civilizations[0],*/

  render() {
    console.log(this.state.tableData);
    return (
      <div className="main-site">
        <h1>Universidades</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped hover>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Nivel</th>
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
                        <td>{item.country}</td>
                        <td>{item.alpha_two_code}</td>
                        <td>{item.state-province}</td>
                        <td>{item.domains}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              {/*<PGhibli data={this.state.selectedItem}/>*/}
              <Card style={{ width: '16rem' }}>
                <Card.Img
                  variant="top"
                  src={this.state.selectedItem.unique_unit}
                />
                <Card.Body>
                  <Card.Title>
                    Civilizacion: {this.state.selectedItem.name}
                    <p />
                  </Card.Title>
                  <Card.Text>
                    Tipo de ejercito: {this.state.selectedItem.army_type}
                    <p />
                    Team bonus: {this.state.selectedItem.team_bonus}
                    <p />
                    Bonus civilizacion:{' '}
                    {this.state.selectedItem.civilization_bonus}
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
export default Universidad;
