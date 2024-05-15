import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import HomeLayout from "./pages/HomeLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<HomeLayout />}>
      <Route index element={<Home />} />
      <Route path='/history' element={<h1>History page</h1>} />
      <Route path='/plans' element={<h1>plans page</h1>} />
      <Route path='/profiles' element={<h1>profiles page</h1>} />
    </Route>
  )
);
export default function App() {
  return <RouterProvider router={router} />;
}

