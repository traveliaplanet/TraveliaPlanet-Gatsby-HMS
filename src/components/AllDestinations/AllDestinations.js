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
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Container>
      <section id="#allDestinations" className="pb-8 md:pb-16">
        <div className="py-16 md:flex md:justify-between">
          <h2 className="mb-4 text-center text-4xl font-extrabold text-gray-700 md:text-left md:text-5xl">
            {heading}
          </h2>
          <div className="flex justify-end">
            <SlideLeft onClick={sliderRef?.slickPrev} className="mr-4" />
            <SlideRight onClick={sliderRef?.slickNext} />
          </div>
        </div>
        <Slider ref={setSliderRef} {...settings} className="grid grid-cols-3">
          {destinations.map((trip, index) => (
            <div key={index}>
              <SliderCard
                heading={trip.Heading}
                rating={trip.Rating}
                image={trip?.Thumbnail?.localFile?.childImageSharp?.gatsbyImageData}
                shortDescription={trip.shortDescription}
                location={trip.Location}
                price={trip.Price}
                slug={trip.slug}
                duration={trip.Duration}
              />
            </div>
          ))}
        </Slider>
      </section>
    </Container>
  );
}

AllDestinations.propTypes = {
  destinations: PropTypes.object,
  heading: PropTypes.string
};

export default AllDestinations;
