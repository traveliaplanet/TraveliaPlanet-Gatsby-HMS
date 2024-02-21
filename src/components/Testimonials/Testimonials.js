import PropTypes from "prop-types";
import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { BsPersonCircle } from "react-icons/bs";
// 3rd Parrty
import Slider from "react-slick";
// hooks
import { useTestimonialData } from "../../hooks";
// Components
import { Container, SlideLeft, SlideRight } from "../UI";

function Testimonials() {
  const [sliderRef, setSliderRef] = useState(null);
  const [textSliderRef, setTextSliderRef] = useState(null);

  const settings = {
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <section
        id="#testimonials"
        className="gap-x-16 md:grid md:grid-cols-2 md:pb-16"
      >
        <div className="mx-auto grid grid-cols-1 ">
          <h2 className="mb-4 text-center text-4xl font-extrabold text-gray-700 md:text-left md:text-5xl">
            Testimonials
          </h2>
          <p className="mb-4 text-justify text-lg font-medium leading-tight text-gray-500 md:leading-relaxed">
            All these travelers help foster an understanding between people,
            providing a cultural exchange between both hosts and guests and
            increasing the chances to develop mutual sympathy and understanding
            towards our country while at the same time reducing their
            prejudices; an aspect much needed in these times. Here are what some
            of our amazing customers are saying about our tours.
          </p>
          <Slider ref={setTextSliderRef} asNavFor={sliderRef} {...settings}>
            {useTestimonialData().map((testimonial, index) => (
              <div key={index} className="relative my-10 lg:mt-20">
                <blockquote className="mb-6 text-center text-lg leading-tight text-gray-500 lg:text-left lg:text-2xl">
                  <ImQuotesLeft className="-mt-3 mr-2 inline-block h-6 w-6 text-3xl text-indigo-600 opacity-75" />
                  {testimonial.quote}
                  <ImQuotesRight className="-mt-3 ml-2 inline-block h-6 w-6 text-3xl text-indigo-600 opacity-75" />
                </blockquote>
                <div className="grid place-items-center gap-2 md:flex md:items-center">
                  <BsPersonCircle className="mr-4 text-7xl text-yellow-500" />
                  <div className="grid place-items-center md:place-items-start">
                    <h3 className="text-2xl font-semibold text-indigo-600 md:text-4xl">
                      {testimonial.name}
                    </h3>
                    <p className="text-lg font-medium text-gray-500 ">
                      {testimonial.designation}
                    </p>
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
      </section>
    </Container>
  );
}

Testimonials.propTypes = {
  destinations: PropTypes.object,
};

export default Testimonials;
