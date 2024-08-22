type ButtonText = 'Add' | 'Cancel' | 'Success';

interface ButtonProps {
  text: ButtonText;
}

const Button = ({ text }: ButtonProps) => {
  let bgColor = 'bg-slate-500';

  if (text === 'Add') {
    bgColor = 'bg-slate-500';
  } else if (text === 'Cancel') {
    bgColor = 'bg-red-500';
  } else if (text === 'Success') {
    bgColor = 'bg-blue-500';
  }

  return (
    <button className={`${bgColor} rounded text-white py-2 px-4`} type='button'>
      {text}
    </button>
  );
};

export default Button;
