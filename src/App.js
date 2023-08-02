import './App.css';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import ApiCalls from './components/ApiCalls';
import Main from './components/Main';
import Resume from './components/Resume';


function App() {
    return (
    <div className="App">     
        <Header />
      <Routes>
        <Route path="/"  element={<ApiCalls/>} />
        <Route path="/resume"  element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
