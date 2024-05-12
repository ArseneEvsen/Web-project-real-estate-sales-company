import {useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import HouseContentCard from './HouseContentCard';

const HouseContentsBoard = () => {

  return (
    <Container className='pt-5 pb-5'>
        <h3 className='text-center'>Ce que nos maisons ont à vous offrir</h3>

        <div className='row justify-content-center'>
          <HouseContentCard titleServices={"Une chambre pour tous"} description={"Chacune de nos maison dispose d'au moins trois chambres."} url={"https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}></HouseContentCard>
          <HouseContentCard titleServices={"Cuisine tout équipée"} description={"Nos maisons sont fournis avec des cuisines modernes et déjà tout équipée."} url={"https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}></HouseContentCard>
          <HouseContentCard titleServices={"Jardin familial"} description={"Un espace extérieur dédié à votre famille et vos amis."} url={"https://cdn.pixabay.com/photo/2017/10/07/10/23/beautiful-home-2826052_1280.jpg"}></HouseContentCard>
        </div>

    </Container>
  )
}

export default HouseContentsBoard