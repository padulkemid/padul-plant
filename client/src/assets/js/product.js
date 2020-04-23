const url = 'https://paduljualan-user.herokuapp.com/items';
const token = localStorage.getItem('token');

const list = () => {
  return fetch(url, {
    method: 'get',
    headers: {
      token,
    },
  }).then((res) => res.json());
};

const buy = (id) => {
  const buyUrl = `${url}/${id}`;
  return fetch(buyUrl, {
    method: 'post',
    headers: {
      token,
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
};

const cartList = () => {
  const cartUrl = `${url}/cart`;
  return fetch(cartUrl, {
    method: 'get',
    headers: {
      token,
    },
  }).then((res) => res.json());
};

const cleanCart = () => {
  const cartUrl = `${url}/cart`;
  return fetch(cartUrl, {
    method: 'delete',
    headers: {
      token,
    },
  }).then((res) => res.json());
};

export { list, buy, cartList, cleanCart };
