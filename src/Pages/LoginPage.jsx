import React, { useState } from 'react'
import {FormProvider, useForm, useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

function InputComponent({y}) {
    const { register } = useFormContext();
  
    return <><input {...register('name',{required: true})} className='border  w-[70%] p-2 rounded-md text-center' placeholder='Enter Your Name' onChange={y} name='name'/>
             <input {...register('email',{required: true})} className='border  w-[70%] p-2 rounded-md text-center' placeholder='Enter Your Email' onChange={y} name='email'/> </>
  }

function LoginPage() {
    const navigate = useNavigate();

    const onclick = ()=>{
         navigate('/signup')
    }
    const [data, setData] = useState({
        name:'',
        email:''

    });
    const methods = useForm();

    const onSubmit = async(data)=>{
        console.log(data);
        
    }

    const handleChange = (e)=>{
      setData({...data,[e.target.name]:e.target.value})
    }
  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-red-200 to-red-800 mx-auto'>
        <div className='w-[90%] max-w-md bg-white p-6 rounded-lg shadow-md'>
        <h1 className='text-center text-black text-3xl font-semibold mb-4'>Login Page</h1>
    <FormProvider {...methods}>
    <form onSubmit={methods.handleSubmit(onSubmit)} className='flex flex-col items-center space-y-4'>
        <InputComponent y={handleChange}/>
        <button className='hover:text-blue-400' onClick={onclick}>Create an Account</button>
        <input type='submit' className='block w-[40%] mx-auto bg-yellow-400 rounded-md text-black p-2 cursor-pointer hover:bg-yellow-600'/>
    </form>
    </FormProvider>
    </div>
    </div>
  )
}

export default LoginPage