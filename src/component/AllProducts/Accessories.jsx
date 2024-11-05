import React, { useContext } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { ContextGadgets } from '../root/Root';
import Card from '../sharedComponent/card/Card';

const Accessories = () => {
    const gadgets = useContext(ContextGadgets);
    const [category] = useOutletContext();
    const accessories = gadgets.filter(accessorie => accessorie.category === category);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                accessories.map(gedget => <Card key={gedget.product_id} gedget={gedget}></Card>)
            }
        </div>
    );
};

export default Accessories;