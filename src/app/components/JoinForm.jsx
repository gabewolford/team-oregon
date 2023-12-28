"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import emailjs from "@emailjs/browser";

export default function JoinForm() {

  const form = useRef();
  useEffect(() => {
    AOS.init({
      // add options if needed
    });
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [activeMember] = useState(false);
  const [isAdmin] = useState(false);
  const [membershipPurchaseDate] = useState(null);
  const [membershipExpirationDate] =
    useState(null);
  const [isNewMember, setNewMember] = useState(false);

  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const router = useRouter();

  const handleConfirmPasswordChange = (e) => {
    const confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);
    setPasswordMatch(password === confirmPasswordValue);
  };

  const sendWelcomeEmail = (userEmail) => {

    if (!isNewMember) return;

    const templateParams = {
      to_email: userEmail
    };
  
    emailjs
      .send(
        "service_0o01dto",
        "team_o_new_member_welcome",
        templateParams,
        "GLjJJKxGwW-an5Tep"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  const sendAdminEmail = (e) => {
    e.preventDefault();

    if (!isNewMember) return;

    emailjs
      .sendForm(
        "service_0o01dto",
        "team_o_new_member_form",
        form.current,
        "GLjJJKxGwW-an5Tep"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (!passwordMatch) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

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
          confirmPassword,
          activeMember,
          isAdmin,
          membershipPurchaseDate,
          membershipExpirationDate,
        }),
      });

      if (res.ok) {
        sendAdminEmail();
        sendWelcomeEmail(email); 
        form.current.reset();
        setError("");
        router.push("/login");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      setLoading(false);
      console.log("Error during registration: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full h-full flex flex-col gap-6">
      <div className="lg:pt-6 flex flex-col gap-6">
        <div className="lg:pl-10">
          <h2 className="text-center text-2xl lg:text-3xl text-blue-500 font-semibold uppercase mb-2">
            Join Today!
          </h2>
          <div className="w-full mx-auto">
            <p className="text-sm md:text-base">
              Team Oregon is proud to welcome cyclists of ALL backgrounds,
              disciplines, and abilities. Whether you are an experienced racer
              or are thinking of pinning on a race number for the first time
              this season, we would love to support your goals as a member of
              our team.
            </p>
          </div>
        </div>

        <form
          ref={form}
          className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:pl-10"
          onSubmit={handleSubmit}
        >
          <div className="col-span-2 md:col-span-1">
            <label className="text-xs">
              First name <span>*</span>
            </label>
            <input
              type="text"
              placeholder="First name"
              className="border-2 border-blue-500 rounded-lg p-1 w-full"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="col-span-2 md:col-span-1">
            <label className="text-xs">
              Last name <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Last name"
              className="border-2 border-blue-500 rounded-lg p-1 w-full"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="col-span-2">
            <label className="text-xs">
              Email <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Email"
              className="border-2 border-blue-500 rounded-lg p-1 w-full"
              onChange={(e) => setEmail(e.target.value.toLowerCase())}
            />
          </div>

          <div className="col-span-2 md:col-span-1">
            <label className="text-xs">
              Password <span>*</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="border-2 border-blue-500 rounded-lg p-1 w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="col-span-2 md:col-span-1">
            <label className="text-xs">
              Confirm password <span>*</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className={`border-2 border-blue-500 rounded-lg p-1 w-full ${
                passwordMatch ? "" : "border-red-500"
              }`}
              onChange={handleConfirmPasswordChange}
            />
          </div>

          <div className="col-span-2 md:col-span-1">
            <label className="text-xs">
              New to Team Oregon? <span>*</span>
            </label>
            <select
              className="border-2 border-blue-500 rounded-lg p-1 w-full focus:outline-none focus:border-blue-500"
              onChange={(e) => setNewMember(e.target.value === "new")}
            >
              <option value="new">Returning Member</option>
              <option value="returning">New Member</option>
            </select>
          </div>

          <div className="col-span-2 relative mt-6 items-center flex">
            {error && (
              <div className="bg-red-500 text-white-500 text-xs px-2 py-1 flex justify-start items-center rounded-lg font-medium absolute left-0">
                {error}
              </div>
            )}
            <div className="absolute right-0 col-span-2">
              <Button
                text={isLoading ? "Loading..." : "Continue"}
                type="submit"
                disabled={isLoading || !passwordMatch}
              />
            </div>
          </div>

          <div className="flex col-span-2 mt-6 justify-end">
            <p className="flex justify-end col-span-2">
              Already have an account?&nbsp;
              <span>
                <Link
                  href="/login"
                  className="underline font-medium hover:text-yellow-500"
                >
                  Log in here
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>

      <div className="bg-yellow-500 border-2 border-yellow-500 px-6 md:px-10 py-6 flex flex-col gap-4 flex-1 justify-center">
        <h4 className="font-semibold text-lg lg:text-2xl text-darkbrown-500">
          Membership benefits
        </h4>
        <div
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-once="true"
          data-aos-offset="50"
          className="flex flex-col gap-2"
        >
          <div className="flex flex-row gap-4 h-fit w-auto items-center">
            <Image
              height={24}
              width={24}
              alt="dollar sign"
              src="/images/percent-outline.png"
              className="w-fit h-fit"
            />
            <p className="text-darkbrown-500">
              Discounted products & services from our sponsors
            </p>
          </div>
          <div className="flex flex-row gap-4 h-fit w-auto items-center">
            <Image
              height={24}
              width={24}
              alt="dollar sign"
              src="/images/currency-usd.png"
              className="w-fit h-fit"
            />
            <p className="text-darkbrown-500">
              Reimbursement on entry fees for select races
            </p>
          </div>
          <div className="flex flex-row gap-4 h-fit w-auto items-center">
            <Image
              height={24}
              width={24}
              alt="dollar sign"
              src="/images/heart-multiple-outline.png"
              className="w-fit h-fit"
            />
            <p className="text-darkbrown-500">
              Awesome teammates who show up to race & support!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
