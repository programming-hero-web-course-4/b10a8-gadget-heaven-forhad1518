import React, { useContext } from 'react';
import { clickLocation, ContextGadgets } from '../root/Root';
import PostBlog from './PostBlog';
import Shared from '../sharedComponent/Shared';

const Blog = () => {
    const allGedgets = useContext(ContextGadgets);
    clickLocation()
    return (
        <div>
            <div className='bg-[#9538E2] p-[50px]'>
                <div className='text-center'>
                    <Shared title={"Loving Blog For You"} details={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></Shared>
                    <br />
                </div>
            </div>
            <div className='w-10/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    allGedgets.map(gedget => <PostBlog key={gedget.product_id} gedget={gedget}></PostBlog>)
                }
            </div>
        </div>
    );
};

export default Blog;