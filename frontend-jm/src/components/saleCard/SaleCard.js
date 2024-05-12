import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import "./SaleCard.css";
import {Container} from 'react-bootstrap';


const SaleCard = ({city, price, address, department, region, surface}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='d-inline-block my-3 mx-3'>
      <Card style={{ width: '18rem' }} className="card bg-dark text-light mb-3">
        <Card.Img variant="top" src="https://www.shoesmithcox.com/files/2014/01/exterior-01.jpg" />
        <Card.Body>
          <Card.Title>{address}</Card.Title>
              <Card.Text>
              Ville : {city}
              <br></br>
              Prix : {price}
              </Card.Text>
          <Button variant="primary"onClick={handleShow}>Je découvre</Button>
        </Card.Body>
      </Card>

      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
        >
      <Modal show={show} onHide={handleClose} fullscreen={true}>
      
              <Modal.Header className='bgYellow' closeButton>
              <Modal.Title >{address} </Modal.Title>
              </Modal.Header>

              <Modal.Body className='bgYellow' >
                  <Carousel>
                  <Carousel.Item>
                  <img src= "https://www.shoesmithcox.com/files/2014/01/exterior-01.jpg" alt="Extérieur" className='imgResponsive'/>
                  <Carousel.Caption>
                      <h3>Extérieur</h3>
                  </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                  <img src= "https://www.shoesmithcox.com/files/2014/01/exterior-01.jpg" alt="Pièce de vie" className='imgResponsive' />
                  <Carousel.Caption>
                      <h3>Salon</h3>
                  </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                  <img src= "https://www.shoesmithcox.com/files/2014/01/exterior-01.jpg" alt="Cuisine" className='imgResponsive'/>
                  <Carousel.Caption>
                      <h3>Cuisine</h3>
                  </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                  <img src= "https://www.shoesmithcox.com/files/2014/01/exterior-01.jpg" alt="Chambre 1" className='imgResponsive'/>
                  <Carousel.Caption>
                      <h3>Chambre 1</h3>
                  </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                  <img src= "https://www.shoesmithcox.com/files/2014/01/exterior-01.jpg" alt="Chambre 2" className='imgResponsive'/>
                  <Carousel.Caption>
                      <h3>Chambre 2</h3>
                  </Carousel.Caption>
                  </Carousel.Item>
                  </Carousel>

                  <div className='bgInfos mt-3 pb-3 rounded'>
                    <h1 className='textCenter'>Informations :</h1>
                    <br></br>
                    <br></br>
                    <Container>
                    <h4>Adresse : </h4>
                    <p>{address}</p>
                    <hr className="dropdownDivider"></hr>
                    <h4>Prix :</h4>
                    <p>{price}</p>
                    <hr className="dropdownDivider"></hr>
                    <h4>Ville : </h4>
                    <p>{city}</p>
                    <hr className="dropdownDivider"></hr>
                    <h4>Departement :</h4>
                    <p>{department}</p>
                    <hr className="dropdownDivider"></hr>
                    <h4>Région :</h4>
                    <p>{region}</p>
                    <hr className="dropdownDivider"></hr>
                    <h4>Superficie</h4>
                    <p>{surface}</p>
                    </Container>
                  </div>
              </Modal.Body>

              <Modal.Footer className='bgYellow' >
                  <Button variant="secondary" onClick={handleClose}>Fermer</Button>
                  <Button variant="primary" onClick={handleClose}>Contacter</Button>
              </Modal.Footer>

        </Modal>
      </div>
    </div>
  )
}

export default SaleCard