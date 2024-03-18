import Main from './pages/Main';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/Register';



function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
