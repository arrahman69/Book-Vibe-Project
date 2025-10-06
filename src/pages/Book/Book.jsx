import React  from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({singleBook}) => {
    // const data = use(bookPromise);
    // console.log(data);
    
const{bookName,bookId,image,rating,category,tags,publisher } = singleBook;

    return (
  <Link to={`/BookDetails/${bookId}`}>
    <div className="card bg-base-100 w-96 shadow-sm border p-4 ">
  <figure className=' bg-[#cff2fb9b] 
 h-[230px] w-[100%] mx-auto'>
    <img className='h-[166px] w-[120px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
<div className='flex justify-center gap-13 bg-[#cff2fb9b] rounded-2xl'>
     {
        tags.map((tag,index)=>(<button key={index}>{tag}</button>))
    }
    </div>
   
    <h2 className="card-title justify-center items-center">
     {bookName}
      <div className=''></div>
    </h2>
    <p className='justify-center items-center flex'>Book by : {publisher}</p>
    <div className='border-t-1 border-dashed '></div>
    <div className="card-actions justify-between ">
      <div className="badge badge-outline ">{category}</div>
      <div className="badge badge-outline">{rating}<FaStarHalfAlt /></div>
    </div>
  </div>
</div>
</Link>
    );
};

export default Book;