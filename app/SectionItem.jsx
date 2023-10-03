import CalendarIcon from './Icons/CalendarIcon.jsx'
import LocationIcon from './Icons/LocationIcon.jsx'

const SectionItem = (props) => (
    <div className="card-left-section3-projects-item mb-1">
        <h2 className="text-md font-semibold">{props.title}</h2>
        <a href={props.companyUrl} target="_blank" rel='noopener noreferrer'>
            <h3 className="text-sm text-blue-400 mb-1 font-semibold">{props.company}</h3>
        </a>
        <div className="card-left-section3-projects-item-row1 flex items-center mb-1">
            <CalendarIcon />
            <h3 className="text-xs mx-1">{props.startDate} {props.present && " - Present"} {!props.present && " - "} {props.endDate}</h3>
            <LocationIcon />
            <a href={props.locationUrl} target='_blank' rel='noopener noreferrer'>
                <h3 className='text-xs ml-1 font-semibold'>{props.location}</h3>
            </a>
        </div>
        <h3>
            {props.description.map((item, index) => (
                <li key={index} className="text-xs">{item}</li>
            ))
            }
        </h3>
    </div>
);

export default SectionItem;