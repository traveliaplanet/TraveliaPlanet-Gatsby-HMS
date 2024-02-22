import PropTypes from 'prop-types';
import React, { useState } from 'react';

// 3rd Parrty
import Slider from 'react-slick';
// Components
import { Container, SlideLeft, SlideRight, SliderCard } from '../UI';

function AllDestinations({ destinations, heading }) {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2
        }
      },

      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Container id="allDestinations" className='pb-12'>
      <div className="md:flex md:justify-between md:pb-16">
        <h1 className="mb-4 md:mb-0">{heading}</h1>
        <div className="flex justify-end">
          <SlideLeft onClick={sliderRef?.slickPrev} className="mb-4 mr-4 md:mb-0" />
          <SlideRight onClick={sliderRef?.slickNext} />
        </div>
      </div>
      <Slider ref={setSliderRef} {...settings}>
        {destinations.map((trip, index) => (
          <SliderCard
            key={index}
            heading={trip.heading}
            rating={trip.rating}
            image={trip?.thumbnail?.gatsbyImageData}
            shortDescription={trip.shortdescription}
            location={trip.location}
            price={trip.price}
            slug={trip.slug}
            duration={trip.duration}
          />
        ))}
      </Slider>
    </Container>
  );
}

AllDestinations.propTypes = {
  destinations: PropTypes.object,
  heading: PropTypes.string
};

export default AllDestinations;
