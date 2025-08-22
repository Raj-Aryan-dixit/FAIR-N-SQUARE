"use client";
import React from "react";
import { SignedOut, SignedIn, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";
import useStoreUser from "../hooks/use-store-user.js";
import BarLoader from "react-spinners/BarLoader"; 
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation.js";
import { Authenticated, Unauthenticated } from "convex/react";
import { Button } from "./ui/button.jsx";
import { LayoutDashboard } from "lucide-react";
const Header = () => {

const { isLoading } = useStoreUser();
const path = usePathname();
  return (
    <header className="fixed top-4 left-4 right-4 z-50 backdrop-blur-md bg-white/20 border border-white/20 shadow-lg rounded-2xl">
      <nav className="px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={"/logos/fairn.png"}
            alt="Fair-N-Square Logo"
            width={100}
            height={80}
            className="h-11 w-auto object-contain"
          />
        </Link>
        {path === "/" && (
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-white/90 hover:text-gray-400 font-medium transition-colors duration-200"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="ml-4 text-white/90 hover:text-gray-400 font-medium transition-colors duration-200"
            >
              How it works
            </Link>
          </div>
        )}

        <div className="flex items-center gap-4">
          <Authenticated>
            {/* Desktop button */}
            <Link
              href="/dashboard"
              className="hidden md:inline-flex items-center gap-2"
            >
              <Button
                variant="outline"
                className="items-center gap-2 border-2 border-[#4A6FA5] bg-[#4300FF] text-white font-semibold shadow-md hover:bg-[#0065F8] transition-colors duration-200"
              >
                <LayoutDashboard
                  className="h-5 w-5 text-white drop-shadow"
                  strokeWidth={1}
                />
                <span className="tracking-wide">Dashboard</span>
              </Button>
            </Link>
            {/* Mobile button */}
            <Link href="/dashboard" className="md:hidden">
              <Button
                variant="ghost"
                className="w-10 h-10 p-0 flex items-center justify-center bg-blue-100 hover:bg-blue-300 shadow-md transition-all duration-200"
              >
                <LayoutDashboard
                  className="h-6 w-6 text-blue-700 drop-shadow"
                  strokeWidth={1}
                />
              </Button>
            </Link>

            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonAvatarBox: "hidden",
                  userButtonPopoverCard:
                    "bg-white shadow-lg border border-gray-200",
                  userButtonPopoverFooter: "hidden",
                },
              }}
            />
          </Authenticated>

          <Unauthenticated>
            <SignInButton>
              <Button variant={"ghost"}>Sign In</Button>
            </SignInButton>

            <SignUpButton>
              <Button
                variant="ghost"
                className="border-none bg-blue-600 text-white hover:bg-text-white blue-800"
              >
                Get Started
              </Button>
            </SignUpButton>
          </Unauthenticated>
        </div>
      </nav>
      {isLoading && <BarLoader width={"100%"} color="#031199" />}
    </header>
  );
};

export default Header;