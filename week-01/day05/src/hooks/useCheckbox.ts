import { useState } from 'react';

type UseCheckBoxReturn = [boolean, () => void, () => void];

function useCheckbox(initialValue: boolean): UseCheckBoxReturn {
  const [checked, setChecked] = useState(initialValue);

  const handleChange = () => {
    setChecked((checked) => !checked);
  };

  const reset = () => {
    setChecked(initialValue);
  };

  return [checked, handleChange, reset];
}

export default useCheckbox;
