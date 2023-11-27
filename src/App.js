import './App.css';
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

let pages = createBrowserRouter([{
  path: '/',
  element: <Home />
},
{
  path: '/menu',
  element: <Menu />
},
{
  path: '/contact',
  element: <Contact />
}]
)
function App() {
  return (
      <RouterProvider router={pages} />
  );
}

export default App;
