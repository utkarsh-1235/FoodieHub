import React, { useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addRestaurant } from "../Redux/RestaurantSlice";

function InputComponent() {
  const { register,setValue, watch } = useFormContext();
  const [preview, setPreview] = useState();

  const handleFileChange = (e)=>{
   const file = e.target.files[0];
   if(file){
    const imageUrl = URL.createObjectURL(file);
    setValue('img',imageUrl);
    setPreview(imageUrl);
   }
  }


  return (
    <>
      <input {...register("id", { required: true })} className="border w-[70%] p-2 rounded-md text-center" placeholder="Enter Your ID" />
      <input {...register("name", { required: true })} className="border w-[70%] p-2 rounded-md text-center" placeholder="Enter Your Restaurant Name" />
      <input {...register("rating", { required: true })} className="border w-[70%] p-2 rounded-md text-center" placeholder="Enter Rating" type="number" />
      <input {...register("cuisine", { required: true })} className="border w-[70%] p-2 rounded-md text-center" placeholder="Enter Cuisine Type" />
       
      <input type="file" accept="image/*" className="border w-[70%] p-2 rounded-md text-center" onChange={handleFileChange} />
      <input type='hidden' {...register("img")}/>
      {preview && <img src={preview} alt="Preview" className="w-40 h-40 mt-2 rounded-md shadow-md" />}
    </>
  );
}

function AddRestaurant() {
  const methods = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // console.log("Restaurant Data:", data);
     dispatch(addRestaurant(data));
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-red-200 to-red-800 mx-auto">
      <div className="w-[90%] max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-center text-black text-3xl font-semibold mb-4">Register Your Restaurant with Us</h1>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col items-center space-y-4">
            <InputComponent />
            <button type="submit" className="block w-[40%] mx-auto bg-yellow-400 rounded-md text-black p-2 cursor-pointer hover:bg-yellow-600">
              Create Restaurant
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default AddRestaurant;
