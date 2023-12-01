import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Routes,
  BrowserRouter as Router
} from "react-router-dom";
import Navbar from './component/navbar';
import Footer from './component/footer';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Product />,
      },

      {
        path: "/checkout",
        element: <Checkout/>,
      },
      ,
      {
        path: "/product/:id",
        element: <ProductDetail />,
      }
    ],
  },
]);

function App() {
       return <RouterProvider router={router} />;

}

export default App;
