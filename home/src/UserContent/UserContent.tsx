import React, { useEffect, useState } from "react";
import UserService from "../Services/ProductService";

export const UserContent = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = () => {
    UserService.getUsers()
      .then((response: any) => {
        setUsers(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <React.Fragment>
      <div className="p-4 my-10 grid grid-cols-4 gap-5">
        {users.map((item: any) => {
          return (
            <div key={item?.id}>
              <div className="text-center">
                <img src={item?.image} className="rounded-lg w-44 h-44 mb-4 mx-auto" alt="Avatar" />
                <h5 className="text-xl font-medium leading-tight mb-2">{item?.name}</h5>
                <p className="text-gray-500">{item?.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
