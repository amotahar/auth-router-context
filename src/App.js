import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Main from './components/Layout/Main';
import Login from './components/Login';
import Register from './components/Register';
// import { createBrowserRouter } from 'react-router-dom';
// import Main from './components/Layout/Main';

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Main></Main>,
  //     children:[
  //       {

  //       }
  //     ]

  //   }
  // ])

  const router = createBrowserRouter([
    {
    path: '/',
    element: <Main></Main>,
    children:[
      {
      path:'/',
      element: <Home></Home>
    }, 
    {
      path:'/login',
      element: <Login></Login>
    },
    {  
      path:'/register',
      element: <Register></Register>
    }
  ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
