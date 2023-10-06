import './App.css';
import './index.css'
// Hooks
import { useState, useRef, useEffect } from 'react';

// components
import Title from './components/Title';
import Header from './components/Header';
import headerImg from "./img/header-img.png";
import Button from './components/Button';
import Modal from './components/Modal';
import CategoriesCard from './components/page-components/CategoriesCard';
import OffersCard from './components/page-components/OffersCard';


// icons
import {BsArrowRight, BsArrowUpCircleFill} from "react-icons/bs"
import {AiFillHtml5, AiFillPlayCircle, AiFillUnlock} from "react-icons/ai"
import {DiCss3Full} from "react-icons/di"
import {SiJavascript, SiPowerbi} from "react-icons/si"
import {DiReact} from "react-icons/di"
import {FaRProject, FaPython, FaJava, FaFileExcel, FaMapMarkedAlt, FaFileDownload} from "react-icons/fa"
import {HiMiniCircleStack} from "react-icons/hi2"
import TestimonialsList from './components/Lists/TestimonialsList';
// import UseRef from './Examples/UseRef';
import LoginForm from './components/page-components/LoginForm';
import RegisterationForm from './components/page-components/RegisterationForm';
import ThrowError from './Examples/ThrowError';
// import UseEffectHook from './Examples/UseEffectHook';
// import MyList from './Examples/MyList';



// Examples
// import UsestateHookEx from './Examples/UsestateHookEx';

