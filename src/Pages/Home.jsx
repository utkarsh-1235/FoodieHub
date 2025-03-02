import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Caraousel from '../Components/Caraousel';
import { useSelector } from 'react-redux';
// import Caraousel from '../Components/Caraousel';
import { logout } from '../Redux/UserSlice';
import { useDispatch } from 'react-redux';
import { deletCart } from '../Redux/CartSlice';

function Home() {
    const navigate = useNavigate();
    const userAuthentication = useSelector((state)=>state.User.isAuthenticated);
    const token = useSelector((state)=>state.User.token);
    const dispatch = useDispatch();

    const onclick = ()=>{
        navigate("/login")
    }
    const onlogout = ()=>{
        dispatch(logout());
        dispatch(deletCart());
    }
    const onmove = ()=>{
        navigate("/about")
    }
    const onsignup = ()=>{
        navigate("/signup")
    }
    const foodClick = ()=>{
      console.log(userAuthentication)
      if(userAuthentication){
        navigate("/food")
      }else{

        navigate("/login")
      }
    }

    // useEffect(()=>{
    //   console.log("token",token);
    //   console.log("User Authentication",userAuthentication);
    // },[])
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-200 to-red-800 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-lg text-black">
        <h1 className="text-2xl font-bold">FoodieHub</h1>
        <ul className="flex space-x-6">
          <li className="hover:text-blue-500 cursor-pointer p-2">Home</li>
          <li className="hover:text-blue-500 cursor-pointer p-2" onClick={onmove}>About</li>
          <li className="hover:text-blue-500 cursor-pointer p-2">Services</li>
          <li className="hover:text-blue-500 cursor-pointer p-2">Contact</li>
          {
            userAuthentication && token ? (
              <li className="bg-red-300 rounded-md p-2 text-black cursor-pointer hover:bg-red-400 cursor-pointer" onClick={onlogout}>Logout</li>
            ):
            (
            <>  <li className="bg-red-300 rounded-md p-2 text-black cursor-pointer hover:bg-red-400 cursor-pointer" onClick={onclick}>Login</li>
              <li className="bg-red-300 rounded-md p-2 text-black cursor-pointer hover:bg-red-400 cursor-pointer" onClick={onsignup}>SignUp</li></>
            )
          }
          
          
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-[80vh] text-center px-6">
        <h2 className="text-5xl font-extrabold leading-tight">
          Welcome to <span className="text-yellow-300">FoodieHub</span>
        </h2>
        <p className="mt-4 text-lg max-w-xl">
          Build your dreams with modern and efficient solutions. Let's make something amazing together!
        </p>
        <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition"
                onClick={foodClick}>
          Get Started
        </button>
        
      </section>
      <section className="flex flex-col items-center justify-center h-[80vh] text-center px-6">
        <Caraousel/>
      </section>

      {/* Footer */}
      <footer className="text-center p-4 bg-black text-gray-400 mt-10">
        © 2025 MyBrand. All Rights Reserved.
      </footer>
    </div>
  )
}

export default Home