import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import RefactoredApp from "./RefactoredApp"

// routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// routs
import Root from './routes/Root';
import Contact from './routes/Contact';
import ErrorPage from './Error-Page';


// create a router

const router = createBrowserRouter([
  {
    path:"/",
    // element: <RefactoredApp/>,
    element: <Root/>,

    errorElement: <ErrorPage/>
  },{
    path: "contact",
    element: <Contact/>
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
