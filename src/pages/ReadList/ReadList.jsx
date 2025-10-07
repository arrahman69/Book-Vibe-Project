import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import Book from "../Book/Book";
import ReadListBook from "../ReadListBook/ReadListBook";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
const [sort, setSort]=useState("");

  const data = useLoaderData();
  

  useEffect(() => {
    const storedBookData = getStoredBook();
    const ConvertedStoredBooks = storedBookData.map((id) => parseInt(id));

    const myReadList = data.filter((book) =>
      ConvertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  const handleSort=(type)=>{
    setSort(type)
    if(type === "pages"){
 const  sortByPage=[...ReadList].sort((a,b)=>a.totalPages-b.totalPages);
 setReadList(sortByPage)
    }
    if(type === "ratings"){
 const sortByRating = [...ReadList].sort((a,b)=>a.rating - b.rating);
 setReadList(sortByRating)
    }
  }

  return (
    <div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          sort by :{sort? sort:""}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a onClick={()=>handleSort("pages")}>pages</a>
          </li>
          <li>
            <a onClick={()=>handleSort("ratings")}>ratings</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book I read {readList.length}</h2>

          {readList.map((readBook) => (
            <ReadListBook key={readBook.bookId} readBook={readBook}></ReadListBook>
          ))}
        </TabPanel>
        <TabPanel>
    
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
