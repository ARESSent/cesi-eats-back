const BASE_URL = 'https://your-backend-domain.com/api';

const handleResponse = async (response) => {
  if (response.ok) {
    return response.json();
  }
  const errorMessage = await response.text();
  throw new Error(errorMessage);
};

export const fetchData = async (endpoint, queryParams = {}) => {
  const url = new URL(`${BASE_URL}/${endpoint}`);
  Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));
  
  const response = await fetch(url);
  return handleResponse(response);
};

export const postData = async (endpoint, data) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};
