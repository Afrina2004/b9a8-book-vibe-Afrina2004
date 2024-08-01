import { useState, useEffect } from "react";
import Book from '../Book/Book';




const BookCard = () => {
    const [books,setBooks] = useState([]);
      const [dataLength,setDataLength] = useState(3);

      useEffect( () =>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])

    return (
        <div>
            <div className='p-4'>
          <h2 className = 'text-5xl text-center p-2 font-bold'>All Books</h2> 
          <p className='text-2xl text-center p-2 mt-2' >Explore the literary classics that have captured the hearts and minds of readers globally

</p>
        <p className='text-center p-2 text-xl'></p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                books.slice(0, dataLength).map(book => <Book key={book.id} book={book}></Book>)
            }
          </div>
          <div className='items-center text-center'>
          <div className={ dataLength === books.length && 'hidden'}> 
            <button onClick={() =>setDataLength(books.length)}
            className='btn btn-info'>See All Books</button>
          </div></div>
          </div>
          
        </div>
    );
};

export default BookCard;