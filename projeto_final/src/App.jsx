import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Navbar } from './components/Navbar/navbar'
import { Root } from './root/root'
import Homepage from './pages/Homepage/homepage'
import Profile from './pages/Profile/profile'
import Post from './pages/Post/post'
import LogIn from './user/login/login'
import SignIn from './user/signin/signin'

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Root/>,
    children:[{
      path: "",
      element: <Homepage />
    },
    {
      path:"profile",
      element: <Profile />
    },
    {
      path: "posts",
      element: <Post />
    },
    {
      path:"post/:id",
      element:<Post />
    },
    {
      path:"login",
      element: <LogIn />
    },
    {
      path:"signin",
      element: <SignIn />
    }
  ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router = { router } />
      
    </>
  )
}

export default App
