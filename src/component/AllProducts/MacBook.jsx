import React, { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import { ContextGadgets } from '../root/Root';
import Card from '../sharedComponent/card/Card';

const MacBook = () => {
    const gadgets = useContext(ContextGadgets);
    const [category] = useOutletContext();
    const macbooks = gadgets.filter(macbook => macbook.category === category);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                macbooks.map(gedget => <Card key={gedget.product_id} gedget={gedget}></Card>)
            }
        </div>
    );
};

export default MacBook;