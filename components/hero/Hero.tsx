import React from "react";
import { Badge } from "../ui/badge";
import { SignedOut, SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { Calendar, MicIcon, Star } from "lucide-react";
import Image from "next/image";
import TestimonialImages from "./TestimonialImages";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden max-w-7xl mx-auto z-40">
      {/* GRID BG  */}
      <div className="absolute inset-0 bg-linear-to-r from-background via-muted/5 to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[3rem_3rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      </div>
      {/* GRADIENT ORBS */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-linear-to-r from-primary/20 to-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-linear-to-r from-primary/15 to-primary/5 rounded-full blur-3xl" />

      {/* intro  */}
      <div className="z-60 grid sm:grid-cols-2 w-full md:p-20 p-6 md:gap-4 items-center">
        {/* left  */}
        <div className="flex flex-col space-y-3">
          <Badge className="bg-primary/20 text-primary text-xs font-bold  border border-primary/50">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
            <p>AI-Powered Dental Assistant</p>
          </Badge>
          {/* title  */}
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">
            Your dental <br />{" "}
            <span className="bg-clip-text bg-linear-to-tr from-primary to-primary/50 text-transparent">
              questions
            </span>
            <br /> answered instantly
          </h1>
          {/* subtitle  */}
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-100 font-medium">
            Chat with our AI dental assistant for instant advice, book smart
            appointments, and get personalized care recommendations. Available
            24/7.
          </p>
          {/* buttons  */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <SignedOut>
              <SignUpButton mode="modal">
                <Button className="font-bold" size={"sm"}>
                  <MicIcon />
                  Try voice chat
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedOut>
              <SignUpButton mode="modal">
                <Button className="font-bold" size={"sm"} variant={"outline"}>
                  <Calendar />
                  Book appointment
                </Button>
              </SignUpButton>
            </SignedOut>
          </div>
          {/* testimonials  */}
          <div className="flex items-center gap-2 my-4">
            <TestimonialImages />
            <div className="text-xs">
              <div className="flex items-center">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Star
                      size={8}
                      key={item}
                      className="fill-yellow-500 text-yellow-500"
                    />
                  ))}
                  <p className="font-bold text-foreground">4.9/5</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Trusted By{" "}
                <span className="font-bold text-foreground">
                  1,200 participants
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* right  */}

        <Image
          className=""
          src={"/hero.png"}
          width={400}
          height={400}
          alt="hero"
        />
      </div>
    </section>
  );
}
