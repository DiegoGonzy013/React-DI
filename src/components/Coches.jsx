import React from 'react';
import { Table } from 'react-bootstrap';
import { DatosCoches } from '../data/DatosCoches';

class Coches extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-state">
        <h1>Coches</h1>
        <Table responsive striped class="table">
          <thead>
            <tr>
              <th>{TitulosCoches.id}</th>
              <th>{TitulosCoches.field1}</th>
              <th>{TitulosCoches.field2}</th>
              <th>{TitulosCoches.field3}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {DatosCoches.map((item) => {
                return (
                  <tr>
                    <td>{item.matricula}</td>
                    <td>{item.marco}</td>
                    <td>{item.modelo}</td>
                    <td>{item.color}</td>
                  </tr>
                );
              })}
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
export default Coches;
