import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <section className="grid md:grid-cols-4 grid-cols-2 sm:grid-cols-3 sm:px-20 px-6 py-8 bg-card/30 gap-6 justify-center">
      <div className="flex flex-col gap-3">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="logo" width={30} height={30} />
          <span className="text-secondary-foreground font-bold">DentWise</span>
        </Link>
        <p className="text-xs text-muted-foreground">
          AI powered dental assistance that actually helps.
        </p>
      </div>
      <div className="flex flex-col gap-3 mt-1.5">
        <p className="mb-1">Product</p>
        <div className="text-muted-foreground text-xs flex flex-col gap-1">
          <p>How it works</p>
          <p>Pricing</p>
          <p>FAQ</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-1.5">
        <p className="mb-1">Support</p>
        <div className="text-muted-foreground text-xs flex flex-col gap-1">
          <p>Help center</p>
          <p>Contact us</p>
          <p>Status</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-1.5">
        <p className="mb-1">Legal</p>
        <div className="text-muted-foreground text-xs flex flex-col gap-1">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Security</p>
        </div>
      </div>
    </section>
  );
}
