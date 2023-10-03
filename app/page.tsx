import Image from 'next/image';
import ContactSection from './ContactSection';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <div className="container mx-auto p4 bg-white">

      <div className="card bg-white flex">
        <div className="card-left col">
          <div className="card-left-section1 text-black">
            <div className="card-left-section1-full-name flex-nowrap flex uppercase font-extrabold text-2xl items-center">
              <h1 className='mr-1'>Yang</h1>
              <h1>Xiang</h1>
              <div className="card-left-section1-full-name-logo ml-1">
                <Image className='rounded-full' src="/mylogo.jpg" width={24} height={24} alt={'personal logo'} />
              </div>
            </div>
            <div className="card-left-section1-job-title">
              <h2 className='flex-nowrap font-semibold text-xl text-blue-400'>Full Stack Developer</h2>
            </div>
            <ContactSection />
            <WorkExperience />
            <Projects />
          </div>
        </div>
        <div className="card-right col">
          <div className="card-right-section1">
            placeholder
          </div>
        </div>
      </div>
      <Analytics />
    </div>
  )
}
