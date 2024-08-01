import {Link} from 'react-router-dom';
import bannerPic from '../../assets/pic.jpeg'


const Banner = () => {
 
return (
  <div className='mt-10 p-8'>
  <div className="card card-side bg-yellow-100 justify-center space-y-2 p-4">
  <div className=" flex space-x-2">
    <div>
    <h2 className="card-title  text-6xl flex flex-col font-extrabold mt-10 p-2"><span className='p-4'>Books to freshen up</span> <span className='p-4'> your bookshelf </span></h2>
   <p className='text-2xl'>Explore the literary classics that have captured the hearts and minds of readers globally</p>
    <div className="card-actions mt-10 justify-center ">
  <Link to='/books'> <button className="btn btn-accent text-xl">View The List</button></Link>
    </div></div>
    <div></div>
       <img src={bannerPic} alt="Movie"  className='max-h-[600px] h-auto max-w-[600px] w-auto p-4'/>
  </div></div> 
  


        </div>
    );
};

export default Banner;