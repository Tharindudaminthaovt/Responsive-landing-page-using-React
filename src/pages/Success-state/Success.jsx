
import './Success.css';

export default function Success({ formData ,closeModal}) {
  


    return (
    
      <div className='background'>
    <div className='message-box'>
        <div className='content'>
          <img className='tick-img' src='public/images/icon-list.svg' height='50px' />
          <h1> Thanks for subscribing!</h1>
          <p className='message'>
            A confirmation email has been sent to{' '}
            <strong>{formData.email}</strong> Please open it and click the
            button inside to confirm your subscription.
          </p>
          <button onClick={()=>closeModal(false)}>Dismiss message</button>
        </div>
                </div>
                </div>
          
            
  );
}
