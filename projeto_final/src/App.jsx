import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from './root/root'
import Homepage from './pages/homepage/homepage'
import Profile from './pages/profile/profile'
import Post from './pages/post/post'
import LogIn from './pages/user/login/login'
import SignIn from './pages/user/signin/signin'
import Editdata from './pages/user/edit_data/edit_data'
import { UserContextProvider } from './utils/UserContexts'
import PostAdm from './pages/post/post_admin'
import CreatePost from './pages/post/create_post'
import CategoryPosts from './pages/post/category_posts'

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
      path:"post_adm",
      element: <PostAdm />
    },
    {
      path:"create_post",
      element: <CreatePost />
    },
    {
      path:"edit_data",
      element: <Editdata />
    },
    {
      path: "post/",
      element: <Post key='index_posts'/>
    },
    {
      path:"post/:id",
      element:<Post key='show_posts'/>
    },
    {
      path:"category/:id",
      element:<CategoryPosts />
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
