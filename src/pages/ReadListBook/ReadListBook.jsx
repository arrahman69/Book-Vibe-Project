import React from 'react';

const ReadListBook = ({readBook}) => {
      const  { bookName,author, image, rating, category, tags, publisher,yearOfPublishing,totalPages, } = readBook;
    
      
    
 const handleMarkAsRead = id=>{
  console.log(id);
  
 }


  return (
   
<div className="mt-10">
  <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 flex flex-col md:flex-row">
    {/* Book Cover */}
    <div className="md:w-1/3 flex justify-center items-center bg-gray-50 p-5">
      <img
        src={image}
        alt={bookName}
        className="rounded-lg shadow-md w-60 hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Book Info */}
    <div className="md:w-2/3 p-6 space-y-3">
      <h2 className="text-2xl font-bold text-gray-800">{bookName}</h2>
      <p className="text-lg text-gray-600">by <span className="font-medium text-indigo-600">{author}</span></p>
      <p className="text-sm text-gray-500 italic">{category}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        {tags?.map((tag, i) => (
          <span
            key={i}
            className="bg-indigo-100 text-indigo-600 px-3 py-1 text-xs rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      
   

      {/* Extra Info Grid */}
      <div className="grid grid-cols-2 gap-3 text-sm mt-4 text-gray-600">
        <p><span className="font-semibold">Total Pages:</span> {totalPages}</p>
        <p><span className="font-semibold">Publisher:</span> {publisher}</p>
        <p><span className="font-semibold">Published:</span> {yearOfPublishing}</p>
        <p><span className="font-semibold">Rating:</span> ⭐ {rating}</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => handleMarkAsRead(id)}
          className="bg-green-500 text-white px-5 py-2 rounded-lg shadow hover:bg-green-600 transition"
        >
          Mark as Read
        </button>
        <button className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-600 transition">
          Add to Wishlist
        </button>
      </div>
    </div>
  </div>
</div>


  
    );
};

export default ReadListBook;