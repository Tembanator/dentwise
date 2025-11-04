import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { MobileMenu } from "@/components/MobileMenu";

export default function Header() {
  return (
    <header className="px-6 py-2 border-b w-full fixed left-0 right-0 top-0 z-50 bg-background">
      <nav className="max-w-3xl mx-auto flex items-center justify-between text-xs">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="logo" width={30} height={30} />
          <span className="text-secondary-foreground font-bold">DentWise</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-4 text-muted-foreground">
          <Link
            href="#"
            className="hover:text-accent-foreground transition-all duration-75"
          >
            How it works
          </Link>
          <Link href="#" className="hover:text-accent-foreground">
            Pricing
          </Link>
          <Link href="#" className="hover:text-accent-foreground">
            About
          </Link>
        </div>

        {/* Auth buttons */}
        <div className="flex items-center gap-2">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm" className="text-xs">
                Login
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedOut>
            <SignUpButton mode="modal">
              <Button className="text-xs" size="sm">
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        {/* Mobile menu */}
        <MobileMenu />
      </nav>
    </header>
  );
}
