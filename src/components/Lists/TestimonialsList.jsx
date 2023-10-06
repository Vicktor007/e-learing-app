import React,{ useState, useEffect } from 'react'

// Data
import testimonialData from "../../database/testimonials-list.json"
import TestimonialCard from '../page-components/TestimonialCard';

export default function TestimonialsList() {
    const [testimonials, setTestimonials] = useState(() => {
         return JSON.parse(localStorage.getItem("testimonialData"));});

         useEffect(() => {
            setTestimonials(testimonialData)
            localStorage.setItem("testimonialData", JSON.stringify(testimonialData));
         }, []);
  return (
    <>
     { testimonials &&
     testimonials.map((item) => (
        <TestimonialCard 
        key={item.id}
        img={item.img}
        fullName={item.fullName}
        jobTitle={item.jobTitle}
        twitterHandle={item.titterHandle}
        text={item.text}
        />
     ))} 
    </>
  )
}
