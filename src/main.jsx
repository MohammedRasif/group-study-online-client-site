import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './component/Roots.jsx';
import Home from './component/Home.jsx';
import SubmitNow from './component/SubmitNow.jsx';
import ErrorPage from './component/ErrorPage.jsx';
import Register from './component/Register.jsx';
import Login from './component/Login.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Submited from './component/Submited.jsx';
import UpdateAssignment from './component/UpdateAssignment.jsx';
import SeeDetails from './component/SeeDetails.jsx';
import Confrom from './component/Confrom.jsx';
import GiveMarks from './component/GiveMarks.jsx';
import ConformAssignemt from './component/ConformAssignemt.jsx';
import PrivateRoute from './component/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/submit",
        element:<PrivateRoute><SubmitNow></SubmitNow></PrivateRoute>
      }
      ,
      {
        path:"/register",
        element:<Register></Register>
      }
      ,
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/givemark/:id",
        element:<GiveMarks></GiveMarks>,
        loader: ({params}) => fetch(`http://localhost:5000/submited/${params.id}`)
      }
      ,
      {
        path:"/conformAssignment",
        element:<ConformAssignemt></ConformAssignemt>,
        loader:()=>fetch('http://localhost:5000/submited')
      }
      ,
      
      
      {
        path:"/submited",
        element:<Submited></Submited>,
        loader: () => fetch('http://localhost:5000/study')
        
      }
      ,
      {
        path:"/update/:id",
        element:<UpdateAssignment></UpdateAssignment>,
        loader: ({params}) => fetch(`http://localhost:5000/study/${params.id}`)
      }
      ,
      {
        path:"/seeDetails/:id",
        element:<SeeDetails></SeeDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/study/${params.id}`)
      }
      ,
      {
        path:"/conform",
        element:<PrivateRoute><Confrom></Confrom></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/submited')
      }
    ]

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
