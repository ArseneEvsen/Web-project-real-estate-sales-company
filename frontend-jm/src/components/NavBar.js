import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import { IoMdContact } from "react-icons/io";
import { MdOutlineSell } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";


function NavBar() {
  return (
    <Navbar bg="dark" variant={"dark"} expand="lg" fixed='top' >
    <Container>
      <Navbar.Brand href="#home">Société Immobilière</Navbar.Brand>
      <Nav>
          <Nav.Link className='mx-5' href="#home"><IoHomeOutline className='mb-1'/> Accueil</Nav.Link>
          <Nav.Link className='mx-5' href="#salesBoard"><MdOutlineSell /> Ventes</Nav.Link>
          <Nav.Link className='mx-5' href="#contactForm"><IoMdContact /> Contact </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar