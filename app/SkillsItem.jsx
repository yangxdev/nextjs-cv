import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SkillsItem = (props) => (
    <div className="card-right-section3-skills-item mb-1 flex items-center">
        {props.icon && (
            <div className="card-right-section3-skills-item-icon mr-1">
                {props.icon}
            </div>
        )}
        <h2 className="text-md font-semibold">{props.title}</h2>
    </div>

);

export default SkillsItem;