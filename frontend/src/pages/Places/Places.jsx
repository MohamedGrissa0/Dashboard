import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from'axios';
import CloseIcon from '@mui/icons-material/Close';
export default function Places() {
  const [data, setData] = useState([])
  
  const [isClick, setisClick] = useState(false);
  const [id, setid] = useState({});
  const [formValues, setFormValues] = useState({
    title:       '',
    location:    '',
    category:   '',
    description: '',
    images:     []
  });
console.log(id);
console.log(formValues)
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  
  
  
  const handleImageUpload = (event) => {
      
    const newImages = Array.from(event.target.files);
 
     setFormValues({ ...formValues, images: [...formValues.images, ...newImages] });
  

    
      };
  
  useEffect(() => {
    axios.get("http://localhost:4000/api/places").then(res=>{
      setData(res.data)
    }).catch(e=>{
      console.log(e)
    })
    
    
  }, [])
  console.log(formValues)
  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const formData = new FormData();

    formData.append('title', formValues.title);
    formData.append('location', formValues.location);
    formData.append('category', formValues.category);
    formData.append('description', formValues.description);
  
    for (let i = 0; i < formValues.images.length; i++) {
      formData.append('images', formValues.images[i]);
    }
    axios.post("http://localhost:4000/api/edit/"+id._id,formData).then(res=>{
     if(res.status===200){
      alert("sucess")
     }else{
      alert("fail")
     }
    }).catch(e=>{
      console.log(e)
    })
    
  }
  return (
    <div>
      
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
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr >
          <th scope="col" class="p-4">
           
          </th>
          <th scope="col" class="px-6 py-3">
           
          <span class=" flex justify-center">Title</span>  
          </th>
          <th scope="col" class="px-6 py-3">
           
          <span class=" flex justify-center">Location</span>  
          </th>
          <th scope="col" class="px-6 mx-auto    py-3">
           
          <span class=" flex justify-center">Description</span>  
          </th>
          <th scope="col" class="px-6 py-3">
           
          <span class=" flex justify-center">Reviews</span> 
          </th>
         
          <th scope="col" class="px-6  flex justify-center py-3">
            <span class="">View Reviews</span>
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
          data.map(d=>(
            <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
              
            </td>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
             <span className=' flex justify-center '>{d.title}</span>
            </th>
            <td class="px-6 py-4">
            <span className=' flex justify-center '><a className='text-blue-600 font-semibold' target='_blank' href={d.location}>View Location</a></span>   
           
            </td>
            <td class="px-6 py-4">
              
            <span className=' flex justify-center '>{d.description}</span>   
            </td>
            <td class="px-6 py-4">
              
            <span className=' flex justify-center '>{d.REVIEWS}</span>   
            </td>
            <td class="px-6 py-4 text-right">
            <a href={"/reviews/"+d._id} class="font-medium flex justify-center  text-blue-600 dark:text-blue-500 hover:underline">View</a>
          
                </td>
            <td class="px-6 py-4 items-center">
           
              <button onClick={()=>{setisClick(!isClick);setid(d);setFormValues(d)}} class="font-medium text-blue-600 dark:text-blue-500 ">Edit</button>
            </td>
            <td class="px-6 py-4  text-right">
           
           <a href={"/place/delete/"+d._id} class="font-medium flex justify-center text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
         </td>
          </tr>
        
          ))
        }
       
      </tbody>
    </table>
  </div>
  </div>
  
  
  
  
  
  <div  className={isClick?'fixed -top-4 left-[20%] shadow-2xl rounded-2xl':"hidden"}>
      
      <section class="max-w-4xl p-6 mx-auto bg-gray-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
       <div className="flex items-center justify-between"> <h1 class="text-xl font-bold text-white capitalize dark:text-white">Add new place</h1>
       <CloseIcon  onClick={()=>{setisClick(false)}}   className="text-tomato cursor-pointer"  />
       
        </div>  
        
              <form onSubmit={handleSubmit}   encType="multipart/form-data">
              <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                      <label class="text-white dark:text-gray-200" for="Title">Title</label> 
          
                      <input id="Title" required name="title" type="text"value={formValues.title?formValues.title:id.title}   onChange={handleInputChange} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring"></input>
                  </div>
      
                
      
                 
      
                  <div>
                      <label class="text-white dark:text-gray-200" for="location">Location</label>
                      <input id="location" required type="url"  value={formValues.location}             onChange={handleInputChange} name="location" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring"/>
                  </div>
                 
                  <div>
                      <label  class="text-white dark:text-gray-200" for="passwordConfirmation">Category</label>
                      <select  name="category"   onChange={handleInputChange}value={formValues.category} required class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring">
                          <option value="">Select a category</option>
                          <option value="restaurant">Restaurant</option>
                          <option value='mall'>Mall</option>
                          <option value="amusement park">Amusement park</option>
                          <option value="hotel">Hotel</option>
                          <option value="cafe">Cafe</option>
                      </select>
                  </div>
                 <div>
                      <label class="text-white dark:text-gray-200" for="passwordConfirmation">Description</label>
                      <textarea                 onChange={handleInputChange}   value={formValues.description} name="description" id="textarea" type="textarea" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring">{formValues.description}</textarea>
                  </div>
                  
                  
                   <div>
                      <label class="block text-sm font-medium text-white">
                      Image
                    </label>
                    <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div class="space-y-1 text-center">
                        <svg class="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div class="flex text-sm text-gray-600">
                          <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-gray-600 hover:text-gray-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-500" >
                            <span class="p-[10px] ">Upload a file</span>
                            <input id="file-upload" multiple  onChange={handleImageUpload}  name="file-upload" type="file" class="sr-only" />
                          </label>
                          <p class="pl-1 text-white">or drag and drop</p>
                        </div>
                        <p class="text-xs text-white">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                  {formValues.images &&
            Array.from(formValues.images).map((image, index) => {
              let imageUrlObject 
              
              if (image instanceof File) {
                // The image is a file, so it's not a URL yet
                 imageUrlObject = URL.createObjectURL(image);
              } else{
                   imageUrlObject=  `http://localhost:4000/${image}`;
              }
              
              return( <img className="rounded-3xl w-28" key={index} src={imageUrlObject} alt="" />
           )
                  })} </div>
                  
                 
              </div>
      
              <div class="flex justify-center mt-6">
                  <button  class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-600">Save</button>
              </div>
          </form>
      </section>
      
          </div>
  
    </div>
  )
}
