import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Dashboard from "../dashboard/Dashboard";
import Statistics from "../statistics/Statistics";
import Details from "../productDatails/Datails"
import Home from "../home/Home";
import ErrorPage from "../errorPage/ErrorPage";
import Allproducts from "../AllProducts/Allproducts";
import Laptops from "../AllProducts/Laptops";
import Phones from "../AllProducts/Phones";
import Accessories from "../AllProducts/Accessories";
import SmartWatches from "../AllProducts/SmartWatches";
import MacBook from "../AllProducts/MacBook";
import Iphone from "../AllProducts/Iphone";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        loader: () => fetch("/public/gadgets.json"),
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children: [
                    {
                        path: '/',
                        element: <Allproducts></Allproducts>
                    },
                    {
                        path: '/home/laptops',
                        element: <Laptops></Laptops>
                    },
                    {
                        path: '/home/phones',
                        element: <Phones></Phones>
                    },
                    {
                        path: '/home/accessories',
                        element: <Accessories></Accessories>
                    },
                    {
                        path: '/home/smartwatches',
                        element: <SmartWatches></SmartWatches>
                    },
                    {
                        path: '/home/macbook',
                        element: <MacBook></MacBook>
                    },
                    {
                        path: '/home/iphone',
                        element: <Iphone></Iphone>
                    },


                ]
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/product/details/:product_id',
                element: <Details></Details>
            }
        ]
    },
]);

export default router;