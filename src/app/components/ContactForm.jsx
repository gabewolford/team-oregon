'use client'

import { useRef, useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import Button from "./Button";

export default function ContactForm() { 
    const [isLoading, setIsLoading] = useState(false);

    const form = useRef();
    const router = useRouter();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        emailjs.sendForm("service_0o01dto","team_o_contact_form", form.current, 'GLjJJKxGwW-an5Tep')
          .then((result) => {
              console.log(result.text);
              setIsLoading(false);
          }, (error) => {
              console.log(error.text);
              setIsLoading(false);
          });

        e.target.reset()
        router.push('/contact/confirmation');
      };

    return (
        <div className="mx-auto w-full h-full flex flex-col gap-6">
            <div className="lg:pt-6 flex flex-col gap-6">
                <div className="lg:pl-10">
                    <h2 className='text-center text-2xl lg:text-3xl text-blue-500 font-semibold uppercase mb-2'>Get In Touch</h2>
                    <div className="w-full mx-auto">
                        <p className="text-sm md:text-base text-center">Please fill out the form below.</p>
                    </div>
                </div>
            </div>

            {!isLoading && (
            <div className="mx-auto w-full lg:pl-10">
                    <form ref={form} onSubmit={sendEmail} className="grid gap-4 grid-cols-1 md:grid-cols-2 bg-blue500">
                        <div className="col-span-2">
                            <label className="text-xs">Full Name <span>*</span></label>
                            <input 
                                type="text"
                                placeholder="Your name"
                                name="user_name" 
                                className="border-2 border-blue-500 rounded-lg p-1 w-full"
                                required
                            />
                        </div>

                        <div className="col-span-2">
                            <label className="text-xs">Email <span>*</span></label>
                            <input 
                                type="email"
                                placeholder="Email address"
                                name="user_email"
                                className="border-2 border-blue-500 rounded-lg p-1 w-full"
                                required
                            />
                        </div>

                        <div className="col-span-2">
                            <label className="text-xs">Inquiry Type <span>*</span></label><br/>
                            <select 
                                name="inquiry_type" 
                                className="border-2 border-blue-500 rounded-lg p-1 w-full"
                                required>
                                    <option value="Select One">Select One</option>
                                    <option value="Membership">Membership</option>
                                    <option value="Sponsorship">Sponsorship</option>
                                    <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="col-span-2">
                            <label className="text-xs">Message <span>*</span></label>
                            <textarea 
                                name="user_message" 
                                className="border-2 border-blue-500 rounded-lg p-1 min-h-[150px] h-max w-full mt-1"
                                maxLength={500}
                                placeholder="Your message here"
                                required
                            />
                        </div>

                        <div className="flex justify-end col-span-2">
                            <button 
                                className="flex h-10 px-4 py-2 items-center rounded-full bg-blue-500 hover:bg-blue-hover text-white-500 font-medium"
                                type="submit" 
                                value="Send" 
                            >Send Message
                            </button>
                        </div>
                    </form>
            </div>
            )}

            <div className="bg-yellow-500 border-2 border-yellow-500 px-6 md:px-10 py-6 flex flex-col gap-4 flex-1 justify-center">
                <h4 className="font-semibold text-lg lg:text-2xl text-darkbrown-500">Membership benefits</h4>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-4 h-fit w-auto items-center">
                        <Image height={24} width={24} alt="dollar sign" src="/images/percent-outline.png" className="w-fit h-fit"/>
                        <p className="text-darkbrown-500">Discounted products & services from our sponsors</p>
                    </div>
                    <div className="flex flex-row gap-4 h-fit w-auto items-center">
                        <Image height={24} width={24} alt="dollar sign" src="/images/currency-usd.png" className="w-fit h-fit"/>
                        <p className="text-darkbrown-500">Reimbursement on entry fees for select races</p>
                    </div>
                    <div className="flex flex-row gap-4 h-fit w-auto items-center">
                        <Image height={24} width={24} alt="dollar sign" src="/images/heart-multiple-outline.png" className="w-fit h-fit"/>
                        <p className="text-darkbrown-500">Awesome teammates who show up to race & support!</p>
                    </div>
                </div>
                <div className="w-fit mx-auto">
                    <Link href="/join">
                        <Button text="Join today"/>
                    </Link>

                </div>
            </div>
        </div>
    )
}