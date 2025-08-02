import React from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



const Body = () => {



    const appRouter = createBrowserRouter([
        {
            path:"/",
            element: <Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])

   

  return (
    <div>
      
      {/* <Login/>
      <Browse/>  now after setting configuration for router provider we need not it more*/}
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
