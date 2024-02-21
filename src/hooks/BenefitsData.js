import React from "react";
import { FaBed, FaBriefcaseMedical } from "react-icons/fa";
import { IoMdBonfire } from "react-icons/io";
import { MdOutlineEmojiTransportation, MdFastfood } from "react-icons/md";
import { VscPerson } from "react-icons/vsc";

const BenefitsData = [
  {
    component: <MdFastfood />,
    title: "Food & Drink",
  },
  {
    component: <MdOutlineEmojiTransportation />,
    title: "AC Transportaion",
  },
  {
    component: <FaBed />,
    title: "Accomodation",
  },
  {
    component: <FaBriefcaseMedical />,
    title: "Medical",
  },
  {
    component: <VscPerson />,
    title: "Tour Guide",
  },
  {
    component: <IoMdBonfire />,
    title: "Bonfire (Optional)",
  },
];
export default BenefitsData;
