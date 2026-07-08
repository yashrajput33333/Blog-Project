import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'
import Signup from './components/Signup.jsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Login } from './components/index.js'
import AddPost from './pages/AddPost.jsx'
import AllPosts from './pages/AllPosts.jsx'
import EditPost from './pages/EditPost.jsx'
import Home from './pages/Home.jsx'
import Post from './pages/Post.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                    <Login />
            ),
        },
        {
            path: "/signup",
            element: (
                    <Signup></Signup>
            ),
        },
        
        {
            path: "/all-posts",
            element: (
                    <AllPosts />
            ),
        },
        {
            path: "/add-post",
            element: (
          
                    <AddPost></AddPost>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
            
                    <EditPost />
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])

createRoot(document.getElementById('root')).render(
//   <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
//   </StrictMode>,
)
