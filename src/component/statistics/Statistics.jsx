import React, { useContext } from 'react';
import { BarChart, Bar, Tooltip, Legend, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import Shared from '../sharedComponent/Shared';
import { clickLocation, ContextGadgets } from '../root/Root';

const Statistics = () => {
    const allGedgets = useContext(ContextGadgets)
    clickLocation()

    const data = allGedgets.map(product => {
        const data = {
            name: `${product.category}`,
            rating: `${product.rating}`,
            price: `${product.price}`,

        }
        return data
    })
    console.log(data)
    return (
        <div>
            <div className='bg-[#9538E2] p-[50px]'>
                <div className='text-center'>
                    <Shared title={"Statistics"} details={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></Shared>
                    <br />
                </div>
            </div>
            <br />
            <br />
            <div className='w-11/12 mx-auto'>
                <h1 className='text-2xl font-bold'>Statistics</h1>
                <br />
                <ResponsiveContainer width="95%" height={400}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="rating" fill="#8884d8" />
                        <Bar dataKey="price" fill="#9538E2" />
                        <Bar dataKey="Title" fill="#FF0000" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;