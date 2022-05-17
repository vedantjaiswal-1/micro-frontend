import React, { useState, useEffect } from "react";
import { getUserById, getUsers } from "home/UserService";
import { useParams } from "react-router-dom";

export const UserDetail = () => {
  const [users, setUsers] = useState<any>([]);
  const params = useParams();

  const id = params?.usersId;
  const loadUsers = (id: any) => {
    getUserById(id)
      .then((response: any) => {
        setUsers(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadUsers(id);
  }, [id]);

  return (
    <React.Fragment>
      <div className="flex justify-center">
        <div className="max-w-3xl">
          <div className="block p-6 rounded-lg shadow-lg bg-white m-4">
            <div className="md:flex md:flex-row">
              <div className="md:w-96 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0">
                <img src={users?.image} className="rounded-lg shadow-md" alt="woman avatar" />
              </div>
              <div className="md:ml-6">
                <p className="font-semibold text-xl mb-2 text-gray-800">{users?.name}</p>
                <p className="font-semibold text-gray-500 mb-0">{users?.email}</p>
                <p className="text-gray-500 font-light mb-6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae numquam quas,
                  voluptates omnis nulla ea odio quia similique corrupti magnam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
