import Link from "next/link"
import { sailorsRegular, sneakoutRegular } from "../styles/fonts"

export default function Navbar() {
    return (
        <nav className="sticky">
            <div className={`flex flex-row justify-between items-center mt-4 mx-10 ${sailorsRegular.className} bg-lightblue-500`}>
                <div className="space-x-10">
                    <Link href="/">About</Link>
                    <Link href="/sponsors">Sponsors</Link>
                    <Link href="/team">Team</Link>
                </div>
                <div>
                    <Link href="/" className={`${sneakoutRegular.className} text-5xl text-blue-500`}>Team Oregon</Link>
                </div>
                <div className="space-x-10">
                    <Link href="/join">Join The Team</Link>
                    <Link href="/contact">Contact Us</Link>
                </div>
            </div>
        </nav>
    )
}