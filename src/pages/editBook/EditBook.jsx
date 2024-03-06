import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditBook = () => {
  const {id} = useParams()
  console.log(id)
  const navigate = useNavigate()
const [data,setData] = useState({
  bookName : '',
  bookPrice : '',
  isbnNumber : null,
  authorName : '',
  publishedAt : '',
  publication : '',
})
const [image,setImage] = useState(null)

const handleChange = (e)=>{
  const {name,value} = e.target
  setData({
    ...data,
    [name] : value
  })

}

const handleSubmit = async (e)=>{
  e.preventDefault()
  const formData = new FormData()
  
  Object.entries(data).forEach(([key,value])=>{
    formData.append(key,value)
  })
  formData.append('image',image)

  const response = await axios.patch("https://mern2-0-basicnode.onrender.com/book/" + id,formData)
  if(response.status === 200){
    navigate("/book/" + id)
  }else{
    alert("Something went wrong")
  }

}


const fetchBook = async()=>{
 const response = await axios.get("https://mern2-0-basicnode.onrender.com/book/" + id)
 if(response.status === 200){
  console.log(response.data.data)
    setData(response.data.data)
 }
}
useEffect(()=>{
  fetchBook()
},[])

  return (
    <>
    <Navbar />
    <div class="bg-white rounded-lg shadow-md p-8 w-full mx-auto my-16 max-w-md">
        <h2 class="text-2xl font-semibold text-blue-600 mb-6">Edit Book</h2>
        <form onSubmit={handleSubmit}>
            <div class="mb-4">
                <label htmlFor="bookName" class="block text-sm font-medium text-gray-600">Book Name</label>
                <input type="text" id="bookName" value={data.bookName} name="bookName" class="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={handleChange} />
            </div>
            <div class="mb-4">
                <label htmlFor="bookPrice" class="block text-sm font-medium text-gray-600">bookPrice</label>
                <input type="number" id="bookPrice" name="bookPrice" class="mt-1 p-2 w-full border rounded-md text-gray-800" value={data.bookPrice} onChange={handleChange} />
            </div>
            <div class="mb-4">
                <label htmlFor="isbnNumber" class="block text-sm font-medium text-gray-600">isbnNumber</label>
                <input type="number" id="isbnNumber" name="isbnNumber" class="mt-1 p-2 w-full border rounded-md text-gray-800" value={data.isbnNumber} onChange={handleChange} />
            </div>
            <div class="mb-4">
                <label htmlFor="authorName" class="block text-sm font-medium text-gray-600">authorName</label>
                <input type="text" id="authorName" name="authorName" class="mt-1 p-2 w-full border rounded-md text-gray-800" value={data.authorName} onChange={handleChange} />
            </div>
            <div class="mb-4">
                <label htmlFor="publication" class="block text-sm font-medium text-gray-600">publication</label>
                <input type="number"  id="publication" name="publication" class="mt-1 p-2 w-full border rounded-md text-gray-800" value={data.publication} onChange={handleChange} />
            </div>
            <div class="mb-4">
                <label htmlFor="publishedAt" class="block text-sm font-medium text-gray-600">publishedAt</label>
                <input type="date" id="publishedAt" name="publishedAt" class="mt-1 p-2 w-full border rounded-md text-gray-800" value={data.publishedAt} onChange={handleChange} />
            </div>
            <div class="mb-6">
                <label htmlFor="bookImage" class="block text-sm font-medium text-gray-600">Book Image</label>
                <input type="file" id="bookImage" name="image" class="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={(e)=>setImage(e.target.files[0])} />
            </div>
            <button type="submit" class="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Edit Book</button>
        </form>
    </div>
    </>
  )
}

export default EditBook