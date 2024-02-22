import React from 'react';
import { RiShieldFlashLine } from 'react-icons/ri';
import { MdOutlineSupportAgent, MdOutlineDashboardCustomize } from 'react-icons/md';

const ServiceLinks = [
  {
    component: <RiShieldFlashLine />,
    title: 'Secure',
    description: 'We strictly only deal with Travel Agents that provide top notch security.',
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
    component: <MdOutlineDashboardCustomize />,
    title: 'Visa Services',
    description: 'We will provide you Visa Services',
    url: '/visa/'
  }
];
export default ServiceLinks;
