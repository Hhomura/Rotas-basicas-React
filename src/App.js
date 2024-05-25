import logo from './logo.svg';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Main from './Main';
import ErrorPage from './pages/ErrorPage';
import ContactDetails from './pages/ContactDetails';

const router = createBrowserRouter ([
  /*{
    path: "/",
    element: <Home/>
  },
  {
    path: "contacts",
    element: <Contact/>
  }
  */
 {
  path: "/",
  element: <Main/>,
  children: [
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "contacts",
      element: <Contact/>
    },
    {
      path: "/contacts/:id",
      element: <ContactDetails/>
    },
    { 
      path: "old",
      element: <Home/>
    }
  ],
  errorElement: <ErrorPage/>
 }
])
function App() {
  return (
  <div className='App'>
    
     <h1>Olá</h1>
     <RouterProvider router={router}/>

  </div>
  );
}

export default App;
