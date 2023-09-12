'use client'

import { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            setLoading(true);
            const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
            });
    
            if (res.error) {
                setError("Invalid email or password");
                return;
            }
            router.replace('/account');
        } catch (error) {
            setLoading(false);
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-auto w-full h-full flex flex-col">
            <div className="flex flex-col gap-6">
                <div className="lg:pl-10">
                    <h2 className='text-center text-2xl lg:text-3xl text-blue-500 font-semibold uppercase mb-2'>Member Log In</h2>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:pl-10">
                <div className="col-span-2">
                    <label className="text-xs">Email <span>*</span></label>
                    <input 
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="Email"
                        className="border-2 border-blue-500 rounded-lg p-1 w-full"
                    />
                </div>

                <div className="col-span-2">
                    <label className="text-xs">Password <span>*</span></label>
                    <input 
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        className="border-2 border-blue-500 rounded-lg p-1 w-full"
                    />
                </div>

                <div className="col-span-2 relative">
                    {error && (
                    <div className="bg-red-500 text-white-500 px-2 py-1 flex justify-start items-center rounded-lg font-medium absolute left-0">{error}</div>
                    )}
                    <div className="absolute right-0 col-span-2">
                    {isLoading ?
                            <Button
                                text="Logging in..."
                                type="submit"
                                disabled={isLoading}
                            >
                            </Button> 
                            : 
                            <Button
                                text="Log In"
                                type="submit"
                                disabled={isLoading}
                            >
                            </Button> 
                        }
                    </div>
                </div>

                <p className="flex justify-end col-span-2 mt-8">Don't have an account yet?&nbsp;
                    <span>
                        <Link
                            href="/join"
                            className="underline font-medium hover:text-yellow-500"
                        >Sign up here
                        </Link>
                    </span>
                </p>
            </form>
        </div>
  )
}
