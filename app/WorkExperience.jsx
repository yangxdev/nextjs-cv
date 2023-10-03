import WorkExperienceItem from './WorkExperienceItem.jsx';

const WorkExperience = () => (
    <div className="card-left-section2-work-experience">
        <h1 className='uppercase font-bold text-xl mb-1'>Work Experience</h1>
        {/* horizontal line */}
        <div className="card-left-section2-work-experience-line">
            <hr className='border border-t-3 border-black'></hr>
        </div>
        <WorkExperienceItem 
            position="Full Stack Developer"
            company="Deloitte"
            startDate="March 2023"
            endDate=""
            present={true}
            location={["Milan, MI"]}
            description={[
                "Developed a web application for a client in the travel industry using Javascript and Java.",
                "Implemented features such as modals, etc etc.",
                "Collaborated with a team of 6 developers."
            ]}
        />
        <WorkExperienceItem 
            position="Junior Web Developer"
            company="iperbooking"
            startDate="May 2019"
            endDate="June 2019"
            present={false}
            location={["Rimini, RN"]}
            description={[
                "First steps in the world of software development",
                "Website and database management of a booking engine",
            ]}
        />
    </div>
);

export default WorkExperience;