import { useEffect, useState } from 'react';
import {
  IoTrashBinOutline,
  IoSunnyOutline,
  IoMoonOutline,
  IoRefresh,
} from 'react-icons/io5';

function ImageList() {
  const [darkMode, setDarkMode] = useState(false);
  const [pictures, setPictures] = useState([
    {
      id: 1,
      url: 'https://cdn.pixabay.com/photo/2013/08/26/09/40/silhouette-175970_1280.jpg',
    },
    {
      id: 2,
      url: 'https://cdn.pixabay.com/photo/2015/11/25/09/42/rocks-1061540_1280.jpg',
    },
    {
      id: 3,
      url: 'https://cdn.pixabay.com/photo/2018/09/23/12/33/building-3697342_1280.jpg',
    },
    {
      id: 4,
      url: 'https://cdn.pixabay.com/photo/2014/05/02/12/43/clouds-335969_1280.jpg',
    },
    {
      id: 5,
      url: 'https://cdn.pixabay.com/photo/2015/11/25/09/42/rocks-1061540_1280.jpg',
    },
    {
      id: 6,
      url: 'https://cdn.pixabay.com/photo/2023/01/08/05/45/mountain-7704584_1280.jpg',
    },
  ]);

  const [deletedStack, setDeletedStack] = useState<
    {
      id: number;
      url: string;
    }[]
  >([]);

  useEffect(() => {
    if (darkMode) {
      document.body.className = 'dark';
    } else {
      document.body.className = '';
    }
  }, [darkMode]);

  const handleDelete = (id: number) => {
    const itemToDelete = pictures.find((item) => item.id === id);
    if (itemToDelete) {
      setPictures((prev) => prev.filter((item) => item.id !== id));
      setDeletedStack((prev) => [...prev, itemToDelete]);
    }
  };

  const handleUndo = () => {
    if (deletedStack.length > 0) {
      const lastDeleted = deletedStack[deletedStack.length - 1];
      setPictures((prev) => [lastDeleted, ...prev]);
      setDeletedStack((prev) => prev.slice(0, -1));
    } else {
      alert("There's nothing to undo.");
    }
  };

  return (
    <div className='w-full max-w-4xl mx-auto py-6 px-4'>
      <header className='flex items-center justify-between mb-6'>
        <h1 className='text-2xl font-bold'>Instagram</h1>
        {/* More Buttons */}
        <div className='flex items-center gap-2'>
          <button
            onClick={() => setDarkMode((darkMode) => !darkMode)}
            className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full'
          >
            {darkMode ? (
              <IoSunnyOutline size={20} />
            ) : (
              <IoMoonOutline size={20} />
            )}
            <span className='sr-only'>Toggle dark mode</span>
          </button>
          <button
            onClick={handleUndo}
            className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full'
          >
            <IoRefresh size={20} />
            <span className='sr-only'>Undo</span>
          </button>
        </div>
      </header>
      <div className='grid grid-cols-3 gap-4'>
        {pictures.map((value) => (
          <div className='group relative' key={value.id}>
            <a className='group' href='#'>
              <img
                src={value.url}
                width='400'
                height='400'
                alt={`Photo ${value.id}`}
                className='w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity'
                style={{ aspectRatio: '400 / 400', objectFit: 'cover' }}
              />
            </a>
            <button
              onClick={() => handleDelete(value.id)}
              className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-white hover:bg-red-600 h-10 w-10 absolute top-2 right-2 rounded-full'
            >
              <IoTrashBinOutline />
              <span className='sr-only'>Delete</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageList;
