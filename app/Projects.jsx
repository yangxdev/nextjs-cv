import SectionItem from './SectionItem.jsx';

const Projects = () => (
    <div className="card-left-section3-projects">
        <h1 className="uppercase font-bold text-xl mb-1">Projects</h1>
        {/* horizontal line */}
        <div className="card-left-section3-projects-line mb-1">
            <hr className="border border-t-3 border-black"/>
        </div>
        <SectionItem
            title="Personal Curriculum Vitae Website"
            company="Personal Project"
            companyUrl="https://github.com/yangxdev-org/nextjs-cv"
            startDate="October 2023"
            endDate=""
            present={true}
            location="Milan, MI"
            locationUrl="https://www.google.com/maps/place/Milan,+Italy"
            description={["This website was built using NextJS and TailwindCSS.", "It is hosted on Vercel."]}
        />
        <SectionItem
            title="Front End Development Projects"
            company="Frontend Mentor"
            companyUrl="https://www.frontendmentor.io/profile/yangxdev"
            startDate="April 2020"
            endDate=""
            present={true}
            location="Rimini, RN"
            locationUrl="https://www.google.com/maps/place/Rimini,+RN"
            description={["Developed 10+ front-end projects starting with Vanilla JS, then moving to ReactJS and NextJS"]}
        />
    </div>
);

export default Projects;