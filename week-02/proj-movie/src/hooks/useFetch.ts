import { useEffect, useState } from 'react';

type FetchOptions = {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit | null;
};

export const useFetch = <T>(
  initialUrl: string,
  initialData: T,
  initialOptions: FetchOptions = { method: 'GET' }
) => {
  const [data, setData] = useState(initialData);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      setError(null);
      try {
        const response = await fetch(initialUrl, {
          ...initialOptions,
          signal,
        });

        if (!response.ok) {
          throw new Error('서버 상태가 불안정합니다.');
        }

        const data: T = await response.json();
        setData(data);
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') return;
        setError(error instanceof Error ? error.message : 'Unknow Error');
        setIsError(true);
      } finally {
        if (!signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [initialUrl, initialOptions]);

  return { data, isLoading, isError, error };
};
