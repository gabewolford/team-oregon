'use client'

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react"

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
            <div className="flex flex-col gap-4 md:w-1/2 mx-auto">
                <p>First Name: <span className="font-semibold">{session?.user?.firstName}</span></p>
                <p>Last Name: <span className="font-semibold">{session?.user?.lastName}</span></p>
                <p>Email: <span className="font-semibold">{session?.user?.email}</span></p>
                <p>Member Since: <span className="font-semibold">{formattedDate}</span></p>
                <button 
                    onClick={() => signOut()}
                    className="w-fit flex h-10 px-4 py-2 items-center rounded-full bg-red-500 hover:bg-red-hover text-white-500 font-medium"
                >Log out
                </button>
            </div>

        </>
    )
}