'use client'

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react"
import Link from "next/link";
import Button from "./Button";

export default function AccountInfo() {
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
        console.log(memberStatus)
        memberStatusBadge = user.activeMember ? 
            <span className="bg-green-600 text-white-500 px-3 py-1 rounded-full">Current</span> 
            : 
            <span className="bg-red-500 text-white-500 px-3 py-1 rounded-full ">Expired</span>;
    }

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
            {memberStatus ?             
            <div className="flex flex-col gap-4">
                <p className="text-sm md:text-base">Looking to order a new kit? Visit the official <span><a className="font-semibold" href="https://biciclista.us/collections/team-oregon" target="_blank">Team Store</a></span> by Biciclista!</p>
                <p className="text-sm md:text-base">Members-only deals from our sponsors <span><Link className="font-semibold" href="/account/sponsor-deals">HERE</Link></span>!</p>
            </div>
            :
            <Link href="/account/pay">
                <Button text="Activate membership" />
            </Link>
            }

            <button 
                onClick={() => signOut()}
                className="w-fit flex h-10 px-4 py-2 items-center rounded-full bg-red-500 hover:bg-red-hover text-white-500 font-medium"
            >Log out
            </button>
        </div>
    )
}