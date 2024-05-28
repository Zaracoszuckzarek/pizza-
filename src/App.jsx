
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import MainHeaderLayout from "./components/MainHeaderLayout";
import Home from "./pages/Home";
import  Pizza, { loader as pizzasLoader }  from "./pages/Pizzas";
import PizzaDetails, {loader as pizzaDetailsLoader} from "./pages/PizzaDetails"
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";
import Reviews from "./pages/Reviews";
import Kiss, { loader as kissPageLoader } from "./pages/Kiss";
import PageNotFound from "./pages/PageNotFound";
import ErrorElement from "./pages/ErrorElement";
import WorldLayout from "./components/WorldLayout";



const router = createBrowserRouter(createRoutesFromElements(
  <Route  element={<MainHeaderLayout />}>
  <Route  index element={<Home />} />
  <Route  path="about" element={<About />} />
  <Route  path="pizzas" element={<Pizza />} loader={pizzasLoader} errorElement={<ErrorElement />} />
  <Route path="/login" element={<Login />}/>
  <Route  path="pizzas/:id" element={<PizzaDetails />} loader={pizzaDetailsLoader} />
  <Route path="world" element={<WorldLayout />}>
  <Route index element={<Dashboard />}/>
  <Route path="details" element={<Details />}/>
  <Route path="reviews" element={<Reviews />}/>
  <Route path="kiss" element={<Kiss />} loader={kissPageLoader}/>
  </Route>
  <Route path="*" element={<PageNotFound />} />
  </Route>
  
)) 


function App() {

  return ( 
    <RouterProvider router={router}/>
  )
}

export default App



