import React from "react";
import SectionHeader from "../SectionHeader";
import { Button } from "../ui/button";
import { CheckCircle } from "lucide-react";
import { Badge } from "../ui/badge";
import { SignedOut, SignInButton } from "@clerk/nextjs";
const prices = [
  {
    plan: "Free",
    price: "0",
    description: "Essential dental appointment booking",
    features: [
      "Unlimited appointment booking",
      "Find dentists in your area",
      "Basic text chat support",
      "Appointment reminders",
    ],
    call_to_action: "Get Started Free",
  },
  {
    plan: "AI Basic",
    price: "200",
    description: "AI consultations + appointment booking",
    features: [
      "Everything in Free",
      "10 AI voice calls per month",
      "AI dental guidance & advice",
      "Symptom assessment",
      "Priority support",
      "Call history & recordings",
    ],
    call_to_action: "Start AI Basic",
    tag: "Most Popular",
  },
  {
    plan: "AI Pro",
    price: "380",
    description: "Unlimited AI consultations",
    features: [
      "Everything in AI Basic",
      "Unlimited AI voice calls",
      "Advanced AI dental analysis",
      "Personalized care plans",
      "24/7 priority AI support",
      "Detailed health reports",
    ],
    call_to_action: "Upgrade to AI Pro",
  },
];
export default function Pricing() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden max-w-7xl mx-auto z-40">
      {/* GRID BG  */}
      <div className="absolute inset-0 bg-linear-to-r from-background via-muted/5 to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[2rem_2rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_70%,#000_70%,transparent_110%)] opacity-20"></div>
      </div>
      <div className="relative min-w-fit mx-auto">
        <SectionHeader
          badgeText="Simple Pricing"
          title="Choose your"
          titleStyled="AI dental plan"
          subtitle="Book appointments for free and upgrade for unlimited AI consultations. Perfect for ongoing dental care."
          icon="message-circle"
          leftAlign={false}
        />
        <div className="grid xs:grid-cols-2 sm:grid-cols-3 gap-4 items-center max-w-fit mx-auto my-16">
          {prices.map((price) => {
            const variantValue = price.tag ? "default" : "outline";

            return (
              <div
                key={price.plan}
                className={`flex text-xs p-3 flex-col gap-2 relative bg-muted rounded-xl sm:max-w-lg ${
                  price.tag ? "border border-primary/70" : ""
                }`}
              >
                {price.tag && (
                  <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 text-[8px] font-bold">
                    Most Popular
                  </Badge>
                )}
                <h3 className="text-lg font-extrabold">{price.plan}</h3>
                <h3 className="text-muted-foreground">
                  <span
                    className={`font-extrabold text-lg ${
                      price.tag ? "text-primary" : "text-foreground"
                    }`}
                  >
                    R{price.price}
                  </span>
                  /month
                </h3>
                <p className="text-muted-foreground">{price.description}</p>
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button
                      className="text-[10px] my-3 rounded-4xl font-bold h-6"
                      size={"sm"}
                      variant={`${variantValue}`}
                    >
                      Get Started Free
                    </Button>
                  </SignInButton>
                </SignedOut>
                {price.features.map((feature, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <CheckCircle size={12} className="text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
