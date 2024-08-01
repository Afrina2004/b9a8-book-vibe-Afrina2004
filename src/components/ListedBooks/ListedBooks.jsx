import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiFileSearchFill } from "react-icons/ri";
import { TiLocationOutline } from "react-icons/ti";
import { VscAccount } from "react-icons/vsc";


const ListedBooks = () => {

  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [activeTab, setActiveTab] = useState('read');
  const [sortKey, setSortKey] = useState('rating');

  useEffect(() => {
    const storedReadBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
    const storedWishlistBooks = JSON.parse(localStorage.getItem('wishlistBooks')) || [];
    setReadBooks(storedReadBooks);
    setWishlistBooks(storedWishlistBooks);
  }, []);
  const handleSort = (key) => {
    setSortKey(key);
    const sortFunc = (a, b) => {
      if (key === 'sortBy') return b.sortBy - a.sortBy;
      if (key === 'rating') return b.rating - a.rating;
      if (key === 'totalPages') return b.totalPages - a.totalPages;
      if (key === 'yearOfPublishing') return b.yearOfPublishing - a.yearOfPublishing;
      return 0;
    };
    setReadBooks([...readBooks].sort(sortFunc));
    setWishlistBooks([...wishlistBooks].sort(sortFunc));
  };

  const booksToShow = activeTab === 'read' ? readBooks : wishlistBooks;


    return (
        <div>
          <div className='p-'>
      <h1 className='text-5xl text-center text-blue-900  p-8  font-bold'>Listed Books</h1>
      <div className='flex justify-between  items-center p-4'>
        <div role="tablist" className="tabs tabs-lifted ">
          <button
            className={`tab ${activeTab === 'read' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('read')}
          >
            Read Books
          </button>
          <button
            className={`tab ${activeTab === 'wishlist' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('wishlist')}
          >
            Wishlist Books
          </button>
        </div>
        <select onChange={(e) => handleSort(e.target.value)} className='select select-bordered'>
        <option value="sortBy">sort By</option>
          <option value="rating"> Rating</option>
          <option value="totalPages"> Number of Pages</option>
          <option value="yearOfPublishing"> Published Year</option>
        </select>
      </div>
      <div className='space-y-6 p-4'>
        {booksToShow.map(book => (
          <div key={book.id} className='card card-side bg-base-100 border-[3px] shadow-xl'>
         <div><figure><img src={book.image} alt={book.bookName} className='max-h-[500px]  h-auto max-w-[500px] w-auto  rounded-2xl mt-4 ' /></figure></div>
            <div className='card-body'>
              <div className='space-y-6'>
              <h2 className='text-5xl font-bold '>{book.bookName}</h2>
              <p className='text-2xl'>By: <span className='font-bold'> {book.author}</span></p>
              <p className='text-2xl'>Tags: <span>{book.tags.map((hash,idx) =><span key={idx} ><a href='' className='bg-gray-200 input text-green-600 mr-4'>#{hash}</a></span>)}</span></p>
             <div className='overflow-x-auto'>
              <table className='table text-2xl'>
                <tbody>
                  <tr>
                    <td><p className='flex '><span><RiFileSearchFill className='text-[33px]'/></span><span className='text-2xl'>Total Pages: {book.totalPages}</span></p></td>
                  </tr>
                  <tr>
                    <td><p className='flex '><VscAccount  className='text-[33px] mr-1' /> <span  className='text-2xl'> Publisher: {book.publisher}</span></p></td>
                    <td> <p className='flex '> <TiLocationOutline className='text-[33px]'/><span  className='text-2xl'>Year of Publishing: {book.yearOfPublishing}</span>  </p></td>
                  </tr>
             <tr >
              <td> <span className='border-[2px]  bg-blue-100 rounded-2xl w-[270px] justify-center text-center text-blue-600  h-[40px] flex mt-4'><span className='mr-1'>Category:</span><span> {book.category}</span></span></td>
             <td><span className='border-[2px] bg-orange-100 rounded-2xl w-[130px] justify-center text-center  h-[40px] flex  text-orange-600 mt-4'><span className='mr-1'>Rating:</span><span>{book.rating}</span> </span></td>
             </tr>
           <tr>  <td><Link to={`/book/${book.id}`}><button className='btn btn-accent bg-green-400 '>View Details</button></Link></td>
             </tr>

             
              </tbody> </table> </div> </div> </div></div>

        ))}
      </div>
    </div>
 </div>
    );
};

export default ListedBooks;