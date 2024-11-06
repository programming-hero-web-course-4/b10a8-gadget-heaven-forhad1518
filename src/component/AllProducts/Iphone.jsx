import React, { useContext } from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';
import { ContextGadgets } from '../root/Root';
import Card from '../sharedComponent/card/Card';

const Iphone = () => {
    const gadgets = useContext(ContextGadgets);
    const location = useLocation()
    const targetPath = location.pathname.split('/').filter(Boolean).pop();
    const iphons = gadgets.filter(iphone => iphone.category === targetPath);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                iphons?.map(gedget => <Card key={gedget.product_id} gedget={gedget}></Card>)
            }
        </div>
    );
};

export default Iphone;