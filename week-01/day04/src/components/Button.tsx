// {
//   type ButtonText = 'Add' | 'Cancel' | 'Success';

//   type ButtonProps = {
//     text: ButtonText;
//     type: 'button' | 'submit' | 'reset';
//     disabled: boolean;
//     children: React.ReactNode;
//   };
// }

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;
  let bgColor = 'bg-slate-500';

  if (props.value === 'Add') {
    bgColor = 'bg-slate-500';
  } else if (props.value === 'Cancel') {
    bgColor = 'bg-red-500';
  } else if (props.value === 'Success') {
    bgColor = 'bg-blue-500';
  }

  return (
    <button
      className={`${bgColor} w-[100px] h-[44px] text-middle rounded text-white py-2 px-4`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
