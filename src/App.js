import './App.css';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import ApiCalls from './components/ApiCalls';
import Footer from './components/Footer';
import Resume from './components/Resume';


function App() {
    return (
    <div className="App">     
        <Header />
      <Routes>
        <Route path="/"  element={<ApiCalls/>} />
        <Route path="/resume"  element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
