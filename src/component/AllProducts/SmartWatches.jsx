import React, { useContext } from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';
import { ContextGadgets } from '../root/Root';
import Card from '../sharedComponent/card/Card';

const SmartWatches = () => {
    const gadgets = useContext(ContextGadgets);
    const location = useLocation()
    const targetPath = location.pathname.split('/').filter(Boolean).pop();
    const samrtWatch = gadgets.filter(watch => watch.category === targetPath);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                samrtWatch.map(gedget => <Card key={gedget.product_id} gedget={gedget}></Card>)
            }
        </div>
    );
};

export default SmartWatches;