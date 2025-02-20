import React, { useState } from 'react'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

function InputComponent({x}){
const {register} = useFormContext();

return <><input {...register('name',{required: true})}className='w-[70%] border rounded-md p-2 text-center' placeholder='Enter Your Name' onClick={x} name='name'/>
          <input {...register('email',{required: true})} className='w-[70%] border rounded-md p-2 text-center' placeholder='Enter Your Email' onClick={x} name='email'/>
          <input {...register('phoneNumber',{required: true})} className='w-[70%] border rounded-md p-2 text-center' placeholder='Enter Your PhoneNumber' onClick={x} name='phoneNumber'/></>
}
function SignUp() {
    const navigate = useNavigate();

    const onclick = ()=>{
        navigate('/login');
    }
    const [data, setData] = useState({
        name: '',
        email: '',
        phoneNumber: ''
    })

    const methods = useForm();

    const handleChange = (e)=>{
       setData({...data,[e.target.name]: e.target.value})
    }

    const onsubmit= (data)=>{
        console.log(data);
        
    }
    
  return (
    <div className='bg-gradient-to-br from-red-200 to-red-800 w-full min-h-screen flex items-center justify-center mx-auto'>
        <div className='bg-white w-[50%] max-wd-md p-6 rounded-lg shadow-md'>
            <h1 className='text-center text-black text-3xl font-semibold mb-4'>Please Create Your profile</h1>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onsubmit)} className='flex items-center flex-col space-y-4'>
                 <InputComponent x={handleChange}/>
                 <button className='hover:text-blue-400' onClick={onclick}>Already have an account </button>
                 <input type='submit' className='block w-[40%] mx-auto bg-yellow-400 rounded-md text-black p-2 cursor-pointer hover:bg-yellow-600'/>
                </form>
            </FormProvider>
        </div>
    </div>
  )
}

export default SignUp

 