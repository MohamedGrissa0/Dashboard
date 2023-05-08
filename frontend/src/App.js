import React from "react";
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Form from './pages/Form/Form';
import { AuthContext } from "../src/Components/AuthContext/AuthContext";
import Places from './pages/Places/Places';
import Settings from './pages/Settings/Settings';
import ReviewID from './Components/ReviewID/ReviewID';
import DeletePost from './Components/DeletePost/DeletePost';
import Allusers from './pages/Users/AllUsers';
import Reviews from './pages/Review/Reviews';
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"
import Logout from "./pages/Logout/Logout"


function App() {
  const {user} = React.useContext(AuthContext);
  console.log(user)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={!user ?<Login /> :<Dashboard/>} />
        <Route path="/form" element={<Form />} />
        <Route path="/register" element={!user ? <Register /> : <Dashboard />} />
        <Route path="/login" element={!user ? <Login /> : <Dashboard />} />
        <Route  path="/logout" element={   <Logout />} />
        <Route path='/place/delete/:id' element={<DeletePost />} />
        <Route path="/reviews/:id" element={!user ?<Login/>:<ReviewID />} />
        <Route path="/review" element={!user ?<Login/>:<Reviews />} />
        <Route path="/settings" element={!user ?<Login/>:<Settings />} />
        <Route path="/places" element={!user ?<Login/>:<Places />} />
        <Route path="/form" element={!user ?<Login/>:<Form />} />
        <Route path="/allusers" element={!user ?<Login/>:<Allusers />} />
      </Routes>
    </Router>
  );
}

export default App;
