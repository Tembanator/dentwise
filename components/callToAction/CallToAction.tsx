import React from "react";
import SectionHeader from "../SectionHeader";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { SignedOut, SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { Calendar, MicIcon, Star } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="max-w-7xl mx-auto grid grid-cols-2 items-center sm:gap-16 gap-8 sm:px-20 px-6 py-10 bg-primary/1">
      {/* left  */}
      <div>
        <SectionHeader
          badgeText="AI-Powered Conversations"
          title="Ask about"
          titleStyled="anything dental"
          subtitle="From simple questions to complex concerns, our AI delivers expert-level guidance trained on thousands of real dental cases."
          icon="message-circle"
          leftAlign={true}
        />
        {/* buttons  */}
        <div className="flex flex-col gap-3 sm:flex-row my-4">
          <SignedOut>
            <SignUpButton mode="modal">
              <Button className="font-bold" size={"sm"}>
                <MicIcon />
                Try free chat
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
      </div>
      {/* right  */}
      <div className="flex justify-center">
        <div className="w-fit">
          <Badge className="text-foreground font-semibold bg-linear-to-r from-green-600 to-green-500">
            <span className="bg-foreground w-2 h-2 rounded-full animate-pulse"></span>
            Available 24/7
          </Badge>
          <Image
            className=""
            src={"/hero.png"}
            width={250}
            height={250}
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
}
