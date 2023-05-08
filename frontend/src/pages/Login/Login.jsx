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
             const token = res.data.token;
             localStorage.setItem('access_token', token);
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
  
<div class={loading?"container opacity-70  relative flex  justify-center items-center   box-border p-0 text-center overflow-x-hidden	h-[100vh]":"container   relative flex  justify-center items-center   box-border p-0 text-center overflow-x-hidden	h-[100vh]"} >
<div className={alertt?"alert  flex justify-between absolute top-[20%] z-[999] max-w-sm alert-success shadow-lg":"hidden"}>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>Logged in with success  !</span>
  </div>
  <CloseIcon  onClick={()=>{setalert(false)}} className="cursor-pointer" />
</div>

<div  className={alertfalse?"alert alert-error  flex justify-between absolute top-[20%] z-[999] max-w-sm  shadow-lg":"hidden"}>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span> Wrong input! try again.</span>
  </div>
  <CloseIcon  onClick={()=>{setalertfalse(false)}} className="cursor-pointer" />
</div>
<div className={loading&&" w-16 absolute top-[50%] left-[50%] h-16 border-4 border-dashed rounded-full border-orangew animate-spin dark:border-orangew"}></div>
<div class=" sm:shadow-none lg:shadow-2xl   container lg:w-[700px]  md:w-[700px] lg:m-0 md:m-0 mt-20 md:h-[9OOpx] lg:absolute md:absolute  md:top-[55%] md:container md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2    lg:top-[55%] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2   md:grid md:grid-cols-2      ">
  <div class= " text-red-500   bg-cover bg-center md:bg-[url('https://images.pexels.com/photos/2563700/pexels-photo-2563700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] sm:none   flex flex-column justify-center align-center">
  </div>
  <div  class="  lg:h-max md:h-max  sm:h-full  py-5 lg:w-full  p-3   container flex flex-column justify-center align-center   " >
   
    <div>
        <form  onSubmit={handleSubmit}>  <h4 class="h1 text-3xl text-center"> Login </h4>
      <div class="flex my-[20px] flex-col ">
    
        <label  className=" font-semibold" for="">Email address</label>
        <input class="flex justify-center items-center mt-2 text-center self-center rounded-2xl p-1 bg-gray-100 focus:outline-0 lg:w-full md:w-full w-[250px]" type="email" name="email"  autocomplete="false"  required  placeholder="example@gmail.com"
              value={email} onChange={(e)=>{setEmail(e.target.value)}}>
       </input>
      </div>
      <div class="flex my-[20px] flex-col  ">
        <label  className=" font-semibold" for="">Password</label>
        <input class="flex justify-center items-center mt-2 text-center self-center rounded-2xl p-1 bg-gray-100 focus:outline-0 lg:w-full md:w-full w-[250px]" 
         type="password" name="password" required   placeholder="**********"
         value={password} onChange={(e)=>{setPassword(e.target.value)}}>
        </input>

      </div>
      
      <div class="flex justify-center">
      <button>Login</button>
      </div><div class="flex"> <h6  className="  mr-2" > New to ReviewHub ?</h6><Link className="text-orangew font-bold underline" to="/register">  Sign Up</Link>
    </div> 
       
    </form>
</div>
</div>

</div>
</div>


  )
}
