import { useSearchParams } from 'react-router-dom';

const About = () => {
  const [searchParams] = useSearchParams();

  return (
    <>
      <h1>About Component: {searchParams.get('lan')}</h1>
    </>
  );
};

export default About;
