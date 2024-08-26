import { useState } from 'react';

interface AddItemProps {
  handleAdd: (item: {
    name: string;
    quantity: number;
    description?: string;
    price: number;
  }) => void;
}

const AddItem = ({ handleAdd }: AddItemProps) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAdd({ name, quantity, description, price });
    setName('');
    setQuantity(1);
    setDescription('');
    setPrice(0);
  };
  return (
    <div className='bg-white p-6 rounded-lg shadow'>
      <h2 className='text-xl font-bold mb-4'>Add New Item</h2>
      <form onSubmit={onSubmit} className='grid gap-4'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='space-y-2'>
            <label className='text-sm font-medium' htmlFor='name'>
              Name
            </label>
            <input
              className='flex h-10 w-full rounded-md border bg-[#f0f0f0] px-3 py-2 text-sm'
              id='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete='off'
            />
          </div>
          <div className='space-y-2'>
            <label className='text-sm font-medium' htmlFor='quantity'>
              Quantity
            </label>
            <input
              className='flex h-10 w-full rounded-md border bg-[#f0f0f0] px-3 py-2 text-sm'
              id='quantity'
              type='number'
              name='quantity'
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min={1}
              autoComplete='off'
            />
          </div>
        </div>
        <div className='space-y-2'>
          <label className='text-sm font-medium' htmlFor='description'>
            Description
          </label>
          <textarea
            className='flex min-h-[80px] w-full rounded-md border bg-[#f0f0f0] px-3 py-2 text-sm'
            id='description'
            name='description'
            autoComplete='off'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='space-y-2'>
          <label className='text-sm font-medium' htmlFor='price'>
            Price
          </label>
          <input
            className='flex h-10 w-full rounded-md border bg-[#f0f0f0] px-3 py-2 text-sm'
            id='price'
            type='number'
            name='price'
            autoComplete='off'
            value={price}
            min={0}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
        <button
          type='submit'
          className='inline-flex items-center justify-center rounded-md text-sm font-medium bg-[#f0f0f0] hover:bg-primary/90 h-10 px-4 py-2'
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;
