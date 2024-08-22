import Input from './components/Input';
import CheckBox from './components/CheckBox';
import Button from './components/button';

const App = () => {
  return (
    <>
      <div className='flex gap-2 items-center'>
        <CheckBox id='add-checkbox' label='' />
        <Input placeholder='Enter Your Name' />
        <Button text='Add' />
      </div>

      <div className='flex gap-2 items-center'>
        <CheckBox id='add-checkbox' label='' />
        <Input placeholder='Enter Your Name' />
        <Button text='Success' />
      </div>

      <div className='flex gap-2 items-center'>
        <CheckBox id='add-checkbox' label='' />
        <Input placeholder='Enter Your Name' />
        <Button text='Cancel' />
      </div>
    </>
  );
};

export default App;
