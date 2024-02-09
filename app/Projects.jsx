import SectionItem from './SectionItem.jsx';
import Divider from './Divider.jsx';

const Projects = () => (
    <div className="card-left-section3-projects">
        <h1 className="uppercase font-bold text-xl mb-1">Projects</h1>
        <Divider />
        <SectionItem
            title="Portfolio Website"
            company="Next.js Project"
            companyUrl="https://www.yangxdev.com/"
            startDate="October 2023"
            endDate=""
            present={true}
            location="Milan, MI"
            locationUrl="https://www.google.com/maps/place/Milan,+Italy"
            description={[
                "My personal website built with NextJS and TailwindCSS, showing my experiences and works",]}
        />
        <SectionItem
            title="Mobile Devices Programming Project"
            company="University of Milan-Bicocca"
            companyUrl="https://www.unimib.it/"
            startDate="August 2022"
            endDate="September 2022"
            present={false}
            location="Milan, MI"
            locationUrl="https://www.google.com/maps/place/Milan,+Italy"
            description={["Developed, managed and directed the front-end side of an Android application in a team of 4 people. Great use of Android Studio (Java), GitHub (Pull Requests, Issues, Merge Conflicts)"]}
        />
        <SectionItem
            title="Distributed Systems Project"
            company="University of Milan-Bicocca"
            companyUrl="https://www.unimib.it/"
            startDate="June 2022"
            endDate="July 2022"
            present={false}
            location="Milan, MI"
            locationUrl="https://www.google.com/maps/place/Milan,+Italy"
            description={["Developed the front-end side of a Python Flask website. Managed server-side data (REST API) and frontend-backend communication, using Git for version control"]}
        />
    </div>
);

export default Projects;