import React from 'react';
import bookimage from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className='flex justify-around items-center p-16 w-full'>
            <div><h1>Books to freshen up <br />
                 your bookshelf</h1></div>
                 <button className='btn btn-primary'>tger</button>
            <div>
                <img className='w-3/12' src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;