import React,{useState,useEffect,useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../Components/AuthContext/AuthContext"
import  axios from 'axios';

import CloseIcon from '@mui/icons-material/Close';
export default function Login({ location }) {
    const navigate=useNavigate()
    const [alertt,setalert]=useState(false)
    
    const [alertfalse,setalertfalse]=useState(false)
     const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const { error, loading, dispatch } = useContext(AuthContext);

      
    
   
    const  handleSubmit=async(e)=>{
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
   try {
     await    axios.post("http://localhost:4000/api/auth/login",{
             email:email,
             password:password
        }) .then( (res)=> {
          console.log(res.status)
           if(res.status===200){
            setalert(true);
             localStorage.setItem('user', JSON.stringify(res.data));
              setTimeout(() => {
                dispatch({ type: "LOGIN_SUCCESS", payload: res.data , loading:true });   
                window.location.assign(location || "/");
        
            }, 2000);
          
           }  else{
            alert('wrong email')
            
           }
          })
   } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });
    setalertfalse(true)
   } 
       
    }
  return (
  
<div class={loading?"container opacity-70   flex  justify-center items-center   box-border p-0 text-center overflow-x-hidden	":"container    flex  justify-center items-center   box-border p-0 text-center overflow-x-hidden	"} >
<div className={alertt ? "alert fixed top-1/4 z-50 mx-auto px-4 py-2 bg-green-200 text-green-700 rounded-md shadow-lg transition duration-500 flex justify-between ease-in-out transform translate-x-1/2 md:max-w-md md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 lg:max-w-lg lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2" : "hidden"}>
  <div className="flex items-center p-[20px] ">
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span className="font-medium">Login With Success</span>
  </div>
  <button onClick={() => setalert(false)} className="ml-auto outline-none focus:outline-none">
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current h-6 w-6 hover:text-green-900" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18L18 6M6 6l12 12"></path></svg>
  </button>
</div>


<div  className={alertfalse?"alert alert-error  flex justify-between absolute top-[20%] z-[999] max-w-sm  shadow-lg":"hidden"}>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span> Wrong input! try again.</span>
  </div>
  <CloseIcon  onClick={()=>{setalertfalse(false)}} className="cursor-pointer" />
</div>
<div className={loading&&" w-16 absolute top-[50%] left-[50%] h-16 border-4 border-dashed rounded-full border-orangew animate-spin dark:border-orangew"}></div>
<div class="container mx-auto max-w-lg px-4 py-8 md:p-12">
  <form class="flex flex-col gap-4" onSubmit={handleSubmit}>
    <h2 class="text-2xl text-center font-bold">Login</h2>
    <div class="flex flex-col">
      <label class="font-semibold mb-1" for="email">Email address</label>
      <input class="border-2 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
             type="email" name="email" id="email" required 
             placeholder="example@gmail.com" value={email} 
             onChange={(e)=>{setEmail(e.target.value)}} />
    </div>
    <div class="flex flex-col">
      <label class="font-semibold mb-1" for="password">Password</label>
      <input class="border-2 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
             type="password" name="password" id="password" required 
             placeholder="**********" value={password} 
             onChange={(e)=>{setPassword(e.target.value)}} />
    </div>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Login</button>
    <div class="flex flex-row justify-center">
      <Link class="text-blue-500 font-bold underline" to="">Forgot Password?</Link>
    </div>
    <div class="flex flex-row justify-center">
      <Link class="text-blue-500 font-bold underline" to="/register">Sign Up</Link>
    </div>
  </form>
</div>

</div>


  )
}
