"use client";

import { getSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Button from "./Button";
import UserStatus from "./UserStatus";
import Spinner from "./Spinner";

export default function AdminPortal() {
  const [userListData, setUserListData] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [activeMemberFilter, setActiveMemberFilter] = useState(true);

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
                <td className="flex justify-center">
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
  };

  useEffect(() => {
    getUsers().catch(console.error);
  }, [currentPage, itemsPerPage, filterName, activeMemberFilter]);

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
      <div className="flex justify-between items-center">
        <label className="max-w-fit">Count: {totalUsers}</label>
        <div className="flex">
          <button className="mr-1" onClick={() => handleActiveMemberFilter(true)}>
            <UserStatus activeMember={true} currentSelected={activeMemberFilter}/>
          </button>
          <button onClick={() => handleActiveMemberFilter(false)}>
            <UserStatus activeMember={false} currentSelected={!activeMemberFilter}/>
          </button>
        </div>
      </div>
      {generateTable()}

      <div className="flex flex-row justify-end items-end">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          text="Previous"
        />
        <div className="m-0.5" />
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={userListData.length < itemsPerPage}
          text="Next"
        />
      </div>
    </div>
  );
}
