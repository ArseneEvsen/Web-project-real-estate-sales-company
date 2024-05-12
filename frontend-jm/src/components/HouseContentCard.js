import {Container, Row, Col, Card} from 'react-bootstrap';

const HouseContentCard = ({titleServices, description, url}) => {

  return (
    
    <Card className="card mb-3 d-inline-block my-3 mx-3 col-md-4">
        <Card.Img variant="top" src={url} style={{ height:'300px'}}/>
        <Card.Body>
            <Card.Title className='text-center'>{titleServices}</Card.Title>
                <Card.Text className='text-center'>
                    {description}
                </Card.Text>
            </Card.Body>
    </Card>

  )
}

export default HouseContentCard