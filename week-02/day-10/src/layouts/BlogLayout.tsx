import { Outlet } from 'react-router-dom';

const BlogLayout = () => {
  return (
    <>
      <h1>BlogLayout Component</h1>
      <Outlet />
    </>
  );
};

export default BlogLayout;
