const CartProduct = ({ cart, handleDeletItem, index }) => {
    const { product_title, product_image, description, price } = cart;
    return (
        <div className='bg-white rounded-xl p-4'>
            <div className="flex justify-between">
                <div className="flex gap-4 items-center">
                    <div>
                        <img className="h-[120px] rounded-xl object-cover" src={product_image} alt="" />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-xl font-bold">{product_title}</h3>
                        <p className="text-gray-500">{description}</p>
                        <p>Price: {price}K</p>
                    </div>
                </div>
                
                <div>
                    <button onClick={() => handleDeletItem(index, price)}><i className="fa-regular fa-circle-xmark text-red-600 text-2xl"></i></button>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default CartProduct;


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