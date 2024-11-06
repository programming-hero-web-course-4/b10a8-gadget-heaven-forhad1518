import React, { useContext } from 'react';
import { ContextGadgets } from '../root/Root';
import Card from '../sharedComponent/card/Card';

const Allproducts = () => {
    const gedgets = useContext(ContextGadgets)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                gedgets?.map(gedget => <Card key={gedget.product_id} gedget={gedget}></Card>)
            }
        </div>
    );
};

export default Allproducts;