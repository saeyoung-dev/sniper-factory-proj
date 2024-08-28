import { useEffect, useState } from 'react';

export const useFetch = (
  initialUrl: string,
  initialData: any,
  initialOptions = { method: 'GET' }
) => {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(initialUrl, {
          ...initialOptions,
          signal,
        });

        if (!response.ok) {
          throw new Error('서버 상태가 불안정합니다.');
        }

        const data = await response.json();
        setData(data);
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') return;
        setIsError(true);
        setError(
          err instanceof Error ? err.message : `알 수 없는 에러 ${error}`
        );
      } finally {
        setIsLoading(false);
        setIsError(false);
        setError('');
      }
    };

    fetchData();
    return () => {
      controller.abort();
    };
  }, [initialUrl]);

  return { data, isLoading, isError, error };
};
