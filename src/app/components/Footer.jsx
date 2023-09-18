'use client'

import Link from "next/link"
import Image from "next/image"
import { exo, sailorsRegular } from "../styles/fonts"
import PresentedBy from "./PresentedBy"
import { useSession } from 'next-auth/react'
import whiteLogo from "../../../public/images/team-oregon-logo-white.png"

export default function Footer() {
    const { data: session } = useSession()
    const isAuthenticated = session?.user

    return (
        <footer className={`${exo.className} flex flex-col w-full mx-auto px-10 py-5 md:py-10 sm:px-6 lg:px-8 bg-blue-500 absolute bottom-0`}>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                <div className="flex flex-col gap-4">
                    <Image
                     src={whiteLogo}
                     className="w-[260px] h-auto"
                     alt="team oregon logo"
                    >
                    </Image>
                    <PresentedBy color={'text-white-500'} display={'flex flex-row'}/>
                </div>
                {!isAuthenticated ? (
                    <div className={`${sailorsRegular.className} text-white-500 text-base text-center justify-between flex flex-col md:flex-row md:w-[660px]`}>
                        <Link href="/">Home</Link>
                        <Link href="/sponsors">Sponsors</Link>
                        <Link href="/team">Team</Link>
                        <Link href="/join">Join The Team</Link>
                        <Link href="/contact">Contact Us</Link>
                        <Link href="/login">Log In</Link>
                    </div>
                ) : (
                    <div className={`${sailorsRegular.className} text-white-500 text-base text-center justify-between flex flex-col md:flex-row md:w-[660px]`}>
                        <Link href="/">Home</Link>
                        <Link href="/sponsors">Sponsors</Link>
                        <Link href="/team">Team</Link>
                        <Link href="/contact">Contact Us</Link>
                        <Link href="/account">My Account</Link>
                    </div>
                )}

            </div>
            <div className="flex justify-center lg:justify-end w-full mt-4">
                <p className="text-xs text-white-500 text-center">© 2023 Team Oregon. All Rights Reserved.</p>
            </div>
            <div className="flex justify-center lg:justify-end w-full mt-2">
                <p className="text-xs text-white-500 text-center">Designed and developed by <a href="https://biiigstretch.studio" target="_blank" className="hover:text-yellow-500">Biiig Stretch Studio.</a></p>
            </div>
        </footer>
    )
}