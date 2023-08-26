import React from 'react'
import { useForm } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import Success from '../../pages/Success-state/Success'
import { useState } from 'react';
import './form.css';

export default function Form() {

    const [openModal, setOpenModal] = useState(false);

    const schema = yup.object().shape({
        email: yup.string().required().email()
})

    const { register, handleSubmit,formState:{errors} } = useForm({
        resolver:yupResolver(schema),
    });

    const [formData, setFormData] = useState(null);//state to pass data to Success component
   
    const onSubmit = (data) => {
        setFormData(data);
    }
   
  return (
<>
          <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email address</label>
          <label className="error-message">{errors.email?.message}</label>
          <br />
              <input style={{
                  borderColor: errors.email && 'hsl(4, 67%, 54%)',
                  backgroundColor: errors.email && 'hsla(4, 100%, 67%, 0.196)',
                  color: errors.email && 'hsl(4, 100%, 67%)'
                  
              }} type="text" placeholder="email@company.com" {...register("email")} />
              <button type='submit' onClick={() => { setOpenModal(true); }}>Subscribe to monthly newsletter</button>
      </form>
          {formData && openModal &&<Success formData={formData} closeModal={setOpenModal} />
          }
          
</>
  )
}
