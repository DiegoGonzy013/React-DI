import React from 'react';
import {Card} from 'react-bootstrap';

class PGhibli extends React.Component{
  constructor(props){
    super(props);
    this.data= props.data;
  }
  render(){
    if(this.data!== null)
      {   
      return(
      <Card style={{ width: '16rem' }}>
    <Card.Img
      variant="top"
      src={this.data.image}/>
    <Card.Body>
      <Card.Title>
       Titulo: {this.data.title}
       <p/>
      </Card.Title>
      <Card.Text>
        Director: {this.data.director}
        <p/>
        Año: {this.data.release_date}
        <p/>
        Puntuacion: {this.data.rt_score}
      </Card.Text>
    </Card.Body>
  </Card>);
  }else{
    return(
      <div>
        </div>
    );
  }
  }
}
export default PGhibli;