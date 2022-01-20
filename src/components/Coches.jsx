import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { GranPremios, DatosCircuitos } from '../data/DatosF1';

class Coches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CircuitoClick: DatosCircuitos[0].circuito,
      PaisClick: DatosCircuitos[0].Pais,
      LongitudClick: DatosCircuitos[0].Longitud,
      TipoClick: DatosCircuitos[0].Tipo,
      imagenClick: DatosCircuitos[0].imagen,
      descripcionClick: DatosCircuitos[0].descripción,
    };
  }
  changeData(item) {
    this.setState({ 
      CircuitoClick: item.circuito,
      PaisClick: item.Pais,
      LongitudClick: item.Longitud,
      TipoClick:item.Tipo,
      imagenClick: item.imagen,
      descripcionClick: item.descripción
    });
  }

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
                      <tr onClick={()=>this.changeData(item)}>
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
                  src={this.state.imagenClick}/>
                <Card.Body>
                  <Card.Title>
                    {this.state.PaisClick} - {this.state.CircuitoClick}
                  </Card.Title>
                  <Card.Text>
                    Longitud: {this.state.LongitudClick}
                    <p />
                    {this.state.descripcionClick}
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
