const status = (response) => {
  if (response.status === 200) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.status));
};


const HTTP = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export {
  status,
  HTTP,
};
