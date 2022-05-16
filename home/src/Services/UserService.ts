const apiBaseUrl = "http://localhost:4000";

export default class UserService {
  static getUsers = () => {
    return fetch(`${apiBaseUrl}/users`).then((res) => res.json());
  };

  static getUserById = (id: any) => {
    return fetch(`${apiBaseUrl}/users/${id}`).then((res) => res.json());
  };
}

