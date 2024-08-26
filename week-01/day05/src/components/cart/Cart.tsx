import { useState } from 'react';
import AddItem from './AddItem';
import ItemList from './ItemList';
import Search from './Search';

interface Item {
  name: string;
  quantity: number;
  description?: string;
  price: number;
}

const Cart = () => {
  const [items, setItems] = useState<Item[]>([]);

  const handleAdd = (item: Item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <>
      <div className='flex items-center justify-center min-h-screen bg-gray-500'>
        <div className='flex gap-4'>
          <AddItem handleAdd={handleAdd} />
          <div className='bg-white p-6 rounded-lg shadow'>
            <Search />
            <div className='overflow-auto'>
              <ItemList items={items} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
