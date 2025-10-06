import React from 'react';
import image5 from '../../assets/images5.jpg'
const Banner = () => {
    return (
    <div className="hero bg-gradient-to-r from-sky-100 to-pink-100 w-[1170px] h-[554px] rounded-[24px] m-[45px] ml-2">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img 
     className=" w-80 ml-30 max-w-sm rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
      src={image5}
     
    />
    <div>
      <h1 className="text-5xl font-bold mr-15 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-purple-500">Books to freshen up <br /> your bookshelf</h1>

      <p className="py-6">
   
      </p>
     <button className="btn btn-success w-50">View the List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;