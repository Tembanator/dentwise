import React from "react";
import SectionHeader from "../SectionHeader";
import Image from "next/image";
import { MessageSquare } from "lucide-react";
import AboutCard from "./AboutCard";

const questions = [
  {
    text: '"My tooth hurts when I bite down"',
    description:
      "Get immediate advice on pain management, possible causes, and when to see a dentist urgently.",
    tags: ["Instant Response", "Pain Relief"],
  },
  {
    text: '"How much does teeth whitening cost?"',
    description:
      "Compare treatment options, pricing ranges, and find the best whitening solution for your budget",
    tags: ["Cost Analysis", "Treatment Options"],
  },
  {
    text: '"When should I replace my filling?"',
    description:
      "Learn about filling lifespan, warning signs of wear, and replacement timing guidance",
    tags: ["Preventive Care", "Maintenance"],
  },
];

export default function About() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col gap-8 sm:px-20 px-6 py-10 bg-primary/1">
      <SectionHeader
        badgeText="AI-Powered Conversations"
        title="Ask about"
        titleStyled="anything dental"
        subtitle="From simple questions to complex concerns, our AI delivers expert-level guidance trained on thousands of real dental cases."
        icon="message-circle"
        leftAlign={false}
      />

      <div className="grid md:grid-cols-2 items-center gap-8">
        {/* left  */}
        <div className="flex flex-col gap-5">
          <h3 className="text-xl">Common questions our AI answers:</h3>
          {/* card  */}
          {questions.map((question) => (
            <AboutCard
              key={question.text}
              text={question.text}
              description={question.description}
              tags={question.tags}
            />
          ))}
        </div>
        {/* right  */}
        <Image
          className=""
          src={"/about.png"}
          width={400}
          height={400}
          alt="hero"
        />
      </div>
    </section>
  );
}
