import SectionItem from './SectionItem.jsx';
import Divider from './Divider.jsx';

const Projects = () => (
    <div className="card-left-section3-projects">
        <h1 className="uppercase font-bold text-xl mb-1">Projects</h1>
        <Divider />
        <SectionItem
            title="Curriculum Vitae Website"
            company="GitHub Project"
            companyUrl="https://github.com/yangxdev/nextjs-cv"
            startDate="October 2023"
            endDate=""
            present={true}
            location="Milan, MI"
            locationUrl="https://www.google.com/maps/place/Milan,+Italy"
            description={[
                "My CV website built with NextJS and TailwindCSS, hosted on Vercel.", ]}
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
            description={["Building of front-end projects using technologies spanning from vanilla JS to ReactJS and NextJS, coupled with Bootstrap, SASS, up to TailwindCSS"]}
        />
    </div>
);

export default Projects;