function App() {
  // STATES
  // Modal state
  const [showCourseModal, setShowCourseModal] = useState(false);
  // scrollto top state
  // const[goToTopArrow, setGoToTopArrow] = useState(false)
  // scroll to top handler
  // function scrollFuncton() {
  //   if (
  //     document.body.scrollTop > 20 || 
  //     document.documentElement.scrollTop > 20
  //   ) {
  //     setGoToTopArrow(true);
  //   } else {
  //     setGoToTopArrow(false);
  //   }
  //   }
  //   // go to top effects
  //   useEffect(() => {
  //     window.onscroll = () => scrollFuncton();
  //   }, [])
    

    // form states
    const [forms, setForms] = useState({
      loginForm: false,
      registrationForm: false,
    })
  const [login, setLogin] = useState(false);


  // Offers state
  const [showOffers, setshowOffers] = useState(false);


  // HANDLERS
  // Modal handler
  function handleStarLearningEvent() {
    setShowCourseModal(true)
  }

  function handleModalCancelEvent() 
  {
    setShowCourseModal(false)
  }

  // offers handler
  const handleShowOffers=()=> {
    showOffers === false ? setshowOffers(true) : setshowOffers(false)
  }

  const handleScrollToOffers = () => {
    offersRef.current.scrollIntoView({behavior: "smooth"});
  }

  // scroll handler
// const handleGoToTop = () =>{
// topRef.current.scrollIntoView({behavior: "smooth"})
// }

// form handle 
const handleShowLoginForm =() => {
  setForms({registrationForm: false, loginForm: true});
};

const handleCancelLoginForm = () => {
  setForms({...forms, loginForm: false})
}


function handleLoginFormValidation() {
setForms({...forms, loginForm: false});
setShowCourseModal(false);
setLogin(true);
}

// Registeration form
function handleShowRegistrationForm() {
  setForms({loginForm: false, registrationForm: true});
}

const handleCancelRegistrationForm =() => {
  setForms({...forms, registrationForm: false});
};


  // refrences

  const offersRef = useRef();
const topRef = useRef()
  // offers list
const offerList = [
  {
    icon_1: <AiFillUnlock className="i" size={"2em"}/>,
    title: "Tons of content",
    text: "We have a library of over 100,000 videos that will help you learn to code."
  },
  {
    icon_1: <FaMapMarkedAlt className="i" size={"2em"}/>,
    title: "Guided Course",
    text: "We giud you with series of videos that will help you learn to code."
  },
  {
    icon_1: <FaFileDownload className="i" size={"2em"}/>,
    title: "Project File Downloads",
    text: "Files from projects are available for all of our courses to be donloaded."
  },
]

const moreOffersList = [
  {
    icon_1: <AiFillUnlock className="i" size={"2em"}/>,
    title: "Tons of content",
    text: "We have a library of over 100,000 videos that will help you learn to code."
  },
  {
    icon_1: <FaMapMarkedAlt className="i" size={"2em"}/>,
    title: "Guided Course",
    text: "We giud you with series of videos that will help you learn to code."
  },
  {
    icon_1: <FaFileDownload className="i" size={"2em"}/>,
    title: "Project File Downloads",
    text: "Files from projects are available for all of our courses to be donloaded."
  },
]

  return (
    <>
    
    <div className="conatainer container-lg" ref={topRef}>
      {/* header */}
        <Header >
          <div className="headercontent mb-2">

        <Title 
         text='Learn to code by watching others'
          classes={"header-title fs-xxl mb-3"}
          />
          <p className='header-text mb-3'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
          </p>
          <div className="header-btn">
            <Button 
            classes={'btn-primary text-light'} 
            type={"button"} 
            
            
            text={"Try it free 30 days"}
            onClick={!login ? handleStarLearningEvent : ()=> window.alert("You are logged in.")}
            />

           <Button 
            classes={'btn-secondary'} 
            type={"button"} 
           
            text={"Learn more"}
            icon={<BsArrowRight/>}
            onClick={handleScrollToOffers}

            />

          </div>
          <img src={headerImg} alt="header-img" className='header-img'/>
          </div>
        </Header>

        {/* Main */}
        <main>

          <section className="categories my-4">
            <Title text='Top categories' classes={"subtitle text-center"}/>
            <div className="categories-container d-flex">
              <CategoriesCard
              title={"Web Development"}
              icon_1={<AiFillHtml5 size={"4em"} className='icon html5'/>} 
              icon_2={<DiCss3Full size={"4em"} className='icon css3'/>} 
              icon_3={<SiJavascript size={"4em"} className='icon js'/>} 
              btnIcon={<AiFillPlayCircle size={"2em"}/>}
              startLearningEvent={handleStarLearningEvent}
              >
                <span className="fs-ig">Learn how to build web apps with:</span>
                <ul className="mt-1">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                </ul>
                </CategoriesCard> 

                {/* Moble Development card */}
                <CategoriesCard 
                title={"Mobile Development"}
              icon_1={<DiReact size={"4em"} className='icon react'/>}
              icon_2={<SiJavascript size={"4em"} className='icon js'/>} 
              btnIcon={<AiFillPlayCircle size={"2em"}/>}
              startLearningEvent={handleStarLearningEvent}
              >
                  <span className="fs-ig">Learn how to build mobile apps with:</span>
                <ul className="mt-1">
                  <li>React Native</li>
                  <li>Javascript</li>
                  <li>Expo</li>
                </ul>
                </CategoriesCard>
              
              <CategoriesCard
              title={"Data Science"}
              icon_1={<FaPython size={"4em"} className='icon html5'/>} 
              icon_2={<FaRProject size={"4em"} className='icon css3'/>} 
              icon_3={<FaJava size={"4em"} className='icon js'/>} 
              btnIcon={<AiFillPlayCircle size={"2em"}/>}

              startLearningEvent={handleStarLearningEvent}

              >
                <span className="fs-ig">Learn how to analyze data with:</span>
                <ul className="mt-1">
                  <li>Python</li>
                  <li>R</li>
                  <li>Java</li>
                </ul>
              </CategoriesCard>

              <CategoriesCard
              title={"Business"}
              icon_1={<FaFileExcel size={"4em"} className='icon html5'/>} 
              icon_2={<SiPowerbi size={"4em"} className='icon css3'/>} 
              icon_3={<HiMiniCircleStack size={"4em"} className='icon js'/>} 
              btnIcon={<AiFillPlayCircle size={"2em"}/>}

              startLearningEvent={handleStarLearningEvent}

              >
                <span  className="fs-ig">Learn how to analyze data with:</span>
                <ul className="mt-1">
                  <li>Excel</li>
                  <li>Power BI</li>
                  <li>SQL</li>
                </ul>
              </CategoriesCard>
            </div>
          </section>

          {/* Offers */}
          <section ref={offersRef} className='offers-container container-md p-2'>
            <Title classes={"subtitle text-center mb-4"} text="Here's what you get"/>
            <div className="offers-container">
              
              {offerList.map((offer, index) => (<OffersCard 
              key={index}
              icon_1={offer.icon_1}
              title={offer.title}
              text={offer.text}
              >
              </OffersCard>
              ))}
            </div>
            {showOffers && (<div className="offers-container fadeIn">
              {moreOffersList.map((offer, index) => (<OffersCard 
              key={index}
              icon_1={offer.icon_1}
              title={offer.title}
              text={offer.text}
              >
              </OffersCard>
              ))}
            </div>
            )}
            <span 
            onClick={handleShowOffers}
            style={{cursor: "pointer", textDecoration: "underline"}}
            >
              <h4 className="text-center text-primary mt-2">
                {showOffers ? "Less" : "More..."}
              </h4>
            </span>
          </section>
          {/* testmonials */}
          <section className="testimonials my-4">
            <Title 
            classes={"subtitletext-center mb-4"}
            text='What our users say'
            />
            <div className="testimonials-container">
              <TestimonialsList/>
            </div>
          </section>
        </main>
       
        {/* <UsestateHookEx/> */}
        {/* <UseEffectHook/> */}
        {/* <UseRef/> */}
    </div>
     {/* modal */}
     {showCourseModal && <Modal 
      title={"Access Denied"} 
      text={"Please login in order to access this content"}
      cancelEvent={handleModalCancelEvent}
      loginEvent={!login && handleShowLoginForm}
      />}

      {forms.loginForm && (<div className='modal'>
        <LoginForm
         handleCancel={handleCancelLoginForm}
         showRegister={handleShowRegistrationForm}
        loggedIn={handleLoginFormValidation}
        />
      </div>)}

      {/* registeration form */}
      {forms.registrationForm && (<div className='modal'>
        <RegisterationForm
         handleCancel={handleCancelRegistrationForm}
         showLogin={handleShowLoginForm}
        />
      </div>)}

      {/* go to top arrow */}
      {/* {goToTopArrow && <BsArrowUpCircleFill className='goToTopArrow' size={"1.5rem"}
      onClick={handleGoToTop}
      />} */}
         {/* <ThrowError/> */}

    {/* <MyList/> */}

    </>
  );
}

export default App;
 