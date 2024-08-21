{
  function getSize<T>(arr: T[]) {
    return arr.length;
  }

  console.log(getSize<number>([1, 2, 3]));
  console.log(getSize<string>(['a', 'b', 'c']));

  function getReturnValue<T>(arr: T): T {
    return arr;
  }
  console.log(getReturnValue<number[]>([1, 2, 3]));
  console.log(getReturnValue<string[]>(['a', 'b', 'c']));

  type expApiResponse = {
    data: {
      id: number;
      name: string;
    };
    status: number;
  };

  const userResponse: expApiResponse = {
    data: { id: 1, name: 'bob' },
    status: 200,
  };

  type ApiResponse<T> = {
    data: T;
    status: number;
  };

  const todoResponse: ApiResponse<{
    id: number;
    text: string;
    completed: boolean;
  }> = {
    data: { id: 1, text: '아침먹기', completed: false },
    status: 200,
  };
}
