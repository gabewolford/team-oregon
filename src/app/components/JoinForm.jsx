'use client'

import {  useState } from "react"
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "./Button";

export default function JoinForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setName(firstName + " " + lastName)
    
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
          setError("All fields are required");
          return;
        }
    
        try {
            
            const resUserExists = await fetch("api/userExists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            })

            const { user } = await resUserExists.json();

            if (user) {
                setError("An account with that email already exists");
                return;
            }

            const res = await fetch("api/join", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password,
                confirmPassword
            }),
            });

            if (res.ok) {
                const form = e.target;
                form.reset();
                setError("");
                router.push("/join/pay");
            } else {
                console.log("User registration failed.");
            }
        } catch (error) {
            console.log("Error during registration: ", error);
        }
    };

    return (
        <div className="mx-auto w-full md:w-3/4 lg:w-1/2">
            <form 
                className="grid gap-6 grid-cols-1 md:grid-cols-2"
                onSubmit={handleSubmit}
            >
                <div className="col-span-2">
                    <label className="text-xs">First name <span>*</span></label>
                    <input 
                        type="text"
                        placeholder="First name"
                        className="border-2 border-blue-500 rounded-lg p-2 w-full"
                        onChange={e => setFirstName(e.target.value)}
                    />
                </div>

                <div className="col-span-2">
                    <label className="text-xs">Last name <span>*</span></label>
                    <input 
                        type="text"
                        placeholder="Last name"
                        className="border-2 border-blue-500 rounded-lg p-2 w-full"
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>

                <div className="col-span-2">
                    <label className="text-xs">Email <span>*</span></label>
                    <input 
                        type="text"
                        placeholder="Email"
                        className="border-2 border-blue-500 rounded-lg p-2 w-full"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="col-span-2">
                    <label className="text-xs">Password <span>*</span></label>
                    <input 
                        type="password"
                        placeholder="Password"
                        className="border-2 border-blue-500 rounded-lg p-2 w-full"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <div className="col-span-2">
                    <label className="text-xs">Confirm password <span>*</span></label>
                    <input 
                        type="password"
                        placeholder="Password"
                        className="border-2 border-blue-500 rounded-lg p-2 w-full"
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                </div>

                <div className="col-span-2 relative">
                    {error && (
                    <div className="bg-red-500 text-white-500 px-2 py-1 flex justify-start items-center rounded-lg font-medium absolute left-0">{error}</div>
                    )}
                    <div className="absolute right-0 col-span-2">
                        <Button
                            text="Continue"
                            type="submit"
                        >
                        </Button>
                    </div>
                </div>

                <div className="flex col-span-2 mt-8 justify-end">
                    <p className="flex justify-end col-span-2">Already have an account?&nbsp;
                        <span>
                        <Link
                            href="/login"
                            className="underline font-medium hover:text-yellow-500"
                        >Log in here
                        </Link>
                        </span>
                    </p>
                </div>

            </form>
        </div>
  )
}
