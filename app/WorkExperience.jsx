import SectionItem from './SectionItem.jsx';
import Divider from './Divider.jsx';

const WorkExperience = () => (
    <div className="card-left-section2-work-experience">
        <h1 className='uppercase font-bold text-xl mb-1'>Work Experience</h1>
        <Divider />
        <SectionItem 
            title="Full Stack Developer"
            company="Deloitte"
            companyUrl=""
            startDate="March 2023"
            endDate=""
            present={true}
            location={["Milan, MI"]}
            locationUrl="https://www.google.com/maps/place/Milan,+Italy"
            description={[
                "Developed a web application for a client in the travel industry using Javascript and Java.",
                "Implemented features such as modals, etc etc.",
                "Collaborated with a team of 6 developers."
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
                "First steps in the world of software development",
                "Website and database management of a booking engine",
            ]}
        />
    </div>
);

export default WorkExperience;