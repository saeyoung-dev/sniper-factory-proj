interface CheckboxProps {
  id: string;
  label: string;
}

const CheckBox = ({ id, label }: CheckboxProps) => {
  return (
    <>
      <input type='checkbox' id={id} />
      <label htmlFor={id}>{label}</label>
    </>
  );
};
export default CheckBox;
