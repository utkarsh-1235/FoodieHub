import React, { useState } from 'react'
import {FormProvider, useForm, useFormContext } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../Redux/UserSlice';
import { Toaster, toast } from 'react-hot-toast';

function InputComponent({y}) {
    const { register } = useFormContext();
  
    return <><input {...register('email',{required: true})} className='border  w-[70%] p-2 rounded-md text-center' placeholder='Enter Your Email' name='email'/>
             <input {...register('password',{required: true})} className='border  w-[70%] p-2 rounded-md text-center' placeholder='Enter Your Password' name='password'/> </>
  }

function LoginPage() {
    const navigate = useNavigate();

    const onclick = ()=>{
         navigate('/signup')
    }
    const [data, setData] = useState({
        email:'',
        password:''

    });

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const methods = useForm();
    const dispatch = useDispatch();

    const onSubmit = async(data)=>{
        if(!emailRegex.test(data.email)){
            toast.error("please Enter valid email");
        }else{
            const userData = {id: 1, user: data}
            dispatch(login(userData));
            navigate('/')
            
        }
        
    }
    

  return (
    <>
    <Toaster position='top-center' reverseOrder={false} />
    <div className='w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-red-200 to-red-800 mx-auto'>
        <div className='w-[90%] max-w-md bg-white p-6 rounded-lg shadow-md'>
        <h1 className='text-center text-black text-3xl font-semibold mb-4'>Login Page</h1>
    <FormProvider {...methods}>
    <form onSubmit={methods.handleSubmit(onSubmit)} className='flex flex-col items-center space-y-4'>
        <InputComponent/>
        <button className='hover:text-blue-400' onClick={onclick}>Create an Account</button>
        <input type='submit' className='block w-[40%] mx-auto bg-yellow-400 rounded-md text-black p-2 cursor-pointer hover:bg-yellow-600'/>
    </form>
    </FormProvider>
    </div>
    </div>
    </>
  )
}

export default LoginPage