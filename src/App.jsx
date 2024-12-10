import { createBrowserRouter , createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import HomePages from "./pages/HomePages"
import Layout from "./components/Layout"
import Shop from "./pages/Shop"
import ProductDetails from "./pages/ProductDetails"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Error from "./pages/Error"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Registration from "./pages/Registration"

function App() {
 let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route index element={<HomePages/>}>

    </Route>
    <Route path="/shop" element={<Shop/>}>

    </Route>
    <Route path="/shop/:id" element={<ProductDetails/>}>  
    </Route>
    <Route path="/contact" element={<Contact/>}>  </Route>
    <Route path="/about" element={<About/>}>  </Route>
    <Route path="/cart" element={<Cart/>}>  </Route>
    <Route path="/checkout" element={<Checkout/>}>  </Route>
    <Route path="/registration" element={<Registration/>}>  </Route>
    <Route path="*" element={<Error/>}>  </Route>



  </Route>
 ))

  return (
   <>
   <RouterProvider router={router}/>
   </>
  )
}

export default App
