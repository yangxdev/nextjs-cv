import SectionItem from './SectionItem.jsx';
import Divider from './Divider.jsx';

const Projects = () => (
    <div className="card-left-section3-projects">
        <h1 className="uppercase font-bold text-xl mb-1">Projects</h1>
        <Divider />
        <SectionItem
            title="Budget App"
            company="Budget Buddy"
            startDate="March 2024"
            endDate=""
            present={true}
            location="Full Remote"
            description={[
                "Currently working on a budget app using Next.js (React), Prisma ORM and PostgreSQL. The app is designed to help users to manage their finances.",
            ]}
        />
        <SectionItem 
            title="Productivity App"
            company="Twilight"
            startDate="March 2024"
            endDate=""
            present={true}
            location="Full Remote"
            description={[
                "Currently collaborating with another software engineer on building a productivity app using Nuxt (Vue), Drizzle ORM and PostgreSQL. The app is designed to help users to manage their time and tasks.",
            ]}
        />
        <SectionItem
            title="★ Portfolio Website"
            company="YANGXDEV"
            companyUrl="https://www.yangxdev.com/"
            startDate="October 2023"
            endDate=""
            present={true}
            location="Full Remote"
            description={[
                "My personal website built with NextJS and TailwindCSS, showing my experiences and works",]}
        />
        <SectionItem 
            title="CV Builder"
            company="YANGXDEV"
            companyUrl="https://nextjs-cv-snowy.vercel.app/"
            startDate="v1: October 2022"
            endDate="v2: October 2023"
            present={false}
            location="Rimini, RN"
            description={[
                "Developed a CV Builder using Next.js, TailwindCSS. The project is designed as a modular system, where users can add, remove and edit sections of their CV. Remade in October 2023 to improve the codebase and add new features.",
                "This CV was made with the CV Builder!",
            ]}
        />
        <SectionItem
            title="Mobile Programming Project "
            company="University of Milan-Bicocca"
            companyUrl="https://www.unimib.it/"
            startDate="August 2022"
            endDate="September 2022"
            present={false}
            location="Milan, MI"
            locationUrl="https://www.google.com/maps/place/Milan,+Italy"
            description={[
                "Developed, managed and directed the front-end side of an Android application in a team of 4 people.",
                "Highest grade obtained: 30L / 30 ★"
            ]}
        />
        <SectionItem
            title="Distributed Systems Project "
            company="University of Milan-Bicocca"
            companyUrl="https://www.unimib.it/"
            startDate="June 2022"
            endDate="July 2022"
            present={false}
            location="Milan, MI"
            locationUrl="https://www.google.com/maps/place/Milan,+Italy"
            description={[
                "Developed the front-end side of a Python Flask website in a team of 2 managing server-side data and frontend-backend communication",
                "Full project score 5/5 ★"
            ]}
        />
    </div>
);

export default Projects;