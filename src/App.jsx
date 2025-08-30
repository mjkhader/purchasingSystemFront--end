import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import RootLayout from './RootLayout.jsx';

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