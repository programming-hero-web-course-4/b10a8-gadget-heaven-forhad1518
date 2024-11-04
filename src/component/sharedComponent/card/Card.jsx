import React from 'react';

const Card = ({ gedget }) => {
    const { product_image, product_title, price, product_id } = gedget;
    return (
        <div className='space-y-6 bg-white p-5 rounded-lg flex flex-col justify-between'>
            <div className=''>
                <img className='h-[200px] w-full object-cover rounded-lg bg-gray-400' src={product_image} alt="" />
            </div>
            <div className='space-y-6'>
                <h1 className='text-2xl font-bold'>{product_title}</h1>
                <p className='text-xl text-[#09080F99]'>Price: {price}K</p>
            </div>
            <div className='border-2 border-[#9538E2] rounded-full px-[20px] py-[10px] w-[120px] text-center'>
                <button className='text-lg text-[#9538E2] font-bold'>Details</button>
            </div>
        </div>
    );
};

export default Card;

/* 
    {
      "product_id": "LTP001",
      "product_title": "Dell XPS 13",
      "product_image": "https://i.ibb.co.com/pQ8wX5h/Dell-XPS-13-Plus-1.webp",
      "category": "laptops",
      "price": 1199.99,
      "description": "A powerful, lightweight laptop with stunning display.",
      "specifications": [
        "13.3-inch FHD display",
        "Intel Core i7",
        "16GB RAM",
        "512GB SSD",
        "Intel Iris Xe Graphics"
      ],
      "availability": true,
      "rating": 4.5,
      "color": "Silver",
      "release_date": "2023-05-10"
    },
*/