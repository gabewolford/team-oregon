"use client";

import { getSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Button from "./Button";
import Spinner from "./Spinner";

export default function AdminPortal() {
  const [userListData, setUserListData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [filterName, setFilterName] = useState("");
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    try {
      setLoading(true); // Set loading to true before fetching data
      const session = await getSession();
      if (session) {
        const { user } = session;
        if (user.isAdmin) {
          const result = await fetch("api/getUsers", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              page: currentPage,
              itemsPerPage,
              filterName,
            }),
          });
          const response = await result.json();
          setUserListData(response.user);
        }
      }
    } finally {
      setLoading(false);
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
              <td className="text-center">
                {user.activeMember ? (
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

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleFilterChange = (e) => {
    setFilterName(e.target.value);
  };

  useEffect(() => {
    getUsers().catch(console.error);
  }, [currentPage, itemsPerPage, filterName]);

  return (
    <div className="flex flex-col gap-4 md:w-1/2 mx-auto my-4 md:my-10">
      <div>
        <label htmlFor="filter">Filter by Name:</label>
        <input
          type="text"
          id="filter"
          value={filterName}
          onChange={handleFilterChange}
          className={"border-2 border-blue-500 rounded-lg p-1 w-full"}
        />
      </div>
      {loading ? (
        <div className="flex items-center justify-center h-[310px]">
          <Spinner />
        </div>
      ) : (
        generateTable()
      )}
      <div className="flex flex-row justify-end items-end">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          text="Previous"
        />
        <div className="m-1" />
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={userListData.length < itemsPerPage}
          text="Next"
        />
      </div>
    </div>
  );
}
