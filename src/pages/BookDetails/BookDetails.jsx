import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
   const data = useLoaderData(); 
   const singleBook=data.find(book=>book.bookId===bookId);
   const { bookName, image } = singleBook;
 
 const handleMark
    
   return (
        <div className='w-2/3 mx-auto'>
           <img className='w-48' src={image} alt="" />
           <h5>{bookName}</h5>
           <button className="btn btn-outline btn-accent m-">Read</button>
<button className="btn btn-outline btn-info m-3">WishList</button>
        </div>
    );
};

export default BookDetails;