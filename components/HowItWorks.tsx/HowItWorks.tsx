import React from "react";
import { Badge } from "../ui/badge";
import { ArrowRight, MicIcon, ZapIcon } from "lucide-react";
import StepCard from "./StepCard";
import SectionHeader from "../SectionHeader";
import { SignedOut, SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

export default function HowItWorks() {
  const aboutSteps = [
    {
      id: 1,
      icon: "audio",
      title: "Ask Questions",
      description:
        "Chat with our AI assistant about any dental concerns. Get instant answers about symptoms, treatments, and oral health tips.",
      tags: ["24/7 Available", "Instant Response"],
    },
    {
      id: 2,
      icon: "brain",
      title: "Get Expert Advice",
      description:
        "Receive personalized recommendations based on thousands of dental cases. Our AI provides professional-grade insights.",
      tags: ["AI-Powered", "Personalized"],
    },
    {
      id: 3,
      icon: "calendar",
      title: "Book & Get Care",
      description:
        "Schedule with verified dentists and receive comprehensive follow-up care. Track your progress seamlessly.",
      tags: ["Verified Doctors", "Follow-up Care"],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto flex flex-col gap-8 sm:px-20 px-6 py-10">
      <SectionHeader
        badgeText="Simple Process"
        title="Three steps to"
        titleStyled="better dental health"
        subtitle="Our streamlined process makes dental care accessible, convenient, and
          stress-free for everyone."
        icon="zap"
        leftAlign={false}
      />

      {/* cards  */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4 max-w-fit mx-auto">
        {aboutSteps.map((step) => (
          <StepCard key={step.id} {...step} />
        ))}
      </div>

      <SignedOut>
        <SignUpButton mode="modal">
          <Button
            className="font-bold w-fit mx-auto rounded-xl mt-7"
            size={"sm"}
          >
            <ArrowRight />
            Get started now
          </Button>
        </SignUpButton>
      </SignedOut>
    </section>
  );
}
