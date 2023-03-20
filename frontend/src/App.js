import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Form from './pages/Form/Form';
import Users from './pages/Users/Users';
import Places from './pages/Places/Places';
import Settings from './pages/Settings/Settings';
import Review from './pages/Review/Review';
import ReviewID from './Components/ReviewID/ReviewID';
function App() {
  return (
    <Router >
      <Navbar />
      <Routes>
        
      <Route  path="/reviews/:id" element={ <ReviewID />} />
      
      <Route  path="/reviews" element={ <Review />} />
      <Route  path="/settings" element={ <Settings />} />
      <Route  path="/users" element={ <Users />} />
      <Route exact path="/" element={ <Dashboard />} />
       <Route  path="/places" element={ <Places />} />
      <Route  path="/form" element={ <Form />} />
      </Routes>
   
    </Router>
  );
}

export default App;
