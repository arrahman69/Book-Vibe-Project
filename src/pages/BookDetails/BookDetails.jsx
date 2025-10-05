import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
 import { ToastContainer, toast } from 'react-toastify';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
   const data = useLoaderData(); 
   const singleBook=data.find(book=>book.bookId===bookId);
   const { bookName, image } = singleBook;

 const handleMarkAsRead =id=> {


// MySwal.fire({
//   title: "Good job!",
//   text: "You clicked the button!",
//   icon: "success"
// });

 toast("Add to Read Item");

    addToStoreDB(id)
 }
    
   return (
        <div className='w-2/3 mx-auto'>
           <img className='w-48' src={image} alt="" />
           <h5 className='font-bold'>{bookName}</h5>
               <ToastContainer />
           <button onClick={()=>handleMarkAsRead(id)} className="btn btn-outline btn-accent m-2">Read</button>
<button className="btn btn-outline btn-info m-3">WishList</button>
        </div>
    );
};

export default BookDetails;