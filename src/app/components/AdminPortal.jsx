"use client";

import { getSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import UserStatus from "./UserStatus";

export default function AdminPortal() {
  const [userListData, setUserListData] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [filterName, setFilterName] = useState("");
  const [activeMemberFilter, setActiveMemberFilter] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

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
          body: JSON.stringify({
            page: currentPage,
            itemsPerPage,
            filterName,
            activeMember: activeMemberFilter,
          }),
        });
        const response = await result.json();
        setUserListData(response.users);
        setTotalUsers(response.totalUsers);
      }
    }
  };

  const generateTable = () => {
    if (isLoading) {
      return (
        <div className="flex h-[300px] justify-center items-center">
          <Spinner />
        </div>
      );
    }
    return (
      <table className="text-sm md:text-base">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th className="md:w-[100px]">Status</th>
          </tr>
        </thead>
        <tbody>
          {userListData.map((user, index) => (
            <tr key={index}>
              <td>{`${user.firstName} ${user.lastName}`}</td>
              <td>{user.email}</td>
              <td>
                <UserStatus activeMember={user.activeMember} />
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

  const handleActiveMemberFilter = (isActiveMember) => {
    setActiveMemberFilter(isActiveMember);
    setCurrentPage(1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await getUsers();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage, itemsPerPage, filterName, activeMemberFilter]);

  return (
    <div className="flex flex-col gap-4 md:w-[650px] mx-auto my-4 md:my-10">
      <div className="flex flex-row gap-6">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="filter">Filter by Name:</label>
          <input
            type="text"
            id="filter"
            value={filterName}
            onChange={handleFilterChange}
            className={"border-2 border-blue-500 rounded-lg p-1 w-full"}
          />
        </div>

        <div className="hidden md:flex flex-col gap-2 md:w-fit">
          <label htmlFor="filter">Filter by Status:</label>
          <div className="flex flex-row">
            <button
              className="mr-1"
              onClick={() => handleActiveMemberFilter(true)}
            >
              <UserStatus
                activeMember={true}
                currentSelected={activeMemberFilter}
              />
            </button>
            <button onClick={() => handleActiveMemberFilter(false)}>
              <UserStatus
                activeMember={false}
                currentSelected={!activeMemberFilter}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full md:hidden">
        <label htmlFor="filter">Filter by Status:</label>
        <div className="flex flex-row">
          <button
            className="mr-1"
            onClick={() => handleActiveMemberFilter(true)}
          >
            <UserStatus
              activeMember={true}
              currentSelected={activeMemberFilter}
            />
          </button>
          <button onClick={() => handleActiveMemberFilter(false)}>
            <UserStatus
              activeMember={false}
              currentSelected={!activeMemberFilter}
            />
          </button>
        </div>
      </div>

      <label className="max-w-fit">Count: {totalUsers}</label>

      {generateTable()}

      {!isLoading && (
        <div className="flex flex-row justify-end items-end gap-1">
          <button
            className={`flex h-10 px-4 py-2 items-center rounded-full ${
              currentPage === 1
                ? "bg-gray-400"
                : "bg-blue-500 hover:bg-blue-hover"
            } text-white-500 font-medium`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <button
            className={`flex h-10 px-4 py-2 items-center rounded-full ${
              userListData.length < itemsPerPage
                ? "bg-gray-400"
                : "bg-blue-500 hover:bg-blue-hover"
            } text-white-500 font-medium`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={userListData.length < itemsPerPage}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
