import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home"
import Root from "./components/root"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    
    children: [
      {
        path: "",
        element: <Home />,
        
      },
    ],
  },
]);



function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App


