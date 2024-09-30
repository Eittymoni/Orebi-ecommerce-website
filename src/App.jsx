import { createBrowserRouter , createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import HomePages from "./pages/HomePages"
import Layout from "./components/Layout"

function App() {
 let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route index element={<HomePages/>}>

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
