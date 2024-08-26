import { useEffect, useState } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import travel from '../../assets/images/travel.png';
import seoul from '../../assets/images/seoul.jpg';
import london from '../../assets/images/london.jpg';
import paris from '../../assets/images/paris.jpg';
import newyork from '../../assets/images/newyork.jpg';

export default function Travel() {
  const [currentLocation, setCurrentLocation] = useState('Seoul');
  const [darkMode, setDarkMode] = useState(false);

  const locations: string[] = ['Seoul', 'London', 'Paris', 'NewYork'];

  const images: Record<string, string> = {
    Seoul: seoul,
    London: london,
    Paris: paris,
    NewYork: newyork,
  };

  const handleLocationChange = (location: string) => {
    setCurrentLocation(location);
  };

  useEffect(() => {
    const userPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    console.log(userPrefersDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.className = 'dark';
    } else {
      document.body.className = '';
    }
  }, [darkMode]);

  return (
    <>
      <button
        onClick={() => setDarkMode((mode) => !mode)}
        className='absolute top-10 left-10 text-3xl cursor-pointer'
      >
        {darkMode ? <IoSunnyOutline size={20} /> : <IoMoonOutline size={20} />}
      </button>
      <div className='flex justify-center items-center min-h-screen'>
        <div className='flex flex-col items-center gap-4  max-w-[500px]'>
          <img src={travel} alt={'로고'} width={80} />
          <ul className='flex items-center antialiased justify-around w-full'>
            {locations.map((location) => (
              <li
                className='list-none'
                style={{
                  fontWeight: currentLocation === location ? 'bold' : 'normal',
                }}
                key={location}
              >
                <a href='#' onClick={() => handleLocationChange(location)}>
                  {location}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <img src={images[currentLocation]} alt={currentLocation} />
          </div>
        </div>
      </div>
    </>
  );
}
