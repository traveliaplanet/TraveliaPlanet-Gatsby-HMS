import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
// Components
import { Container } from '../UI';

// hooks
import { useQuestionsData } from '../../hooks';

function Questions() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = (questionIndex) => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };
  return (
    <Container id="#questions" className="grid gap-4 md:grid-cols-2 md:gap-24">
      <StaticImage
        className="w-full rounded-md object-cover md:h-[600px]"
        src="https://res.cloudinary.com/dl3jrszmx/image/authenticated/s--r_q15TXT--/v1708694938/Travelia%20Planet%20Website%20Assets/Questions_vyrjky.png"
        placeholder="blurred"
        alt="What we Offer"
      />
      <div className="grid place-content-start place-items-start gap-4 text-justify md:text-left">
        <h1>Questions</h1>
        <h4 className="">
          Here are some frequently asked questions about our Tours from our loving customers. Should
          you have any other questions, feel free to reach out via the contact form below.
        </h4>
        <dl className="grid w-full gap-2">
          {useQuestionsData().map((faq, index) => (
            <button
              className={`${activeQuestionIndex === index ? 'border-indigo-600' : ''} rounded-md border-2 p-2 transition-all duration-300 hover:border-indigo-600`}
              type="button"
              aria-label="questions"
              key={index}
              onClick={() => {
                toggleQuestion(index);
              }}
            >
              <dt className="grid text-lg font-semibold text-gray-700">
                <div className="flex items-center justify-between text-left">
                  <span>{faq.question}</span>
                  <span className=" text-indigo-600 md:text-3xl ">
                    {activeQuestionIndex === index ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
                  </span>
                </div>
                <dt className="pt-2 text-left text-base font-medium text-gray-500 ">
                  {activeQuestionIndex === index ? faq.answer : ''}
                </dt>
              </dt>
            </button>
          ))}
        </dl>
      </div>
    </Container>
  );
}

export default Questions;
