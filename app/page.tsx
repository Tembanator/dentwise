import About from "@/components/about/About";
import CallToAction from "@/components/callToAction/CallToAction";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import Hero from "@/components/hero/Hero";
import HowItWorks from "@/components/HowItWorks.tsx/HowItWorks";
import Pricing from "@/components/Pricing/Pricing";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();

  if (user) redirect("/dashboard");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <About />
      <Pricing />
      <CallToAction />
      <Footer />
      {/* footer  */}
    </div>
  );
}
