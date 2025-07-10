"use client"


import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import MeetDoctors from "@/components/MeetDoctors";
import OurServices from "@/components/OurServices";
import OurStats from "@/components/OurStats";
import { PasskeyModal} from '@/components/PasskeyModal';


export default function Home({ searchParams }: { searchParams?: { admin?: string } }) {
  const isAdmin = searchParams?.admin === "true";

  
  return (
    <main className="relative">
      <div className="mx-auto w-full">
        {isAdmin && <PasskeyModal />}
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

