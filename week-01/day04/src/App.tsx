import Input from './components/Input';
import CheckBox from './components/CheckBox';
import Button from './components/button';

const App = () => {
  return (
    <>
      <div className='item-middle flex-col gap-4'>
        <div className='flex gap-2 items-center'>
          <Button type='button' value='Add' disabled={false}>
            Add
          </Button>
          <Button type='button' value='Success' disabled={false}>
            Success
          </Button>
          <Button type='button' value='Cancel' disabled={false}>
            Cancel
          </Button>
        </div>
        <Input placeholder='Enter Your Name' />
        <div className='flex gap-4'>
          <Input placeholder='Enter Your Name' />
          <Button type='button' value='Add' disabled={false}>
            Add
          </Button>
        </div>
        <CheckBox id='terms' type='checkbox'>
          I agree with <strong>terms</strong> and <strong>policies</strong>
        </CheckBox>
      </div>
    </>
  );
};

export default App;
