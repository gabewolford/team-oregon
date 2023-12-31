"use client";

import { signOut } from "next-auth/react";
import { getSession } from "next-auth/react";
import Button from "./Button";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import PayPalButton from "./PayPal/PayPalButton";
import UserStatus from "./UserStatus";
import Slack from "./Socials/Slack";
import Google from "./Socials/Google";

export default function AccountInfo() {
  const [showMembershipSelection, setShowMembershipSelection] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(65);
  const [showPaypalButtons, setShowPaypalButtons] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    accountCreatedDate: null,
    membershipPurchaseDate: null,
    membershipExpirationDate: null,
    memberStatus: false,
  });

  const handleShowMembershipAmounts = () => {
    setShowMembershipSelection(true);
  };

  const handleAmountSelection = (amount) => {
    setSelectedAmount(amount);
  };

  const handleshowPaypalButtons = () => {
    setShowPaypalButtons(true);
    setShowMembershipSelection(false);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";

    const parsedDate = new Date(dateString);
    const year = parsedDate.getUTCFullYear();
    const month = String(parsedDate.getUTCMonth() + 1).padStart(2, "0");
    const day = String(parsedDate.getUTCDate()).padStart(2, "0");
    return `${month}-${day}-${year}`;
  };

  const refreshUserData = async () => {
    const session = await getSession();
    if (session) {
      const { user } = session;

      const result = await fetch("api/getUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email }),
      });
      const response = await result.json();
      const userInfo = response.user || user;

      setUserData({
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
        accountCreatedDate: formatDate(userInfo.createdAt),
        membershipPurchaseDate: formatDate(userInfo.membershipPurchaseDate),
        membershipExpirationDate: formatDate(userInfo.membershipExpirationDate),
        memberStatus: userInfo.activeMember,
      });
    }
  };

  useEffect(() => {
    refreshUserData().catch(console.error);
  }, []);

  const expiryDate = (dateString) => {
    const parsedDate = new Date(dateString);
    var year = parsedDate.getUTCFullYear();

    // Membership will expire on December 31 of the NEXT calendar year if purchased after September 31
    if (parsedDate.getUTCMonth() > 8) {
      year += 1;
    }

    const expiryString = "December 31, " + year.toString();
    const expiryDate = new Date(expiryString);

    return new Date(expiryDate).toISOString();
  };

  const handlePayPalApproval = (actions) => {
    try {
      actions.order.capture().then((details) => {
        const name = details.payer.name.given_name;
        console.log(`Transaction completed by ${name}`);

        const currentDate = new Date().toISOString();
        fetch("api/updateUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userData.email,
            activeMember: true,
            membershipPurchaseDate: currentDate,
            membershipExpirationDate: expiryDate(currentDate),
          }),
        }).then((res) => {
          if (res.status === 200) {
            refreshUserData();
          }
        });
      });
    } catch (error) {
      console.log("Error occurred while updating user: ", error);
    }
  };

  const slackLink =
    "https://join.slack.com/t/team-oregon-racing/shared_invite/zt-29k1i9psh-XaraIMX~QC0Fbyx2MWyJyw";
  const googleLink = "https://groups.google.com/g/teamoregoncycling";

  return (
    <div className="flex flex-col gap-4 md:w-1/2 mx-auto my-4 md:my-10">
      {userData.memberStatus ? (
        <div className="flex flex-row justify-evenly">
          <div className="text-center py-4 lg:px-4">
            <a href={slackLink} target="_blank">
              <div
                className="p-2 bg-blue-500 hover:bg-blue-hover items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
                role="button"
              >
                <Slack color={"#e0e7ff"} />
                <span className="font-semibold mr-2 ml-4 text-left flex-auto">
                  Join Slack
                </span>
                <svg
                  className="fill-current opacity-75 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                </svg>
              </div>
            </a>
          </div>

          <div className="text-center py-4 lg:px-4">
            <a href={googleLink} target="_blank">
              <div
                className="p-2 bg-blue-500 hover:bg-blue-hover items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
                role="button"
              >
                <Google color={"#e0e7ff"} />
                <span className="font-semibold mr-2 ml-4 text-left flex-auto">
                  Google Group
                </span>
                <svg
                  className="fill-current opacity-75 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      ) : null}
      {userData.firstName ? (
        <table>
          <tbody>
            <tr>
              <td className="text-sm md:text-base font-semibold">First name</td>
              <td className="text-sm md:text-base">{userData.firstName}</td>
            </tr>
            <tr>
              <td className="text-sm md:text-base font-semibold">Last name</td>
              <td className="text-sm md:text-base">{userData.lastName}</td>
            </tr>
            <tr>
              <td className="text-sm md:text-base font-semibold">Email</td>
              <td className="text-sm md:text-base">{userData.email}</td>
            </tr>
            <tr>
              <td className="text-sm md:text-base font-semibold">
                Account created
              </td>
              <td className="text-sm md:text-base">
                {userData.accountCreatedDate}
              </td>
            </tr>
            <tr>
              <td className="text-sm md:text-base font-semibold">
                Account status
              </td>
              <td className="text-sm md:text-base">
                <div className="flex mr-auto">
                  <UserStatus activeMember={userData.memberStatus} />
                </div>
              </td>
            </tr>
            {userData.membershipPurchaseDate && (
              <tr>
                <td className="text-sm md:text-base font-semibold">
                  Membership start
                </td>
                <td className="text-sm md:text-base">
                  {userData.membershipPurchaseDate}
                </td>
              </tr>
            )}
            {userData.membershipExpirationDate && (
              <tr>
                <td className="text-sm md:text-base font-semibold">
                  Membership expiration
                </td>
                <td className="text-sm md:text-base">
                  {userData.membershipExpirationDate}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      ) : (
        <div className="flex items-center justify-center h-[310px]">
          <Spinner />
        </div>
      )}

      {userData.memberStatus ? null : (
        <div>
          {showMembershipSelection && !showPaypalButtons ? (
            <div className="flex flex-col gap-4">
              <h3 className="text-xl">Please select your membership:</h3>
              <div className="flex flex-row gap-4">
                <label
                  className={`bg-blue-500 hover.bg-blue-hover h-[150px] w-1/2 p-4 rounded-xl cursor-pointer text-center flex justify-center items-center border-4 ${
                    selectedAmount === 65
                      ? "border-green-500 bg-blue-hover"
                      : "border-white-500"
                  }`}
                  onClick={() => handleAmountSelection(65)}
                >
                  <div>
                    <p className="text-white-500 text-base md:text-xl pb-1 font-medium">
                      Regular
                    </p>
                    <p className="text-white-500 text-xl md:text-4xl font-bold">
                      $65
                    </p>
                  </div>
                </label>

                <label
                  className={`bg-blue-500 hover.bg-blue-hover h-[150px] w-1/2 p-4 rounded-xl cursor-pointer text-center flex justify-center items-center border-4 ${
                    selectedAmount === 10
                      ? "border-green-500 bg-blue-hover"
                      : "border-white-500"
                  }`}
                  onClick={() => handleAmountSelection(10)}
                >
                  <div>
                    <p className="text-white-500 text-base md:text-xl pb-1 font-medium">
                      Student
                    </p>
                    <p className="text-white-500 text-xl md:text-4xl font-bold">
                      $10
                    </p>
                  </div>
                </label>
              </div>

              {selectedAmount === 10 ? (
                <div
                  className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
                  role="alert"
                >
                  <p className="font-bold">Student Membership Selected</p>
                  <p>
                    Please continue only if you are a current student, or have
                    communicated with the Team Oregon Board about a need-based
                    membership fee adjustment.
                  </p>
                </div>
              ) : null}

              <div className="flex justify-end">
                <Button
                  text="Continue to payment"
                  onClick={handleshowPaypalButtons}
                />
              </div>
            </div>
          ) : (
            <div>
              {showPaypalButtons ? (
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl">
                    Please complete payment through PayPal:
                  </h3>
                  <PayPalButton
                    amount={selectedAmount}
                    onApprove={handlePayPalApproval}
                  />
                </div>
              ) : (
                <Button
                  text="Activate membership"
                  className="text-sm md:text-base"
                  onClick={handleShowMembershipAmounts}
                />
              )}
            </div>
          )}
        </div>
      )}

      <button
        onClick={() => signOut()}
        className="w-fit flex h-10 px-4 py-2 items-center rounded-full bg-red-500 hover:bg-red-hover text-white-500 font-medium"
      >
        Log out
      </button>
    </div>
  );
}
