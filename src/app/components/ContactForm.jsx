'use client'

import { useRef, useState } from "react";
import { useRouter } from 'next/navigation';
import Spinner from "./Spinner";
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
        <>
            {!isLoading && (
            <div className="mx-auto w-full md:w-3/4 lg:w-1/2">
                <p className="mb-6 text-center">Please fill out the form below.</p>
                    <h6 className="flex justify-end text-xs">* required</h6>
                    <form ref={form} onSubmit={sendEmail} className="grid gap-6 grid-cols-1 md:grid-cols-2 bg-blue500">
                        <div className="col-span-2">
                            <label className="text-xs">Name <span>*</span></label>
                            <input 
                                type="text"
                                placeholder="First and last name"
                                name="user_name" 
                                className="border-2 border-blue-500 rounded p-2 w-full"
                                required
                            />
                        </div>

                        <div className="col-span-2">
                            <label className="text-xs">Email <span>*</span></label>
                            <input 
                                type="email"
                                placeholder="Email address"
                                name="user_email"
                                className="border-2 border-blue-500 rounded p-2 w-full"
                                required
                            />
                        </div>

                        <div className="col-span-2">
                            <label className="text-xs">Inquiry Type <span>*</span></label><br/>
                            <select 
                                name="inquiry_type" 
                                className="border-2 border-blue-500 rounded p-2 w-full"
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
                                className="border-2 border-blue-500 rounded p-1 min-h-[150px] h-max w-full mt-1"
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

            {isLoading && <div className="flex mx-auto w-full justify-center py-8"><Spinner/></div>}
        </>
    )
}