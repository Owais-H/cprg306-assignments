"use client";
import React from "react";
import { useUserAuth } from "./_utils/auth-context.js";
import Link from "next/link";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="min-h-screen bg- text-center bg-emerald-500">
        <h1 className="font-bold text-3xl mb-12">Shopping List Application</h1>
      {user ? (
        <>
          <p className="text-lg mb-6">
            Welcome, {user.displayName || "Guest"} ({user.email || "Unknown"})
          </p>
          <button
            className="bg-black text-white border-none py-2 px-4 rounded cursor-pointer mt-4"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
          <Link
            href="/week-10/shopping-list"
            className="text-lg text-black hover:underline ml-4"
          >
            Continue to your Shopping List
          </Link>
        </>
      ) : (
        <button
          className="bg-black text-white border-none py-2 px-4 rounded cursor-pointer"
          onClick={handleSignIn}
        >
          Sign In with GitHub
        </button>
      )}
    </div>
  );
};

export default Page;