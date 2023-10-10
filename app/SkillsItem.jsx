const SkillsItem = ({ icon, title }) => (
    <li className="skills-item">
        {/* {icon && (
            <div className="card-right-section3-skills-item-icon mr-1">
                {icon}
            </div>
        )} */}
        <span className="text-md font-semibold">{title}</span>
    </li>
);

export default SkillsItem;