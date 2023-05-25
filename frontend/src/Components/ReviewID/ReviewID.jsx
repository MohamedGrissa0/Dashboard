import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ReviewID() {
  const [resvalue, setResults] = useState({})
  const [query, setquery] = useState()
  const [data, setData] = useState([{}])

  const [formValues, setFormValues] = useState({
    id:"",
  comments:  "",
    rate: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredData = data.filter((review) =>
      review.comments.toLowerCase().includes(query.toLowerCase())
    );
    console.log(filteredData)
    setResults(filteredData);
  };
  
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/reviews/" + id);
        setData(response.data);
        console.log(response.data);
        setloading(false);
      } catch (error) {
        setloading(true);
        setData(resvalue);
        console.log(error);
      }
    };
  
    fetchData();
  }, []);
  
    const [isclicked, setisclicked] = useState(false)
    const [isDone , setisDone] = useState(false)
    const [isUpdateDone , setUpdateisDone] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [ID,setID] = useState({}) 
    const [loading, setloading] = useState(true)
    const {id}=useParams()
console.log(data) ;     console.log(ID)
   

    const handleUpdate = async (e) => {
        e.preventDefault();
   
        try {
          await axios.put(`http://localhost:4000/api/reviews/${ID._id}`, {
            comments: formValues.comments ? formValues.comments : ID.comments,
            rate: formValues.rate ? formValues.rate : ID.rate, 
          });
          console.log(`Updated successfully.`);
          setUpdateisDone(true); 
          window.location.reload();
        } catch (error) {
          console.error(`Error updating review: ${error}`); 
        }
      };



      const handleDelete = async (item) => {
        console.log(item);
        try {
          await axios.delete(`http://localhost:4000/api/reviews/${item._id}`);
          console.log(`Review with ID ${item._id} deleted successfully.`);
          window.location.reload()
        } catch (error) {
          console.error(`Error deleting review with ID ${item._id}: ${error}`);
        }
      };




return (
<div>
  {isUpdateDone && (
<div className="bg-teal-100 flex items-center justify-center border-t-4 w-[180px] md:w-[360px] text-center lg:w-[600px] xl:w-[600px] absolute z-999 top-[50%] left-[25%] border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
<div className="flex justify-center items-center">
  <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
  <div>
    <p className="font-bold">Review has been Updating Successfully</p>
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
    
  </div>
  <form onSubmit={handleSubmit}>
  <input
  type="text"
  placeholder="Search..."
  value={query}
  onChange={(e) => setquery(e.target.value)}
  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
/>
      <button type="submit">Search</button>
    </form> </div>
</div>
{!loading && <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
    <tr >
     
      
      <th scope="col" class="px-6 py-3">
       
      <span class=" flex justify-center">Usename</span>  
      </th>
      <th scope="col" class="px-6 mx-auto    py-3">
       
      <span class=" flex justify-center">Comment</span>  
      </th>
      <th scope="col" class="px-6 mx-auto    py-3">
       
       <span class=" flex justify-center">Rate</span>  
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
    
  {resvalue.length > 0 ?
  resvalue.map((item) => (
    <tr
      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td class="px-6 py-4">
        <span className=' flex justify-center' style={{ wordWrap: "break-word" }}>{item.username}</span>
      </td>
      <td class="px-6 py-4">
        <span className=' flex justify-center' style={{ wordWrap: "break-word" }}>{item.comments}</span>
      </td>
      <td class="px-6 py-4">
        <span className=' flex justify-center' style={{ wordWrap: "break-word" }}>{item.rate}</span>
      </td>
      <td class="px-6 py-4 self-center flex justify-center text-right">
        <button
          className="update-btn flex justify-center items-center"
          onClick={() => { setisclicked(!isclicked); setID(item); console.log(ID) }}>
          <span className="btn-text bg-blue-500 text-white px-4 py-2 rounded-full md:px-6 md:py-3 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent">
            Edit
          </span>
        </button>
      </td>
      <td class="px-6 py-4 text-right">
        <button className="delete-btn flex justify-center items-center">
          <span onClick={() => { handleDelete(item);  }} className="btn-text bg-blue-500 text-white px-4 py-2 rounded-full md:px-6 md:py-3 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent">
            Delete
          </span>
        </button>
      </td>
    </tr>
  ))
  :  data.map((item)=>(
        <tr
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      
        
        <td class="px-6 py-4">
          
          <span className=' flex justify-center'                   style={{ wordWrap: "break-word" }}
>{item.username}</span>   
          </td>
        <td class="px-6 py-4">
          
        <span className=' flex justify-center'                   style={{ wordWrap: "break-word" }}
>{item.comments}</span>   
        </td>
        <td class="px-6 py-4">
          
          <span className=' flex justify-center'                   style={{ wordWrap: "break-word" }}
>{item.rate}</span>   
          </td>
        
        
        <td class="px-6 py-4    self-center flex justify-center text-right">
       
        <button
              className="update-btn flex justify-center items-center"
              onClick={()=>{setisclicked(!isclicked);setID(item);console.log(ID)}}
            >
              <span className="btn-text bg-blue-500 text-white px-4 py-2 rounded-full md:px-6 md:py-3 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                Edit
              </span>
            </button>            </td>
        <td class="px-6 py-4  text-right self-center  text-center text-right ">
       
        <button className="delete-btn flex justify-center items-center">
        <span onClick={() => { handleDelete(item); console.log(item); }} className="btn-text bg-blue-500 text-white px-4 py-2 rounded-full md:px-6 md:py-3 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent">
  Delete
</span>

            </button>         </td>
      </tr>
    
      ))
    }
   
  </tbody>
</table>}
</div>
</div>





<form onSubmit={handleUpdate} className={isclicked ? "p-3 fixed  top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-999 bg-white rounded-lg shadow-xl w-11/12 md:w-2/3 lg:w-1/2" : "hidden"}>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-3">
<div className="relative flex flex-col justify-between">
  <label htmlFor="name" className="block font-bold mb-2">
    <i className="fas fa-user mr-2 "></i>
    <span className="">Comment : </span>
  </label>
  <input type="text" id="comments" name="comments" onChange={handleInputChange} value={formValues.comments?formValues.comments:ID.comments} placeholder="Enter your Comment" className="block w-full border-2 border-gray-400 rounded-lg bg-transparent text-gray-700 py-2 px-4 md:py-3 md:px-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
</div>

<div className="relative flex flex-col justify-between">
  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
    <i className="fas fa-envelope mr-2 text-blue-500"></i>
    <span className="">Rate :</span>
  </label>
  <input type="text" id="rate" name="rate" onChange={handleInputChange} value={formValues.rate?formValues.rate:ID.rate} placeholder="Enter your Rate" className="block w-full border-2 border-gray-400 rounded-lg bg-transparent text-gray-700 py-2 px-4 md:py-3 md:px-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
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