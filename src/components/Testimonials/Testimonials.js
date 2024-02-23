import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { BsPersonCircle } from 'react-icons/bs';
// 3rd Parrty
import Slider from 'react-slick';
// hooks
import { useTestimonialData } from '../../hooks';
// Components
import { Container, SlideLeft, SlideRight } from '../UI';

function Testimonials() {
  const [sliderRef, setSliderRef] = useState(null);
  const [textSliderRef, setTextSliderRef] = useState(null);

  const settings = {
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1
        }
      }

      // {
      //   breakpoint: 900,
      //   settings: {
      //     slidesToShow: 1
      //   }
      // }
    ]
  };

  return (
    <Container id="#testimonials" className="gap-x-24 md:grid md:grid-cols-2">
      <div>
        <h1 className="mb-4">Testimonials</h1>
        <h4>
          All these travelers help foster an understanding between people, providing a cultural
          exchange between both hosts and guests and increasing the chances to develop mutual
          sympathy and understanding towards our country while at the same time reducing their
          prejudices; an aspect much needed in these times. Here are what some of our amazing
          customers are saying about our tours.
        </h4>
        <Slider ref={setTextSliderRef} asNavFor={sliderRef} {...settings}>
          {useTestimonialData().map((testimonial, index) => (
            <div key={index} className="relative mt-12">
              <blockquote className="mb-4 text-center text-lg leading-tight text-gray-500 lg:text-left lg:text-xl">
                <ImQuotesLeft className="-mt-4 mr-1 inline-block h-4 w-4 text-indigo-600" />
                {testimonial.quote}
                <ImQuotesRight className="-mt-4 mr-1 inline-block h-4 w-4 text-indigo-600" />
              </blockquote>
              <div className="mb-4 grid place-items-center gap-4 md:flex md:items-center">
                <BsPersonCircle className="mr-1 text-5xl text-yellow-500" />
                <div className="grid place-items-center md:place-items-start">
                  <h2>{testimonial.name}</h2>
                  <p>{testimonial.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Slider ref={setSliderRef} asNavFor={textSliderRef} {...settings}>
        {useTestimonialData().map((testimonial, index) => (
          <div key={index} className="relative rounded border-2 object-none">
            <GatsbyImage
              image={testimonial.image.gatsbyImageData}
              className="h-96 w-full object-cover md:h-[650px]"
              alt="testimonial"
            />
            <div className="absolute bottom-0 right-0 z-10 flex rounded rounded-tl-3xl bg-white px-6 py-2">
              <SlideLeft onClick={sliderRef?.slickPrev} className="mr-4" />
              <SlideRight onClick={sliderRef?.slickNext} />
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
}

Testimonials.propTypes = {
  destinations: PropTypes.object
};

export default Testimonials;
