const Value = ({
  value,
  setValue,
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
      <input
        type="text"
        className="border border-slate-500"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};
export default Value;
