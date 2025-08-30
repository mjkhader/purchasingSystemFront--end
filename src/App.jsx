import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import HomePage from "./components/HomePage.jsx";
import RootLayout from './RootLayout.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pass an array of route definition object
const router = createBrowserRouter([
  {
    path:'/', 
    element: <RootLayout/>,
    children:[
      {path:'/', element: <HomePage/>},
      {path:'/signup', element: <Signup/>},
      {path:'/login', element: <Login/>},
    ]
  },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;