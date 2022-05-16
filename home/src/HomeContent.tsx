import React, { useEffect, useState } from "react";
import ProductService from "./Services/ProductService";

export const HomeContent = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = () => {
    ProductService.getProducts()
      .then((response: any) => {
        setProducts(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return(
      <React.Fragment>
          <div className="my-10 grid grid-cols-4 gap-5">
              {products.map((item: any) => {
                  return <div key={item?.id}>
                      <img src={item?.image} alt={item?.name} />
                  </div>
              })}
          </div>
      </React.Fragment>
  );
};
