const url = 'https://paduljualan-user.herokuapp.com';

const login = (data) => {
  const loginUrl = `${url}/login`;
  return fetch(loginUrl, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
};

const register = (data) => {
  const registerUrl = `${url}/register`;
  return fetch(registerUrl, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
};

export { login, register };
