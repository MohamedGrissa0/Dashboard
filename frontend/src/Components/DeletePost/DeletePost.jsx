import    axios  from 'axios'
import React, { useEffect } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'

export default function DeletePost() {
    const Navigate=useNavigate()
    const{id}=useParams()
    useEffect(() => {
       axios.delete("http://localhost:4000/api/place/delete/"+id).then(res=>{
        if(res.status===200){
           alert("successfully delete one post ")
            Navigate("/places")
        }else{
            alert("error ")
            Navigate("/places")
        }
       })
        
     
    }, [])
  return (
    <div>
      
    </div>
  )
}
