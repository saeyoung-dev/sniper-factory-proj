import { forwardRef } from 'react';

type TInputProps = Omit<React.ComponentPropsWithRef<'input'>, 'type'> & {
  type: 'text' | 'password' | 'email' | 'number' | 'date';
};

const Input = forwardRef<HTMLInputElement, TInputProps>(
  (props: TInputProps, ref) => {
    const { ...rest } = props;
    return (
      <>
        <input
          ref={ref}
          className='inter h-[44px] text-sm border border-[#4f4f4f] py-[13.5px] px-[16px] rounded-lg placeholder-[#acacac]'
          {...rest}
        />
      </>
    );
  }
);

Input.displayName = 'Input';
export default Input;
