import { Params } from '../types/params';

export const BASE_URL = 'https://product--catalog.herokuapp.com';


type RequestMethod = 'GET';

function request<T>(
  endPoint: string,
  method: RequestMethod = 'GET',
  params?: Params,
): Promise<T> {
  const options: RequestInit = { method };

  const url = new URL(BASE_URL + endPoint);

  if (params) {
    url.search = new URLSearchParams(params).toString();
  }

  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
}

export const client = {
  get: <T>(url: string, params?: Params) => request<T>(url, 'GET', params),
};
