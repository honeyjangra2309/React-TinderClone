
import './App.css';
import MainSection from './Components/MainSection';
import Navbar from './Components/Navbar';
import Testimonial from './Components/Testimonial';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Download from './Components/Download';
import Support from './Components/Support';
import Privacy from './Components/Privacy';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar /><Testimonial /><MainSection /></>}></Route>
        <Route path="/download" element={<><Download /><MainSection /></>}></Route>
        <Route path='/support' element={<Support />}></Route>
        <Route path='/privacy' element={<Privacy />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
