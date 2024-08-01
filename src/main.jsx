import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Route from './components/Route/Route';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookDetails from './components/BookDetails/BookDetails';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
   errorElement: <ErrorPage> </ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
       path:'/book/:id',
       element: <BookDetails></BookDetails>,
       loader: async () =>{
        const response = await fetch('../books.json');
        return response.json();
      }
      },
      {
        path:'/books',
        element: <ListedBooks></ListedBooks>,
       },
       {
        path:'/pages',
        element:<PagesToRead></PagesToRead>,
       }
 
    ]
  
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
