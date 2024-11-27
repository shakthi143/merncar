import React from 'react';

import { Link } from 'react-router-dom';
import './Home.css';


function Home() {
 
  
 

  return (
    <section>
      <div className="Home">
       
        <header className="header">
          <div className="content">
            <div className="container hom-con">
              <h1>Car Repairs and Rental Club</h1>
              <p className='p9'>Visit us for your car service and to rent cars!</p>
              
              <Link to="/BookAppointment" className="highlight">Book Appointment</Link>
            </div>
          </div>
        </header>

        
       
      </div>
    </section>
  );
}

export default Home;
