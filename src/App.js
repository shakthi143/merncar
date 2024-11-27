import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";  
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import Contact from './contact/Contact.js';
import Login from "./LoginPage/Login.js";
import SignIn from "./Signin page/sign";
import AboutUs from "./About/AboutUs";
import Service from "./Service/Service";
import Home from "./Home/Home";
import Navigation from "./Nav/Navigation";
import Repair from "./Repair/Repair";
 import Footer from "./Footer/Footer.js";
import ForgotPasswordPage from "./Forgot/ForgotPasswordPage.js";
import ResetPasswordPage from "./Forgot/ResetPasswordPage.js";
import Cart from './BookingPage/Cart';
import TestApi from "./TestApi.js";
import Sales from "./Sales/Sales.jsx";
import Rental from "./Rental/Rental";
import Api from "./Api/Api.jsx";
import BookAppointment from "./BookAppointment.js";


function App()
{
  return(
    <>
   <Navigation/>
   
    <Routes>
      
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/SignIn' element={<SignIn/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/AboutUs' element={<AboutUs/>}></Route>
      <Route path='/Service' element={<Service/>}></Route>
      <Route path='/Repair' element={<Repair/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path="/Cart" element={<Cart />}></Route>
      
      <Route path="/BookAppointment" element={<BookAppointment />} />
    
      <Route path='/ForgotPasswordPage' element={<ForgotPasswordPage/>}></Route> 
      <Route path='/ResetPasswordPage' element={<ResetPasswordPage/>}></Route> 
      <Route path='/sales' element={<Sales/>}></Route> 
      <Route path='/rental' element={<Rental/>}></Route> 
      <Route path='/api' element={<Api/>}></Route> 
      
      
       </Routes>
       <Footer/>
     
       
       
       
   
    
     </>
  );
}



   export default App;
