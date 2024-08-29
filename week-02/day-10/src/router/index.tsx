import { createBrowserRouter } from 'react-router-dom';
import Home from '../view/Home';
import About from '../view/About';
import Blog from '../view/Blog';
import DefaultLayout from '../layouts/DefaultLayout';
import BlogLayout from '../layouts/BlogLayout';

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      { path: '/about', element: <About /> },
    ],
  },
  {
    element: <BlogLayout />,
    children: [{ path: '/blog/:id', element: <Blog /> }],
  },
]);
