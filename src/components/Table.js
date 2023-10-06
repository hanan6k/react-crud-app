import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { PencilIcon, TrashIcon } from "@heroicons/react/solid";
import { deleteUser, loadUsers } from "../redux/actions/actions";
import { logOutAction } from "../redux/actions/actionsAuth";

const Table = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);

  const { currentUser } = useSelector((state) => state.dataAuth);

  const history = useHistory();
  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are You Sure wanted to Delete the user")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {/* <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Redux-Thunk CRUD Operations
            </h1>
            <p className="lg:w-full mx-auto leading-relaxed text-base">
              A few newer concepts of Action, Dispatch, Reducer, State,
              Provider, Connect, which we are going to use when working with
              Redux.
            </p>
          </div> */}
          <div className="flex pl-4 mt-4  w-full mx-auto">
            <button
              className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              onClick={() => history.push("/addUser")}
            >
              Add User
            </button>
          </div>
          <div className="lg:w-full w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-2 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    ID
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Name
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Email
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Contact
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Address
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Actions
                  </th>
                </tr>
              </thead>
              {users &&
                users.map((user, index) => (
                  <tbody key={index}>
                    <tr>
                      <td className="px-2 py-3">{index + 1}</td>

                      <td className="px-2 py-3">{user.name}</td>
                      <td className="px-2 py-3">{user.email}</td>
                      <td className="px-2 py-3">{user.contact}</td>
                      <td className="px-2 py-3 text-lg text-gray-900">
                        {user.address}
                      </td>
                      <td className="px-2 py-3 w-20	flex 	">
                        <PencilIcon
                          className="h-full flex w-full mr-4 text-blue-500"
                          onClick={() => history.push(`/editUser/${user.id}`)}
                        />

                        <TrashIcon
                          className="h-full flex w-full text-red-500"
                          onClick={() => handleDelete(user.id)}
                        />
                      </td>
                    </tr>
                  </tbody>
                ))}
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Table;
