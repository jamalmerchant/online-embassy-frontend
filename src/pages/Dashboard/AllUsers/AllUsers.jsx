import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Shared/Loading/Loading";

const AllUsers = () => {
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();

      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-2xl">All users in dashboard</h1>
      <div className="overflow-x-auto bg-white mt-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial no.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user?.role !== "admin" ? (
                    <button className="btn btn-xs btn-secondary">
                      make Admin
                    </button>
                  ) : (
                    " Already Admin"
                  )}
                </td>
                <td>
                  <button className="btn-xs btn btn-outline btn-error">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
