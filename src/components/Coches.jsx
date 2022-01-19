import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { GranPremios, DatosCircuitos } from '../data/DatosF1';

class Coches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      //listaF1: this.changeData(props.DatosCircuitos)
    };
  }
  changeData() {
    this.setState({ clicked: this.state.clicked });
  }
  /*changeData(DatosCircuitos) {
    const lista = [];
    this.setState({ clicked: this.state.clicked });
    for (let i = 0; i < DatosCircuitos.length; i++) {
      <div>
      Circuito ={DatosCircuitos[i].Circuito}
      Pais={DatosCircuitos[i].Pais}
      Longitud={DatosCircuitos[i].Longitud}
      Tipo={DatosCircuitos[i].Tipo}
      imagen={DatosCircuitos[i].imagen}
      descripcion={DatosCircuitos[i].descripcion}
      </div>
    }
    return lista;
  }*/

  render() {
    return (
      <div className="main-site">
        <h1>Formula 1</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>{GranPremios.id} </th>
                    <th>{GranPremios.field1}</th>
                    <th>{GranPremios.field2}</th>
                    <th>{GranPremios.field3}</th>
                  </tr>
                </thead>
                <tbody>
                  {DatosCircuitos.map((item) => {
                    return (
                      <tr onClick={this.changeData.bind(this)}>
                        <td>{item.Circuito}</td>
                        <td>{item.Pais}</td>
                        <td>{item.Longitud}</td>
                        <td>{item.Tipo}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card style={{ width: '16rem' }}>
                <Card.Img
                  variant="top"
                  src={DatosCircuitos[4].imagen}
                  className={this.state.clicked}
                />
                <Card.Body>
                  <Card.Title>
                    {DatosCircuitos[4].Pais} - {DatosCircuitos[4].Circuito}
                  </Card.Title>
                  <Card.Text>
                    Longitud: {DatosCircuitos[4].Longitud}
                    <p />
                    {DatosCircuitos[4].descripción}
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
