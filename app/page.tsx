// import Link from "next/link";

import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import MeetDoctors from "@/components/MeetDoctors";
import OurServices from "@/components/OurServices";
import OurStats from "@/components/OurStats";


export default function Home() {
  return (
    <main className="relative ">
      <div className="mx-auto w-full">
       <HeroSection />
       <MeetDoctors />
       <HowItWorks />
       <OurServices />
       <OurStats />
       <AboutUs />
       <FAQ />
      </div>
    </main>
  );
}
