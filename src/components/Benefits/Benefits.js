import React from "react";

// Components
import { Container, BenefitsCard } from "../UI";

// hooks
import { BenefitsData } from "../../hooks";

function Benefits() {
  return (
    <Container className="grid place-items-center py-16">
      <h3 className="mb-4 text-base font-bold text-indigo-600">Benefits</h3>
      <h2 className="mb-8 text-center text-4xl font-extrabold text-gray-700 md:text-left md:text-5xl">
        Benefits of Travelia Planet
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {BenefitsData.map((benefit, index) => (
          <BenefitsCard
            key={index}
            title={benefit.title}
            description={benefit.description}
            component={benefit.component}
            className={`${BenefitsData.length - 1 === index ? "" : ""} `}
          />
        ))}
      </div>
    </Container>
  );
}

export default Benefits;
