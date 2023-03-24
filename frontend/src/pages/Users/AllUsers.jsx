import React, { useState } from 'react'
import { useEffect , use } from 'react';
import axios from'axios';
import md5 from "md5"
import CloseIcon from '@mui/icons-material/Close';

export default function Allusers() {
    const [formValues, setFormValues] = useState({
        id:"",
        username:  "",
        email: "",
        password:""
      });
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
      };
        const [isclicked, setisclicked] = useState(false)
        const [isDone , setisDone] = useState(false)
        const [isUpdateDone , setUpdateisDone] = useState(false)

        const [isLoading, setIsLoading] = useState(false);
        const [users, setUsers] = useState([]);
        const [ID,setID] = useState({}) 
       
        useEffect(() => {
          axios
            .get(`http://localhost:4000/api/users/`)
            .then((response) => {
              setUsers(response.data);
              console.log(response.data) // Update the users array with the response data from the Axios request
              // Use the "users" variable in maps or any other operations
            })
            .catch((error) => {
              console.log(error);
            });
        }, []);
        const handleDelete = async (item) => {
            console.log(item);
            try {
                await axios.delete(`http://localhost:4000/api/users/`, { data: { id: item._id } });
                console.log(`User with ID ${item._id} deleted successfully.`);
                setisDone(true)
            } catch (error) {
                console.error(`Error deleting user with ID ${item._id}: ${error}`);
            }
            window.location.reload()
        };

        const handleUpdate = async (e) => {
            console.log(ID)
            e.preventDefault();
            try {
                await axios.put(`http://localhost:4000/api/users/`, {
                    id: ID._id, // add user id
                    username: formValues.username?formValues.username:ID.username,
                    email: formValues.email?formValues.email:ID.email,
                    password: formValues.password?md5(formValues.password):ID.password,
                });
                console.log(`Updated successfully.`);
                setUpdateisDone(true); // fix camelCase
            } catch (error) {
                console.error(`Error updating user: ${error}`); // fix spacing and capitalization
            }
            window.location.reload();
        };
  
    
    
  
  return (
    
    <div>
      {isDone && (
  <div className="bg-teal-100 flex items-center justify-center border-t-4 w-[180px] md:w-[360px] text-center lg:w-[600px] xl:w-[600px] absolute z-999 top-[50%] left-[25%] border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
    <div className="flex justify-center items-center">
      <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
      <div>
        <p className="font-bold">Account has been Deleted Successfully</p>
      </div>
    </div>
  </div>
  
)}

{isUpdateDone && (
  <div className="bg-teal-100 flex items-center justify-center border-t-4 w-[180px] md:w-[360px] text-center lg:w-[600px] xl:w-[600px] absolute z-999 top-[50%] left-[25%] border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
    <div className="flex justify-center items-center">
      <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
      <div>
        <p className="font-bold">Account has been Updating Successfully</p>
      </div>
    </div>
  </div>
  
)}


      
<div class="max-w-full mt-20 px-10">

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <div class="p-4 flex justify-end">
    <label for="table-search" class="sr-only">Search</label>
    <div class="relative mt-1">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"></path>
        </svg>
      </div>
      <input type="text" id="table-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"/>
      </div>
    </div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
        <tr >
         
          <th scope="col" class="px-6 py-3">
           
          <span class=" flex justify-center">Picture</span>  
          </th>
          <th scope="col" class="px-6 py-3">
           
          <span class=" flex justify-center">Usename</span>  
          </th>
          <th scope="col" class="px-6 mx-auto    py-3">
           
          <span class=" flex justify-center">Email</span>  
          </th>
          <th scope="col" class="px-6 mx-auto    py-3">
           
          <span class=" flex justify-center">Password</span>  
          </th>
          
          

          <th scope="col" class="px-6 py-3">
            <span class=" flex justify-center">Edit</span>
          </th>
          <th scope="col" class="px-6 py-3">
            <span class=" flex justify-center">Delete</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((item)=>(
            <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
            <img
                    src={item.avatar}
                    alt="Doesnot have"
                    className="profile-pic rounded-full w-12 h-12 md:w-16 md:h-16 block md:flex items-center justify-center"
                  />            </th>
            <td class="px-6 py-4">
              
              <span className=' flex justify-center'                   style={{ wordWrap: "break-word" }}
  >{item.username}</span>   
              </td>
            <td class="px-6 py-4">
              
            <span className=' flex justify-center'                   style={{ wordWrap: "break-word" }}
>{item.email}</span>   
            </td>
            <td class="px-6 py-4">
              
              <span className=' flex justify-center'                   style={{ wordWrap: "break-word" }}
  >{item.password}</span>   
              </td>
            
            
            <td class="px-6 py-4  text-right">
           
            <button
                  className="update-btn lg:ml-14 flex justify-center items-center"
                  onClick={()=>{setisclicked(!isclicked);setID(item);console.log(item)}}
                >
                  <span  className="btn-text bg-blue-500 text-white px-4 py-2 rounded-full md:px-6 md:py-3 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                    Edit
                  </span>
                </button>            </td>
            <td class="px-6 py-4  text-right">
           
            <button className="delete-btn  lg:ml-14 flex justify-center items-center">
            <span onClick={()=>{handleDelete(item)}} className="btn-text bg-blue-500 text-white px-4 py-2 rounded-full md:px-6 md:py-3 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                    Delete
                  </span>
                </button>         </td>
          </tr>
        
          ))
        }
       
      </tbody>
    </table>
  </div>
  </div>
  
  
  
  
  
  <form onSubmit={handleUpdate}  className={isclicked ? "p-3 fixed  top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-999 bg-white rounded-lg shadow-xl w-11/12 md:w-2/3 lg:w-1/2" : "hidden"}>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-3">
    <div className="relative flex flex-col justify-between">
      <label htmlFor="name" className="block font-bold mb-2">
        <i className="fas fa-user mr-2 "></i>
        <span className="">Name : </span>
      </label>
      <input type="text" id="name" name="username" onChange={handleInputChange} value={formValues.username?formValues.username:ID.username} placeholder="Enter your name" className="block w-full border-2 border-gray-400 rounded-lg bg-transparent text-gray-700 py-2 px-4 md:py-3 md:px-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
    </div>
    <div className="relative flex flex-col justify-between">
      <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
        <i className="fas fa-envelope mr-2 text-blue-500"></i>
        <span className="">Email :</span>
      </label>
      <input type="email" id="email" name="email" onChange={handleInputChange} value={formValues.email?formValues.email:ID.email} placeholder="Enter your email" className="block w-full border-2 border-gray-400 rounded-lg bg-transparent text-gray-700 py-2 px-4 md:py-3 md:px-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
    </div>
    <div className="relative flex items-center justify-center flex-col justify-between">
      <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
        <i className="fas fa-envelope mr-2 text-blue-500"></i>
        <span className="">password :</span>
      </label>
      <input type="text" id="password" name="password" onChange={handleInputChange} value={formValues.password?formValues.password:ID.password} placeholder="Enter your email" className="block w-full border-2 border-gray-400 rounded-lg bg-transparent text-gray-700 py-2 px-4 md:py-3 md:px-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
    </div>
  </div>
  
  <div className="flex justify-center mt-5">
    <button type="button" onClick={() => setisclicked(false)} className="bg-white text-blue-500 text-lg px-6 py-2 rounded-lg mr-4 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-blue-500 transition-all duration-200 ease-in-out">Cancel</button>
    <button type="sumbit" className="bg-blue-500 text-white text-lg px-6 py-2 rounded-lg mr-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-all duration-200 ease-in-out">Done</button>
  </div>
</form>
  
    </div>
  )
}
