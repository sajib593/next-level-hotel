"use client"
import React from 'react';
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const Page = () => {
    const router = useRouter();

    const handleLogin = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        const resp = await signIn('credentials', {
            email,
            password,
            redirect: false,
        });

        if (resp?.error) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Invalid email or password. Please try again.',
                showConfirmButton: false,
                timer: 1500,
            });
        } else if (resp?.status === 200) {
            router.push('/');  // Redirect to home on successful login
        } else {
            // Fallback error handling in case of unexpected response
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Login failed. Please try again later.',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-base-200">
            <div className="w-full max-w-md p-8 space-y-6 shadow-lg bg-white rounded-lg">
                <h2 className="text-2xl font-bold text-center text-primary">Welcome Back</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
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
                            placeholder="Your Password"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary w-full">
                            Log In
                        </button>
                    </div>
                </form>
                <p className="text-center">
                    Don’t have an account? <a href="/signup" className="text-primary">Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default Page;
