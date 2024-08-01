import { Link } from 'react-router-dom';
import { FcRating } from "react-icons/fc";


const Book = ({book}) => {
      const {id,image,tags,bookName,author,rating,category} = book;
    
    return (
        <div>
             <div className='p-4 '>
          <div className="card border-[3px] border-gray-200 shadow-xl ">
         <div>
        <figure className="px-10 pt-10 ">
        <Link to = {`/book/${id}`}>
        <img src = {image} alt='book' className='max-h-[300px] h-auto max-w-[300px] w-auto mt-3'/>
  </Link>
  </figure></div>
  <div className="card-body   ">
   <div className=' space-y-2'>
    <h2 className=" text-xl  text-green-600">{tags.map((hash,idx) =><span key={idx} ><a href='' className='bg-gray-100 input mr-4'>#{hash}</a></span>)}</h2>
    <p className='card-title text-2xl '>{bookName}</p>
    <h1 className='text-xl '>By : {author}</h1>
    <h1 className='border-b-2 text-black'></h1></div> 
  <div  className=' flex justify-between'>
  <div className=''><span className='text-xl  '>{category}</span></div>
  <div className='flex '><span><FcRating className='text-[25px] mr-1 mt-1'/></span> <span  className='text-xl '>{rating}</span></div>
    </div></div>
  </div>
  </div>
        </div>
    );
};

export default Book;