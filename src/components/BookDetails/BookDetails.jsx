import { useLoaderData } from 'react-router-dom';
import  {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const BookDetails = () => {
    const books = useLoaderData();
    const navigate = useNavigate();
    navigate(-1);
 const {id} = useParams();
const idInt = parseInt(id);
 const book = books.find (book => book.id === idInt)
  console.log(book);
   


  const handleRead = () =>{
    let readBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
    let wishlistBooks = JSON.parse(localStorage.getItem('wishlistBooks')) || [];

    if (wishlistBooks.some(b => b.id === book.id)) {
        toast.success("Book added to your Read list!");
    } else if (readBooks.some(b => b.id === book.id)) {
        toast.info("This book is already in your Read list!");
    } else {
        readBooks.push(book);
        localStorage.setItem('readBooks', JSON.stringify(readBooks));
        toast.success("Book added to your Read list.");
    }
   };

  const handleWishlist = () =>{
    let wishlistBooks = JSON.parse(localStorage.getItem('wishlistBooks')) || [];
        let readBooks = JSON.parse(localStorage.getItem('readBooks')) || [];

        if (readBooks.some(b => b.id === book.id)) {
            toast.error("You have already read this book!");
        } else if (wishlistBooks.some(b => b.id === book.id)) {
            toast.info("This book is already in your Wishlist!");
        } else {
            wishlistBooks.push(book);
            localStorage.setItem('wishlistBooks', JSON.stringify(wishlistBooks));
            toast.success("Book added to your Wishlist.");
        }
   };
  
  
  
  return (
        <div>
            <div className='p-8'>
           <div className="card card-side border-[3px] shadow-xl  mr-6 ">
  <div className='mr-4 mt-10 ml-4'><figure >
     <img 
      src={book.image}
      alt="Book"
      className='max-h-[600px] h-auto max-w-[600px] w-auto mr-4'/>
   
  </figure></div>
  <div className="card-body ">
    <div className='space-y-4'>
    <h2 className="card-title text-5xl font-bold ">{book.bookName}</h2>
    <p className='font-bold  text-2xl'>By: {book.author}</p>
    <p className='border-b-4 '></p>
   </div>
   <div className='space-y-4'>
   <p className='text-2xl'> {book.category}</p>
   <p className='border-b-2'></p>
   <p className='p-2 text-2xl'> <span className='font-bold text-2xl'>Review: </span>{book.review}</p>
   <p className='space-x-4 p-2'><span className='font-bold text-2xl'>Tags :</span><span>{book.tags.map((hash,idx) =><span key={idx} ><a href='' className='bg-gray-100 input text-green-600 mr-4'>#{hash}</a></span>)}</span></p>
   <p className='border-b-2'></p>
   <div className="overflow-x-auto">
  <table className="table text-2xl">
    <tbody>
    <tr>
    <td>Number of Pages</td>
    <td className='font-bold'>: {book.totalPages}</td>
      </tr> 
   <tr>
     <td>Publisher</td>
   <td className='font-bold'>: {book.publisher}</td> 
        </tr>
       <tr>
        <td>Year of Publishing</td>
        <td className='font-bold'>: {book.yearOfPublishing}</td> 
        </tr>
  <tr>
        <td>Rating</td>
        <td className='font-bold'>: {book.rating} </td>
         </tr>
   </tbody>
  </table></div> </div>
   <div>
    <span><button onClick={handleRead } className='btn btn-info bg-gray-300 mr-4'>Read</button></span>
    <span><button onClick={handleWishlist } className='btn btn-accent mr-4 '>Wishlist</button></span>
   </div>
   </div>
</div></div>
<div className=''>
    <Link to='/'> <a className='link link-primary p-8'> Go Back</a></Link>
    
    </div> 
    <ToastContainer />
     </div> 
    );
};

export default BookDetails;