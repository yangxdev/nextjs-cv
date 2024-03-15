import Image from "next/image";
import ContactSection from "./ContactSection";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import CareerObjective from "./CareerObjective";
import QrCodes from "./QrCodes";
import Education from "./Education";
import Skills from "./Skills";
import Certifications from "./Certifications";
import { Analytics } from "@vercel/analytics/react";
import Theme from "./Theme";
import ReactCountryFlag from "react-country-flag";

export default function Home() {
  return (
    <div
      className="container mx-auto p-4 h-max"
      style={{
        maxWidth: "210mm",
        maxHeight: "297mm",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      {/* <Theme /> */}
      <div className="card flex">
        <div className="card-left flex-grow col w-1/2">
          <div className="card-left-section1 text-black">
            <div className="card-left-section1-full-name flex-nowrap flex uppercase font-extrabold text-2xl items-center text-color hover:text-blue-600 transition duration-100 ease-in-out">
              <h1 className="mr-1">Yang</h1>
              <h1>Xiang</h1>
              <div className="card-left-section1-full-name-logo ml-2">
                <Image
                  className="rounded-full"
                  src="/mylogo.jpg"
                  width={24}
                  height={24}
                  alt={"personal logo"}
                />
              </div>
            </div>
            <div className="card-left-section1-job-title">
              <h2 className="flex flex-nowrap font-semibold text-xl text-accent flex-row items-center gap-2">
                <div className="">Software Engineer / EU Citizen{" "}</div>
                <ReactCountryFlag
                  countryCode="IT"
                  svg
                  style={{
                    width: "1.2em",
                    height: "1.2em",
                  }}
                  title="IT Citizenship"
                />
                <ReactCountryFlag
                  countryCode="EU"
                  svg
                  style={{
                    width: "1.2em",
                    height: "1.2em",
                  }}
                  title="EU Citizenship"
                />
              </h2>
            </div>
            <ContactSection />
            <WorkExperience />
            <Skills />
            <Certifications />
          </div>
        </div>
        <div className="card-right flew-grow col w-1/2 ml-4">
          <div className="card-right-section0">
            <QrCodes />
          </div>
          {/* <div className="card-right-section1 text-black">
            <CareerObjective />
          </div> */}
          <div className="card-right-section2 text-black mt-1">
            <Education />
          </div>
          <div className="card-right-section3 text-black">
            <Projects />
          </div>
        </div>
      </div>
      <Analytics />
    </div>
  );
}
