"use client";

import { getSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function AdminPortal() {
  const [userListData, setUserListData] = useState([]);

  const getUsers = async () => {
    const session = await getSession();
    if (session) {
      const { user } = session;
      if (user.isAdmin) {
        const result = await fetch("api/getUsers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const response = await result.json();

        setUserListData(response.user);
      }
    }
  };

  const generateTable = () => {
    return (
      <table className="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {userListData.map((user, index) => (
            <tr key={index}>
              <td>{`${user.firstName} ${user.lastName}`}</td>
              <td>{user.email}</td>
              <td>{user.activeMember ? 
                  (
                    <span className="bg-green-600 text-white-500 px-3 py-1 rounded-full">
                      Current
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white-500 px-3 py-1 rounded-full ">
                      Expired
                    </span>
                  )}
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  useEffect(() => {
    getUsers().catch(console.error);
  }, []);

  return (
    <div className="flex flex-col gap-4 md:w-1/2 mx-auto my-4 md:my-10">
      {generateTable()}
    </div>
  );
}
