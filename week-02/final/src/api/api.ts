const BASE_URL = "http://localhost:5500";
export const api = async (
  path: string,
  options?: {
    method?: string;
    headers?: {
      "Content-Type": string;
    };
    body?: any;
  }
) => {
  try {
    const requestOptions = {
      ...{
        headers: {
          "Content-Type": "application/json",
        },
      },
      ...options,
    };

    // const delays = [1000, 3000, 5000];
    // const randomIndex = Math.floor(Math.random() * delays.length);
    // await new Promise((resolve) => setTimeout(resolve, delays[randomIndex]));

    const response = await fetch(`${BASE_URL}/${path}`, requestOptions);
    if (!response.ok) {
      throw Error("Failed to Fetch Posts");
    }
    return await response.json();
  } catch (e) {
    throw Error(e instanceof Error ? e.message : "unknow error");
  }
};
