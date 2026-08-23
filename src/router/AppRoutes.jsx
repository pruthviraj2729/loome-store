import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MianLayout from "../app/mainlayout/MianLayout";
import HomePage from "../pages/HomePage";
import MenPage from "../features/men/ui/pages/MenPage";
import WomenPage from "../features/women/ui/pages/WomenPage";
import EssentialsPage from "../features/essentials/ui/pages/EssentialsPage";
import HeadcarePage from "../features/headcare/ui/pages/HeadcarePage";
// import WishlistPage from "../features/wishlist/ui/pages/WishlistPage";
// import CartPage from "../features/cart/ui/pages/CartPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import WomenProductDetailPage from "../features/women/ui/pages/WomenProductDetailPage";
import CashmereCarePage from "../features/headcare/ui/pages/CashmerePage";
import KniteWearPage from "../features/knitewer/KniteWearPage";
import NewInPage from "../features/new/ui/pages/NewInPage";

const router = createBrowserRouter([
    {
        element: <MianLayout/>, 
        children: [
            {
                path: '/',
                element: <HomePage/>
            }, 
            {
                path: '/men',
                element: <MenPage/>
            }, 
            {
                path: '/women',
                element: <WomenPage/>
            },
            {
                path: '/women/products/:id',
                element:<WomenProductDetailPage/>
            },
            {
                path: '/essentials',
                element: <EssentialsPage/>
            },
            {
                path: '/knitewear',
                element: <KniteWearPage/>
            },
            {
                path: '/new',
                element: <NewInPage/>
            },            
            {
                path: '/headcare',
                element: <HeadcarePage/>,
            },
            {         
                path: '/headcare/cashmere',
                element: <CashmereCarePage/> 
            },
            // {
            //     path: '/wishlist',
            //     element: <WishlistPage/>
            // },
            // {
            //     path: '/cart',
            //     element: <CartPage/>
            // },
            {
                path: 'about',
                element: <AboutPage/>
            },
            {
                path: 'contact',
                element: <ContactPage/>
            },

        ]
    }
])

const AppRoutes = () => {
    return <RouterProvider router={router}/>
}

export default AppRoutes