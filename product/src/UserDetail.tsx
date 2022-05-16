import React from "react";

export const UserDetail = () => {
  return (
    <React.Fragment>
      <div className="flex justify-center">
        <div className="max-w-3xl">
          <div className="block p-6 rounded-lg shadow-lg bg-white m-4">
            <div className="md:flex md:flex-row">
              <div className="md:w-96 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0">
                <img src="http://localhost:4000/user-1.jpg" className="rounded-lg shadow-md" alt="woman avatar" />
              </div>
              <div className="md:ml-6">
                <p className="font-semibold text-xl mb-2 text-gray-800">Tony Stark</p>
                <p className="font-semibold text-gray-500 mb-0">Stark Industries</p>
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
