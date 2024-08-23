// type CheckboxProps = {
//   id: string;
//   label?: string;
// };

type CheckBoxProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> & {
  type: 'checkbox';
};

const CheckBox = (props: CheckBoxProps) => {
  const { id, children, ...rest } = props;
  return (
    <div className='flex items-center gap-2'>
      <input
        id={id}
        className='appearance-none cursor:pointer rounded w-[20px] h-[20px] border checked:bg-[#4f4f4f] checked:bg-[url(/icons.svg)] checked:bg-no-repeat checked:bg-center peer/agree'
        {...rest}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};
export default CheckBox;
