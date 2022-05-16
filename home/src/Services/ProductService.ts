const apiBaseUrl = "http://localhost:4000";

export default class ProductService {
  static getProducts = () => {
    return fetch(`${apiBaseUrl}/products`).then((res) => res.json());
  };

  static getProductById = (id: any) => {
    return fetch(`${apiBaseUrl}/products/${id}`).then((res) => res.json());
  };
}

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});
