import CalendarIcon from './Icons/CalendarIcon.jsx'
import LocationIcon from './Icons/LocationIcon.jsx'

const WorkExperienceItem = ({ position, company, startDate, endDate, present, location, description }) => (
    <div className="card-left-section2-work-experience-item mb-1">
        <h2 className="text-md font-semibold">{position}</h2>
        <h3 className="text-sm text-blue-400 mb-1">{company}</h3>
        <div className="card-left-section2-work-experience-item-row1 flex items-center mb-1">
            <CalendarIcon />
            <h3 className="text-xs mx-1">{startDate} {present && " - Present"} {!present && " - "} {endDate}</h3>
            <LocationIcon />
            <h3 className='text-xs ml-1'>{location}</h3>
        </div>
        <h3>
            {description.map((item, index) => (
                    <li key={index} className="text-xs">{item}</li>
                ))
            }
        </h3>
    </div>
);

export default WorkExperienceItem;