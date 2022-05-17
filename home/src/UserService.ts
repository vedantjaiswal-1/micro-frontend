const apiBaseUrl = "http://localhost:4000";

export const getUsers = () => {
  return fetch(`${apiBaseUrl}/users`).then((res) => res.json());
};

export const getUserById = (id: any) => {
  return fetch(`${apiBaseUrl}/users/${id}`).then((res) => res.json());
};
