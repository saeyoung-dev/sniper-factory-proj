import { useState } from 'react';
import Input from '../html/Input';
import Button from '../html/Button';

const TodoEditor = ({ addTodo }: { addTodo: (text: string) => void }) => {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(text);
    setText('');
    console.log('할일 등록');
  };

  return (
    <form action='' className='grid gap-4' onSubmit={handleSubmit}>
      <div className='flex gap-2'>
        <Input
          type='text'
          placeholder='Enter Todo List'
          onChange={handleChange}
          value={text}
        />
        <Button
          type='submit'
          className='bg-[#4f4f4f] text-white w-[77px] shrink-0 rounded-lg'
        >
          Add
        </Button>
      </div>
    </form>
  );
};

export default TodoEditor;
