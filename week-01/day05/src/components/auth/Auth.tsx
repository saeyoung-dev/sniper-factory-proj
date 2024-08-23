import { useState } from 'react';

import Input from '../Input';
import Button from '../Button';
import CheckBox from '../CheckBox';

const Auth = () => {
  const [type, setType] = useState('Login');

  return (
    <>
      <div className='item-middle bg-black'>
        <div className='w-[375px] h-min-[434px] rounded-lg bg-white border border-[#D1D1D1] py-10 px-[25px] text-[#4f4f4f]'>
          <h1 className='text-xl font-bold mb-[10px]'>{type} Into App</h1>
          <p className='text-sm mb-5'>Please enter your details to continue.</p>
          <form action='' className='grid gap-4'>
            {type === 'Sign' && (
              <Input type='text' placeholder='Enter your name' />
            )}

            <Input type='email' placeholder='someone@example.com' />
            <Input type='password' placeholder='Enter Password' />
            <CheckBox type='checkbox'>
              <span className='text-sm color-[#4f4f4f]'>
                I agree with <em className='not-italic font-bold'>terms</em> and{' '}
                <em className='not-italic font-bold'>policies</em>.
              </span>
            </CheckBox>
            <div className='mt-4 grid gap-4'>
              <Button
                type='submit'
                className='w-full bg-[#4F4F4F] text-[#F5F5F5] rounded-lg'
              >
                Log In
              </Button>
              <Button
                type='button'
                className='w-full border border-[#4f4f4f] text-[#4f4f4f] rounded-lg'
                onClick={() =>
                  setType((type) => (type === 'Login' ? 'Sign' : 'Login'))
                }
              >
                Go To {type === 'Login' ? 'Sign' : 'Login'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Auth;
