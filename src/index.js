import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import RefactoredApp from "./RefactoredApp"

// routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// routs
import Root from './routes/Root';
import Contact from './routes/Contact';
import ErrorPage from './Error-Page';
import Home from './routes/Home';
import About from './routes/About';
import Index from './routes/Index';
import RegisterationForm from './components/page-components/RegisterationForm';
import LoginForm from './components/page-components/LoginForm';


// create a router

const router = createBrowserRouter([
  {
    path:"/",
    // element: <RefactoredApp/>,
    element: <Root/>,

    errorElement: <ErrorPage/>,
    children:[

      {
        index:true,
        element: <Index/>
        
      },
      {
        path: "Home",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      
      {
        path: "contact",
        element: <Contact/>
      },

      {
        path: "login",
        element: <LoginForm/>
      },

      {
        path: "register",
        element: <RegisterationForm/>
      }
    ]
  },
  //{
  //   path: "Home",
  //   element: <Home/>
  // },
  
  
  
  // {
  //   path: "contact",
  //   element: <Contact/>
  // }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
