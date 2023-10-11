import './App.css';
import './index.css'
// Hooks
import { useState, useRef, useEffect, useContext } from 'react';

// context
import { ThemeContext } from './components/context/themeContext';

// components
import Title from './components/Title';
import Header from './components/Header';
import Modal from './components/Modal';
import TestimonialsList from './components/Lists/TestimonialsList';
import LoginForm from './components/page-components/LoginForm';
import RegisterationForm from './components/page-components/RegisterationForm';



// icons
import { BsArrowUpCircleFill} from "react-icons/bs"
import Categories from './components/sections/Categories';
import Offers from './components/sections/Offers';



function App() {
  // STATES
  // Modal state
  const [showCourseModal, setShowCourseModal] = useState(false);
//   scrollto top state
  const[goToTopArrow, setGoToTopArrow] = useState(false)
//   scroll to top handler
  function scrollFuncton() {
    if (
      document.body.scrollTop > 20 || 
      document.documentElement.scrollTop > 20
    ) {
      setGoToTopArrow(true);
    } else {
      setGoToTopArrow(false);
    }
    }
    // go to top effects
    useEffect(() => {
      window.onscroll = () => scrollFuncton();
    }, [])

    // go to top theme context
    const {theme} = useContext(ThemeContext)

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

//   scroll handler
const handleGoToTop = () =>{
topRef.current.scrollIntoView({behavior: "smooth"})
}

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


  return (
    <>
    
    <div className="conatainer container-lg " ref={topRef}>
      {/* header */}
        <Header login={login} 
        handleScrollToOffers={handleScrollToOffers} 
        handleStarLearningEvent={handleStarLearningEvent}>
        </Header>

        {/* Main */}
        <main>
            {/* categories */}
          <Categories login={login} handleStarLearningEvent={handleStarLearningEvent}/>

          {/* Offers */}
          <Offers offersRef={offersRef} showOffers={showOffers} handleShowOffers={handleShowOffers} />
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
       
       
    </div>
     {/* modal */}
     {showCourseModal && <Modal 
      title={"Access Denied"} 
      text={"Please login in order to access this content"}
      cancelEvent={handleModalCancelEvent}
      loginEvent={!login && handleShowLoginForm}
      />}
{/* login form */}
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
      {goToTopArrow && <BsArrowUpCircleFill className='gototopArrow' size={"1.5rem"}
      onClick={handleGoToTop}
      style={{ position: "fixed", bottom: 70, right: 30 }}
      color={theme ===  "dark" ? "#ff9800" : "#7633f9"}
      />}
    </>
  );
}

export default App;
 