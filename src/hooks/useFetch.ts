import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";

axios.defaults.baseURL = "https://sipas-8de63a58cb4f.herokuapp.com";

export const useFetch = <T>(
  config: AxiosRequestConfig<any>,
  isNotSubmit: boolean = false
): [boolean, T | undefined, object, () => void, boolean] => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState({});
  const [data, setData] = useState<T>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (isNotSubmit) sendRequest();

    return;
  }, []);

  const sendRequest = async () => {
    setIsLoading(true);

    try {
      const res = await axios(config);

      if (res.status === 201 || res.status === 200) {
        setError({});
        setData(res.data);
        setIsSuccess(true);
      }
    } catch (err) {
      setError({ err });
    }

    setIsLoading(false);
  };

  const formSubmit: () => void = () => {
    sendRequest();
  };

  return [isLoading, data, error, formSubmit, isSuccess];
};
