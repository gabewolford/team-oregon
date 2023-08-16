'use client'

import Link from "next/link"
import WhiteLogo from "./WhiteLogo"
import { exo, sailorsRegular } from "../styles/fonts"
import PresentedBy from "./PresentedBy"
import { useSession } from 'next-auth/react'

export default function Footer() {
    const { data: session } = useSession()
    const isAuthenticated = session?.user

    return (
        <footer className={`${exo.className} flex flex-col w-full mx-auto px-10 py-5 md:py-10 sm:px-6 lg:px-8 bg-blue-500 absolute bottom-0`}>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                <div className="flex flex-col gap-4">
                    <WhiteLogo />
                    <PresentedBy color={'text-white-500'} display={'flex flex-row'}/>
                </div>
                {!isAuthenticated ? (
                    <div className={`${sailorsRegular.className} text-white-500 text-center justify-between flex flex-col md:flex-row md:w-[660px]`}>
                        <Link href="/">About</Link>
                        <Link href="/sponsors">Sponsors</Link>
                        <Link href="/team">Team</Link>
                        <Link href="/join">Join The Team</Link>
                        <Link href="/contact">Contact Us</Link>
                        <Link href="/login">Log In</Link>
                    </div>
                ) : (
                    <div className={`${sailorsRegular.className} text-white-500 text-center justify-between flex flex-col md:flex-row md:w-[660px]`}>
                        <Link href="/">About</Link>
                        <Link href="/sponsors">Sponsors</Link>
                        <Link href="/team">Team</Link>
                        <Link href="/contact">Contact Us</Link>
                        <Link href="/account">Account</Link>
                    </div>
                )}

            </div>
            <div className="w-full mt-4" >
                <h6 className="text-xs text-lightblue-500 text-center">© 2023 Team Oregon. All Rights Reserved.</h6>
            </div>
        </footer>
    )
}