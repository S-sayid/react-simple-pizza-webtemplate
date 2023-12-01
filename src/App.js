import './App.css';
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import About from './pages/About'
import Err from './pages/404'
import {createBrowserRouter as page, RouterProvider} from 'react-router-dom'

let pages = page([{
  path: '/',
  element: <Home />
},
{
  path: '/menu',
  element: <Menu />
},
{
  path: '/about',
  element: <About />
},
{
  path: '/contact',
  element: <Contact />
},
{
  path: '*',
  element: <Err />
}
]
)
function App() {
  return (
      <RouterProvider router={pages} />
  );
}

export default App;
