import React from 'react';
import TourCard from '../../shared/TourCard';
import tourData from '../../assets/data/tours';
import { Button, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import useFetch from '../../hooks/useFetch'; // Assuming you have a custom hook for data fetching

const FeaturedToursList = () => {
  // const { data: featuredTours, loading } = useFetch(`tours/featured`);
  
  // if (loading) {
  //   return (
  //     <div className="loader-container">
  //       <div className="loader" />
  //       <div className="loading-text">Loading...</div>
  //     </div>
  //   );
  // }

  return (
    <>
      {tourData?.map(tour=> (
          <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
            <TourCard tour={tour} />
          </Col>
        ))}
        <div className="viall__btn">
          <NavLink to={"/tours"}>
            <Button className='btn primary__btn'>View All Tours</Button>
          </NavLink>
        </div>
    </>
  );
};

export default FeaturedToursList;
