import SectionItem from './SectionItem.jsx';
import Divider from './Divider.jsx';

const WorkExperience = () => (
    <div className="card-left-section2-work-experience">
        <h1 className='uppercase font-bold text-xl mb-1'>Work Experience</h1>
        <Divider />
        <SectionItem 
            title="Full-stack Developer / Consultant"
            company="Deloitte Digital"
            companyUrl="https://www.deloittedigital.com/it/en.html"
            startDate="March 2023"
            endDate=""
            present={true}
            location={["Milan, MI / Full Remote"]}
            locationUrl="https://www.google.com/maps/place/Milan,+Italy"
            description={[
                "Released graphical and functional updates to entire sections of the booking flow, used by 2000+ agencies worldwide to serve 1 million+ clients annually.",
                "Communication with clients, PMs, UI/UX design and Testing teams to understand requirements, provide feedback and propose solutions",
                "Planning, review and implementation of new designs, features, functionalities and bug fixes",
                "Working in a team of 10 developers (technical and functional), using Scrum Agile methodology with Jira and Confluence, in English"
            ]}
        />
        <SectionItem 
            title="Junior Full-stack Developer"
            company="DecHit"
            companyUrl="https://www.dechit.it/"
            startDate="November 2022"
            endDate="January 2023"
            present={false}
            location={["Milan, MI / Full Remote"]}
            locationUrl="https://www.google.com/maps/place/Milan,+Italy"
            description={[
                "3-month intensive course focused on full-stack development",
                "Course spanning from E/R models to advanced frameworks like Java Spring Boot with Hibernate",
            ]}
        />
        <SectionItem 
            title="Junior Web Developer"
            company="iperbooking"
            companyUrl="https://www.iperbooking.com/"
            startDate="May 2019"
            endDate="June 2019"
            present={false}
            location={["Rimini, RN / On Site"]}
            locationUrl="https://www.google.com/maps/place/Rimini,+RN"
            description={[
                "Website and Database management of a Booking Engine Website for Hotels and B&Bs",
            ]}
        />
    </div>
);

export default WorkExperience;
