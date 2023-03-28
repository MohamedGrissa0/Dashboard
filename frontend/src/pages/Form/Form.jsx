import  axios  from 'axios';
import React, { useState } from 'react'

export default function Form() {
 
    const [formValues, setFormValues] = useState({
      title:  "",
      location: "",
      locationString: "",
      category: "",
      description: "",
      images:[]
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormValues({ ...formValues, [name]: value });
    };
    
  
    
    const handleImageUpload = (event) => {
      
      const newImages = Array.from(event.target.files);
 
       setFormValues({ ...formValues, images: [...formValues.images, ...newImages] });
    
      
      
      
        };
    console.log(formValues)
    const handleSubmit = async (e)=>{
      e.preventDefault();
      const formData = new FormData();

      formData.append('title', formValues.title);
      formData.append('location', formValues.location);
      formData.append('category', formValues.category);
      formData.append('description', formValues.description);
      formData.append('locationString', formValues.locationString);
      for (let i = 0; i < formValues.images.length; i++) {
        formData.append('images', formValues.images[i]);
      }
      axios.post("http://localhost:4000/api/form",formData).then(res=>{
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
      
<section class="max-w-4xl p-6 mx-auto bg-gray-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
    <h1 class="text-xl font-bold text-white capitalize dark:text-white">Add new place</h1>
    <form onSubmit={handleSubmit }  encType="multipart/form-data">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label class="text-white dark:text-gray-200" for="Title">Title</label>
                <input value={formValues.title}   onChange={handleInputChange} id="Title" required name="title" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label class="text-white dark:text-gray-200" for="Title">locationString</label>
                <input value={formValues.locationString}   onChange={handleInputChange} id="locationString" required name="locationString" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring"/>
            </div>

           

            <div>
                <label class="text-white dark:text-gray-200" for="location">Location</label>
                <input id="location" value={formValues.location}  onChange={handleInputChange}  required type="url" name="location" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring"/>
            </div>
           
            <div>
                <label  class="text-white dark:text-gray-200" for="passwordConfirmation">Category</label>
                <select name="category" onChange={handleInputChange} value={formValues.category}  required class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring">
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
                <textarea     onChange={handleInputChange}   value={formValues.description}  name="description" id="textarea" type="textarea" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring"></textarea>
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
                      <input id="file-upload" onClick={()=>{ if(formValues.images.length===3){setFormValues({ ...formValues, images: [] });}}}  multiple onChange={handleImageUpload}  name="file-upload" type="file" class="sr-only" />
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
              imageUrlObject=  image;
            }
            
           return( <img className="rounded-3xl w-40" key={index} src={imageUrlObject} alt="" />
       )})} </div>
            
           
        </div>

        <div class="flex justify-center mt-6">
            <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
    </form>
</section>

    </div>
  )
}
