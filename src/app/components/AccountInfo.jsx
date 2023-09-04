'use client'

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react"
import Link from "next/link";
import Button from "./Button";

export default function AccountInfo() {
    let formattedDate

    const { data: session } = useSession();

    if (session) {
        const parsedDate = new Date(session.user.createdAt);
        const year = parsedDate.getUTCFullYear();
        const month = String(parsedDate.getUTCMonth() + 1).padStart(2, "0");
        const day = String(parsedDate.getUTCDate()).padStart(2, "0");

        formattedDate = `${month}-${day}-${year}`;
    }

    return (
        <>
            <div className="flex flex-col gap-4 md:w-1/2 mx-auto my-10">
                <p>First Name: <span className="font-semibold">{session?.user?.firstName}</span></p>
                <p>Last Name: <span className="font-semibold">{session?.user?.lastName}</span></p>
                <p>Email: <span className="font-semibold">{session?.user?.email}</span></p>
                <p>Account created: <span className="font-semibold">{formattedDate}</span></p>
                <p>Account status: <span className="font-semibold">Inactive</span></p>
                <Link href="/account/pay">
                    <Button text="Activate membership" />
                </Link>
                <button 
                    onClick={() => signOut()}
                    className="w-fit flex h-10 px-4 py-2 items-center rounded-full bg-red-500 hover:bg-red-hover text-white-500 font-medium"
                >Log out
                </button>
            </div>

            <div className="flex flex-col gap-4 md:w-1/2 mx-auto">
                <p>Looking to order a new kit? Visit the official <span><a className="font-semibold" href="https://biciclista.us/collections/team-oregon" target="_blank">Team Store</a></span> by Biciclista!</p>
                <p>Members-only deals from our sponsors <span><Link className="font-semibold" href="/account/sponsor-deals">HERE</Link></span>!</p>
            </div>

        </>
    )
}