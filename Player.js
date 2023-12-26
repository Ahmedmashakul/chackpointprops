import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 const Player=(props)=>{

    return(
        <>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.el.photo} />
      <Card.Body>
        <Card.Title>{props.el.name} </Card.Title>
        <Card.Text>
          {props.el.address}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </>
    )
}
export default Player