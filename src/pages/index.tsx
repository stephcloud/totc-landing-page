import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/Component/LandingPage/hero";
import OurSuccess from "@/Component/LandingPage/OurSuccess";
import Features from "@/Component/LandingPage/Features";
import WhatIsTotc from "@/Component/LandingPage/WhatIsTotc";
import ClassroomFeature from "@/Component/LandingPage/ClassroomFeature";
import OurFeatures from "@/Component/LandingPage/OurFeatures";
import ToolsForTeachers from "@/Component/LandingPage/ToolsForTeachers";
import AssessmentsQuizzes from "@/Component/LandingPage/AssessmentsQuizzes";
import ClassManagementTools from "@/Component/LandingPage/ClassManagementTools";
import OneOnOneDiscussions from "@/Component/LandingPage/OneOnOneDiscussions";
import ExploreCourse from "@/Component/LandingPage/ExploreCourse";
import Testimonial from "@/Component/LandingPage/Testimonial";
import NewsResources from "@/Component/LandingPage/NewsResources";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} bg-zinc-50`}>
      <main className="flex w-full flex-col">
        <Hero />
        <OurSuccess />
        <Features />
        <WhatIsTotc />
        <ClassroomFeature />
        <OurFeatures />
        <ToolsForTeachers />
        <AssessmentsQuizzes />
        <ClassManagementTools />
        <OneOnOneDiscussions />
        <ExploreCourse />
        <Testimonial />
        <NewsResources />
      </main>
    </div>
  );
}
