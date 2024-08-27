import React from 'react';

function UseCallbackDisplay({
  count,
  title,
}: {
  count: { count: number };
  title: string;
}) {
  console.log(title);
  return (
    <>
      <div>Count: {count.count}</div>
    </>
  );
}

export default React.memo(UseCallbackDisplay);
