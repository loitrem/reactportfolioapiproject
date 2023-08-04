import './App.css';
import {Route, Routes} from 'react-router-dom';
import React from "react";
import Header from './components/Header';
import ApiCalls from './components/ApiCalls';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";

function App() {

  //framer motion
  const element = useRoutes([
    {
      path: '/',
      element: <ApiCalls/>
    },{
      path: '/technologies',
      element: <Technologies />
    },{
      path: '/projects',
      element: <Projects />
    },{
      path: '/resume',
      element: <Resume />
    }
  ])

  const location = useLocation();

  if (!element) return null;

return (
  <div className="App">
      <Header />
      <AnimatePresence mode="wait">
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
      <Footer />
  </div>
);
}

export default App;

// return (
//   <div className="App">
//       <Header />
//       <Routes>
//         <Route path="/"  element={<ApiCalls/>} />
//         <Route path="/resume"  element={<Resume />} />
//         <Route path="/technologies"  element={<Technologies />} />
//       </Routes>
//       <Footer />
//   </div>
// );
// }