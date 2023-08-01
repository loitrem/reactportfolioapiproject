import './App.css';
import {Route, Routes} from 'react-router-dom';
import Nav from './components/Nav';
import ApiCalls from './components/ApiCalls';



function App() {
    return (
    <div className="App">     
        <Nav />
      <Routes>
        <Route path="/"  element={<ApiCalls/>} />
      </Routes>
    </div>
  );
}

export default App;
