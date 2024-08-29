import { useNavigate, useParams } from 'react-router-dom';

const Blog = () => {
  const params = useParams();
  const navigate = useNavigate();

  if (params.id === 'admin') {
    alert('관리자만 볼 수 있는 게시글 입니다.');
    navigate('/');
  }

  const action = () => {
    alert('작업 끝');
    navigate('/');
  };
  return (
    <>
      <h1>Blog Component: {params.id}</h1>
      <button onClick={action}>이동</button>
    </>
  );
};

export default Blog;
