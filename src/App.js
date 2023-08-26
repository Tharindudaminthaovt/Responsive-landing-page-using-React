
import './App.css';
import { useState } from "react";
import Form from './components/form/Form'
import Success from './pages/Success-state/Success';

function App() {
  
  return (
  
      <div className='contain'>
        <div className="container">
   
          < div className="text-side" >
            <h1>Stay updated!</h1>
            <p className="home-p">
              Join 60,000+ product managers receiving monthly updates on:
              <ul>
                <li>Product discovery and building what matters</li>
                <li>Measuring to ensure updates are a success</li>
                <li>And much more!</li>
              </ul>
            </p>
            <div className="subscribe">
              <Form  />
            </div>
          </div >


        <div className="image-side"></div>
       </div>
        </div >
        
      
  );
}

export default App;
