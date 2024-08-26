interface Item {
  name: string;
  quantity: number;
  description?: string;
  price: number;
}

interface ItemListProps {
  items: Item[];
}

const ItemList = ({ items }: ItemListProps) => {
  return (
    <div className='relative w-full overflow-scroll max-h-[280px]'>
      <table className='w-full caption-bottom text-sm'>
        <thead>
          <tr className='border-b'>
            <th className='h-12 px-4 font-medium cursor-pointer'>Name</th>
            <th className='h-12 px-4 font-medium cursor-pointer'>
              Description
            </th>
            <th className='h-12 px-4 font-medium cursor-pointer'>Quantity</th>
            <th className='h-12 px-4 font-medium cursor-pointer'>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className='border-b'>
              <td className='p-4 font-medium'>{item.name}</td>
              <td className='p-4'>{item.description}</td>
              <td className='p-4 text-right'>{item.quantity}</td>
              <td className='p-4 text-right'>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
