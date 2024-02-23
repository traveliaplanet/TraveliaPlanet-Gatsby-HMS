import React from 'react';
import { RiShieldFlashLine } from 'react-icons/ri';
import { MdOutlineSupportAgent, MdOutlineDashboardCustomize } from 'react-icons/md';
import { TbBrandVisa } from 'react-icons/tb';

const ServiceLinks = [
  {
    component: <RiShieldFlashLine />,
    title: 'Secure',
    description:
      'Your safety and comfort are our top priorities. Travel with confidence, knowing that Travelia Planet prioritizes high standards of safety and partners with reputable accommodations and transportation services to make your journey comfortable and worry-free.',
    url: '/contact/'
  },
  {
    component: <MdOutlineSupportAgent />,
    title: '24/7 Support',
    description:
      'Experienced service agents available for you, 24/7. Emergency line for assistance: +92 321 6483355',
    url: '/contact/'
  },
  {
    component: <MdOutlineDashboardCustomize />,
    title: 'Customized Trips',
    description:
      'Tell us your preferences and we will create the ideal holiday for you! We can tailor-make tours to suit different needs and wishes.',
    url: '/destinations/'
  },
  {
    component: <TbBrandVisa />,
    title: 'Visa Services',
    description:
      "Say goodbye to visa-related stress with Travelia Planet's streamlined visa services. Our dedicated team takes care of the entire process",
    url: '/visa/'
  }
];
export default ServiceLinks;
