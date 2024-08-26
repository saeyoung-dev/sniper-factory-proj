const Search = () => {
  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Current Inventory</h2>
      <div className='mb-4'>
        <input
          className='flex h-10 rounded-md border bg-background px-3 py-2 text-sm w-full'
          placeholder='Search inventory...'
          type='search'
          autoComplete='off'
        />
      </div>
    </>
  );
};

export default Search;
