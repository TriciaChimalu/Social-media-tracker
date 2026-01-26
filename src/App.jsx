import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import Welcome from './ui/Welcome';
import Home from './ui/Home';
import AppLayout from './ui/AppLayout';
import DailyLogger from './ui/DailyLogger';

const router = createBrowserRouter([
  {element:<AppLayout/>,
    children:[{
      path:'/',
      element:<Home />
    },
  { path:'/welcome',
    element:<Welcome/>
  },{
    path:'/daily-logger',
    element:<DailyLogger />
  }
]
  }
])

function App(){
  return <RouterProvider router={router} />

}

export default App