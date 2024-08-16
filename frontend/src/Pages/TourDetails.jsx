import React from 'react';
import '../styles/Tourdetails.css'
import { Container, Row, Col, Form, ListGroup, Alert } from "reactstrap";
import { useParams } from "react-router-dom";
// import tourData from '..assets/data/tours'
import tourData from "../assets/data/tours";


const TourDetails = () => {
    const{id} = useParams();
    const tour = tourData.find(tour=>tour.id === id )
    const { photo, title, desc, price, city, distance, address, maxGroupSize } =
    tour;
  return (
    <>
    <section>
        <Container>
        <Row>
            <Col lg='8'>
            <div className="tour_content">
                 <img src={photo} alt=""/>
                 <div className="tour_info">
                    <h2>{title}</h2>
                 </div>
            </div>
            </Col>
        </Row>
        </Container>
      
    </section>
    </>
  )
}

export default TourDetails