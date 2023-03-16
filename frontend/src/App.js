import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <Router >
      <Navbar />
      <Routes>
      <Route exact path="/" element={ <Dashboard />} />
        
      </Routes>
   
    </Router>
  );
}

export default App;
