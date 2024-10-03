import { createBrowserRouter , createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import HomePages from "./pages/HomePages"
import Layout from "./components/Layout"
import Shop from "./pages/Shop"

function App() {
 let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route index element={<HomePages/>}>

    </Route>
    <Route path="/shop" element={<Shop/>}>

    </Route>
  </Route>
 ))

  return (
   <>
   <RouterProvider router={router}/>
   </>
  )
}

export default App
