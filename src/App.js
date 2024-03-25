import Main from './pages/Main';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterForm from './pages/RegisterForm';



function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
