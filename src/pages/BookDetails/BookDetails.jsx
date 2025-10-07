import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoreDB, getStoredBook } from "../../utility/addToDB";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
import { ToastContainer } from "react-toastify";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const {
    bookName,
    image,
    review,
    author,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = singleBook;

  const handleMarkAsRead = (id) => {
   

    MySwal.fire({
      title: "Added Successfully!",
      text: "Added to your reading lis",
      icon: "success",
    });

    //  toast("Add to Read Item");
 const readList = getStoredBook() || [];
    const exixt = readList.find((item) => item == id);
    if (exixt) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      return;
    }
    addToStoreDB(id);
  };

  return (
    <div className=" mx-auto ">
      {/* ---------- Fancy Card Design Like  Image ---------- */}
      <div className="mt-10 bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-200 flex flex-col md:flex-row p-8 md:p-10 gap-8 my-10">
        {/* Left Side - Cover + Buttons */}
        <div className="flex flex-col items-center justify-start gap-5 md:w-1/3">
          <div className="bg-gray-100 text-white w-48 h-64 flex items-center justify-center text-lg font-semibold rounded-xl shadow-md">
            <img className="w-48 h-full object-cover" src={image} alt="" />
          </div>

          <button
            onClick={() => handleMarkAsRead(id)}
            className="w-48 flex items-center justify-center gap-2 mt-5 bg-indigo-600 text-white py-2.5 rounded-full font-medium hover:bg-indigo-700 transition shadow-md"
          >
            <span>📖</span> Mark as Read
          </button>

          <button className="w-48 flex items-center justify-center gap-5 border border-indigo-400 text-indigo-600 py-2.5 rounded-full font-medium hover:bg-indigo-50 transition">
            <span>⭐</span> Add to WishList
          </button>
        </div>

        {/* Right Side - Book Info */}
        <div className="md:w-2/3 space-y-5">
          {/* Title and Author */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              {bookName}
            </h2>
            <p className="text-indigo-700 text-lg font-medium mt-1">{author}</p>
          </div>

          {/* Review Section */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold text-gray-800 mb-1">Review Summary</h3>
            <p className="text-gray-600 italic text-sm leading-relaxed">
              {review}{" "}
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm flex-3">
            <div className="flex items-center gap-2 bg-purple-50 rounded-lg px-3 py-2">
              <span className="text-purple-600">🏷️</span>
              <p>
                <span className="font-medium"></span> {category}
              </p>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2">
              <span className="text-blue-600">📘</span>
              <p>
                <span className="font-medium"></span> {totalPages}
              </p>
            </div>
            <div className="flex items-center gap-2 bg-yellow-50 rounded-lg px-3 py-2">
              <span className="text-yellow-600">🏢</span>
              <p>
                <span className="font-medium"></span> {publisher}
              </p>
            </div>
            <div className="flex items-center gap-2 bg-green-50 rounded-lg px-3 py-2">
              <span className="text-green-600">📅</span>
              <p>
                <span className="font-medium"></span> {yearOfPublishing}
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 bg-pink-50 rounded-lg px-3 py-2 inline-block">
            <span className="text-pink-600">⭐</span>
            <p className="font-medium text-gray-700">
              {" "}
              <span className="text-pink-600 font-semibold">{rating}</span>
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {tags?.map((tag, i) => (
              <span
                key={i}
                className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* ---------- End Fancy Card Design ---------- */}

      <ToastContainer />
    </div>
  );
};

export default BookDetails;
