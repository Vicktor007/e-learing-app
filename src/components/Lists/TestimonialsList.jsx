import React,{ useState, useEffect } from 'react'

// Data
import testimonialData from "../../database/testimonials-list.json"
import TestimonialCard from '../page-components/TestimonialCard';
import ErrorBoundaries from '../Custom/Hooks/ErrorBoundaries';

export default function TestimonialsList() {
   //  const [testimonials, setTestimonials] = useState(() => {
   //       return JSON.parse(localStorage.getItem("testimonialData"));});

         const [data, setData] = useState(null);
         const [isLoading, setIsLoading] = useState(true);
         const [hasError, setHasError] = useState(false);
         let parseData;

         const getLocalData = () => {
            setIsLoading(true);
            setHasError(false);
            //simulate random error

            function getRandomInt() {
               let int = Math.floor(Math.random() * 4);
               console.log(int);
               return int;
            }

            setTimeout(() =>{
               parseData = JSON.parse(localStorage.getItem("testimonialData"));
               getRandomInt() <1? setHasError(true) : setData(parseData);
               setIsLoading(false);
            }, 2000);
            console.log(data);
         }

         useEffect(() => {
            // setTestimonials(testimonialData)
            localStorage.setItem("testimonialData", JSON.stringify(testimonialData));
            
            const fetchData = async () => {
               try {
                  setIsLoading(true);
                  getLocalData();
               } catch (error) {
                     setHasError(error);
                     setIsLoading(false);
                  }
            };
            fetchData();
         }, [!data]);

         if(isLoading) {
            return <div className="alert alert-warning">Loading...</div>
         }

         // if(hasError) {
         //    return (
         //    <div className="alert alert-danger">
         //       <p className="mr-1">Something went wrong</p>
         //       <Button text={"Try again"} onClick={getLocalData}/>
         //    </div>)
         // }
  return (
    <>
     {/* { !hasError && data &&
     data.map((item) => (
        <TestimonialCard 
        key={item.id}
        img={item.img}
        fullName={item.fullName}
        jobTitle={item.jobTitle}
        twitterHandle={item.titterHandle}
        text={item.text}
        />
     ))}  */}
     <ErrorBoundaries hasError={hasError} handleError={getLocalData}>
     { data &&
     data.map((item) => (
        <TestimonialCard 
        key={item.id}
        img={item.img}
        fullName={item.fullName}
        jobTitle={item.jobTitle}
        twitterHandle={item.titterHandle}
        text={item.text}
        />
     ))} 
     </ErrorBoundaries>
    </>
  )
}
