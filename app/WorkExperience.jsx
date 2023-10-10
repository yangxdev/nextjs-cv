import SectionItem from './SectionItem.jsx';
import Divider from './Divider.jsx';

const WorkExperience = () => (
    <div className="card-left-section2-work-experience">
        <h1 className='uppercase font-bold text-xl mb-1'>Work Experience</h1>
        <Divider />
        <SectionItem 
            title="Full-stack Developer & Consultant"
            company="Deloitte"
            companyUrl=""
            startDate="March 2023"
            endDate=""
            present={true}
            location={["Milan, MI"]}
            locationUrl="https://www.google.com/maps/place/Milan,+Italy"
            description={[
                "Actively contributing to the enhancement of a B2B ecommerce solution for a major booking platform",
                "Communication with clients and design teams to understand requirements and propose solutions",
                "Planning, review and implementation of new features and functionalities",
                <span key="key-1-deloitte">Utilizing <b>Agile Scrum</b> practices, coordinated through Jira, Confluence and GitLab, within a team of 10 developers</span>,
            ]}
        />
        <SectionItem 
            title="Full-stack Developer"
            company="DecHit S.p.A."
            companyUrl="https://www.dechit.it/"
            startDate="November 2022"
            endDate="January 2023"
            present={false}
            location={["Milan, MI"]}
            locationUrl="https://www.google.com/maps/place/Milan,+Italy"
            description={[
                "3-month intensive course focused on back-end development",
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
            location={["Rimini, RN"]}
            locationUrl="https://www.google.com/maps/place/Rimini,+RN"
            description={[
                "Website and Database management of a Booking Engine Website for Hotels and B&Bs",
            ]}
        />
    </div>
);

export default WorkExperience;
