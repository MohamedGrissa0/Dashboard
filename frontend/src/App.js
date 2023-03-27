
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Form from './pages/Form/Form';

import Places from './pages/Places/Places';
import Settings from './pages/Settings/Settings';

import ReviewID from './Components/ReviewID/ReviewID';

import DeletePost from './Components/DeletePost/DeletePost';
import Allusers from './pages/Users/AllUsers';
import Reviews from './pages/Review/Reviews';



function App() {
  return (
    <Router >
      <Navbar />
      <Routes>
      <Route exact path="/" element={ <Dashboard />} />
      <Route  path="/form" element={ <Form />} />

    <Route path='/place/delete/:id' element={<DeletePost />} />
      <Route  path="/reviews/:id" element={ <ReviewID />} />
      
      <Route  path="/review" element={ <Reviews />} />

      <Route  path="/settings" element={ <Settings />} />
      <Route exact path="/" element={ <Dashboard />} />
       <Route  path="/places" element={ <Places />} />
      <Route  path="/form" element={ <Form />} />
 
      <Route  path="/allusers" element={ <Allusers />} />



      </Routes>
   
    </Router>
  );
}

export default App;
