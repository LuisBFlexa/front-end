import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from './root/root'
import Homepage from './pages/homepage/homepage'
import Profile from './pages/profile/profile'
import Post from './pages/post/post'
import LogIn from './pages/user/login/login'
import SignIn from './pages/user/signin/signin'
import { UserContextProvider } from './utils/UserContexts'

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
      <UserContextProvider>
        <RouterProvider router = { router } />
      </UserContextProvider>
      
    </>
  )
}

export default App
