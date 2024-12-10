"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";
import { signIn } from "next-auth/react";  // Import signIn from next-auth

const Page = () => {
    const router = useRouter();

    const handleSignup = async (event) => {
        event.preventDefault();
        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
        };

        // Proceed with the signup request
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/signup/api`, {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "content-type": "application/json",
            },
        });

        if (response.status === 409) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "User already exists. Please use a different email.",
                showConfirmButton: false,
                timer: 1500,
            });
            return; // Exit from the signup process
        }

        if (response.status === 200) {
            const data = await response.json(); // Assuming the API returns user data like `name` and `email`

            // Save user data in localStorage
            localStorage.setItem("user", JSON.stringify(data.user));

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully Registered! Redirecting...",
                showConfirmButton: false,
                timer: 1500,
            });

            // Automatically log in the user after successful signup
            const loginResponse = await signIn("credentials", {
                email: newUser.email,
                password: newUser.password,
                redirect: false,
            });

            if (loginResponse?.status === 200) {
                // Redirect to home page after successful login
                router.push("/");
            } else {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Login failed. Please try again.",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } else {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Signup failed. Try again.",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-base-200">
            <div className="w-full max-w-md p-8 space-y-6 shadow-lg bg-white rounded-lg">
                <h2 className="text-2xl font-bold text-center text-primary">Create an Account</h2>
                <form onSubmit={handleSignup} className="space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Your name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary w-full">
                            Sign Up
                        </button>
                    </div>
                </form>
                <p className="text-center">
                    Already have an account? <Link href="/login" className="text-primary">Log in</Link>
                </p>
            </div>
        </div>
    );
};

export default Page;
