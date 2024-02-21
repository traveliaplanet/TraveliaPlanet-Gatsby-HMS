import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
// Components
import { Container } from "../UI";
// hooks
import { QuestionsData } from "../../hooks";

function Questions() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = (questionIndex) => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };
  return (
    <Container className="py-16">
      <section id="#questions" className="justify-between md:flex">
        <StaticImage
          className="mb-4 rounded-xl object-cover md:mb-0 md:mr-10 md:h-[600px]"
          src="https://res.cloudinary.com/hms-software/image/upload/v1708441161/questions-2519654_lj2rnr.png"
          placeholder="blurred"
          alt="What we Offer"
        />
        <div className="grid gap-4 text-justify md:text-left">
          <h2 className="text-center text-4xl font-extrabold text-gray-700 md:text-left md:text-5xl">
            Questions
          </h2>
          <p className="font-medium text-gray-500 md:text-xl">
            Here are some frequently asked questions about our Tours from our
            loving customers. Should you have any other questions, feel free to
            reach out via the contact form below.
          </p>
          {/* <StaticImage
            className="rounded-xl object-cover md:hidden md:h-[600px]"
            src="https://res.cloudinary.com/hms-software/image/upload/v1708441161/questions-2519654_lj2rnr.png"
            placeholder="blurred"
            alt="What we Offer"
          /> */}
          <dl className="grid w-full gap-2">
            {QuestionsData.map((faq, index) => (
              <button
                className="rounded-lg border-2 p-4 transition-all duration-300 "
                type="button"
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
              >
                <dt className="grid text-lg font-semibold text-gray-700">
                  <div className="flex items-center justify-between text-left">
                    <span>{faq.question}</span>
                    <span className=" text-indigo-600 md:text-3xl ">
                      {activeQuestionIndex === index ? (
                        <AiFillMinusCircle />
                      ) : (
                        <AiFillPlusCircle />
                      )}
                    </span>
                  </div>
                  <dt className="pt-2 text-left text-base font-medium text-gray-500 ">
                    {activeQuestionIndex === index ? faq.answer : ""}
                  </dt>
                </dt>
              </button>
            ))}
          </dl>
        </div>
      </section>
    </Container>
  );
}

export default Questions;
