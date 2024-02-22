import PropTypes from 'prop-types';
import React, { useState } from 'react';
// 3rd Parrty
import Slider from 'react-slick';
// Components
import { Container, SlideLeft, SlideRight, SliderCard } from '../UI';

function TrendingTours({ destinations }) {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <section id="trendingTours">
      <Container>
        <div className="gap-x-24 md:grid md:grid-cols-2">
          <div className="mx-auto text-justify">
            <div className="py-16 md:flex md:justify-between">
              <h2 className="text-center text-4xl font-extrabold text-gray-700 md:text-left md:text-5xl">
                Trending Tours
              </h2>
              <div className="hidden justify-end md:flex">
                <SlideLeft onClick={sliderRef?.slickPrev} className="mr-4" />
                <SlideRight onClick={sliderRef?.slickNext} />
              </div>
            </div>
            <p className="text-xl font-medium text-gray-500 md:leading-relaxed">
              Pakistan is so geographically varied that every adventure travel lover in the world
              would love to take Pakistan tour at least once in their lifetime. From lush green
              valleys to Cold deserts, unexplored beaches to the second highest Mountain in the
              world, from Gilgit Baltistan of North to Ziarat of Baluchistan. Pakistan is blessed
              with natural landscapes; each one more beautiful than the other.
            </p>
            <div className="flex items-center justify-end py-8 md:hidden">
              <SlideLeft onClick={sliderRef?.slickPrev} className="mr-4" />
              <SlideRight onClick={sliderRef?.slickNext} />
            </div>
          </div>
          <Slider ref={setSliderRef} {...settings}>
            {destinations.map((trip, index) => (
              <div key={index}>
                <SliderCard
                  heading={trip.heading}
                  rating={trip.rating}
                  image={trip?.thumbnail?.gatsbyImageData}
                  shortDescription={trip.shortdescription}
                  location={trip.location}
                  price={trip.price}
                  slug={trip.slug}
                  duration={trip.duration}
                />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
}

TrendingTours.propTypes = {
  destinations: PropTypes.object
};

export default TrendingTours;
