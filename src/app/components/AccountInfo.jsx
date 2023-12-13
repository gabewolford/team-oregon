'use client'

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react"
import Button from "./Button";
import { useState } from "react";
import PayPalButton from "./PayPal/PayPalButton";

export default function AccountInfo() {
    const [showMembershipSelection, setShowMembershipSelection] = useState(false); 
    const [selectedAmount, setSelectedAmount] = useState(65);
    const [showPaypalButtons, setShowPaypalButtons] = useState(false);

    const handleShowMembershipAmounts = () => {
        setShowMembershipSelection(true);
    }; 

    const handleAmountSelection = (amount) => {
        setSelectedAmount(amount);
    };

    const handleshowPaypalButtons = () => {
        setShowPaypalButtons(true);
        setShowMembershipSelection(false);
    }

    let firstName, lastName, email, accountCreatedDate, memberStatus, memberStatusBadge, membershipPurchaseDate, membershipExpirationDate

    const { data: session } = useSession();

    const formatDate = (dateString) => {
        if (!dateString) return '';
    
        const parsedDate = new Date(dateString);
        const year = parsedDate.getUTCFullYear();
        const month = String(parsedDate.getUTCMonth() + 1).padStart(2, "0");
        const day = String(parsedDate.getUTCDate()).padStart(2, "0");
        return `${month}-${day}-${year}`;
    };

    if (session) {
        const { user } = session;
        firstName = user.firstName;
        lastName = user.lastName;
        email = user.email;
        accountCreatedDate = formatDate(user.createdAt);
        membershipPurchaseDate = formatDate(user.membershipPurchaseDate);
        membershipExpirationDate = formatDate(user.membershipExpirationDate);
        memberStatus = user.activeMember
        memberStatusBadge = user.activeMember ? 
            <span className="bg-green-600 text-white-500 px-3 py-1 rounded-full">Current</span> 
            : 
            <span className="bg-red-500 text-white-500 px-3 py-1 rounded-full ">Expired</span>;
    }

    const expiryDate = (timestamp) => {
        const expiry = new Date(timestamp.getFullYear, 11, 31);
        console.log("Timestamp year" + timestamp.getFullYear)

        // Membership will expire on December 31 of the next calendar year if purchased after September 31
        if (timestamp && timestamp.getUTCMonth > 9) {
            console.log("Timestamp year:")
            console.log(timestamp.getFullYear + 1)
            expiry.setFullYear(timestamp.getFullYear + 1)
        }
        // Membership will expire on December 31 of the current year if purchased before September 31
        else{
            expiry.setFullYear(timestamp.getFullYear)
        }
        console.log("Expiry date:")
        console.log(expiry)
        return expiry
    }

    const handlePayPalApproval = () => {

        try{
            fetch("api/updateUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                     email, activeMember: true, 
                     membershipPurchaseDate: Date.now, 
                     membershipExpirationDate: expiryDate(Date.now)
                    }),
            })
        }
        catch (error) {
            console.log("Error occurred while updating user: ", error);
        }
    }; 

    return (
        <div className="flex flex-col gap-4 md:w-1/2 mx-auto my-4 md:my-10">
            <table>
                <tr>
                    <td className="text-sm md:text-base font-semibold">First name</td>
                    <td className="text-sm md:text-base">{firstName}</td>
                </tr>
                <tr>
                    <td className="text-sm md:text-base font-semibold">Last name</td>
                    <td className="text-sm md:text-base">{lastName}</td>
                </tr>
                <tr>
                    <td className="text-sm md:text-base font-semibold">Email</td>
                    <td className="text-sm md:text-base">{email}</td>
                </tr>
                <tr>
                    <td className="text-sm md:text-base font-semibold">Account created</td>
                    <td className="text-sm md:text-base">{accountCreatedDate}</td>
                </tr>
                <tr>
                    <td className="text-sm md:text-base font-semibold">Account status</td>
                    <td className="text-sm md:text-base">{memberStatusBadge}</td>
                </tr>
                {membershipPurchaseDate && 
                    <tr>
                        <td className="text-sm md:text-base font-semibold">Membership start</td>
                        <td className="text-sm md:text-base">{membershipPurchaseDate}</td>
                    </tr>}
                {membershipExpirationDate &&
                    <tr>
                        <td className="text-sm md:text-base font-semibold">Membership expiration</td>
                        <td className="text-sm md:text-base">{membershipExpirationDate}</td>
                    </tr>
                }
            </table>

            {memberStatus ? (
                <div className="flex flex-col gap-4">
                <p className="text-sm md:text-base">
                    Looking to order a new kit? Visit the official{' '}
                    <span>
                    <a className="font-semibold" href="https://biciclista.us/collections/team-oregon" target="_blank">
                        Team Store
                    </a>
                    </span>{' '}
                    by Biciclista!
                </p>
                <p className="text-sm md:text-base">
                    Members-only deals from our sponsors{' '}
                    <span>
                    <a className="font-semibold" href="/account/sponsor-deals">
                        HERE
                    </a>
                    </span>
                    !
                </p>
                </div>
            ) : (
                <div>
                    {showMembershipSelection && !showPaypalButtons ? (
                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl">Please select your membership:</h3>
                            <div className="flex flex-row gap-4">
                                <label
                                    className={`bg-blue-500 hover.bg-blue-hover h-[150px] w-1/2 p-4 rounded-xl cursor-pointer text-center flex justify-center items-center border-4 ${
                                        selectedAmount === 65 ? 'border-green-500 bg-blue-hover' : 'border-white-500'
                                    }`}
                                    onClick={() => handleAmountSelection(65)}
                                >
                                    <div>
                                        <p className="text-white-500 text-base md:text-xl pb-1 font-medium">Regular</p>
                                        <p className="text-white-500 text-xl md:text-4xl font-bold">$65</p>
                                    </div>
                                </label>
                            
                                <label
                                    className={`bg-blue-500 hover.bg-blue-hover h-[150px] w-1/2 p-4 rounded-xl cursor-pointer text-center flex justify-center items-center border-4 ${
                                        selectedAmount === 10 ? 'border-green-500 bg-blue-hover' : 'border-white-500'
                                    }`}
                                    onClick={() => handleAmountSelection(10)}
                                >
                                    <div>
                                        <p className="text-white-500 text-base md:text-xl pb-1 font-medium">Discounted</p>
                                        <p className="text-white-500 text-xl md:text-4xl font-bold">$10</p>
                                    </div>
                                </label>
                            </div>

                            <div className="flex justify-end">
                                <Button text="Continue to payment" onClick={handleshowPaypalButtons} />
                            </div>
                        </div>
                    ) : (
                        <div>
                            {showPaypalButtons ? (
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-xl">Please complete payment through PayPal:</h3>
                                    <PayPalButton amount={selectedAmount} onApprove={handlePayPalApproval}/>
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
            >Log out
            </button>
        </div>
    )
}