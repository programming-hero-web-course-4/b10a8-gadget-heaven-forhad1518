import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';


const PostBlog = ({ gedget }) => {
    const [, , handleWishBtn] = useOutletContext()
    const { product_image, product_title, product_id } = gedget;
    return (
        <div className='mt-[20px]'>
            <div className='space-y-6 bg-white p-5 rounded-lg flex flex-col justify-between'>
                <div>
                    <img className='w-full h-[200px] object-cover rounded-lg bg-gray-400' src={product_image} alt="" />
                </div>
                <div className='space-y-6'>
                    <h1 className='text-2xl font-bold'>{product_title}</h1>
                    
                </div>
                <div className='space-x-2'>
                    <Link to={`/product/details/${product_id}`} className='text-lg text-[#9538E2] font-bold border-2 border-[#9538E2] rounded-full px-3 py-[6px] w-[120px] text-center'>Details</Link>
                    <button onClick={() => handleWishBtn(product_id)} className="font-bold text-white bg-[#9538E2] rounded-full py-1 px-3 text-center">
                    Wish list <i className="fa-solid fa-heart text-xl"></i></button>
                </div>
                <div>
                    <p className=''>Nostrum magnam rerum at vero praesentium ducimus, natus eum repudiandae quos consequuntur ratione est? Fugit consectetur tempore, sint officia debitis quibusdam exercitationem? Dolores iste quod culpa nobis labore, molestias fugiat architecto quibusdam exercitationem nesciunt nihil odit deserunt cumque voluptatem.</p>
                </div>
            </div>
        </div>
    );
};

export default PostBlog;