
import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog , handleAddToBookmark, handleMarkAsRead}) => {
    const { id, title , cover, reading_time, author, posted_date, author_img , hash_tags } = blog;
    return (
        <div className='my-20 space-y-4'>
            <img className='w-full mb-6' src={cover} alt={` cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex gap-2 p-3'>
                    <img className='w-12' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'> {author} </h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button 
                    onClick={ () => handleAddToBookmark(blog)}
                    className='ml-2 text-2xl text-red-500'> <FaBookmark></FaBookmark> </button>
                </div>
            </div>
            
            
            <h3 className="text-4xl">{title}</h3>
            <p> 
               {
                hash_tags.map((hash,idx) => <span key={idx}> <a href=""> {hash}</a> </span> )
               } 
             </p>
             <button onClick={ () => handleMarkAsRead( id, reading_time)  }
             className='text-purple-500 font-bold underline'>Mark as read</button>
        </div>
        
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired ,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func
}

export default Blog;