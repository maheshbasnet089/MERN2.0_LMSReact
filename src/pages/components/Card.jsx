import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Card = ({book}) => {


  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg my-10" key={book._id}>
  <img class="w-full" src={book.imageUrl ? book.imageUrl : "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709251200&semt=sph"} alt="Sunset in the mountains" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{book.bookName}</div>
    <p class="text-gray-700 text-base">
      Rs. {book.bookPrice}
    </p>
    <p class="text-black-700 text-base">
       {book.isbnNumber}
    </p>
    <Link to={`/book/${book._id}`}>See More </Link>
  </div>
</div>
  )
}

export default Card